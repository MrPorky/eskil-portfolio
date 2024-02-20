<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { noRouting } from '$lib/utills/formEnhance';

	import sun from '@fortawesome/fontawesome-free/svgs/solid/sun.svg?raw';
	import moon from '@fortawesome/fontawesome-free/svgs/solid/moon.svg?raw';
</script>

<form method="POST" action="/?/toggleTheme" use:enhance={noRouting}>
	{#if browser}
		<input
			type="hidden"
			name="theme"
			value={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'}
		/>
	{/if}
	<button>
		<div style="width: 32px;">
			{@html sun}
		</div>
	</button>
</form>

<slot />
