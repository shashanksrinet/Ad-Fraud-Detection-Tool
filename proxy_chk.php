<?php 
        $host = "localhost";
		$con_user = "root";
		$con_pwd = "";
		$con_db = "test";

$con1=mysql_connect($host,$con_user,$con_pwd) or die("<span style='FONT-SIZE:11px; FONT-COLOR: #000000; font-family=tahoma;'><center>Can't establish database connection. Please report following error to the webmaster.<br><br>".mysql_error()."'</center>");
mysql_select_db($con_db,$con1) or die("<span style='FONT-SIZE:11px; FONT-COLOR: #000000; font-family=tahoma;'><center>database could not be connect. Please report following error to the webmaster.<br><br>".mysql_error()."'</center>");



        $host_2nd = "localhost";
		$con_user_2nd = "root";
		$con_pwd_2nd = "";
		$con_db_2nd = "lead_fraud_detect";
		
$con2=mysql_connect($host_2nd,$con_user_2nd,$con_pwd_2nd,true) or die("<span style='FONT-SIZE:11px; FONT-COLOR: #000000; font-family=tahoma;'><center>Can't establish database connection. Please report following error to the webmaster.<br><br>".mysql_error()."'</center>");
mysql_select_db($con_db_2nd,$con2) or die("<span style='FONT-SIZE:11px; FONT-COLOR: #000000; font-family=tahoma;'><center>database could not be connect. Please report following error to the webmaster.<br><br>".mysql_error()."'</center>");		
		   
				 $reportQuery = mysql_query("SELECT * FROM lead_fraud_detect.lead_data WHERE ip IN (SELECT network_last_ip FROM test.ip_details)",$con1) or die(mysql_error());
				 while($showReport = mysql_fetch_array($reportQuery)){
				 $proxy_ip=$showReport['ip'] ;
  
				 echo $proxy_ip.'<br>';
				 
				}

				


 
?>


