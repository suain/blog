<?php
 mail ("hello@svenbelz.com", $_REQUEST['Email'], 
 $_REQUEST['nachricht'], "From: ". $_REQUEST['Name'] );
 
?>