<script lang="ts">
	import antenna from '$lib/assets/antenna.png';
	export let name: string;
</script>

<div class="window">
	<div class="title-bar">
		<div class="title-bar-text">
			<img src={antenna} alt="chat logo" class="title-bar-icon" />
			{name}
		</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize" />
			<button aria-label="Maximize" />
			<button aria-label="Close" />
		</div>
	</div>
	<div class="window-body">Hola buenas</div>
</div>

<style>
	.window {
		position: absolute;
		width: 300px;
	}
	.title-bar-icon {
		max-height: 12px;
	}
</style>
