<script type="text/javascript">
var obj = new DEVICE;
var action = "<?php print $action;?>";
$(document).ready(function() {
	$('#action_status').html('connecting...');
	obj.connect("<?php echo $settings['host'];?>","<?php echo $settings['port'];?>","device");
	setTimeout(senddevice,6000);
	$('#action_status').html('Sending request...');
});

function senddevice() {
	if(action == "START") {
		obj.send("<?php print strtoupper($domain).":".$device;?>");
	} else {
		obj.send_stop("<?php print strtoupper($domain).":".$device;?>");
	}
	$('#action_status').html("<?php print strtoupper($domain).":".$device;?>"+' : '+action);
}


</script>		
<table id="device_list">
  <thead>
    <tr>
      <th><?php print t('Domains'); ?></th>
    </tr>
  </thead>
  <tbody>
    <tr id="device-list">
	  <td><span id="action_status">Connecting</span></td>
      <td><div id="messages-content"></div></td>
      <td valign="top"></td>
	</tr>  
  </tbody>
</table>