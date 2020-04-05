//recommended searches
var gifSearch = ["dog", "cat", "frog", "turtle"];

function drawButtons() {
	$("#button-area").empty();

	for (let i = 0; i < gifSearch.length; i++) {
		var button = $("<button>");
		button.addClass("button");
		button.attr("data-name", gifSearch[i]);
		button.text(gifSearch[i]);
		$("#buttons-area").append(button);
	}
}

drawButtons();

