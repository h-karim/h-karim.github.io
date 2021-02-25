let id = ;
let date = ``;
let author = `Karim Hasbini`;
let article-title = ``;
let summary = ``;
$(document).ready(function() {
		$(`#${id}-author`).html(author);
		$(`#${id}-date`).html(date);
		$(`#${id}-article-title`).html(article-title);
		$(`#${id}content`).load(`content.html`);
		$(`#${id}-summary`).html(summary);
})
