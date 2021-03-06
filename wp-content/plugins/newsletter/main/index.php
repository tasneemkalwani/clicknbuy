<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

@include_once NEWSLETTER_INCLUDES_DIR . '/controls.php';

$controls = new NewsletterControls();

wp_enqueue_script( 'tnp-chart' );

if ( $controls->is_action( 'feed_enable' ) ) {
	delete_option( 'newsletter_feed_demo_disable' );
	$controls->messages = 'Feed by Mail demo panels enabled. On next page reload it will show up.';
}

if ( $controls->is_action( 'feed_disable' ) ) {
	update_option( 'newsletter_feed_demo_disable', 1 );
	$controls->messages = 'Feed by Mail demo panel disabled. On next page reload it will disappear.';
}

$emails_module = NewsletterEmails::instance();
$statistics_module = NewsletterStatistics::instance();
$emails        = $wpdb->get_results( "select * from " . NEWSLETTER_EMAILS_TABLE . " where type='message' order by id desc limit 5" );

$users_module = NewsletterUsers::instance();
$query        = "select * from " . NEWSLETTER_USERS_TABLE . " order by id desc";
$query        .= " limit 10";
$subscribers  = $wpdb->get_results( $query );

// Retrieves the last standard newsletter
$last_email = $wpdb->get_row(
	$wpdb->prepare( "select * from " . NEWSLETTER_EMAILS_TABLE . " where type='message' and status in ('sent', 'sending') and send_on<%d order by id desc limit 1", time() ) );

if ( $last_email ) {
    $report = $statistics_module->get_statistics($last_email);
	$last_email_sent      = $report->total;
	$last_email_opened    = $report->open_count;
	$last_email_notopened = $last_email_sent - $last_email_opened;
	$last_email_clicked   = $report->click_count;
	$last_email_opened    -= $last_email_clicked;

	$overall_sent = $wpdb->get_var( "select sum(sent) from " . NEWSLETTER_EMAILS_TABLE . " where type='message' and status in ('sent', 'sending')" );

	$overall_opened    = $wpdb->get_var( "select count(distinct user_id,email_id) from " . NEWSLETTER_STATS_TABLE );
	$overall_notopened = $overall_sent - $overall_opened;
	$overall_clicked   = $wpdb->get_var( "select count(distinct user_id,email_id) from " . NEWSLETTER_STATS_TABLE . " where url<>''" );
	$overall_opened    -= $overall_clicked;
} else {
	$last_email_opened    = 500;
	$last_email_notopened = 400;
	$last_email_clicked   = 200;

	$overall_opened    = 500;
	$overall_notopened = 400;
	$overall_clicked   = 200;
}

$months = $wpdb->get_results( "select count(*) as c, concat(year(created), '-', date_format(created, '%m')) as d "
                              . "from " . NEWSLETTER_USERS_TABLE . " where status='C' "
                              . "group by concat(year(created), '-', date_format(created, '%m')) order by d desc limit 12" );
$values = array();
$labels = array();
foreach ( $months as $month ) {
	$values[] = (int) $month->c;
	$labels[] = date( "M y", date_create_from_format( "Y-m", $month->d )->getTimestamp() );
}
$values = array_reverse( $values );
$labels = array_reverse( $labels );
?>

