<script lang="ts">
	import { cases } from '../data';
	import Case from './Case.svelte';
</script>

<svelte:head>
	<title></title>
</svelte:head>

<div class="timeline">
	{#each cases as c, i}
		<Case
			description={c.description}
			link={c.link}
			name={c.name}
			technologies={c.technologies}
			employment={c.employment}
			left={i % 2 === 0}
			year={c.year}
		/>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
	}
</style>
