<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	export let name: string;
	export let icon: string;
	export let backgroundColor: string;
</script>

<div
	class="window"
	use:draggable={{ handle: '.title-bar' }}
	style={`background-color: ${backgroundColor};`}
>
	<div class="title-bar">
		<div class="title-bar-text">
			<img src={icon} alt="chat logo" class="title-bar-icon" draggable="false" />
			{name}
		</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize" />
			<button aria-label="Maximize" />
			<button aria-label="Close" />
		</div>
	</div>
	<div class="window-body">
		<slot />
	</div>
</div>

<style>
	.window {
		position: absolute;
		user-select: none;
		resize: both;
		overflow: auto;
		min-width: 350px;
		min-height: 500px;
		display: flex;
		flex-direction: column;
	}
	.title-bar-icon {
		max-height: 12px;
	}
	.title-bar:active {
		cursor: move;
	}
	.window-body {
		flex: 1;
	}
</style>
