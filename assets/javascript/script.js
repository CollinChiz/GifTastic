$(document).ready(function() {


var sports = ["football", "basketball", "baseball", "golf", "soccer", "rugby", "tennis", "volleyball", "track and field", "bowling", "cricket", "handball", "kickball"]
function displayButtons() {
    for(i=0; i<sports.length; i++) {
    var buttons =  $("<button>" + sports[i] + "</button>")
    $(buttons).attr("id", "button");
  
    $("#buttons").append(buttons);
    }
}

displayButtons();

function addButton() {
    $(document).on("click", "#search", function(e) {
        e.preventDefault();
        var text = $("#textBox").val();
        console.log(text);
    });
}

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=fR85SEr9y3LQVsH8pxtvo8PoeNQXrSLA&limit=10&rating=PG"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response){
    
    
})
})