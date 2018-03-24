<template>
	<div class="site">

		<c-grid template="auto / 100%" gap="1em">

			<c-grid-item>

				<c-card>

					<c-grid template="auto / 40% 60%">

						<c-grid-item>
							<c-button size="xxxl" icon="mail_outline" title="Contact me" href="mailto:patrik.t.freij[at]gmail[dot]com" />
						</c-grid-item>

						<c-grid-item>
							<h1>Patrik Freij</h1>
							<h2>Web developer from Sweden</h2>
						</c-grid-item>

					</c-grid>

					<c-grid template="auto / auto auto auto">

						<c-grid-item>
							<c-button icon="account_circle" value="Resume" title="Resume" href="https://docs.google.com/document/d/1e5xJMdOblZ9l9INGVLrQTl5UCm_ACyF4pOV4GtbixBw/edit?usp=sharing" />
						</c-grid-item>

						<c-grid-item>
							<c-button icon="link" value="GitHub" title="GitHub" href="https://github.com/Loyen" />
						</c-grid-item>

						<c-grid-item>
							<c-button icon="link" value="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/in/patrik-freij-2407a067" />
						</c-grid-item>

					</c-grid>

				</c-card>

			</c-grid-item>

		</c-grid>

	</div> <!-- site -->
</template>

<script>
import button from './button/button.vue';
import card from './card/card.vue';
import grid from './grid/grid.vue';
import gridItem from './grid/item.vue';

export default {
	components: {
		"c-button": button,
		"c-card": card,
		"c-grid": grid,
		"c-grid-item": gridItem
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
