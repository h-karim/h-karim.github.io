$(document).ready(function() {
		$('#side').load('/assets/sidebar.html');
		$('#navbar').load('/assets/navbar.html');
		$('#container').load('index-content.html');
		$(document).on('click','a.directionless', function(e){
				e.preventDefault();
// 				console.log('clicked')
				let href = $(this).attr('href');
 				console.log(href);
				$('#container').load(href);
		});

});
