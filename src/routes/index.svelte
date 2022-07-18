<script>
	import Chat from '$lib/chat.svelte';
	import { processes } from '$lib/stores/processStore';
</script>

{#each $processes as { component, ...props }, i}
	<svelte:component this={component} {...props} />
{/each}
