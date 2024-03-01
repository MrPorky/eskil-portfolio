<script lang="ts">
	import { cases } from '../data';
	import Case from './Case.svelte';
</script>

<ul class="timeline">
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
</ul>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
	}
</style>
