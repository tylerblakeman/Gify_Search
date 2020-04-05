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
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Tc1MZkuENFcgyA1xoYluJKJcKsIo1XdC&tag="+gifForURL;

    for (let i = 0; i < 10; i++) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })


        .then(function(response){

        
                var imageURL = response.data.image_original_url;
                var image = $("<img>")
                
                image.attr("src", imageURL);
                image.attr("alt", gifForURL);
                
                $("#images").prepend(image);
            })
        }
}