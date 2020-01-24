<?php 
include("config.php");
?>
<html>
<head></head>
<body>
<?php
/* RiskScore*/
/*
SELECT canvas_fingerprint,cookie_repeted,ip,font_fingerprint,user_agent,user_os,browser_name,ref_url,display,adobe_flash,java_enable,timezone,plugin_name,mxpresso_fingerprint FROM `lead_data` GROUP BY canvas_fingerprint,cookie_repeted,ip,font_fingerprint,user_agent,user_os,browser_name,ref_url,display,adobe_flash,java_enable,timezone,plugin_name,mxpresso_fingerprint HAVING COUNT(canvas_fingerprint) > 1 AND COUNT(ip) > 1 AND COUNT(cookie_repeted) > 1 AND COUNT(font_fingerprint) > 1 AND COUNT(user_agent) > 1 AND COUNT(user_os) > 1 AND COUNT(browser_name) > 1 AND COUNT(ref_url) > 1 AND COUNT(display) > 1 AND COUNT(adobe_flash) > 1 AND COUNT(java_enable) > 1 AND COUNT(timezone) > 1 AND COUNT(plugin_name) > 1 AND COUNT(mxpresso_fingerprint) > 1
 

Risk Score:-    100%



SELECT canvas_fingerprint,ip,cookie_repeted FROM `lead_data` GROUP BY canvas_fingerprint HAVING COUNT(canvas_fingerprint) > 1 AND COUNT(DISTINCT ip) > 1 AND COUNT(DISTINCT cookie_repeted) > 1


Risk Score:-  80%


//mxpresso_fingerprint is different but others are repeted.
SELECT `mxpresso_fingerprint`,canvas_fingerprint FROM `lead_data` GROUP BY canvas_fingerprint HAVING COUNT(canvas_fingerprint) > 1  AND COUNT(DISTINCT `mxpresso_fingerprint`) > 1

Risk Score:-  60%

 */
 ?>





<h3 align="center">Fingerprint Fraud</h3>
<table align="center"  border="2" cellspacing="5" cellpadding="5">
  <tbody>
  <th>Date</th>
    <th>Total Leads</th>
    <th>Unique Leads</th>
    <th>Fraud Leads</th>
    </tbody>
    <?php 
	          
				$reportQuery = mysql_query("SELECT date(date_time) as dte,count(mxpresso_fingerprint) as m,count(DISTINCT(mxpresso_fingerprint)) as d FROM lead_data") or die(mysql_error());
				while($showReport = mysql_fetch_array($reportQuery)){
				$total=$showReport['m'] ;
				$distict=$showReport['d'] ;
				$res=$total-$distict;
			?>
  <tr>
    <td><?php echo $showReport['dte'] ;?></td>
    <td><?php echo $showReport['m'] ;?></td>
    <td><?php echo $showReport['d'] ;?></td>
    <td><?php echo $res ;?></td>
  </tr>
  <?php }?>
</table>
<h3 align="center">IP Fraud</h3><h6 align="center">(more than 3 lead filled from this ip)</h6>
<table align="center"  border="2" cellspacing="5" cellpadding="5">
  <tbody>
    <th>Date</th>
    <th>IP Address</th>
    <th>Lead Filled by this IP</th>
    </tbody>
    <?php 
				$reportQuery = mysql_query("SELECT date(date_time) as dt,ip, COUNT(*) as n FROM lead_data GROUP BY ip HAVING COUNT(*) > 3") or die(mysql_error());
				while($showReport = mysql_fetch_array($reportQuery)){
			?>
  <tr>
    <td><?php echo $showReport['dt'] ;?></td>
    <td><?php echo $showReport['ip'] ;?></td>
    <td><?php echo $showReport['n'] ;?></td>
  </tr>
  <?php }?>
</table>

<h3 align="center">Cookie Fraud</h3><h6 align="center">(if cookie is Enable)</h6>
<table align="center"  border="2" cellspacing="5" cellpadding="5">
  <tbody>
  	<th>Date</th>
    <th>Fraud Leads</th>
    </tbody>
    <?php 
				$reportQuery = mysql_query("SELECT date(date_time) as d,COUNT(cookie_repeted) as r FROM `lead_data` WHERE cookie_repeted like '%repeted' and cookie_name='ICICI thank you page' AND `cookie_chk` ='true'") or die(mysql_error());
				while($showReport = mysql_fetch_array($reportQuery)){
			?>
  <tr>
    <td><?php echo $showReport['d'] ;?></td>
    <td><?php echo $showReport['r'] ;?></td>
  </tr>
  <?php }?>
</table>


<h3 align="center">Risk Score</h3><h5 align="center">1.sure of fraud : mark as 100.<br>
													 2.Partially sure (eg. Fingerprint matches but cookie and IP does not) : mark as 80<br>
													 3.Not sure (eg iPhones) : mark as 60</h6>
<table align="center"  border="2" cellspacing="5" cellpadding="5">
  <tbody>
  	<th>Date</th>
    <th>Fingerprint</th>
    <th>IP Address</th>
    <th>Score%</th>
    </tbody>
    <?php 
				//$reportQuery = mysql_query("SELECT * FROM `risk_score`") or die(mysql_error());
				//while($showReport = mysql_fetch_array($reportQuery)){
			?>
  <tr>
    <td><?php echo $showReport['date_time'] ;?></td>
    <td><?php echo $showReport['fingerprint'] ;?></td>
    <td><?php echo $showReport['ip'] ;?></td>
    <td><?php ?></td>
  </tr>
  <?php //}?>
</table>

</body>
</html>
