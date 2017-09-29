(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 2027,
	height: 1279,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Безымянный_5_atlas_.png?1473188696366", id:"Безымянный_5_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Безымянный_5_atlas_", frames: [[0,2564,504,101],[0,2667,18,16],[0,1282,2028,1280],[0,0,2028,1280],[506,2564,169,120]]}
];


// symbols:



(lib.Зрачки = function() {
	this.spriteSheet = ss["Безымянный_5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blik = function() {
	this.spriteSheet = ss["Безымянный_5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fon2 = function() {
	this.spriteSheet = ss["Безымянный_5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fon221 = function() {
	this.spriteSheet = ss["Безымянный_5_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.L111 = function() {
	this.spriteSheet = ss["Безымянный_5_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Symvol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Зрачки();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504,101);


(lib.LeftEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.L111();
	this.instance.setTransform(16,4,0.291,0.462);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0)").s().p("AjRDRQhWhXAAh6QAAh5BWhYQBXhWB6AAQB6AABXBWQBXBYAAB5QAAB6hXBXQhXBXh6AAQh6AAhXhXg");
	this.shape.setTransform(35.4,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,4,59.4,62.8);


(lib.FaceSwap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.957)").s().p("EAFrBagQoSgUh4gpQhpgkoqh+IoQh2IgDgCIpjrMIvPsZQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIoYyIIgBgBIhDy2IiFpDIrcx7QAEmeAAm3QAAtugVh8QgUh9C2giQBcgRBfAHIgGnBIAAgBQA1m/AmozQBGxHhfngIgOhGQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAEABIACADIAMA7ICFjhIABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIL3giQMQghB0AMUABnAAKAs2gCUQc/hgMXgmQGHgTAiABQBpgBBmATQB9AXBrA0QDNBjBGCuQBECmAPExIAECCQACDUgVDWQgLBwAKE2QAFC6ARHCIAAABQAFChAEDTQAGJtgvEgQhBGFBFLDQALBpAqFiQAXDKgFAUQgPA/iLGhQiNGpg4CRQgrBvi1PnQi8QCgLAlQgXBIrZNlIsCOUIgBAAQguA+pYHMQpfHQg6AOQgmAJiRABQiQgBj+gIg");
	this.shape.setTransform(439.5,592);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,12,910.7,1160.2);


(lib.Face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon221();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2028,1280);


(lib.Bliks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.setTransform(0,0,1.644,1.725);

	this.instance_1 = new lib.blik();
	this.instance_1.setTransform(389,62,1.105,1.272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408.9,82.4);


(lib.Eye_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.Reye = new lib.LeftEye();
	this.Reye.setTransform(421.3,90.6,0.852,0.852,0,0,0,35.5,29.7);
	this.Reye.filters = [new cjs.ColorFilter(0.56, 0.56, 0.56, 1, 0, 0, 0, 0)];
	this.Reye.cache(4,2,63,67);

	this.Leye = new lib.LeftEye();
	this.Leye.setTransform(35.5,29.7,1,1,0,0,0,35.5,29.7);
	this.Leye.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Leye},{t:this.Reye}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,4,440.8,118.2);


// stage content:
(lib.Безымянный5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.EyePlay.visible = false;
		this.Face22.visible = false;
		this.Reye.visible = true;
		this.Leye.visible = true;
		
		_main = this;  
		createjs.Sound.registerSound("mmm.mp3", "soundID");  
		_main.audio1 = createjs.Sound.play("soundID");
		this.audio1.stop();
		this.audio1.setVolume(.5);
		
		this.Face2.addEventListener("click", fl_MouseClickHandler.bind(this));

		
		function fl_MouseClickHandler() {
				this.stop();
				//	console.log("Нажата кнопка мыши");
				this.EyePlay.visible = true;
				this.Face22.visible = true;
				this.Reye.visible = false;
				this.Leye.visible = false;
				this.audio1.play();		
				this.play();
		}
		
		
		stage.mouseMoveOutside = true;
		
		stage.on("stagemousemove", fl_MouseMove.bind(this));
		
		function fl_MouseMove() {
			var scaleX = canvas.width / 2027;
			var scaleY = canvas.height / 1279;
		
			var deltaX = 10*(stage.mouseX / scaleX - 595 * scaleX) / 595;
			var deltaX2 = 10*(stage.mouseX / scaleX - 985 * scaleX) / 985;
			this.Leye.x = 595 + deltaX;
			this.Reye.x = 985 + deltaX2;
			
			// console.log(deltaX);
			
			var deltaY = 12*(stage.mouseY / scaleY - 500  * scaleY) / 500;
			var deltaY2 = 12*(stage.mouseY / scaleY - 560 * scaleY) / 560;
			this.Leye.y = 500 + deltaY;
			this.Reye.y = 560 + deltaY2;
			
			var xx = stage.mouseX - this.Reye.x * scaleX;
			var yy = stage.mouseY - this.Reye.y * scaleY;
			var radiusR1 = Math.atan2(yy, xx);
			var degreeR1 = radiusR1 / (Math.PI / 180);
			this.Reye.rotation = degreeR1;
		
			var xx1 = stage.mouseX - this.Leye.x * scaleX;
			var yy1 = stage.mouseY - this.Leye.y * scaleY;
			var radiusR2 = Math.atan2(yy1, xx1);
			var degreeR2 = radiusR2 / (Math.PI / 180);
			this.Leye.rotation = degreeR2;
		}
	}
	this.frame_15 = function() {
		this.EyePlay.visible = false;
		this.Face22.visible = false;
		this.Reye.visible = true;
		this.Leye.visible = true;
	}
	this.frame_23 = function() {
		this.audio1.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(8).call(this.frame_23).wait(1));

	// FaseArea
	this.Face2 = new lib.FaceSwap();
	this.Face2.setTransform(737.6,556.4,1,1,0,0,0,455.2,595.6);
	this.Face2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.Face2).wait(24));

	// blik
	this.instance = new lib.Bliks();
	this.instance.setTransform(802.5,534.1,1,1,0,0,0,204.5,41.1);
	this.instance.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Face2
	this.Face22 = new lib.Face2();
	this.Face22.setTransform(1014,640,1,1,0,0,0,1014,640);
	this.Face22.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.Face22).wait(24));

	// Face
	this.instance_1 = new lib.fon2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// Eyes move
	this.EyePlay = new lib.Eye_move();
	this.EyePlay.setTransform(783.8,539.2,1,1,0,0,0,229.5,59.9);
	this.EyePlay.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.EyePlay).wait(1).to({regX:226.1,regY:63.1,x:777.2,y:537.8},0).wait(1).to({x:774.8,y:533.7},0).wait(1).to({x:773,y:530.2},0).wait(1).to({x:771.8,y:527},0).wait(1).to({x:771.1,y:524.3},0).wait(1).to({x:770.8,y:521.9},0).wait(1).to({x:771,y:519.8},0).wait(1).to({x:771.4,y:518.1},0).wait(1).to({x:772.1,y:516.6},0).wait(1).to({x:772.9,y:515.5},0).wait(1).to({x:773.8,y:514.5},0).wait(1).to({x:774.8,y:513.7},0).wait(1).to({x:775.8,y:513},0).wait(1).to({x:776.9,y:512.5},0).wait(1).to({x:778,y:512},0).to({_off:true},1).wait(8));

	// Eyes
	this.Reye = new lib.LeftEye();
	this.Reye.setTransform(986.5,568,0.852,0.852,0,0,0,35.5,29.7);
	this.Reye.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.Reye.cache(4,2,63,67);

	this.Leye = new lib.LeftEye();
	this.Leye.setTransform(600.7,501.6,1,1,0,0,0,35.5,29.7);
	this.Leye.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.Leye.cache(4,2,63,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Leye},{t:this.Reye}]}).wait(24));

	// Зрачки
	this.instance_2 = new lib.Symvol4();
	this.instance_2.setTransform(779.8,538.4,1,1,0,0,0,252.3,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1013.5,612.3,2028,1307.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
