<template>
	<div class="site">

		<div class="container">

			<card>

				<div class="row">

					<div class="col col--4" title="Contact Me">
						<a class="user-mail js-ripple" href="mailto:patrik.t.freij[at]gmail[dot]com">
							<span class="icon icon--mail"></span>
						</a>
					</div>

					<div class="col col--8 col--margin">

						<div class="row">
							<div class="col col--12">
								<div class="user-name">Patrik Freij</div>
							</div>
						</div> <!-- row -->

						<div class="row">

							<div class="col col--6">
								<div class="user-title">Web developer</div>
							</div>

							<div class="col col--6">
								<div class="user-title">Sweden</div>
							</div>

						</div> <!-- row -->

					</div> <!-- col -->

				</div> <!-- row -->


				<div class="row">

					<div class="col col--4">
						<a class="user-link js-ripple" href="https://docs.google.com/document/d/1e5xJMdOblZ9l9INGVLrQTl5UCm_ACyF4pOV4GtbixBw/edit?usp=sharing" title="Skills & Experiences">
							Resume
						</a>
					</div>


					<div class="col col--4">
						<a class="user-link js-ripple" href="https://github.com/Loyen" title="Public Projects">
							GitHub
						</a>
					</div>

					<div class="col col--4">
						<a class="user-link js-ripple" href="https://www.linkedin.com/in/patrik-freij-2407a067" title="linkedIn profile">
							LinkedIn
						</a>
					</div>
				</div> <!-- row -->

			</card>

		</div> <!-- container -->

	</div> <!-- site -->
</template>

<script>
import card from './card/card.vue';
export default {
	components: {
		"card": card
	}
}
</script>

<style>
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.document {
	background-color: #0D47A1;
	color: #FFFFFF;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	line-height: 1em;
	margin: 0;
	padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: bold;
	line-height: 1.5em;
	margin: 0;
	vertical-align: baseline;
}

h1 { font-size: 2em; }
h2 { font-size: 1.6em; }
h3 { font-size: 1.4em; }
h4 { font-size: 1.25em; }
h5 { font-size: 1.1em; }
h6 { font-size: 0.9em; }

hr {
	border-style: solid;
	border-width: 0.1em;
	height: 0;
}

img { border: 0; }
</style>
