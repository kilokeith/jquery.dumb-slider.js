Dumb Slider
=============================

Open the code and check it out. Easy stuffs, really.

Usage
--------

```html
	<div id="slider">
		<img src="images/img1.png" alt="" data-something="" />
		<img src="images/img2.png" alt="" data-something="" />
		<img src="images/img3.png" alt="" data-something="" />
	</div>
```

```javascript
	//you get a nice object back that you can monitor and call functions on
	$slideshow = $('#slider img').dumbslider();
	
	//change settings, add callbacks
	$slideshow = $('#slider img').dumbslider({
		  delay: 6000
		, fadeTime: 300
		, onSetup: function(curr_img, dumbslider, $slides, index){}
		, onAfterChange: function(curr_img, prev_img, $slides, index){}
		, onBeforeChange: function(curr_img, prev_img, $slides, index){
			console.log( curr_img.data('something') );
		}
	});
```

Or add some external nav to it

```javascript
	//add click events to little slideshow dots
	$'.slideshow_nav').delegate('span', 'click', function(){
		var indx = $slideshow_navs.index(this);
		$slideshow.stop();
		$slideshow.goto(indx);
		$slideshow.start();
	});
```

```html
	<div class="slideshow_nav">
		<span></span>
		<span></span>
		<span></span>
	</div>
```

```less
	.slideshow_nav {
		margin: 20px 0 20px 0;
		.clearfix();
		
		span {
			display: block;
			float: left;
			width: @slideshow-nav-radius;
			height: @slideshow-nav-radius;
			cursor: pointer;
			margin-right: 15px;
			background-color: white;
			.border-radius(@slideshow-nav-radius / 2);
			
			&.active { background-color: black; }
		}
	}
```