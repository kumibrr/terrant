<script lang="ts">
	export let name: string;
	export let icon: string;
	export let onclick: Function;
</script>

<button title={name} on:click={onclick()}>
	<img src={icon} alt={`${name} logo`} draggable="false" />
</button>

<style>
	img {
		max-width: 30px;
	}
	button,
	button:active {
		min-width: auto;
		padding: 3px !important;
	}
</style>
