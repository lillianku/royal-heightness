$(function(){

  //https://jqueryui.com/sortable/
  //Make castles sortable
  // $( "#sortable" ).sortable();
  // $( "#sortable" ).disableSelection();

  //Define variables here
  let $anaheim = $('#1').attr('id');
  let $hongkong = $('#2').attr('id');
  let $paris = $('#3').attr('id');
  let $tokyo= $('#4').attr('id');
  let $orlando = $('#5').attr('id');
  let $shanghai = $('#6').attr('id');
  let $citiesActual = [$anaheim, $hongkong, $paris, $tokyo, $orlando, $shanghai];

  console.log($citiesActual);

  //Click button to compare values
  let $button = $('button');
  $button.click(function(){
    let $anaheim = $('#1').val();
    let $hongkong = $('#2').val();
    let $paris = $('#3').val();
    let $tokyo= $('#4').val();
    let $orlando = $('#5').val();
    let $shanghai = $('#6').val();
    let $citiesInput = [$anaheim, $hongkong, $paris, $tokyo, $orlando, $shanghai];
    console.log($citiesInput);

    //Iterates through each array and matches the value of each index to each other
    // for (let i=1; i<7; i++){
    //   if ($citiesInput[i]===$citiesActual[i]){
    //     alert('You win!');
    //   }else{
    //     alert('Sorry, try again');
    //   };
    // };

    //https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript/19746771#19746771
    //dryer code to check for correctness
    if($citiesInput.length==$citiesActual.length && $citiesInput.every((v,i)=> v === $citiesActual[i])){
      alert('You win!');
      $('#actualheight').removeAttr('style');
      $(document).scrollTop($(document).height());
      // $('img').toggleClass('castle');
    }else{
      alert('Sorry, try again');
    };


    //then scale images to the correct size
  });//End of submit button code





});//End of JS code
