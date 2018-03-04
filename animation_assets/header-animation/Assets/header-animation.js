(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.シンボル8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E1FF7F").ss(12).p("AAAqdIAAU7");
	this.shape.setTransform(0,67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル8, new cjs.Rectangle(-6,-6,12,146), null);


(lib.シンボル7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E1FF7F").ss(12).p("AAAxVMAAAAir");
	this.shape.setTransform(0,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル7, new cjs.Rectangle(-6,-6,12,234), null);


(lib.シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E1FF7F").ss(12).p("AAA29MAAAAt7");
	this.shape.setTransform(0,147);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル6, new cjs.Rectangle(-6,-6,12,306), null);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E1FF7F").ss(8).p("AAA2LMAAAAsX");
	this.shape.setTransform(0,142);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル5, new cjs.Rectangle(-4,-4,8,292), null);


(lib.シンボル4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E1FF7F").ss(8).p("EAAAAkGMAAAhIL");
	this.shape.setTransform(0,231);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル4, new cjs.Rectangle(-4,-4,8,470), null);


(lib.シンボル3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E1FF7F").ss(8).p("EAAAgiNMAAABEb");
	this.shape.setTransform(0,219);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(-4,-4,8,446), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8175D").ss(4).p("EA50g5zMhznBzn");
	this.shape.setTransform(371.4,371.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(-0.6,-0.5,744,743.9), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8175D").ss(4).p("EA50g5zMhznBzn");
	this.shape.setTransform(371.4,371.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(-0.6,-0.5,744,743.9), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF0C2").s().p("EgluAAAMAlugluMAlvAluMglvAlvg");
	this.shape.setTransform(241.5,241.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,483.1,483.1), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF0C2").s().p("EgluAAAMAlugluMAlvAluMglvAlvg");
	this.shape.setTransform(241.5,241.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,483.1,483), null);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(513.3,241.5,1,1,0,0,0,241.5,241.5);
	this.instance.alpha = 0.289;

	this.instance_1 = new lib.Path_11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.5,511,1,1,0,0,0,241.5,241.5);
	this.instance_1.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,754.9,752.6), null);


