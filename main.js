$(document).ready(function() {
    $('map').imageMapResize();


jQuery( '.stn_selector' ).on( 'click', function() { //https://haniwaman.com/map-area/#i-2
  //alert( jQuery( this ).attr( 'title' ) );
	$('video').trigger('pause');
  	$('.mov_pane').hide();
  	$('.detail').hide();
  	$("div#" + jQuery(this).attr('title')).show();
  return false;
});

jQuery( '.btn_detail' ).on( 'click', function() { 
  	$('.detail').show();
  return false;
});

});

