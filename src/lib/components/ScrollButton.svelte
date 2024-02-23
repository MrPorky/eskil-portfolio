<script lang="ts">
	const { children } = $props<{ children: () => any }>();
</script>

<section>
	{@render children()}
	<a href="#cases">
		<span />
		<span />
		<span />
		Scroll
	</a>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		gap: 4rem;
		padding-bottom: 80px;
		padding-top: 2rem;
	}

	@media screen and (max-width: 600px) {
		section {
			flex-direction: column;
			gap: 1rem;
		}
	}

	a {
		padding-top: 40px;
		position: absolute;
		bottom: 20px;
		left: 50%;
		z-index: 2;
		display: inline-block;
		transform: translate(-50%);
		color: var(--background-text);
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: opacity 0.3s;
	}

	span {
		position: absolute;
		top: 0;
		left: 50%;
		width: 24px;
		height: 24px;
		margin-left: -12px;
		border-left: 1px solid var(--background-text);
		border-bottom: 1px solid var(--background-text);
		transform: rotate(-45deg);
		box-sizing: border-box;
	}

	@keyframes op {
		0% {
			opacity: 0.1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}

	span:nth-of-type(1) {
		top: -8px;
		animation: infinite 1.5s op;
		animation-delay: -100ms;
	}

	span:nth-of-type(2) {
		animation: infinite 1.5s op;
	}

	span:nth-of-type(3) {
		top: 8px;
		animation: infinite 1.5s op;
		animation-delay: 100ms;
	}
</style>