<div class="wrap" id="tnp-wrap">

	<?php include NEWSLETTER_DIR . '/tnp-header.php'; ?>

    <div id="tnp-heading">

        <h2><?php _e( 'Dashboard', 'newsletter' ) ?></h2>
        <p><?php _e( 'Your powerful control panel', 'newsletter' ) ?></p>

    </div>

    <div id="tnp-body" class="tnp-main-index">
        <div id="dashboard-widgets-wrap">
            <div id="dashboard-widgets" class="metabox-holder">
                <div id="postbox-container-1" class="postbox-container">
                    <div id="normal-sortables" class="meta-box-sortables ui-sortable">

                        <!-- START Statistics -->
                        <div id="tnp-dash-statistics" class="postbox">
                            <h3><?php _e( 'Statistics', 'newsletter' ) ?>
                                <a href="<?php echo NewsletterStatistics::instance()->get_index_url() ?>">
                                    <i class="fa fa-chart-bar"></i> <?php _e( 'Statistics', 'newsletter' ) ?>
                                </a>
                            </h3>
                            <div class="inside">

								<?php if ( ! $last_email ) { ?>
                                    <p style="text-align: center">
										<?php _e( 'These charts are only for example:<br>create and send your first newsletter to have real statistics!', 'newsletter' ) ?>
                                    </p>
								<?php } ?>

                                <div class="row tnp-row-pie-charts">
                                    <div class="col-md-6">
                                        <canvas id="tnp-rates1-chart"></canvas>
                                        <p style="text-align: center"><?php _e( 'Last Newsletter', 'newsletter' ) ?></p>
                                    </div>
                                    <div class="col-md-6">
                                        <canvas id="tnp-rates2-chart"></canvas>
                                        <p style="text-align: center"><?php _e( 'Overall', 'newsletter' ) ?></p>
                                    </div>
                                </div>

                                <script type="text/javascript">

                                    var rates1 = {
                                        labels: [
                                            "Not opened",
                                            "Opened",
                                            "Clicked"
                                        ],
                                        datasets: [
                                            {
                                                data: [<?php echo $last_email_notopened; ?>, <?php echo $last_email_opened; ?>, <?php echo $last_email_clicked ?>],
                                                backgroundColor: [
                                                    "#ECF0F1",
                                                    "#E67E22",
                                                    "#27AE60"
                                                ],
                                                hoverBackgroundColor: [
                                                    "#ECF0F1",
                                                    "#E67E22",
                                                    "#27AE60"
                                                ]
                                            }]
                                    };

                                    var rates2 = {
                                        labels: [
                                            "Not opened",
                                            "Opened",
                                            "Clicked"
                                        ],
                                        datasets: [
                                            {
                                                data: [<?php echo $overall_notopened; ?>, <?php echo $overall_opened; ?>, <?php echo $overall_clicked ?>],
                                                backgroundColor: [
                                                    "#ECF0F1",
                                                    "#E67E22",
                                                    "#27AE60"
                                                ],
                                                hoverBackgroundColor: [
                                                    "#ECF0F1",
                                                    "#E67E22",
                                                    "#27AE60"
                                                ]
                                            }]
                                    };


                                    jQuery(document).ready(function ($) {
                                        ctx1 = $('#tnp-rates1-chart').get(0).getContext("2d");
                                        ctx2 = $('#tnp-rates2-chart').get(0).getContext("2d");
                                        myPieChart1 = new Chart(ctx1, {
                                            type: 'doughnut',
                                            data: rates1,
                                            options: {legend: {display: false, labels: {boxWidth: 10}}}
                                        });
                                        myPieChart2 = new Chart(ctx2, {
                                            type: 'doughnut',
                                            data: rates2,
                                            options: {legend: {display: false, labels: {boxWidth: 10}}}
                                        });
                                    });
                                </script>

                            </div>
                        </div>
                        <!-- END Statistics -->


                        <!-- START Statistics -->
                        <div id="tnp-dash-statistics" class="postbox">
                            <h3><?php _e( 'Subscriptions', 'newsletter' ) ?></h3>
                            <div class="inside">


                                <div id="canvas-holder">
                                    <canvas id="tnp-events-chart-canvas"></canvas>
                                </div>

                                <script type="text/javascript">
                                    var events_data = {
                                        labels: <?php echo json_encode( $labels ) ?>,
                                        datasets: [
                                            {
                                                label: "<?php _e( 'Subscriptions', 'newsletter' ) ?>",
                                                fill: true,
                                                strokeColor: "#27AE60",
                                                backgroundColor: "#ECF0F1",
                                                borderColor: "#27AE60",
                                                pointBorderColor: "#27AE60",
                                                pointBackgroundColor: "#ECF0F1",
                                                data: <?php echo json_encode( $values ) ?>
                                            }
                                        ]
                                    };

                                    jQuery(document).ready(function ($) {
                                        ctxe = $('#tnp-events-chart-canvas').get(0).getContext("2d");
                                        eventsLineChart = new Chart(ctxe, {
                                            type: 'line', data: events_data,
                                            options: {
                                                scales: {
                                                    xAxes: [{
                                                        type: "category",
                                                        "id": "x-axis-1",
                                                        gridLines: {display: false},
                                                        ticks: {fontFamily: "Source Sans Pro"}
                                                    }],
                                                    yAxes: [
                                                        {
                                                            type: "linear",
                                                            "id": "y-axis-1",
                                                            gridLines: {display: false},
                                                            ticks: {fontFamily: "Source Sans Pro"}
                                                        },
                                                    ]
                                                },
                                            }
                                        });
                                    });
                                </script>

                            </div>
                        </div>
                        <!-- END Statistics -->

                        <!-- START Documentation -->
                        <div id="tnp-dash-documentation" class="postbox">
                            <h3><?php _e( 'Documentation', 'newsletter' ) ?>
                                <a href="https://www.thenewsletterplugin.com/plugins/newsletter/newsletter-documentation"
                                   target="_blank">
                                    <i class="fa fa-life-ring"></i> <?php _e( 'Read all', 'newsletter' ) ?>
                                </a>
                            </h3>
                            <div class="inside">
                                <!-- <div class="tnp-video-container">
                                    <iframe width="480" height="360"
                                            src="https://www.youtube.com/embed/JaxK7XwqvVI?rel=0" frameborder="0"
                                            allowfullscreen></iframe>
                                </div> -->
                                <div>
                                    <a class="orange"
                                       href="https://www.thenewsletterplugin.com/plugins/newsletter/newsletter-documentation/email-sending-issues"
                                       target="_blank">
                                        <i class="fa fa-exclamation-triangle"></i> <?php _e( 'Problem sending messages? Start here!', 'newsletter' ) ?>
                                    </a>
                                </div>

                                <div>
                                    <a class="blue" href="https://www.thenewsletterplugin.com/support/video-tutorials"
                                       target="_blank">
                                        <i class="fa fa-youtube-play"></i> <?php _e( 'All Video Tutorials', 'newsletter' ) ?>
                                    </a>
                                </div>
                                <div>
                                    <a class="purple"
                                       href="https://www.thenewsletterplugin.com/plugins/newsletter/newsletter-preferences"
                                       target="_blank">
                                        <i class="fa fa-question-circle"></i> <?php _e( 'Learn how to segment your suscribers', 'newsletter' ) ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- END Documentation -->
                    </div>
                </div>

                <div id="postbox-container-2" class="postbox-container">
                    <div id="side-sortables" class="meta-box-sortables ui-sortable">
                        <!-- START Newsletters -->
                        <div id="tnp-dash-newsletters" class="postbox">
                            <h3><?php _e( 'Newsletters', 'newsletter' ) ?>
                                <a href="<?php echo $emails_module->get_admin_page_url( 'index' ); ?>">
                                    <i class="fa fa-list"></i> <?php _e( 'List', 'newsletter' ) ?>
                                </a>
                                <a href="<?php echo $emails_module->get_admin_page_url( 'theme' ); ?>">
                                    <i class="fa fa-plus-square"></i> <?php _e( 'New', 'newsletter' ) ?>
                                </a>
                            </h3>
                            <div class="inside">
                                <table width="100%">
									<?php
									foreach ( $emails as &$email ) { ?>
                                        <tr>
                                            <td><?php
												if ( $email->subject ) {
													echo htmlspecialchars( $email->subject );
												} else {
													echo "Newsletter #" . $email->id;
												}
												?>
                                            </td>
                                            <td>
                                                <?php $emails_module->show_email_status_label( $email ) ?>
                                            </td>
                                            <td>
												<?php $emails_module->show_email_progress_bar( $email, array( 'scheduled' => true ) ) ?>
                                            </td>
                                            <td style="white-space:nowrap"><?php if ($email->status == 'sent') {
		                                            echo '<a class="button-primary" href="' . $statistics_module->get_statistics_url($email->id) . '"><i class="fa fa-chart-bar"></i> ' . __('Statistics', 'newsletter') . '</a>';
	                                            } else {
		                                            echo $emails_module->get_edit_button($email);
                                                } ?></td>
                                        </tr>
									<?php } ?>
                                </table>
                            </div>
                        </div>
                        <!-- END Newsletters -->
						<?php if ( empty( Newsletter::instance()->options['contract_key'] ) ) { ?>
                            <!-- START Premium -->
                            <div id="tnp-dash-premium" class="postbox">
                                <h3><?php _e( 'Premium', 'newsletter' ) ?>
                                    <a href="https://www.thenewsletterplugin.com/extensions" target="_blank">
                                        <i class="fa fa-trophy"></i> <?php _e( 'Buy', 'newsletter' ) ?>
                                    </a>
                                </h3>
                                <div class="inside">
                                    <div>
                                        <a href="https://www.thenewsletterplugin.com/extensions" target="_blank">
                                            <img style="width: 100%;"
                                                 src="https://cdn.thenewsletterplugin.com/dashboard01.gif">
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.thenewsletterplugin.com/extensions" target="_blank">
                                            <img style="width: 100%;"
                                                 src="https://cdn.thenewsletterplugin.com/dashboard02.png">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- END Premium -->
						<?php } ?>
                    </div>
                </div>
                <div id="postbox-container-3" class="postbox-container">
                    <div id="column3-sortables" class="meta-box-sortables ui-sortable">
                        <!-- START Subscribers -->
                        <div id="tnp-dash-subscribers" class="postbox">
                            <h3><?php _e( 'Last Subscribers', 'newsletter' ) ?>
                                <a href="<?php echo $users_module->get_admin_page_url( 'index' ); ?>">
                                    <i class="fa fa-users"></i> <?php _e( 'List', 'newsletter' ) ?>
                                </a>
                                <a href="<?php echo $users_module->get_admin_page_url( 'new' ); ?>">
                                    <i class="fa fa-user-plus"></i> <?php _e( 'New', 'newsletter' ) ?>
                                </a>
                            </h3>
                            <div class="inside">
                                <table width="100%">
									<?php foreach ( $subscribers as $s ) { ?>
                                        <tr>
                                            <td><?php echo esc_html( $s->email ) ?><br>
												<?php echo esc_html( $s->name ) ?> <?php echo esc_html( $s->surname ) ?>
                                            </td>
                                            <td><?php echo $emails_module->get_user_status_label( $s ) ?></td>
                                            <td style="white-space:nowrap">
                                                <a class="button-primary tnp-button-white"
                                                   title="<?php _e( 'Edit', 'newsletter' ) ?>"
                                                   href="<?php echo $users_module->get_admin_page_url( 'edit' ); ?>&amp;id=<?php echo $s->id; ?>"><i
                                                            class="fa fa-edit"></i></a>
                                                <a title="<?php _e( 'Profile', 'newsletter' ) ?>"
                                                   href="<?php echo home_url( '/' ) ?>?na=p&nk=<?php echo $s->id . '-' . $s->token; ?>"
                                                   class="button-primary tnp-button-white" target="_blank"><i
                                                            class="fa fa-user"></i></a>
                                            </td>
                                        </tr>
									<?php } ?>
                                </table>
                            </div>
                        </div>
                        <!-- END Subscribers -->
                    </div>
                </div>
            </div>
        </div>

    </div>

	<?php include NEWSLETTER_DIR . '/tnp-footer.php'; ?>

</div>
