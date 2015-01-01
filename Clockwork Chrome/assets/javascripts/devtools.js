chrome.devtools.panels.create(
	"Skillshare Clockwork",
	"assets/images/icon-toolbar.png",
	"app.html",
	function(panel) {
		console.log("Panel created.");

		var extensionId = chrome.i18n.getMessage('@@extension_id');
		console.log("Extension ID: " + extensionId);

		button = panel.createStatusBarButton("assets/images/icon-clear.png", "Clear");
		button.onClicked.addListener(function() {
			chrome.extension.sendMessage(extensionId, {}, function(response) {
			});
		});
	}
);
