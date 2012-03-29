function DEVICE() {
	msgsize=0,
	ws=null,
	url=null,
	avgbytes=0,
	device_dynamic=null,
	enabled_button = [],
	devices = null,
	device_list =  [];
}

DEVICE.prototype.connect=function(host_url, port, type) {
    url = "ws://"+host_url+":"+port+"/"+type;
	console.log(url);
	if ("WebSocket" in window) {
		ws = new WebSocket(url);
	} else if ("MozWebSocket" in window) {
		ws = new MozWebSocket(url);
	} else {
		DEVICE.prototype.chat_message("This Browser does not support WebSockets");
		return;
	}
	ws.onopen = function(e) {
		DEVICE.prototype.chat_message("A connection to "+url+" has been opened.");
		console.log("connected");
//		DEVICE.prototype.null_send();
	};
	
	ws.onerror = function(e) {
		DEVICE.prototype.chat_message("An error occured, see console log for more details.");
		console.log(e);
	};
	
	ws.onclose = function(e) {
		DEVICE.prototype.chat_message("The connection to "+url+" was closed.");
	};
	
	ws.onmessage = function(e) {
		var message = JSON.parse(e.data); 
		
		if (message.type == "msg") {
				DEVICE.prototype.chat_message2(message.value,message.sender);
		} else if (message.type == "participants") {}
	};
}

DEVICE.prototype.chat_message=function(message) {
	console.log(message);
}

DEVICE.prototype.chat_message2=function(message,sender) 
{

		if((message=="DLIST") || (message == "dynamiclist")) { return; }
devices = message;

	device_dynamic = devices;
	
	if(message == "connected") { DEVICE.prototype.chat_message(message); }
	
}

DEVICE.prototype.putvaluehere=function(){
	return device_dynamic;
}

DEVICE.prototype.disconnect=function() {
	eraseCookie('cookie_value');
	
	ws.close();
	DEVICE.prototype.chat_message("Closed");
}


DEVICE.prototype.toggle_connect=function() {
		DEVICE.prototype.connect();
}

DEVICE.prototype.send=function(v) {
	if (ws === undefined || ws.readyState != 1) {
		DEVICE.prototype.chat_message("Websocket is not avaliable for writing");
		return;
	}
	var devices_sel=v;
	ws.send("START:"+devices_sel);
	console.log(devices_sel);
}

DEVICE.prototype.send_stop=function(v) {
	if (ws === undefined || ws.readyState != 1) {
		DEVICE.prototype.chat_message("Websocket is not avaliable for writing");
		return;
	}
	var devices_sel=v;
	ws.send("STOP:"+devices_sel);
	console.log(devices_sel);
}

DEVICE.prototype.null_send=function() {
	if (ws === undefined || ws.readyState != 1) {
		DEVICE.prototype.chat_message("Websocket is not avaliable for writing");
		return;
	}
	ws.send("dynamiclist");
}

DEVICE.prototype.dlist_send=function() {
        if (ws === undefined || ws.readyState != 1) {
                DEVICE.prototype.chat_message("Websocket is not avaliable for writing");
                return;
        }
        ws.send("DLIST");
}