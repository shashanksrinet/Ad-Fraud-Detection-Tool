<?php
date_default_timezone_set("Asia/Kolkata");
//error_reporting(0);
//session_start();
//ob_start();

$server_url = $_SERVER['HTTP_HOST'];
$host = "localhost";
		$con_user = "root";
		$con_pwd = "";
		$con_db = "adotrip_db";

mysql_connect($host,$con_user,$con_pwd) or die("<span style='FONT-SIZE:11px; FONT-COLOR: #000000; font-family=tahoma;'><center>Can't establish database connection. Please report following error to the webmaster.<br><br>".mysql_error()."'</center>");
mysql_select_db($con_db) or die("<span style='FONT-SIZE:11px; FONT-COLOR: #000000; font-family=tahoma;'><center>database could not be connect. Please report following error to the webmaster.<br><br>".mysql_error()."'</center>");

//$site_name = "SMS Panel";
//$base_url = "http://localhost/smspanel";
$sql_date_format = date('Y-m-d H:i:s');
$log_date = date('Y-m-d');
$log_time = date('H:i:s');
$date_time = date('h : i | d M Y');

$user_agent     =   $_SERVER['HTTP_USER_AGENT'];

function getOS() { 

    global $user_agent;

    $os_platform    =   "Unknown OS Platform";

    $os_array       =   array(
    						'/windows nt 10.0/i'     =>  'Windows 10',
    						'/windows nt 6.3/i'     =>  'Windows 8.1',
                            '/windows nt 6.2/i'     =>  'Windows 8',
                            '/windows nt 6.1/i'     =>  'Windows 7',
                            '/windows nt 6.0/i'     =>  'Windows Vista',
                            '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                            '/windows nt 5.1/i'     =>  'Windows XP',
                            '/windows xp/i'         =>  'Windows XP',
                            '/windows nt 5.0/i'     =>  'Windows 2000',
                            '/windows me/i'         =>  'Windows ME',
                            '/win98/i'              =>  'Windows 98',
                            '/win95/i'              =>  'Windows 95',
                            '/win16/i'              =>  'Windows 3.11',
                            '/macintosh|mac os x/i' =>  'Mac OS X',
                            '/mac_powerpc/i'        =>  'Mac OS 9',
                            '/linux/i'              =>  'Linux',
                            '/ubuntu/i'             =>  'Ubuntu',
                            '/iphone/i'             =>  'iPhone',
                            '/ipod/i'               =>  'iPod',
                            '/ipad/i'               =>  'iPad',
                            '/android/i'            =>  'Android',
                            '/blackberry/i'         =>  'BlackBerry',
                            '/webos/i'              =>  'Mobile'
                        );

    foreach ($os_array as $regex => $value) { 

        if (preg_match($regex, $user_agent)) {
            $os_platform    =   $value;
        }

    }   

    return $os_platform;

}

function getBrowser() {

    global $user_agent;

    $browser        =   "Unknown Browser";

    $browser_array  =   array(
                            '/msie/i'       =>  'Internet Explorer',
                            '/firefox/i'    =>  'Firefox',
                            '/safari/i'     =>  'Safari',
                            '/chrome/i'     =>  'Chrome',
                            '/opera/i'      =>  'Opera',
                            '/netscape/i'   =>  'Netscape',
                            '/maxthon/i'    =>  'Maxthon',
                            '/konqueror/i'  =>  'Konqueror',
                            '/mobile/i'     =>  'Handheld Browser'
                        );

    foreach ($browser_array as $regex => $value) { 

        if (preg_match($regex, $user_agent)) {
            $browser    =   $value;
        }

    }

    return $browser;

}

$test_HTTP_proxy_headers = array(
	'HTTP_VIA',
	'VIA',
	'Proxy-Connection',
	'HTTP_X_FORWARDED_FOR',  
	'HTTP_FORWARDED_FOR',
	'HTTP_X_FORWARDED',
	'HTTP_FORWARDED',
	'HTTP_CLIENT_IP',
	'HTTP_FORWARDED_FOR_IP',
	'X-PROXY-ID',
	'MT-PROXY-ID',
	'X-TINYPROXY',
	'X_FORWARDED_FOR',
	'FORWARDED_FOR',
	'X_FORWARDED',
	'FORWARDED',
	'CLIENT-IP',
	'CLIENT_IP',
	'PROXY-AGENT',
	'HTTP_X_CLUSTER_CLIENT_IP',
	'FORWARDED_FOR_IP',
	'HTTP_PROXY_CONNECTION');
	
	foreach($test_HTTP_proxy_headers as $header){
		if (isset($_SERVER[$header]) && !empty($_SERVER[$header])) {
			$proxyTrue = 'yes'.'-'.$header;
			//exit("Please disable your proxy connection!");
		}else{
			$proxyTrue = 'NoProxy';
		}
	}

$proxy_ports = array(80,81,8080,443,1080,6588,3128);
	foreach($proxy_ports as $test_port) {
		if(@fsockopen($_SERVER['REMOTE_ADDR'], $test_port, $errno, $errstr, 5)) {
			$proxyPort = 'ProxyPort-'.$test_port;
			//exit("Please disable your proxy connection!");
		}
		else{
			$proxyPort = 'Fine';
		}
	}	


// Create a function to process fetching our average.
function getIPQAVG($user, $country, $apiKey) {
	
	// Create the URL depending on if country is passed or not.
	if(!empty($country) && $country !== 'all') {
		$json_string = "https://www.ipqualityscore.com/api/".$apiKey."/proxy/average?userID=".$user."&country=".$country;
	} else {
		$json_string = "https://www.ipqualityscore.com/api/".$apiKey."/proxy/average?userID=".$user;
	}
	
	$jsondata = file_get_contents($json_string);
	$obj = json_decode($jsondata, true);
	return $obj;
}

// Set example variables.
$user = 1;
$apiKey = 'mnE1eTD3hRMeQvjA0jqO1KY6hJwlb1jS';

$IPQstats = getIPQAVG($user, 'all', $apiKey);
if($IPQstats['fraud_average'] !== null) {
	@$fraud_avg = $IPQstats['fraud_average'];
} else {
	@$fraud_avg = '0.00';
}


// Print average.
echo $fraud_avg;
$user_os        =   getOS();
$user_browser   =   getBrowser();
?>
