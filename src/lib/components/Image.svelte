<script lang="ts">
	const { alt, image, file = 'jpg' } = $props<{ alt: string; image: string; file?: string }>();

	let el = $state<HTMLImageElement>();
</script>

<div class="blurred-img" style="background-image: url(/images/responsive/{image}-20.{file});">
	<img
		src="/images/{image}.{file}"
		srcset="/images/responsive/{image}-20.{file} 20w, /images/responsive/{image}-400.{file} 400w, /images/responsive/{image}-800.{file} 800w, /images/responsive/{image}-1200.{file} 1200w"
		loading="lazy"
		{alt}
		bind:this={el}
	/>
</div>

<style>
	.blurred-img {
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.blurred-img img {
		opacity: 0;
		transition: opacity 250ms ease-in-out;
	}
</style>
