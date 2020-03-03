<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'clicknbuy' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';IiSd.ew_);kwygl=N~ n&Y#LPwoM8.YZk_:4qJ-u>NrAV=9t>jvnO2Z2fW`cKa|' );
define( 'SECURE_AUTH_KEY',  'P_g2j]sxgZ~r~F7(=:l&P%Pr/Ok5CQ*f{{CzTN>Ie,ZqxY ?L:..D{3EbF%&g<en' );
define( 'LOGGED_IN_KEY',    'r-#c8?yGhzUmy_C1m[6Z&P=1_)4:e_K$6cO0R3Ab>n;pch/^npwy={E!~Q{&T)be' );
define( 'NONCE_KEY',        '?{$Q@keJRyKRbn*QQ``C7`y|V#n6E_)7Yhc$_=%v)%Mimm9<s0>Hu/j(u)G<vnan' );
define( 'AUTH_SALT',        '%*K/L0_KWXfmv$=t!chK#}cJ{!~4nNs$n38_StOWzDnL;P1q)l&~O6WW4ZEBNU7f' );
define( 'SECURE_AUTH_SALT', '?ur0#4c3)iP$yW8&KQ86m6j&X]Z;n^8d_=B-,1dU]gkd_4DlD8ga#3--$cyV#;op' );
define( 'LOGGED_IN_SALT',   'NJk}k4+xTV)p7taxSck+fV=^[?NF$!IaIhbk|-Yd{0P,3%h(1Xysja*5=h!90dq+' );
define( 'NONCE_SALT',       '}8c[hs~fpw`^-_l%!O+1RqQ<.zA8YvMg!<l%p|OAxze980|g!e/*7Z.Lv{u2!<zK' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
