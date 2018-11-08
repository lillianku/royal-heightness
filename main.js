$(function(){

  //Make list of items sortable
  //https://jqueryui.com/sortable/
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

  $('#start').click(function(){
    $('#open').attr('style', 'display:none;');
    $('#sortable').removeAttr('style');
    $('#submit').removeAttr('style');
    // https://stackoverflow.com/questions/14555415/how-to-randomly-sort-list-items
    $('li').sort(function(){
       return ( Math.round( Math.random() ) - 0.5 )
    }).appendTo($('ul'));
  });//End start dialog box


  //reload page
  $('#reload').click(function(){
    location.reload();
  });



  //Define variables for button function
  let $answer=['Disneyland, Anaheim', 'Disneyland, Hong Kong', 'Disneyland, Paris', 'Disneyland, Tokyo', 'Walt Disney World, Orlando', 'Shanghai Disney'];
  let $answer2=['Disneyland, Hong Kong', 'Disneyland, Anaheim', 'Disneyland, Paris', 'Disneyland, Tokyo', 'Walt Disney World, Orlando', 'Shanghai Disney'];
  let $input=[];

  //On click, have button check order of list
  $('#submit').click(function(){
    $('ul').find('li p').each(function() {
        $input.push($(this).text());
        });
        $('#sortable').attr('style', 'display: none;');
        $('#submit').attr('style', 'display: none;');
        //Checks the two arrays to see if the answers match
        //https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript/19746771#19746771
        if($input.length==$answer.length && ($input.every((v,i)=> v === $answer[i])||$input.every((v,i)=> v === $answer2[i]))){
          $('#win').removeAttr('style');
          $('#yay').click(function(){
            $('#win').attr('style', 'display: none;');
            $('#sortable').removeAttr('style');
            $('img').toggleClass('castles scaled');
            $('.height').removeAttr('style');
            $('#reload').removeAttr('style');
          });
        }else{
          $('#wrong').removeAttr('style');
          $('#sorry').click(function(){
            $('#wrong').attr('style', 'display: none;');
            $('#submit').removeAttr('style');
            $('#sortable').removeAttr('style');
            $input=[];
          });
        };
  });//End of submit function

});//End of JS page
