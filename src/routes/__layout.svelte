<script lang="ts">
	import Winbar from '$lib/winbar.svelte';
	import github from '$lib/assets/github.png';
	import DesktopIcon from '$lib/desktop-icon.svelte';
</script>

<div class="desktop">
	<DesktopIcon
		icon={github}
		iconAlt="github icon"
		name="Link to repo"
		href="https://github.com/kumibrr"
	/>
</div>
<slot />

<Winbar />

<style>
	.desktop {
		position: absolute;
		width: 100%;
		height: 95%;
		z-index: -1;
	}
</style>
