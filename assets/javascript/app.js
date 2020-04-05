//recommended searches
var gifSearch = ["dog", "cat", "frog", "turtle"];

function drawButtons() {
	$("#buttons-area").empty();

	for (let i = 0; i < gifSearch.length; i++) {
		var button = $("<button>");
		button.addClass("button");
		button.attr("data-name", gifSearch[i]);
		button.text(gifSearch[i]);
		$("#buttons-area").append(button);
	}
}

drawButtons();

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    if (gif == "") {
        console.log("empty")
    }
    else {
    gifSearch.push(gif);
    drawButtons();
    }
});

$(document).on("click", ".button", gifSearchStart);

function gifSearchStart() {
    var gifForURL= $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+gifForURL+"&api_key=Tc1MZkuENFcgyA1xoYluJKJcKsIo1XdC&limit=10&rating=pg";


    $.ajax({
        url: queryURL,
        method: "GET"
    })


        .then(function(response){
            console.log(response);
            
            })
    

};