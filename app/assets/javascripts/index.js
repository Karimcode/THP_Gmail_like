$(document).ready(function() {

  /************************************************************************
  MENU USER
  ************************************************************************/
  $('.dropdown-content').addClass("d-none");
  $('.dropbtn').on('click', function(event){
    $('.dropdown-content').toggleClass("d-none");
  });

  /************************************************************************
  MODAL LOGIN LOGOUT
  ************************************************************************/
  // display the modal
  var modal = document.getElementById("loginModal");
  var loginbtn = document.getElementById("login");
  var signupbtn = document.getElementById("signup");
  var span = document.getElementById("close-modal");

  // When the user clicks the button, open the modal 
  loginbtn.onclick = function() {
    modal.style.display = "block";
    $("#login-content").removeClass("d-none");
    $("#signup-content").addClass("d-none");
  }
  signupbtn.onclick = function() {
    modal.style.display = "block";
    $("#signup-content").removeClass("d-none");
    $("#login-content").addClass("d-none");
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  /************************************************************************
  MODAL TABS
  ************************************************************************/ 
  $('.login-tab').on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $("#login-content").removeClass("d-none");
    $("#signup-content").addClass("d-none");
  });
  $('.signup-tab').on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $("#signup-content").removeClass("d-none");
    $("#login-content").addClass("d-none");
  });
  /************************************************************************
  Email index
  ************************************************************************/

  // display d'un email selectioné
  //création des events
 


  // var mailList = $('.mail-list').find('li');
  // var mailContent = $('.mail-body').find('p');
  // for(let i=0; i < mailList.length; i++){
  //     $('.mail-list').find('li').get(i).onclick = function(event){
  //       $('#mail-display-object').text($('#'+event.target.id).text());
  //       $('#mail-display-body').text($('#body-'+ event.target.id).text());
  //     };
  // }






});



