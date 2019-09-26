$(document).ready(function() {


var sports = ["football", "basketball", "baseball", "golf", "soccer", "rugby", "tennis", "volleyball", "track and field", "bowling"]

function displayButtons() {
    $("#buttons").empty();
    for(i=0; i<sports.length; i++) {
    var buttons =  $("<button>" + sports[i] + "</button>")
    $(buttons).attr("class", "button");
    
    $(buttons).attr("data-name", sports[i]);
    

    
    $("#buttons").append(buttons);
    }
}
// button click
$(document).on("click", ".button", function() {
  var value = $(this).attr("data-name");
  console.log(value)
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fR85SEr9y3LQVsH8pxtvo8PoeNQXrSLA&q=" + value + "&limit=10&offset=0&rating=PG&lang=en"
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response){
      console.log(response);
      for( var i=0; i<response.data.length; i++) {
          console.log(response.data[i].images.fixed_height);
          var gif = response.data[i].images.fixed_height_still.url
            var image = $("<img>").attr("src", gif)
            image.attr("data-still", response.data[i].images.fixed_height_still.url)
            image.attr("data-animate", response.data[i].images.fixed_height.url)
            image.attr("data-state", "still")
            image.attr("class", "gif")
            $("#gifs").append(image)    
      }
    })    
    
})
$(document).on("click", ".gif", function() {

    var state = $(this).attr("data-state");
    console.log(state)
    
    if(state == "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})
    

$(document).on("click", "#add", function(event) {
    event.preventDefault();
    var text = $("#textBox").val();
    sports.push(text)
    displayButtons();
    $("#textBox").val().empty();
});


displayButtons();
 })





