<script lang="ts">
	import github from '@fortawesome/fontawesome-free/svgs/brands/github.svg?raw';
	import linkedin from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg?raw';
	import Cases from '$lib/components/Cases.svelte';
	import ScrollButton from '$lib/components/ScrollButton.svelte';
</script>

<svelte:head>
	<title></title>
</svelte:head>

<section class="me">
	<img draggable="false" src="/profilbild.jpg" alt="Eskil Ganslandt" />

	<div class="column">
		<h1>Eskil Ganslandt</h1>
		<p>
			I'm an enthusiastic problem solver that has dedicated almost my entire life to programming.
			I'm always up for a challenge where I can learn something new
		</p>
		<div class="links row">
			<a
				class="icon"
				style="--size: 1.5rem;"
				href="https://github.com/MrPorky"
				target="_blank"
				rel="noreferrer"
			>
				{@html github}
			</a>
			<a
				class="icon"
				style="--size: 1.5rem;"
				href="https://www.linkedin.com/in/eskil-ganslandt-b5b3a6115/"
				target="_blank"
				rel="noreferrer"
			>
				{@html linkedin}
			</a>
		</div>
	</div>
	<ScrollButton />
</section>

<section id="cases">
	<h2 class="animate-in-and-out">Cases</h2>
	<Cases />
</section>

<style>
	.me {
		display: flex;
		align-items: center;
		gap: 4rem;
	}

	.me img {
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

	@media screen and (max-width: 600px) {
		.me {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
