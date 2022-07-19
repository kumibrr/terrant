<script lang="ts">
	import { processes } from '$lib/stores/processStore';
</script>

{#each $processes as { component, ...props }, i}
	<div>
		<svelte:component this={component} {...props} />
	</div>
{/each}

<style>
	div {
		position: fixed;
	}
</style>
