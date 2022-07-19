<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import antenna from '$lib/assets/antenna.png';
	export let name: string;
</script>

<div class="window" use:draggable={{ handle: '.title-bar' }}>
	<div class="title-bar">
		<div class="title-bar-text">
			<img src={antenna} alt="chat logo" class="title-bar-icon" draggable="false" />
			{name}
		</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize" />
			<button aria-label="Maximize" />
			<button aria-label="Close" />
		</div>
	</div>
	<div class="window-body"><p>Hola buenas</p></div>
</div>

<style>
	.window {
		position: absolute;
		width: 300px;
		user-select: none;
		resize: both;
		overflow: auto;
		min-width: 20vw;
		min-height: 10vh;
	}
	.title-bar-icon {
		max-height: 12px;
	}
	.title-bar:active {
		cursor: move;
	}
</style>
