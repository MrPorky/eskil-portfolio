<script lang="ts">
	import github from '@fortawesome/fontawesome-free/svgs/brands/github.svg?raw';
	import linkedin from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg?raw';
	import Cases from '$lib/components/Cases.svelte';
	import ScrollButton from '$lib/components/ScrollButton.svelte';
	import Technologies from '$lib/components/Technologies.svelte';
</script>

<!-- <picture>
		<source srcset="/profilbild.png" />
	</picture> -->
<div class="page full-width">
	<ScrollButton>
		<img loading="lazy" src="/profilbild.jpg" alt="Eskil Ganslandt" />

		<div class="column">
			<h1>Eskil Ganslandt</h1>
			<p>
				I'm an enthusiastic problem solver that has dedicated almost my entire life to programming.
			</p>
			<p>I'm always up for a challenge where I can learn something new</p>
			<div class="links row">
				<a
					class="icon"
					style="--size: 1.5rem;"
					href="https://github.com/MrPorky"
					target="_blank"
					rel="noreferrer"
					aria-label="Visit Github"
				>
					{@html github}
				</a>
				<a
					class="icon"
					style="--size: 1.5rem;"
					href="https://www.linkedin.com/in/eskil-ganslandt-b5b3a6115/"
					target="_blank"
					rel="noreferrer"
					aria-label="Visit Linkedin"
				>
					{@html linkedin}
				</a>
			</div>
		</div>
	</ScrollButton>

	<section id="cases">
		<h2 class="animate-in-and-out">Cases</h2>
		<Cases />
	</section>
</div>

<style>
	.page {
		grid-template-rows: 100vh 1fr;
	}

	img {
		max-height: 40%;
		max-width: 250px;
		object-fit: contain;
	}

	h1 {
		font-weight: 400;
		font-size: 2.5rem;
	}

	.links a {
		color: var(--background-text);
	}
</style>
