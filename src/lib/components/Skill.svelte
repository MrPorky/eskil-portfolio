<script lang="ts">
	import type { Technology } from '$lib/data';
	const { skill, value } = $props<{ skill: Technology; value: number }>();
</script>

<div class="skill">
	<h4 class="skill-title">// {skill}</h4>
	<div style="--skill: {value}%" class="skill-grade"></div>
</div>

<style>
	span {
		position: relative;
	}

	.skill .skill-title {
		text-transform: uppercase;
		font-size: 0.8em;
		letter-spacing: 2px;
		margin: 0;
	}

	.skill .skill-grade {
		--skill: 0%;
		height: 8px;
		position: relative;
		box-sizing: border-box;
		border-radius: 3px;
		border: 1px solid rgba(var(--primary-values), 0.5);
		overflow: hidden;
	}

	.skill .skill-grade:before {
		content: '';
		position: absolute;
		inset: 0;
		right: calc(100% - var(--skill));
		background: var(--text-2);
		animation-name: example;
		animation-duration: 3s;
		animation-timing-function: ease-in;
	}

	.skill .skill-grade::after {
		content: '';
		position: absolute;
		inset: 0;
		right: calc(100% - (var(--skill) / 2));
		background: rgba(var(--primary-values), 0.5);
		animation-name: example;
		animation-duration: 3s;
		animation-timing-function: ease-in;
	}

	@keyframes example {
		0% {
			right: 100%;
		}
	}
</style>
