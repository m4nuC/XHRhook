if( window.XMLHttpRequest ) {
	// saves the original XHR object
	var XMLHttpRequest = window.XMLHttpRequest;

	// Save the original send method
	var oldSend = XMLHttpRequest.prototype.send;

	// Extends the send method
	window.XMLHttpRequest.prototype.send = function( ) {

		// Set error listener 
		this.addEventListener("error", function() {
			//console.log(this.response);
		}, false);

		//Call the parent call method and passes it the current context
		oldSend.call(this);
	};
}

