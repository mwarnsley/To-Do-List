//set variable to get the user input in the box
var userValue = $("#inputs");

//click event to add to the list
$('.add-to-list').on('click', function(){
  if(userValue.val() != ""){
    $('ul').append("<li class='to-do-list'><input class='check-delete' type='checkbox' name='box' value='check' />" + userValue.val() + "</li>");
    return true;
  }else{
    alert("Enter Something to Add to List");
  };
});
//click event to delete from the list
$('.delete-list').on('click', function(){
  $('input:checkbox').each(function(){
    var checkbox = $(this);
    if(checkbox.is(':checked')){
      $('input:checked').parents('li').remove();
  };
  });
});