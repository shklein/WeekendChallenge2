$(document).ready(function(){
  var currentPerson = 0;
  var muCohort = [];
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
                muCohort = data.mu;
                getMu();
              }

});
//Advances index
//var $bl = $('.box');
//$bl.data('index', muCohort[i]);
$('.next').on('click', function (){
  $(this).parent().find('.person').empty();
  currentPerson++;
  if (currentPerson > muCohort.length - 1) {
    currentPerson = 0;
  }
  getMu();
  //if ($bl.data('index') === currentPerson) {
    //$bl.css('background-color', 'navy');
  //}

});
//Retreats index
$('.previous').on('click', function (){
  $(this).parent().find('.person').empty();
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = muCohort.length - 1;
  }
  getMu();
});

//Append info function
    function getMu() {
      var $el = $('.person')
      var mcp = muCohort[currentPerson];
    $el.append('<h2>' + mcp.name + '</h2>');
    $el.append('<p>' + mcp.git_username + '</p>');
    $el.append('<p>' + mcp.shoutout + '</p>');

}



});
