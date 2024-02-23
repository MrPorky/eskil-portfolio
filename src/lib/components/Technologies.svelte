<script lang="ts">
	import { technologies } from '../data';
	const { direction } = $props<{
		direction?: 'normal' | 'reverse';
	}>();
</script>

<slide-display>
	{#each [...technologies, ...technologies] as technology}
		<slide-display-item>
			<div class="tag"><span>#</span>{technology}</div>
		</slide-display-item>
	{/each}
</slide-display>

<style>
	.tag {
		background-color: var(--secondary);
		color: var(--secondary-text);
		padding: 1rem;
		border-radius: 0.5rem;
		white-space: nowrap;
	}
</style>
