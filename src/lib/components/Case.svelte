<script lang="ts">
	import type { Case } from '$lib/data';
	type Props = Case & { left: boolean };
	const { description, employment, left, name, technologies, icon, iconOpacity, link, year } =
		$props<Props>();
</script>

<li class="container {left ? 'left' : 'right'}">
	<div class="sepparator">
		<span class="dot" />
		<span class="connector" />
	</div>
	<div class="content" class:link={link !== undefined}>
		{#snippet snippet()}
			<div class="date">{year}</div>
			<div class="descr column">
				<div class="column">
					<h3>{name}</h3>
					<i>at {employment}</i>
				</div>
				<p>{description}</p>

				{#if icon}
					<div class="icon" style="--iconOpacity: {iconOpacity};">
						{@html icon}
					</div>
				{/if}
			</div>
		{/snippet}

		{#if link}
			<a href={link}>
				{@render snippet()}
			</a>
		{:else}
			{@render snippet()}
		{/if}
	</div>
</li>

<style>
	.icon {
		position: absolute;
		inset: var(--space-sm);
		right: unset;
		max-width: calc(100% - var(--space-sm) * 2);
		max-height: calc(100% - var(--space-sm) * 2);
		z-index: -1;
	}

	.icon::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			270deg,
			var(--base),
			rgba(var(--base-values), var(--iconOpacity)) 100%
		);
	}

	.container {
		--header-height: 2rem;
		--box-shadow: 0px 5px 10px rgba(var(--primary-values), 0.05);
		--box-shadow-hover: 0px 5px 15px rgba(var(--primary-values), 0.15);

		all: unset;
		display: flex;
		position: relative;
		min-height: 70px;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.container::before {
		content: '';
		flex: 0;
	}

	/* Card */
	.content {
		position: relative;
		margin: 0;
		flex: 1;
		text-align: left;
		padding-block-end: var(--space-md);
	}

	/* Timeline */
	.sepparator {
		display: flex;
		flex-direction: column;
		flex: 0;
		align-items: center;
		padding-inline-end: calc(var(--header-height) / 2);
		pointer-events: none;
	}

	.connector {
		width: 2px;
		flex-grow: 1;
		background-color: var(--border);
	}

	.dot {
		height: var(--header-height);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dot::before {
		content: '';
		border-radius: 50%;
		aspect-ratio: 1/1;
		width: calc(var(--header-height) * 0.67);
		border: calc(var(--header-height) * 0.12) solid var(--border);
		display: block;
		box-sizing: border-box;
	}

	.container:last-of-type .sepparator .connector {
		opacity: 0;
	}

	/* date */
	.date {
		height: var(--header-height);

		text-align: center;
		background-color: var(--primary);

		color: var(--base);

		display: grid;
		place-content: center;
		position: relative;

		border-radius: calc(var(--header-height) / 2) 0 0 calc(var(--header-height) / 2);
		box-shadow: var(--box-shadow);
		transition: box-shadow 0.3s ease-in-out;
	}

	.link:hover .date {
		box-shadow: var(--box-shadow-hover);
	}

	i {
		display: block;
		text-align: end;
	}

	/* date flap */
	.date::before {
		content: '';
		width: calc(var(--header-height) / 2);
		aspect-ratio: 1;
		background: var(--primary);
		background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
		position: absolute;
		top: 100%;

		clip-path: polygon(0 0, 100% 0, 0 100%);
		right: 0;
	}

	/* descr */
	.descr {
		color: var(--text);
		position: relative;
		padding: calc(var(--header-height) / 2);
		margin-inline: calc(var(--header-height) / 2);
		border: 1px solid var(--border);
		background-color: rgba(var(--primary-values), 0.05);
		box-shadow: var(--box-shadow);
		transition-property: box-shadow, background-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	.descr > .column {
		gap: 0.2rem;
	}

	.link:hover .descr {
		background-color: rgba(var(--primary-values), 0.1);
		box-shadow: var(--box-shadow-hover);
	}

	@media (min-width: 770px) {
		li:nth-child(odd) .date::before {
			clip-path: polygon(0 0, 100% 0, 100% 100%);
			left: 0;
		}

		li:nth-child(odd) .date {
			border-radius: 0 calc(var(--header-height) / 2) calc(var(--header-height) / 2) 0;
		}

		li:nth-child(odd) {
			flex-direction: row-reverse;
		}

		.container::before {
			flex: 1;
		}

		.sepparator {
			padding-inline-start: calc(var(--header-height) / 2);
		}
	}

	@media (min-width: 600px) {
		.container {
			--header-height: 3rem;
		}
	}
</style>
