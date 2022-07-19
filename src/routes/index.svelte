<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { processes } from '$lib/stores/processStore';
</script>

{#each $processes as { component, ...props }, i}
	<div use:draggable>
		<svelte:component this={component} {...props} />
	</div>
{/each}

<style>
	div {
		position: fixed;
	}
</style>
