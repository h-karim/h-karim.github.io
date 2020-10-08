var filename = window.location.pathname.split('/').pop()
imagePath = (filename == 'index.html' ? 'assets/pictures/' : '../assets/pictures/');


document.write(`
						<div class="flex-container" id="side">
								<div class="header">
										<h1>Karim Hasbini</h1>
								</div>
								<div  >
										<img id='profile-pic' src=${imagePath}me_woods_cropped.jpg>
										<p>Hi, I'm Karim. I'm a software engineering student at <a href="https://www.concordia.ca/">ConcordiaU</a>. 
										<br/><a href="#">More about me</a>.
										</p>

										<div id="contact">
												<h3>Contact </h3>
												<a href="https://www.github.com/h-karim">
														<img id='github' src=${imagePath}GitHub-Mark-64px.png alt="GitHub">
												</a>
												<a href="https://www.linkedin.com/in/karim-hasbini-231758125/">
														<img id='linkedin' src=${imagePath}LI-In-Bug.png>
												</a>
										</div>
								</div>
		</div>
		`);
