<script lang="ts">
	import { cases } from '../data';
	import Case from './Case.svelte';
</script>

<ul class="timeline">
	{#each cases as c, i}
		<Case {...c} left={i % 2 === 0} />
	{/each}
</ul>

<style>
	.timeline {
		all: unset;
		display: flex;
		flex-direction: column;
	}
</style>
