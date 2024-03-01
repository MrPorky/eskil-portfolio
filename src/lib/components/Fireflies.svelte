<script lang="ts">
	import { animate, bezier, type Vector2 } from '$lib/animate';
	import * as icons from '$lib/icons';

	const allIcons = Object.values(icons.default).sort((a, b) => Math.random() - 0.5);

	let w = $state<number>(0);
	let h = $state<number>(0);
	let el = $state<HTMLDivElement | undefined>(undefined);

	const iconSize = 32;
	const randomVector = () => ({
		x: iconSize + (Math.random() * w - iconSize * 2),
		y: iconSize + (Math.random() * h - iconSize * 2)
	});

	const fromTo = (elem: HTMLDivElement, duration: number, to: Vector2, direction: Vector2) => {
		if (w == null || h == null) return;

		const start = {
			x: Number(elem.style.left.replace('px', '')),
			y: Number(elem.style.top.replace('px', ''))
		};

		const randomPos = randomVector();
		const curve = bezier(start, to, direction, randomPos);

		let length = Math.sqrt((randomPos.x - to.x) ** 2 + (randomPos.y - to.y) ** 2);
		let dir: Vector2 = { x: (to.x - randomPos.x) / length, y: (to.y - randomPos.y) / length };

		animate({
			duration,
			draw: (progress) => {
				const pos = curve(progress);
				elem.style.left = `${pos.x}px`;
				elem.style.top = `${pos.y}px`;
			},
			onComplete: () => {
				fromTo(elem, duration, randomVector(), {
					x: to.x + dir.x * length,
					y: to.y + dir.y * (length * 0.75)
				});
			}
		});
	};

	$effect(() => {
		const resize = () => {
			if (!el) return;

			el.innerHTML = '';
			w = el.offsetParent?.clientWidth ?? window.innerWidth;
			h = el.offsetParent?.clientHeight ?? window.innerHeight;

			if (!w || !h) return;

			const flies = Math.min(allIcons.length, Math.round((w * h) / 20000));
			for (let i = 0; i < flies; i++) {
				const firefly = document.createElement('div');
				firefly.className = 'firefly icon';
				el.appendChild(firefly);
				const startPos = randomVector();
				firefly.style.left = `${startPos.x}px`;
				firefly.style.top = `${startPos.y}px`;
				firefly.innerHTML = allIcons[i % allIcons.length];
				fromTo(firefly, 20000 + Math.random() * 20000, randomVector(), randomVector());
			}
		};

		resize();
		addEventListener('resize', resize);

		return () => removeEventListener('resize', resize);
	});
</script>

<div bind:this={el}></div>

<style>
	div {
		position: absolute;
		overflow-x: hidden;
		width: 100vw;
		height: 100vh;
		height: 100lvh;
	}
</style>
