$(document).ready(function(){	
	/*llamar al ul y li*/
	$('.fotos').hiden();
	/*llama solo q se vea la primera*/
	$('.fotos:first').show();
	$('.fa-circle:first').css({'color': '#A50315'});
	$('.fa-circle').click(paginacion);

	function paginacion(){
	var circuloID = $(this).index() + 1;
    console.log(circuloID);
    $('.fotos').hide();
    $('#img' + circuloID).fadeIn(500);
    $('.fa-circle').css({'color': '#FFF'});
    $(this).css({'color': '#A50315'});
  }

});