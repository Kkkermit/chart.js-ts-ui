const titleText = "TypeScript Project | @online";
let index = 0;
let direction = 1;

function updateTitle() {
	document.title = titleText.substring(0, index);
	index += direction;
	if (index > titleText.length) {
		direction = -1;
	} else if (index < 1) {
		direction = 1;
	}
	setTimeout(updateTitle, 200);
}

updateTitle();