// stage content:
(lib.headeranimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ! コピー
	this.text = new cjs.Text("!", "bold 80px 'Segoe UI'", "#FFFFFF");
	this.text.lineHeight = 181;
	this.text.parent = this;
	this.text.setTransform(1446.9,679.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(17).to({_off:false},0).wait(1).to({y:627.4},0).wait(1).to({y:575.1},0).wait(1).to({y:522.8},0).wait(1).to({y:470.5},0).wait(1).to({y:418.2},0).wait(1).to({y:365.9},0).wait(1).to({y:313.6},0).wait(1).to({y:261.3},0).wait(1).to({y:209},0).wait(1).to({y:156.8},0).wait(1).to({y:160.9},0).wait(1).to({y:165},0).wait(1).to({y:169.1},0).wait(1).to({y:173.2},0).wait(1).to({y:177.4},0).wait(1).to({x:1447,y:181.5},0).wait(1).to({y:185.6},0).wait(1).to({y:189.7},0).wait(1).to({y:193.8},0).wait(1).to({y:198},0).wait(1).to({y:202.1},0).wait(1).to({x:1447.1,y:206.2},0).wait(1).to({y:210.3},0).wait(1).to({y:214.5},0).wait(1).to({y:218.6},0).wait(1).to({y:222.7},0).wait(1).to({y:226.8},0).wait(1).to({x:1447.2,y:230.9},0).wait(1).to({y:235.1},0).wait(1).to({y:239.2},0).wait(1).to({y:243.3},0).wait(1).to({y:247.4},0).wait(1).to({x:1447.3,y:251.6},0).wait(12).to({rotation:22.5,x:1474,y:250.3},0).wait(1).to({rotation:45,x:1499.1,y:259.4},0).wait(1).to({rotation:67.5,x:1518.8,y:277.4},0).wait(1).to({rotation:90,x:1530.2,y:301.6},0).wait(1).to({rotation:112.5,x:1531.4,y:328.3},0).wait(1).to({rotation:135,x:1522.4,y:353.4},0).wait(1).to({rotation:157.5,x:1504.3,y:373.2},0).wait(1).to({rotation:180,x:1480.2,y:384.6},0).wait(1).to({rotation:155.5,x:1506.3,y:371.7},0).wait(1).to({rotation:130.9,x:1524.7,y:349.2},0).wait(1).to({rotation:106.4,x:1532.1,y:321},0).wait(1).to({rotation:81.8,x:1527.2,y:292.3},0).wait(1).to({rotation:57.3,x:1510.7,y:268.3},0).wait(1).to({rotation:32.7,x:1485.8,y:253.2},0).wait(1).to({rotation:8.2,x:1456.9,y:249.9},0).wait(1).to({rotation:-16.4,x:1429.2,y:258.9},0).wait(1).to({rotation:-40.9,x:1407.7,y:278.6},0).wait(1).to({rotation:-65.5,x:1396.4,y:305.4},0).wait(1).to({rotation:-90,x:1397.2,y:334.5},0).wait(1).to({rotation:-80,x:1395.4,y:322.7},0).wait(1).to({rotation:-70,x:1395.6,y:310.8},0).wait(1).to({rotation:-60,x:1397.9,y:299},0).wait(1).to({rotation:-50,x:1402.2,y:287.9},0).wait(1).to({rotation:-40,x:1408.4,y:277.7},0).wait(1).to({rotation:-30,x:1416.2,y:268.7},0).wait(1).to({rotation:-20,x:1425.5,y:261.2},0).wait(1).to({rotation:-10,x:1436,y:255.4},0).wait(1).to({rotation:0,x:1447.3,y:251.6},0).wait(62));

	// REAAATE
	this.text_1 = new cjs.Text("REAAAATE", "bold 70px 'Segoe UI'", "#FFFFFF");
	this.text_1.lineHeight = 168;
	this.text_1.parent = this;
	this.text_1.setTransform(1066.3,193.8);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(15).to({_off:false},0).wait(1).to({y:197.5},0).wait(1).to({y:201.3},0).wait(1).to({y:205},0).wait(1).to({y:208.8},0).wait(1).to({y:212.5},0).wait(1).to({y:216.2},0).wait(1).to({y:220},0).wait(1).to({y:223.7},0).wait(1).to({y:227.5},0).wait(1).to({y:231.2},0).wait(1).to({y:235},0).wait(1).to({y:238.7},0).wait(1).to({y:242.4},0).wait(1).to({y:246.2},0).wait(1).to({y:249.9},0).wait(1).to({y:253.7},0).wait(1).to({y:257.4},0).wait(1).to({y:261.2},0).wait(1).to({y:264.9},0).wait(117));

	// C
	this.text_2 = new cjs.Text("C", "bold 80px 'Segoe UI'", "#FFFFFF");
	this.text_2.lineHeight = 181;
	this.text_2.parent = this;
	this.text_2.setTransform(999.7,223.8);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(12).to({_off:false},0).wait(2).to({y:223.9},0).wait(1).to({y:224},0).wait(1).to({y:224.1},0).wait(1).to({y:224.2},0).wait(1).to({y:224.4},0).wait(1).to({y:224.7},0).wait(1).to({y:224.9},0).wait(1).to({y:225.2},0).wait(1).to({y:225.6},0).wait(1).to({y:226},0).wait(1).to({y:226.4},0).wait(1).to({y:226.8},0).wait(1).to({y:227.3},0).wait(1).to({y:227.8},0).wait(1).to({y:228.4},0).wait(1).to({y:229},0).wait(1).to({y:229.6},0).wait(1).to({y:230.3},0).wait(1).to({y:230.9},0).wait(1).to({y:231.7},0).wait(1).to({y:232.5},0).wait(1).to({y:233.3},0).wait(1).to({y:234.1},0).wait(1).to({y:235},0).wait(1).to({y:235.9},0).wait(1).to({y:236.8},0).wait(1).to({y:237.8},0).wait(1).to({y:238.8},0).wait(1).to({y:239.9},0).wait(1).to({y:241},0).wait(1).to({y:242.1},0).wait(1).to({y:243.3},0).wait(1).to({y:244.5},0).wait(1).to({y:245.7},0).wait(1).to({y:247},0).wait(1).to({y:248.3},0).wait(1).to({y:249.6},0).wait(1).to({y:251},0).wait(1).to({y:252.4},0).wait(1).to({y:253.4},0).wait(98));

	// !
	this.text_3 = new cjs.Text("!", "bold 80px 'Segoe UI'", "#FFFFFF");
	this.text_3.lineHeight = 181;
	this.text_3.parent = this;
	this.text_3.setTransform(808.4,684.9);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(13).to({_off:false},0).wait(1).to({y:683.6},0).wait(1).to({y:679.4},0).wait(1).to({y:672.5},0).wait(1).to({y:662.8},0).wait(1).to({y:650.2},0).wait(1).to({y:635},0).wait(1).to({y:616.9},0).wait(1).to({y:596},0).wait(1).to({y:572.4},0).wait(1).to({y:546.1},0).wait(1).to({y:516.7},0).wait(1).to({y:484.8},0).wait(1).to({y:450.1},0).wait(1).to({y:412.6},0).wait(1).to({y:372.2},0).wait(1).to({y:329.2},0).wait(1).to({y:283.3},0).wait(1).to({y:234.7},0).wait(1).to({y:183.1},0).wait(1).to({y:129},0).wait(1).to({y:116.6},0).wait(1).to({y:120.9},0).wait(1).to({y:125.4},0).wait(1).to({y:130.1},0).wait(1).to({y:135},0).wait(1).to({y:140.1},0).wait(1).to({y:145.4},0).wait(1).to({y:150.9},0).wait(1).to({y:156.7},0).wait(1).to({y:162.6},0).wait(1).to({y:168.7},0).wait(1).to({y:175},0).wait(1).to({y:181.5},0).wait(1).to({y:212.4},0).wait(1).to({y:247.1},0).wait(1).to({y:251.2},0).wait(102));

	// REEEEATE
	this.text_4 = new cjs.Text("REEEEAT", "bold 70px 'Segoe UI'", "#FFFFFF");
	this.text_4.lineHeight = 168;
	this.text_4.parent = this;
	this.text_4.setTransform(507.5,181.9);
	this.text_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(10).to({_off:false},0).wait(1).to({y:182},0).wait(1).to({y:182.4},0).wait(1).to({y:183.2},0).wait(1).to({y:184.2},0).wait(1).to({y:185.5},0).wait(1).to({y:187.2},0).wait(1).to({y:189.1},0).wait(1).to({y:191.3},0).wait(1).to({y:193.8},0).wait(1).to({y:196.6},0).wait(1).to({y:199.7},0).wait(1).to({y:203.1},0).wait(1).to({y:206.8},0).wait(1).to({y:210.8},0).wait(1).to({y:215.1},0).wait(1).to({y:219.6},0).wait(1).to({y:224.5},0).wait(1).to({y:229.7},0).wait(1).to({y:235.2},0).wait(1).to({y:240.9},0).wait(1).to({y:247},0).wait(1).to({y:253.3},0).wait(1).to({y:260},0).wait(1).to({y:264.6},0).wait(117));

	// G
	this.text_5 = new cjs.Text("G", "bold 80px 'Segoe UI'", "#FFFFFF");
	this.text_5.lineHeight = 181;
	this.text_5.lineWidth = 92;
	this.text_5.parent = this;
	this.text_5.setTransform(429.2,147.9);
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(5).to({_off:false},0).wait(1).to({x:429.3,y:151.2},0).wait(1).to({y:154.5},0).wait(1).to({x:429.4,y:157.9},0).wait(1).to({y:161.2},0).wait(1).to({x:429.5,y:164.5},0).wait(1).to({x:429.6,y:167.9},0).wait(1).to({y:171.2},0).wait(1).to({x:429.7,y:174.5},0).wait(1).to({x:429.8,y:177.9},0).wait(1).to({y:181.2},0).wait(1).to({x:429.9,y:184.5},0).wait(1).to({y:187.9},0).wait(1).to({x:430,y:191.2},0).wait(1).to({x:430.1,y:194.5},0).wait(1).to({y:197.9},0).wait(1).to({x:430.2,y:201.2},0).wait(1).to({y:204.5},0).wait(1).to({x:430.3,y:207.9},0).wait(1).to({x:430.4,y:211.2},0).wait(1).to({y:214.5},0).wait(1).to({x:430.5,y:217.9},0).wait(1).to({y:221.2},0).wait(1).to({x:430.6,y:224.5},0).wait(1).to({x:430.7,y:227.9},0).wait(1).to({y:231.2},0).wait(1).to({x:430.8,y:234.5},0).wait(1).to({x:430.9,y:237.9},0).wait(1).to({y:241.2},0).wait(1).to({x:431,y:244.5},0).wait(1).to({y:247.9},0).wait(1).to({x:431.1,y:251.2},0).wait(115));

	// Free designer Michi’s Portfolio site.
	this.text_6 = new cjs.Text("Free designer Michi’s Portfolio site.", "24px 'Segoe UI Semilight'", "#FFFFFF");
	this.text_6.lineHeight = 59;
	this.text_6.parent = this;
	this.text_6.setTransform(595.5,409.7);
	this.text_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(36).to({_off:false},0).wait(1).to({x:595.4},0).wait(1).to({x:595.1},0).wait(1).to({x:594.6},0).wait(1).to({x:594},0).wait(1).to({x:593.1},0).wait(1).to({x:592},0).wait(1).to({x:590.8},0).wait(1).to({x:589.3},0).wait(1).to({x:587.7},0).wait(1).to({x:585.9},0).wait(1).to({x:583.8},0).wait(1).to({x:581.6},0).wait(1).to({x:579.2},0).wait(1).to({x:576.6},0).wait(1).to({x:573.8},0).wait(1).to({x:570.8},0).wait(1).to({x:567.6},0).wait(1).to({x:564.2},0).wait(1).to({x:560.7},0).wait(1).to({x:556.9},0).wait(1).to({x:553},0).wait(1).to({x:548.8},0).wait(1).to({x:544.5},0).wait(1).to({x:539.9},0).wait(1).to({x:535.2},0).wait(1).to({x:530.3},0).wait(1).to({x:525.2},0).wait(1).to({x:519.9},0).wait(1).to({x:514.4},0).wait(1).to({x:508.7},0).wait(1).to({x:507.5},0).wait(84));

	// フリーデザイナー未知のポートフォリオサイトです
	this.text_7 = new cjs.Text("フリーデザイナー未知のポートフォリオサイトです", "bold 20px 'Yu Gothic'", "#FFFFFF");
	this.text_7.lineHeight = 53;
	this.text_7.lineWidth = 460;
	this.text_7.parent = this;
	this.text_7.setTransform(594,459);
	this.text_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_7).wait(40).to({_off:false},0).wait(1).to({x:593.9},0).wait(1).to({x:593.7},0).wait(1).to({x:593.2},0).wait(1).to({x:592.6},0).wait(1).to({x:591.8},0).wait(1).to({x:590.9},0).wait(1).to({x:589.7},0).wait(1).to({x:588.4},0).wait(1).to({x:586.9},0).wait(1).to({x:585.3},0).wait(1).to({x:583.4},0).wait(1).to({x:581.4},0).wait(1).to({x:579.2},0).wait(1).to({x:576.9},0).wait(1).to({x:574.3},0).wait(1).to({x:571.6},0).wait(1).to({x:568.8},0).wait(1).to({x:565.7},0).wait(1).to({x:562.5},0).wait(1).to({x:559.1},0).wait(1).to({x:555.5},0).wait(1).to({x:551.7},0).wait(1).to({x:547.8},0).wait(1).to({x:543.7},0).wait(1).to({x:539.4},0).wait(1).to({x:534.9},0).wait(1).to({x:530.3},0).wait(1).to({x:525.5},0).wait(1).to({x:520.5},0).wait(1).to({x:515.4},0).wait(1).to({x:510},0).wait(1).to({x:507.5},0).wait(79));

	// レイヤー 8
	this.instance = new lib.シンボル3();
	this.instance.parent = this;
	this.instance.setTransform(1656.2,862.5,1,1,0,0,0,0,219);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(1).to({y:733.4},0).wait(1).to({y:604.2},0).wait(1).to({y:475.1},0).wait(1).to({y:345.9},0).wait(1).to({y:216.8},0).wait(90));

	// レイヤー 9
	this.instance_1 = new lib.シンボル4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1582.2,896.7,1,1,0,0,0,0,231);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(1).to({y:798.7},0).wait(1).to({y:700.7},0).wait(1).to({y:602.8},0).wait(1).to({y:504.8},0).wait(1).to({y:406.9},0).wait(1).to({y:387.9},0).wait(1).to({y:369},0).wait(1).to({y:350.1},0).wait(1).to({y:331.2},0).wait(1).to({y:312.3},0).wait(1).to({y:293.4},0).wait(1).to({y:274.5},0).wait(1).to({y:255.5},0).wait(1).to({y:236.6},0).wait(1).to({y:217.7},0).wait(1).to({y:198.8},0).wait(1).to({y:179.9},0).wait(1).to({y:161},0).wait(1).to({y:142.1},0).wait(1).to({y:123.2},0).wait(1).to({y:104.3},0).wait(1).to({y:85.3},0).wait(1).to({y:66.4},0).wait(1).to({y:47.5},0).wait(1).to({y:28.6},0).wait(1).to({y:9.7},0).wait(1).to({y:-9.2},0).wait(1).to({y:-28.2},0).wait(1).to({y:-47.1},0).wait(1).to({y:-66},0).wait(1).to({y:-84.9},0).wait(55));

	// レイヤー 10
	this.instance_2 = new lib.シンボル5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1514.2,855.6,1,1,0,0,0,0,142);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).wait(1).to({y:833.9},0).wait(1).to({y:812.2},0).wait(1).to({y:790.5},0).wait(1).to({y:768.9},0).wait(1).to({y:747.2},0).wait(1).to({y:725.5},0).wait(1).to({y:703.8},0).wait(1).to({y:682.1},0).wait(1).to({y:660.5},0).wait(1).to({y:638.8},0).wait(1).to({y:617.1},0).wait(1).to({y:595.4},0).wait(1).to({y:573.7},0).wait(87));

	// レイヤー 11
	this.instance_3 = new lib.シンボル8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(344.2,346.7,1,1,0,0,0,0,67);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).wait(1).to({scaleY:1.07,y:352.1},0).wait(1).to({scaleY:1.14,y:357.5},0).wait(1).to({scaleY:1.21,y:362.9},0).wait(1).to({scaleY:1.27,y:368.3},0).wait(1).to({scaleY:1.34,y:373.7},0).wait(1).to({scaleY:1.25,y:367.4},0).wait(1).to({scaleY:1.16,y:361.2},0).wait(1).to({scaleY:1.06,y:354.9},0).wait(1).to({scaleY:0.97,y:348.7},0).wait(96));

	// レイヤー 12
	this.instance_4 = new lib.シンボル7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(290.2,352.7,1,1,0,0,0,0,111);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).wait(1).to({scaleY:1.05,y:358.5},0).wait(1).to({scaleY:1.11,y:364.3},0).wait(1).to({scaleY:1.16,y:370},0).wait(1).to({scaleY:1.21,y:375.8},0).wait(1).to({scaleY:1.26,y:381.6},0).wait(1).to({scaleY:1.19,y:374.1},0).wait(1).to({scaleY:1.13,y:366.6},0).wait(1).to({scaleY:1.06,y:359.1},0).wait(1).to({scaleY:0.99,y:351.7},0).wait(88));

	// レイヤー 13
	this.instance_5 = new lib.シンボル6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.2,362.7,1,1,0,0,0,0,147);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(1).to({scaleY:1.04,y:368.3},0).wait(1).to({scaleY:1.08,y:373.9},0).wait(1).to({scaleY:1.11,y:379.5},0).wait(1).to({scaleY:1.15,y:385.1},0).wait(1).to({scaleY:1.19,y:390.6},0).wait(1).to({scaleY:1.14},0).wait(1).to({scaleY:1.1},0).wait(1).to({scaleY:1.05},0).wait(1).to({scaleY:1,y:390.7},0).wait(83));

	// <Path>_14
	this.instance_6 = new lib.Path_14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(774.1,971.7,1,1,0,0,0,371.4,371.4);
	this.instance_6.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:798.3,y:947.6,alpha:0.55},0).wait(1).to({x:822.4,y:923.7},0).wait(1).to({x:846.3,y:900},0).wait(1).to({x:870.1,y:876.5},0).wait(1).to({x:893.6,y:853.1},0).wait(1).to({x:917.1,y:829.8},0).wait(1).to({x:940.4,y:806.8},0).wait(1).to({x:963.5,y:783.9},0).wait(1).to({x:986.4,y:761.1},0).wait(1).to({x:1009.2,y:738.5},0).wait(1).to({x:1031.8,y:716.1},0).wait(1).to({x:1054.3,y:693.8},0).wait(1).to({x:1076.6,y:671.7},0).wait(1).to({x:1098.7,y:649.8},0).wait(1).to({x:1120.7,y:628},0).wait(1).to({x:1142.5,y:606.3},0).wait(1).to({x:1164.2,y:584.9},0).wait(1).to({x:1185.6,y:563.6},0).wait(1).to({x:1207,y:542.4},0).wait(1).to({x:1228.1,y:521.5},0).wait(1).to({x:1249.1,y:500.6},0).wait(1).to({x:1270,y:480},0).wait(1).to({x:1290.6,y:459.5},0).wait(1).to({x:1311.2,y:439.1},0).wait(1).to({x:1331.5,y:418.9},0).wait(1).to({x:1351.7,y:398.9},0).wait(1).to({x:1371.7,y:379.1},0).wait(1).to({x:1382.2,y:368.7},0).wait(123));

	// <Path>_15
	this.instance_7 = new lib.Path_15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(46.1,1007.9,1,1,0,0,0,371.4,371.4);
	this.instance_7.alpha = 0.551;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(1).to({x:74,y:980.2,alpha:0.55},0).wait(1).to({x:101.7,y:952.7},0).wait(1).to({x:129.3,y:925.3},0).wait(1).to({x:156.6,y:898.2},0).wait(1).to({x:183.7,y:871.3},0).wait(1).to({x:210.7,y:844.5},0).wait(1).to({x:237.4,y:818},0).wait(1).to({x:264,y:791.6},0).wait(1).to({x:290.4,y:765.5},0).wait(1).to({x:316.6,y:739.5},0).wait(1).to({x:342.6,y:713.7},0).wait(1).to({x:368.4,y:688.1},0).wait(1).to({x:393.9,y:662.7},0).wait(1).to({x:419.3,y:637.5},0).wait(1).to({x:444.6,y:612.4},0).wait(1).to({x:469.6,y:587.6},0).wait(1).to({x:494.4,y:562.9},0).wait(1).to({x:519.1,y:538.5},0).wait(1).to({x:543.5,y:514.2},0).wait(1).to({x:567.8,y:490.1},0).wait(1).to({x:591.9,y:466.3},0).wait(1).to({x:615.8,y:442.6},0).wait(1).to({x:639.5,y:419.1},0).wait(1).to({x:662.9,y:395.7},0).wait(1).to({x:686.3,y:372.6},0).wait(1).to({x:690.2,y:368.7},0).wait(121));

	// box1
	this.instance_8 = new lib.シンボル1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(827.6,598,1,1,0,0,0,377.4,376.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:840.9,y:584.7},0).wait(1).to({x:854.1,y:571.4},0).wait(1).to({x:867.4,y:558.2},0).wait(1).to({x:880.6,y:544.9},0).wait(1).to({x:893.9,y:531.7},0).wait(1).to({x:907.1,y:518.4},0).wait(1).to({x:920.4,y:505.2},0).wait(1).to({x:933.6,y:491.9},0).wait(1).to({x:946.9,y:478.7},0).wait(1).to({x:960.1,y:465.4},0).wait(1).to({x:973.4,y:452.2},0).wait(1).to({x:968.7,y:456.9},0).wait(1).to({x:963.9,y:461.6},0).wait(1).to({x:959.2,y:466.3},0).wait(1).to({x:954.5,y:471.1},0).wait(1).to({x:949.8,y:475.8},0).wait(1).to({x:945,y:480.5},0).wait(1).to({x:940.3,y:485.2},0).wait(1).to({x:935.6,y:490},0).wait(1).to({x:930.9,y:494.7},0).wait(1).to({x:926.1,y:499.4},0).wait(1).to({x:921.4,y:504.2},0).wait(1).to({x:929.4,y:496.2},0).wait(1).to({x:937.4,y:488.2},0).wait(1).to({x:945.4,y:480.2},0).wait(1).to({x:953.4,y:472.2},0).wait(1).to({x:961.4,y:464.2},0).wait(1).to({x:969.4,y:456.2},0).wait(1).to({x:977.4,y:448.2},0).wait(1).to({x:985.4,y:440.2},0).wait(1).to({x:993.4,y:432.2},0).wait(1).to({x:1001.4,y:424.2},0).wait(1).to({x:1008.1,y:417.3},0).wait(1).to({x:1014.8,y:410.4},0).wait(1).to({x:1021.5,y:403.5},0).wait(1).to({x:1028.3,y:396.7},0).wait(1).to({x:1035,y:389.8},0).wait(1).to({x:1041.7,y:382.9},0).wait(1).to({x:1048.4,y:376.1},0).wait(1).to({x:1055.2,y:369.2},0).wait(1).to({x:1061.9,y:362.3},0).wait(1).to({x:1068.6,y:355.4},0).wait(1).to({x:1075.4,y:348.5},0).wait(1).to({x:1074.3,y:349.4},0).wait(1).to({x:1073.2,y:350.4},0).wait(1).to({x:1072.1,y:351.3},0).wait(1).to({x:1071.1,y:352.2},0).wait(1).to({x:1070,y:353.2},0).wait(1).to({x:1068.9,y:354.1},0).wait(1).to({x:1067.8,y:355},0).wait(1).to({x:1066.8,y:356},0).wait(1).to({x:1065.7,y:356.9},0).wait(1).to({x:1064.6,y:357.8},0).wait(1).to({x:1063.5,y:358.8},0).wait(1).to({x:1062.5,y:359.7},0).wait(1).to({x:1061.4,y:360.6},0).wait(1).to({x:1060.3,y:361.6},0).wait(1).to({x:1059.3,y:362.5},0).wait(93));

	// box3
	this.instance_9 = new lib.シンボル1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(699.3,53.5,1,1,0,0,0,377.4,376.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:641.2,y:111.8},0).wait(1).to({x:583.5,y:169.7},0).wait(1).to({x:526.1,y:227.2},0).wait(1).to({x:469.2,y:284.3},0).wait(1).to({x:412.6,y:341},0).wait(1).to({x:383.3,y:370.4},0).wait(1).to({x:395.1,y:358.6},0).wait(1).to({x:406.9,y:346.8},0).wait(1).to({x:418.5,y:335.2},0).wait(1).to({x:430.1,y:323.6},0).wait(1).to({x:441.6,y:312.1},0).wait(1).to({x:451.2,y:302.5},0).wait(1).to({x:459.2,y:294.5},0).wait(1).to({x:467.2,y:286.5},0).wait(1).to({x:475.2,y:278.5},0).wait(1).to({x:483.1,y:270.6},0).wait(1).to({x:490.1,y:263.6},0).wait(1).to({x:478.9,y:274.8},0).wait(1).to({x:467.8,y:285.9},0).wait(1).to({x:456.7,y:297},0).wait(1).to({x:445.7,y:308},0).wait(1).to({x:434.8,y:318.9},0).wait(1).to({x:424,y:329.7},0).wait(1).to({x:420.7,y:333},0).wait(127));

	// box2
	this.instance_10 = new lib.シンボル1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1771.6,318.2,1,1,0,0,0,377.4,376.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({x:1780.9,y:308.8},0).wait(1).to({x:1790.1,y:299.5},0).wait(1).to({x:1799.2,y:290.2},0).wait(1).to({x:1808.3,y:281},0).wait(1).to({x:1817.4,y:271.8},0).wait(1).to({x:1804.6,y:284.6},0).wait(1).to({x:1759,y:330.5},0).wait(1).to({x:1713.6,y:376.1},0).wait(1).to({x:1668.6,y:421.4},0).wait(1).to({x:1623.9,y:466.3},0).wait(1).to({x:1579.5,y:511},0).wait(1).to({x:1557.7,y:533},0).wait(1).to({x:1553.3,y:537.6},0).wait(1).to({x:1548.9,y:542.2},0).wait(1).to({x:1544.6,y:546.8},0).wait(1).to({x:1540.3,y:551.3},0).wait(1).to({x:1536.3,y:555.4},0).wait(1).to({x:1540.2,y:551.4},0).wait(1).to({x:1544,y:547.3},0).wait(1).to({x:1547.8,y:543.4},0).wait(1).to({x:1551.6,y:539.4},0).wait(1).to({x:1555.4,y:535.5},0).wait(1).to({x:1559.1,y:531.6},0).wait(1).to({x:1560.2,y:530.5},0).wait(1).to({y:530.7},0).wait(1).to({y:530.9},0).wait(1).to({y:531.1},0).wait(1).to({y:531.3},0).wait(1).to({y:531.5},0).wait(1).to({y:531.7},0).wait(1).to({y:531.9},0).wait(1).to({x:1560.1,y:532.1},0).wait(1).to({y:532.2},0).wait(118));

	// back-ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E0154").ss(10).p("EAj8gkFMhH3BIL");
	this.shape.setTransform(152.2,176.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F8175D").ss(4).p("EA03gK3Mg/uA/uMgp/gp/MA/ug/ug");
	this.shape_1.setTransform(65.7,61.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8175D").s().p("Eg02AK4MA/ug/uMAp/Ap/Mg/uA/ug");
	this.shape_2.setTransform(65.7,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("ECWAA2sMkr/AAAMAAAhtXMEr/AAAg");
	this.shape_3.setTransform(961.2,348.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E0154").s().p("EiV/A2sMAAAhtXMEr/AAAMAAABtXg");
	this.shape_4.setTransform(961.2,348.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(684.6,26.1,2424.5,1666.5);
// library properties:
lib.properties = {
	id: '11005D427E4B90438F0D06FF045EEFB7',
	width: 1920,
	height: 698,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['11005D427E4B90438F0D06FF045EEFB7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;