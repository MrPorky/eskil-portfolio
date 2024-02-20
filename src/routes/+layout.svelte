<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { noRouting } from '$lib/utills/formEnhance';

	import sun from '@fortawesome/fontawesome-free/svgs/regular/sun.svg?raw';
	import moon from '@fortawesome/fontawesome-free/svgs/regular/moon.svg?raw';

	import type { LayoutData } from './$types';
	import type { MouseEventHandler } from 'svelte/elements';

	let { data } = $props<{ data: LayoutData }>();

	let isDark = data.theme === 'dark';

	$effect(() => {
		setPrefersDark();
		if (browser && window.document.body.parentElement) {
			if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches)
				window.document.body.parentElement.style.scrollBehavior = 'smooth';
		}
	});

	async function setPrefersDark() {
		if (browser && data.theme == undefined) {
			let prefersDark =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			await fetch('/api/theme', {
				body: JSON.stringify({ prefersDark }),
				method: 'POST'
			}).then(() => window.location.reload());
		}
	}

	const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const target = ev.currentTarget;

		if (!(target instanceof HTMLDivElement)) return;

		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		target.style.setProperty('--drop-x', `${x}px`);
		target.style.setProperty('--drop-y', `${y}px`);
	};
</script>

<div class="app" onmousemove={onHover} role="presentation">
	<header>
		<div>
			<a href="/">Home</a>
			<a href="/cases">Cases</a>
		</div>
		<nav>
			<form method="POST" action="/?/toggleTheme" use:enhance={noRouting}>
				<button class="icon" style="--size: 1.5rem;">
					{@html isDark ? moon : sun}
				</button>
			</form>
		</nav>
	</header>
	<main class="content-grid">
		<slot />
	</main>
	<footer></footer>
</div>

<style>
	.app {
		--bg-color: var(--background);
		--drop-color: rgba(var(--primary-values), 0.02);
		--drop-x: 0;
		--drop-y: 0;

		background-color: var(--bg-color);
		background-image: radial-gradient(
			circle at var(--drop-x) var(--drop-y),
			var(--drop-color),
			transparent 20%
		);

		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100%;
	}

	header {
		position: sticky;
		top: 0;
		border-bottom: 1px solid var(--border);
		background-color: var(--background);
		color: var(--background-text);
		padding: 0.25rem 1rem;
		display: flex;
		z-index: 1000;
	}

	header > div {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	header a {
		all: unset;
		cursor: pointer;
		color: var(--background-text);
		border-bottom: 1px solid currentColor;
	}

	header a:hover {
		color: var(--primary-hover);
	}

	main {
		padding: 2rem 0;
	}
</style>
