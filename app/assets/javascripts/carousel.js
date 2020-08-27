$(document).ready(function() {

  /************************************************************************
  CAROUSEL
  ************************************************************************/

  //recupérer les images, la div carousel
  var imgTab = $(".carousel-img");
  var carousel = $(".carousel-controller").first();
  var position = 0;
  var prevbtn = $('#prev');
  var nextbtn = $('#next');
  //setup
  carousel.find("img").replaceWith(imgTab.get(position));
  function carouselPrevious(){
    position --;
    if (position == -1){
      position = imgTab.length - 1;
    }
    highlight(position);
    carousel.find("img").replaceWith(imgTab.get(position));
  }
  function carouselNext(){
    position ++;
    if (position == imgTab.length){
      position = 0;
    }
    highlight(position);
    carousel.find("img").replaceWith(imgTab.get(position));
  }

  //boutons lateraux
  prevbtn.on('click', function(){ carouselPrevious();});
  nextbtn.on('click', function(){ carouselNext();});

  //changement toutes les 5 sec
  window.setInterval(carouselNext, 5000);

  //display des icones au dessous
  var indicator = $(".carousel-indicators");
  function highlight(index){
    //remove all
    indicator.find("i").removeClass("text-danger");
    indicator.find(`#`+index).addClass("text-danger");
  }
  function select(index){
    position = index;
    carousel.find("img").replaceWith(imgTab.get(position));
  }

    //on admet qu'il y a au moins un element


  //creation des indicateurs
  for(let i = 1 ; i < imgTab.length;i++){
    indicator.find(".indicator").first().clone().appendTo( indicator );
  }
  //assignation des ids et creation des evenements
  for(let i = 0 ; i < imgTab.length;i++){
    let test = indicator.find(".indicator").get(i);
    $(test).attr("id", i);
    indicator.find(`#`+i).on('click', function(event){ highlight(event.target.id);  select(event.target.id); });
  }
  highlight(0); 
  select(0);

});





















