<script lang="ts">
	export let icon: string;
	export let iconAlt: string;
	export let name: string;
	export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<img src={icon} alt={iconAlt} />
	<p>{name}</p>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 70px;
		color: aliceblue;
		text-decoration: none;
		margin: 10px;
	}
	a:focus {
		outline: 1px dotted aliceblue;
		text-decoration: dashed;
	}
	img {
		max-width: 50px;
	}
	p {
		margin: 0;
		font-size: 13px;
	}
</style>
