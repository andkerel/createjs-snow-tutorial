window.addEventListener("load", init);

function init() {

	var stage = new createjs.Stage("myCanvas");

	setInterval(snowBegin, 200);

	function snowBegin() {

		var snowflake = new createjs.Bitmap("snowflakeS.png");

		var container = new createjs.Container();
		container.x = Math.random() * window.innerWidth;

		container.addChild(snowflake);
		stage.addChild(container);

		var duration = Math.random() * 1000 + 1000;

		createjs.Tween.get(snowflake, {loop:true})
			.to({x:0, alpha:1}, createjs.Ease.quadInOut)
			.wait(15)
			.to({x:25, alpha:1}, duration, createjs.Ease.quadInOut)
			.wait(15)
			.to({x:0, alpha:1}, duration, createjs.Ease.quadInOut);

		createjs.Tween.get(container, {loop:true})
			.to({y:window.innerHeight}, 10000, createjs.Ease.BackOut)
			.call(removeContainer);

		function removeContainer(e) {
			stage.removeChild(e.target);
		}

	}

	createjs.Ticker.on("tick", stage);

}