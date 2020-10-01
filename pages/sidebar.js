var filename = window.location.pathname.split('/').pop()
imagePath = (filename == 'index.html' ? 'assets/pictures/me_woods_cropped.jpg' : '../assets/pictures/me_woods_cropped.jpg');


document.write(`
						<div class="flex-container" id="side">
								<div class="header">
										<h1>Karim Hasbini</h1>
								</div>
								<div  >
										<img src=${imagePath}>
										<p>Hi, I'm Karim. I'm a software engineering student at <a href="https://www.concordia.ca/">ConcordiaU</a>. 
										<br/><a href="#">More about me</a>.
										</p>

										<div id="contact">
												<h3>Contact </h3>
												You can find me on <a href="https://www.github.com/h-karim">GitHub</a> and <a href="https://www.linkedin.com/in/karim-hasbini-231758125/">LinkedIn.</a>
										</div>
								</div>
		</div>
		`);
