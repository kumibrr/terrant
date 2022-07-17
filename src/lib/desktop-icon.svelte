<script lang="ts">
	export let icon: string;
	export let iconAlt: string;
	export let name: string;
	export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" draggable="false">
	<img src={icon} alt={iconAlt} draggable="false" />
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
		margin-top: 5px;
		font-size: 13px;
	}
</style>
