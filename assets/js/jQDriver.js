$(document).ready(function() {
		$('#side').load('/assets/sidebar.html');
		$('#navbar').load('/assets/navbar.html');
		$('#container').load('content.html');
		$(document).on('click','a.directionless', function(e){
				e.preventDefault();
				let href = $(this).attr('href');
				$('#container').load(href + ' #content');
		});

});
