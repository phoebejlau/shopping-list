$(document).ready(function() {
  // LOGIC FOR ADDING AN ITEM TO SHOPPING LIST
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault(); 
    // stops default browser behavior for form submission, 
    // since we don't actually want to subit to server

// ADDING NEW ITEMS TO THE LIST
$(".shopping-list").append(
  '<li>' +
    '<span class="shopping-item">' + 
    $("input").val() + '</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>'
  );
// REMOVE THE SUBMITTED ITEM FROM THE FORM LIST
$(this)[0].reset();
});

// LOGIC FOR DELETING ITEMS FROM LIST
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
  $(this).closest("li").remove();
  // "this" refers to the .shopping-item-delete element that was clicked.
  // we travel up the document tree to get the nearest parent element that's an li
});

// LOGIC FOR CHECKING/UNCHECKING ITEMS
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");  
});

})

//    $("button").on("click", function(){
//     console.log(this);
//     var userItem = $("#shopping-list-entry").val();
//     console.log(userItem);
//     $("ul.shopping-list").append("<li>" + userItem + "</li>");
//    });
// });