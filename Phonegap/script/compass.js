document.addEventListener("deviceready", onDeviceReady, false);
var watchId = 0;
function onDeviceReady() {
	startCompass();
}

function startCompass() {
	var watchId = 0;
	$("#btnWatch").bind('touchstart', function() {
		var options = null;
		if (watchId == 0) {
			options = {
				frequency : 100
			};
			watchId = navigator.compass.watchHeading(function(heading) {
				var rotation = Math.round(heading.magneticHeading) + 'deg';

				//$('#txtHeading').attr('value', heading.magneticHeading);
				$('#needle').css('-webkit-transform', 'rotate(' + rotation + ')');
			}, function(error) {
				console.log('Error');
			}, options);

			$(this).html('Stop Watching');
		} else {
			navigator.compass.clearWatch(watchId);
			watchId = 0;
			$(this).html('Watch Heading');
		}
	});
}
