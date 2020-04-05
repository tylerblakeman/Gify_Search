//recommended searches
var gifSearch = ["dog", "cat", "frog", "turtle"];
var queryResponse;
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
    $("#gif-input").val("")
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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifForURL+"&api_key=Tc1MZkuENFcgyA1xoYluJKJcKsIo1XdC&limit=10&rating=pg";


    $.ajax({
        url: queryURL,
        method: "GET"
    })


        .then(function(response){
            console.log(response.data);
            var imagePush = "";
            for (let i = 0; i < response.data.length; i++) {
                var imageURL = JSON.stringify(response.data[i].images.fixed_width.url);
                console.log(imageURL);
                var image = (`<img src=`+imageURL+`>`)	
                // image.attr("alt", gifForURL);	
                // console.log("image variable"+image)
                imagePush = imagePush+image;
                }

                $("#images").prepend(imagePush);   


            });   
};