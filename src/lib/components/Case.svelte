<script lang="ts">
	import type { Case } from '$lib/data';
	type Props = Case & { left: boolean };
	const { description, employment, left, name, technologies, link, year } = $props<Props>();
</script>

<li class="container {left ? 'left' : 'right'}">
	<div class="sepparator">
		<span class="dot" />
		<span class="connector" />
	</div>
	<div class="content">
		<div class="date">{year}</div>
		<div class="descr column">
			<div>
				<h3>{name}</h3>
				<i>at {employment}</i>
			</div>
			<p>{description}</p>
			{#if link}
				<a href={link} rel="noreferrer">See case</a>
			{/if}
		</div>
	</div>
</li>

<style>
	.container {
		--header-height: 3rem;
		display: flex;
		position: relative;
		min-height: 70px;
	}

	.container::before {
		content: '';
		flex: 0;
	}

	/* Card */
	.content {
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
		padding-inline-end: var(--space-md);
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
		font-size: 1.25rem;
		font-weight: 700;

		display: grid;
		place-content: center;
		position: relative;

		border-radius: calc(var(--header-height) / 2) 0 0 calc(var(--header-height) / 2);
	}

	i {
		display: block;
		text-align: end;
	}

	/* date flap */
	.date::before {
		content: '';
		width: var(--space-md);
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
		background: var(--base);
		position: relative;
		padding-inline: var(--space-md);
		margin-inline: var(--space-md);
	}
	.descr {
		padding-block: var(--space-md);
		font-weight: 300;
		border: 1px solid var(--border);
		box-shadow: 0px 5px 10px rgba(var(--primary-values), 0.05);
	}

	.descr::before {
		z-index: -1;
		bottom: 0.25rem;
	}

	@media (min-width: 40rem) {
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
			padding-inline-start: var(--space-md);
		}
	}
</style>
