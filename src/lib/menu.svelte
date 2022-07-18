<script>
	import logout from '$lib/assets/logout.png';
	import antenna from '$lib/assets/antenna.png';
</script>

<div>
	<span><h3>Miduows</h3></span>
	<ul>
		<li />
		<li />
		<li />
		<li />
		<li>
			<img src={antenna} alt="Connect to chat" draggable="false" />
			Connect to chat
		</li>
		<li>
			<img src={logout} alt="Log Out" draggable="false" />
			Log Out
		</li>
	</ul>
</div>

<style>
	div {
		display: flex;
		width: 240px;
		background: silver;
		box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
			inset 2px 2px #dfdfdf;
		user-select: none;
	}

	span {
		background: rgb(2, 0, 36);
		background: linear-gradient(0deg, rgba(2, 0, 36, 1) 40%, rgba(0, 0, 128, 1) 100%);
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		margin: 3px;
		margin-right: 0;
		color: white;
		padding-top: 10px;
	}

	h3 {
		margin: 0;
	}

	ul {
		margin: 3px;
		margin-left: 0;
		padding: 0;
		list-style: none;
		width: 100%;
	}

	li {
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		cursor: default;
	}
	li:hover,
	li:active {
		background-color: navy;
		color: white;
	}
</style>
