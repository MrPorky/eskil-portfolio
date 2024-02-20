<script lang="ts">
	import type { Case } from '$lib/data';
	type Props = Case & { left: boolean };
	const { description, employment, left, name, technologies, link, year } = $props<Props>();
</script>

<div class="container {left ? 'left' : 'right'}">
	<div class="sepparator">
		<span class="connector" />
		<span class="dot">
			{year}
		</span>
		<span class="connector" />
	</div>
	<div class="content animate-in-and-out column">
		<div>
			<h2>{name}</h2>
			<i>at {employment}</i>
		</div>
		<p>{description}</p>
		{#if link}
			<a href={link} rel="noreferrer">See case</a>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		position: relative;
		min-height: 70px;
	}

	.container::before {
		content: '';
		flex: 1;
		padding: 6px 0px;
	}

	.container.left {
		flex-direction: row-reverse;
	}

	.sepparator {
		display: flex;
		flex-direction: column;
		flex: 0;
		align-items: center;
		padding: 0px 16px;
		user-select: none;
		pointer-events: none;
	}

	.connector {
		width: 2px;
		flex-grow: 1;
		background-color: var(--secondary);
	}

	.dot {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin: 1rem 0px;
		color: var(--primary-text);
		background-color: var(--primary);
		aspect-ratio: 1/1;
		width: 3rem;
		font-weight: 400;
	}

	.content {
		margin: 0;
		flex: 1;
		text-align: left;
		padding: 12px 0px;
	}

	.timeline .container:first-of-type .sepparator .connector:first-of-type,
	.timeline .container:last-of-type .sepparator .connector:last-of-type {
		opacity: 0;
	}

	i {
		opacity: 0.75;
	}

	@media screen and (max-width: 600px) {
		.container.left {
			flex-direction: row;
		}

		.container::before {
			flex: 0;
		}
	}
</style>
