<script lang="ts">
	import Window from './window.svelte';
	import wordart from '$lib/assets/wordart.png';
	export let name: string;
	export let icon: string;
</script>

<Window {icon} {name} backgroundColor="orange">
	<div class="root">
		<header>
			<img src={wordart} alt="Chat de terran't" />
			<div class="actions">
				<button><p>Create chat room</p></button>
				<button><p>Join chat room</p></button>
			</div>
		</header>
		<div class="body">
			<p>Current room:</p>
			<div />
			<input type="text" />
		</div>
	</div>
</Window>

<style>
	img {
		max-width: 300px;
	}
	div.actions button {
		background-color: yellow;
		color: rgb(22, 203, 239);
		border: none;
		box-shadow: none;
		text-transform: uppercase;
		padding: 0;
		padding-left: 2px;
		padding-right: 2px;
		outline: none;
		font-weight: bold;
	}
	div.actions button:active {
		box-shadow: inset -1px -1px #75abc6, inset 1px 1px #b7a723, inset -2px -2px #a47419,
			inset 2px 2px rgb(181, 118, 0);
	}
	p {
		margin: 0;
	}
	h1,
	h2 {
		font-family: 'Courier New', Courier, monospace;
		background-color: rgb(64, 64, 239);
		color: rgb(22, 203, 239);
		margin: 0;
	}
	h2 {
		padding-left: 40px;
	}
	.body {
		border: 2px solid black;
		margin-top: 10px;
		padding: 2px;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.body div {
		background-color: white;
		flex: 1;
	}
	.root {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
