export function setParagraph(input) {
	input = filterHtmlContent(input.split('\n')).join('</p><p>');
	return '<p>' + input + '</p>';
}

function filterHtmlContent(arr) {
	const new_arr = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] != '') new_arr.push(arr.pop());
		else arr.pop();
	}

	return new_arr.reverse();
}
