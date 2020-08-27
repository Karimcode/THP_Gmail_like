$(document).ready(function() {



  /************************************************************************
  TABS
  ************************************************************************/

  //on cache toutes les cards
  $(".category-content").addClass("d-none");

  //event listener
  $(".category-name").on('click', function(event){
    // on cache toutes les tab puis on ajoute la bonne
    $(".category-content").addClass("d-none");
    $('#content-' + event.target.id).removeClass("d-none");
  });

});