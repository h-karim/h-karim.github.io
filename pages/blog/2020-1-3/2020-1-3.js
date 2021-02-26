 var id = 20210103;
 var date = `3 Jan 2021`;
 var author = `Karim Hasbini`;
 var article_title = `First`;
 var summary = `The start of something new.`;

		$(`#${id}-author`).html(author);
		$(`#${id}-date`).html(date);
		$(`#${id}-title`).html(article_title);
		$(`#${id}-content`).load(`content.html`);
 		$(`#${id}-summary`).html(summary);
