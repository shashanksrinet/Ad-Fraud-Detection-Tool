<?php 
include("config.php");

mysql_query("INSERT INTO `publisher_data`(`cookie_name`,cookie_repeted,local_storage,`font_fingerprint`,`canvas_fingerprint`,`ip`,`proxyStatus`,`proxyPort`,`ip_rating`,`customerID`,`user_agent`,`user_os`,`browser_name`,`ref_url`,display,cookie_chk,adobe_flash,java_enable,timezone,plugin_name,hasLocalStorageCon,hasSessionStorageCon,isCanvasSupportedCon,isIECon,getScreenResolutionData,canvasFPenhanceFullData,fontFoundData,random_cookie,final_fingerprint,date_time) VALUES('".$_REQUEST['cookie']."','".$_REQUEST['rep_cookie']."','".$_REQUEST['local_storage']."','".$_REQUEST['font_fingerprint']."','".$_REQUEST['canvas_fingerprint']."','".$_SERVER['REMOTE_ADDR']."','".$proxyTrue."','".$proxyPort."','".$fraud_avg."','".$_REQUEST['customer_id']."','".$user_agent."','".$_REQUEST['os_fingerprint'].'>>'.$user_os."','".$_REQUEST['browser_fingerprint']."','".$_REQUEST['referrer_url']."','".$_REQUEST['display_fingerprint']."','".$_REQUEST['cookie_chk_fingerprint']."','".$_REQUEST['adobe_flash']."','".$_REQUEST['java_enable']."','".$_REQUEST['timezone']."','".$_REQUEST['plugin_name']."','".$_REQUEST['hasLocalStorageCon']."','".$_REQUEST['hasSessionStorageCon']."','".$_REQUEST['isCanvasSupportedCon']."','".$_REQUEST['isIECon']."','".$_REQUEST['getScreenResolutionData']."','".$_REQUEST['canvasFPenhanceFullData']."','".$_REQUEST['fontFoundData']."','".$_REQUEST['repeted_cookie']."','".$_REQUEST['mxpresso_fingerprint']."','".$sql_date_format."')") or die(mysql_error());

?>


