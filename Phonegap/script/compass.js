document.addEventListener("deviceready", onDeviceReady, false);

	function onDeviceReady() {
		startCompass();
	}

	function startCompass() {
		var options = {
			frequency : 50
		};
		navigator.compass.watchHeading(onSuccess, onError, options);
	}

	function onSuccess(heading) {
		//alert("hi");
		$("#needle").rotate(-heading.magneticHeading);
	}

	function onError(compassError) {
		alert("CompassError :" + compassError.code);

	}