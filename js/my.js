$(document).ready(function(){
    
 
 $('#btnLangChange').on('click', function () {
  var text=$(this).text();

     if ($('.ENGText').hasClass('collapsing')) return
     if ($('.JPNText').hasClass('collapsing')) return
     //$('.collapse').collapse()
     
     
     if(text === "日本語"){
    $(this).html('English');
         
         $('.ENGText').collapse("toggle")
         $('.JPNText').collapse("toggle")
  } else{
    $(this).text('日本語');
         $('.ENGText').collapse("toggle")
         $('.JPNText').collapse("toggle")
 }
     
});
});