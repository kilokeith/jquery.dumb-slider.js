(function($){
	
	$.fn.dumbslider = function(options) {

		return (function($slides) {
			var $self = this;
			
			  this.$slides = $slides
			, this.current
			, timer = 0
			;
			
			this.settings = $.extend({
				  delay: 6000
				, fadeTime: 300
				, onSetup: function(){}
				, onBeforeChange: function(){}
				, onAfterChange: function(){}
			}, options);
			
			
			
			this.start = function(){
				if($self.timer) $self.stop();
				$self.timer = setInterval($self.next, $self.settings.delay);
			}
			this.stop = function(){
				if($self.timer) clearInterval($self.timer);
			}
			
			this.goto = function(indx){
				var prev_img = $self.$slides.eq($self.current)
				  , next_img = $self.$slides.eq(indx)
				  ;
				
				$self.settings.onBeforeChange(next_img, prev_img, $self.$slides, indx);
				
				$self.current.fadeOut($self.settings.fadeTime, function(){
					$self.current = next_img;
					$self.current.fadeIn($self.settings.fadeTime, function(){
						
						$self.settings.onAfterChange(next_img, prev_img, $self.$slides, indx);
					});
				});
			}
			this.next = function(){
				if( $self.current.next().length > 0 ){
					var stepto = $self.$slides.index( $self.current )+1;
				}else{
					var stepto = 0;
				}
				$self.goto(stepto);
			}
			this.prev = function(){
				if( $self.current.prev().length > 0 ){
					var stepto = $self.$slides.index( $self.current )-1;
				}else{
					var stepto = $self.$slides.length - 1;
				}
				$self.goto(stepto);
			}
			
			this.setup = function(){
				$self.current = (  $self.$slides.filter('.active').length > 0 )? $self.$slides.filter('.active').first(): $self.$slides.first();
				$self.settings.onSetup($self.current, $self, $self.$slides, 0);
				$self.start();
				return $self;
			}
			
			this.setup();
			return $self;
		})(this, options || {});
	}
	
	
})(window.jQuery);