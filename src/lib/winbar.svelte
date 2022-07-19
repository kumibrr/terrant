<script lang="ts">
	import midu from '$lib/assets/midu.png';
	import Time from './time.svelte';
	import Menu from './menu.svelte';
	import { slide } from 'svelte/transition';
	import { processes } from '$lib/stores/processStore';

	let showMenu = false;
</script>

{#if showMenu}
	<div class="menu-bar" transition:slide={{ duration: 100 }}>
		<Menu />
	</div>
{/if}
<footer>
	<div class="button-bar">
		<button
			class="start"
			class:active={showMenu}
			on:click={() => {
				showMenu = !showMenu;
			}}
		>
			<img src={midu} alt="midu logo" draggable="false" />
			Start
		</button>

		{#each $processes as { icon, name }}
			<button class="process">
				<img src={icon} alt="process logo" draggable="false" />
				<p>{name}</p>
			</button>
		{/each}
	</div>

	<div class="toolbox">
		<Time />
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

	button {
		display: flex;
		align-items: center;
		padding: 0;
		margin-right: 5px;
	}

	button:active,
	.active {
		box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf,
			inset 2px 2px grey;
		padding: 1px !important;
	}

	button.start {
		font-weight: bold;
	}

	button.process {
		min-width: 150px;
		max-width: 150px;
	}

	.button-bar {
		display: flex;
	}

	.toolbox {
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

	p {
		margin: 0;
		padding-left: 2px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
