<a href="#cases">
	<span />
	<span />
	<span />
	Scroll
</a>

<style>
	a {
		padding-top: 40px;
		position: absolute;
		bottom: 0px;
		left: 50%;
		z-index: 2;
		display: inline-block;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		color: #fff;
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
		border-left: 1px solid #fff;
		border-bottom: 1px solid #fff;
		-webkit-transform: rotate(-45deg);
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
