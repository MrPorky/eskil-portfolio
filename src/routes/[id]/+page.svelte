<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
</script>

<section class="page content-grid full-width">
	<div class="header column">
		<h2>{data.company}</h2>
		<h4>{data.name}</h4>
		<div class="divider" />
		<p class="description">
			{data.description}
		</p>
		<div class="icon" style="--iconOpacity: {data.iconOpacity};">
			{@html data.icon}
		</div>
	</div>
	<div class="divider breakout" />
	<div class="body column">
		{#each data.content as c, i}
			<div class="row {i % 2 === 0 ? 'left' : 'right'}">
				<img src={c.img} alt="Vessel Optimization" />
				<div class="column">
					<h3>{c.title}</h3>
					{#each c.content as p}
						{#if Array.isArray(p)}
							<ul>
								{#each p as item}
									<li>{item}</li>
								{/each}
							</ul>
						{:else}
							<p>{p}</p>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.right {
		flex-direction: row-reverse;
	}

	img {
		max-width: 400px;
	}

	.row {
		padding-block-end: var(--space-xxl);
		align-items: center;
	}

	.page {
		padding-block: var(--space-xxl);
		grid-template-rows: min-content min-content 1fr;
	}

	.header {
		position: relative;
		gap: var(--space-sm);
		padding-block-start: var(--space-xxl);
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.description {
		padding-block: var(--space-lg);
		font-weight: 600;
	}

	.body {
		padding-block: var(--space-lg);
	}

	.icon {
		position: absolute;
		inset: 0;
		left: unset;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.icon::before {
		content: '';
		position: absolute;
		inset: -1px;
		background: linear-gradient(90deg, var(--base), rgba(var(--base-values), var(--iconOpacity)));
	}

	@media (min-width: 600px) {
		.row {
			gap: var(--space-xl);
			align-items: start;
		}
	}
</style>
