(function(){

  $.fn.popbox = function(options){
    var settings = $.extend({
      selector      : this.selector,
      open          : '.open',
      box           : '.box',
      arrow         : '.arrow',
      arrow_border  : '.arrow-border',
      close         : '.close'
    }, options);

    var methods = {
      open: function(event){
        event.preventDefault();

        var pop = $(this);
        var box = $(this).parent().find(settings['box']);
  
        var out = $('.open').outerWidth() - $('.open').outerWidth(true);
        var arrowRight = $('.open').outerWidth()/2 + $('.navbar-panel').outerWidth(true) -10 - out;
        var boxRight

        box.find(settings['arrow']).css({'right': arrowRight});
        box.find(settings['arrow_border']).css({'right': arrowRight});

        if(box.css('display') == 'block'){
          methods.close();
        } else {
          if (  $(window).width() < 972 ){
            boxRight = 0; 
             box.css({'display': 'block'});
          }else{
            boxRight =  $('.navbar-panel').width();
            box.css({'display': 'block', 'top': 10, 'right': -boxRight});
          }
         //((pop.parent().width()/2) -box.width()/2 )});
          
        }
      },

      close: function(){
        $(settings['box']).fadeOut("fast");
      }
    };

    $(document).bind('keyup', function(event){
      if(event.keyCode == 27){
        methods.close();
      }
    });

    $(document).bind('click', function(event){
      if(!$(event.target).closest(settings['selector']).length){
        methods.close();
      }
    });

    return this.each(function(){
      //$(this).css({'width': $(settings['box']).width()}); // Width needs to be set otherwise popbox will not move when window resized.
      $(settings['open'], this).bind('click', methods.open);
      $(settings['open'], this).parent().find(settings['close']).bind('click', methods.close);
    });
  }

}).call(this);