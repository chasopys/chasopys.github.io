var isMobile = false;
var isInitOwn = false;
var changeBlock = false;
var md

$(document).ready(function() {
    md = new MobileDetect(window.navigator.userAgent);
   $('.label-over').each(function() {
		 var elem = $(this);
		$('label[for="' + $(this).attr('id') + '"]').click(function() {
		    elem.focus();
		});
		if ($(this).val() != '') {
		    $('label[for="' + $(this).attr('id') + '"]').hide();
		 }
	}).focus(function() {
	    $('label[for="' + $(this)[0].id + '"]').hide();
	}).blur(function() {
	    if($(this).val() == '') {
		    $('label[for="' + $(this)[0].id + '"]').show();
		}
	}).change(function(){
	    if($(this).val() != '') {
		    $('label[for="' + $(this)[0].id + '"]').hide();
		}
	});

  if (  $(window).width() < 972 && md.os()){
    //$('head').append('<link rel="stylesheet" href="css/mobile.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_main.css">'); 
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_home.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_producer.css">'); 
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_product-list.css">'); 
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_register.css">'); 
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_cart-list.css">'); 
    $('head').append('<link rel="stylesheet" type="text/css" href="css/m_product.css">');
   // console.log( md.os() );    
    ChangeCont(".block-1",".block-2");     
    isMobile = true;
    ResMobile();
       
    
  }else{
    if (md.os())
    {
      //$('head').append('<link rel="stylesheet" href="css/mobile.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_main.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_home.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_producer.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_product-list.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_register.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_cart-list.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/m_product.css">');
         
      ChangeCont(".block-1",".block-2");     
      isMobile = true;
      ResMobile();
    }else{
     
      $('head').append('<link rel="stylesheet" type="text/css" href="css/bootstrap.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_main.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_home.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_producer.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_product-list.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_product.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_register.css">'); 
      $('head').append('<link rel="stylesheet" type="text/css" href="css/d_cart-list.css">'); 
      //$('head').append('<link rel="stylesheet" type="text/css" href="css/index.css">');  
     
      // console.log( md.os() );  
      isMobile = false;
      ResDesktop();
    }
  }
   
  $('.sort-open').click(function() { 
    if($('.sort-block').css('display') == 'none') {
      $('.bg-white-all').show();
    }else{
      $('.bg-white-all').hide();
    }
    $('.sort-block').toggle();
    $('.filter-block').hide();
  });
  $('.filter-open').click(function() {
    if($('.filter-block').css('display') == 'none') {
      $('.bg-white-all').show();
    }else{
      $('.bg-white-all').hide();
    }
    $('.filter-block').toggle();
    $('.sort-block').hide();
  }); 
  
   $(".popbox").popbox();

//curItem
//totItem




});

$(window).resize(function() {
    if (!$(window).width()) {
      return
    }
   if ( $(window).width() < 972 ){
     if (!isMobile) {
    //  UpProd()
      isMobile = true 
setTimeout(function () { window.location.reload(true); }, 0);
     // ResMobile();
      console.log('Mobile');
     }
  }else{
    if (isMobile) {
     // DwProd() 
      isMobile = false
  //    destroyOwlCarousel(); 
//      $('#fullpage').fullpage.destroy('all');
setTimeout(function () { window.location.reload(true); }, 0);
     
  //    ResDesktop();
      console.log('Desktop');
    }
  }

});

function ChangeCont(block1,block2) {
  if (!changeBlock) {
    $(block1+","+block2).hide();
    var b1 = $(block1).html();
    var b2 = $(block2).html();
    //$(".content-prod").remove();
    $(block2).html(b1);
    $(block1).html(b2);
    $(block1+","+block2).show();
  }
   // $('<id="content" class="content-prod">'+cont+'</div>').insertBefore( ".content-producer" ); 
    
}
function DwProd() {
    var cont = $(".content-producer").html();
    $(".content-producer").remove();
    $('<id="producer" class="content-producer">'+cont+'</div>').insertBefore( ".content-prod" ); 
}
function ResMobile() {
  
   owlCarousel(".slider-mob");
   owlCarousel(".company-list");
   owlCarousel(".cart-list-full");
   owlCarousel(".prod-item-img");  //prod thumbs
   
   
   $('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],				
				scrollOverflow: true, 
        lockAnchors:true, 
	 });/*
    $( ".slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $(this).parent().find( ".amount" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
    $( ".amount" ).each(function() {
      $(this).html( "$" + $(this).parent().find( ".slider-range" ).slider( "values", 0 ) + " - $" + $(this).parent().find( ".slider-range" ).slider( "values", 1 ) );
    });*/
    $("#home-slider").owlCarousel({
        nav : true,
        singleItem:true,
        items : 1,
 
   });
   /*
     $(".company-list").owlCarousel({
      stagePadding: 20,
      loop:true,
      margin:10,
      nav:false, 
      items : 1,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:3
          },
          1200:{
              items:5
          }
      }
   });*/
   
  
}
function owlCarousel(obj) {
  //init carousel
  var owl = $(obj);
if ( $(window).height()<481)
{
  var stagePadding = 60;
  
}else{
   var stagePadding = 20;
}
  owl.owlCarousel({
      stagePadding: stagePadding,
      loop:true,
      margin:10,
      nav:false,
      items:1,
      responsive:false,
      dots:false,  
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:3
          },
          1200:{
              items:5
          }
          
      }
  });
  owl.on('changed.owl.carousel', function(e) {
    $('.curItem').html(e.item['index']-1)
  
  });
  $('.totItem').html($('.slider-mob').find('.owl-item').not('.cloned').length);

  
}



function ResDesktop() {
 
    //$("#price-range").slider({ from: 1, to: 1000, step: 1,  round: 1, dimension: '&nbsp;$', skin: "round" });
  /*
    $( ".slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $(this).parent().find( ".amount" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( ".amount" ).each(function() {
		    $(this).html( "$" + $(this).parent().find( ".slider-range" ).slider( "values", 0 ) + " - $" + $(this).parent().find( ".slider-range" ).slider( "values", 1 ) );
      });
*/
   $("#home-slider").owlCarousel({
        nav : true,
        singleItem:true,
        items : 1,
        loop:true, 
   });
  
}