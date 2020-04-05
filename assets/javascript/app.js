//recommended searches
var gifSearch = [
	"wakeboarding",
	"snowboarding",
	"mountainbiking",
	"wake surfing",
];
var queryResponse;
var divCount = 0;
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

$("#add-gif").on("click", function (event) {
	event.preventDefault();
	var gif = $("#gif-input").val().trim();
	$("#gif-input").val("");
	if (gif == "") {
		console.log("empty");
	} else {
		gifSearch.push(gif);
		drawButtons();
	}
});

$(document).on("click", ".button", gifSearchStart);

function gifSearchStart() {
	var gifForURL = $(this).attr("data-name");

	var queryURL =
		"https://api.giphy.com/v1/gifs/random?q=" +
		gifForURL +
		"&api_key=Tc1MZkuENFcgyA1xoYluJKJcKsIo1XdC&limit=10&rating=pg";

	$.ajax({
		url: queryURL,
		method: "GET",
	})
	.then(function (response) {
		console.log(response.data);
		var imagePush = "";
		var image = $("<image>");
		for (let i = 0; i < response.data.length; i++) {
			var imageURL = response.data[i].images.fixed_width.url;
			console.log(imageURL);
			console.log(imageURL);
			var image = $("<img>");
			image.attr("src", response.data[i].images.fixed_width.url);
			var pTag = $("<p>").text(
				"Rating: " + JSON.stringify(response.data[i].rating)
			);
			var div = $(
				`<div class="imagecontainer` +
					divCount +
					` inserted-images col-lg-3 col-md-4 col-6">`
			);
			$("#images").prepend(div);
			$(`.imagecontainer` + divCount).prepend(pTag);
			$(`.imagecontainer` + divCount).prepend(image);
			divCount++;
		}
	});
}
