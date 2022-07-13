<script lang="ts">
	import midu from '$lib/assets/midu.png';
	import Time from './time.svelte';
	import Menu from './menu.svelte';
	import { slide } from 'svelte/transition';

	let showMenu = false;
</script>

{#if showMenu}
	<div class="menu-bar" transition:slide={{ duration: 100 }}>
		<Menu />
	</div>
{/if}
<footer>
	<div>
		<button
			class="start"
			on:click={() => {
				showMenu = !showMenu;
			}}
		>
			<img src={midu} alt="midu logo" />
			Start
		</button>
	</div>

	<div>
		<div class="toolbox">
			<Time />
		</div>
	</div>
</footer>

<style>
	footer {
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: 100%;
		bottom: 0;
		box-sizing: border-box;
		padding: 4px 4px;
		background: silver;
		box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
			inset 2px 2px #dfdfdf;
	}

	button.start,
	button.start:active {
		display: flex;
		align-items: center;
		padding: 2px;
		font-weight: bold;
	}

	div.toolbox {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		border: none;
		border-radius: 0;
		box-sizing: border-box;
		min-height: 23px;
		min-width: 100px;
		padding: 0 12px;
		background: silver;
		box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf,
			inset 2px 2px grey;
	}
	img {
		width: 20px;
		margin-right: 10px;
	}

	.menu-bar {
		position: absolute;
		bottom: 32px;
	}
</style>
