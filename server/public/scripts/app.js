$(document).ready(function(){
  var currentPerson = 0;
  var muCohort = [];
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
                muCohort = data.mu;
                console.log(data);
                getMu();
                //getBox();

              }

});
//Advances index
$('.next').on('click', function (){
  $(this).parent().find('.person').empty();
  currentPerson++;
  if (currentPerson > muCohort.length - 1) {
    currentPerson = 0;
    $('.box').removeClass('blue');
$('.box').eq(currentPerson).addClass('blue');
  }

  getMu();




});
//Retreats index
$('.previous').on('click', function (){
  $(this).parent().find('.person').empty();
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = muCohort.length - 1;
  }
  getMu();
  //getBox();
});

//Append info function
    function getMu() {
      var $el = $('.person')
      var mcp = muCohort[currentPerson];

    $el.append('<h2>' + mcp.name + '</h2>');
    $el.append('<p>' + mcp.git_username + '</p>');
    $el.append('<p>' + mcp.shoutout + '</p>');

}

function getBox() {
  var number = currentPerson;
  $('.' + muCohort[number]).addClass('blue');
 }

});
