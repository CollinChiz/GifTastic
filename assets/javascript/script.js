var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=fR85SEr9y3LQVsH8pxtvo8PoeNQXrSLA&limit=10&rating=PG"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response){
    console.log(response);
    $("body").append(`<p>${response}</p>`);

    
})