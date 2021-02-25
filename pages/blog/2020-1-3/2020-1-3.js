let id = 20210103;
let date = `3 Jan 2021`;
let author = `Karim Hasbini`;
let article_title = `First`;
let summary = `The start of something new.`;

$(document).ready(function() {
		$(`#${id}-author`).html(author);
		$(`#${id}-date`).html(date);
		$(`#${id}-title`).html(article_title);
		$(`#${id}-content`).load(`content.html`);
 		$(`#${id}-summary`).html(summary);
})
