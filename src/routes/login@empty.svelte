<script>
	import github from '$lib/assets/github.png';
	import google from '$lib/assets/google.png';
	import microsoft from '$lib/assets/microsoft.png';
	import twitter from '$lib/assets/twitter.png';
	import facebook from '$lib/assets/facebook.png';
	import keyLogin from '$lib/assets/key-login.png';
	import LinkIcon from '$lib/link-icon.svelte';
</script>

<div class="container">
	<div class="window">
		<div class="title-bar">
			<div class="title-bar-text">Welcome to Miduows</div>
		</div>
		<div class="window-body">
			<img src={keyLogin} alt="" />
			<form action="">
				<div>
					<div>
						<label for="username">Username:</label>
						<input type="text" name="" id="" />
					</div>
					<div>
						<label for="password">Password:</label>
						<input type="password" name="" id="" />
					</div>
				</div>

				<div class="submit">
					<input type="submit" value="Submit" />
					<input type="submit" value="Register" />
				</div>
			</form>
		</div>
		<div class="window-body">Or sign in with...</div>
		<div class="window-body">
			<LinkIcon icon={github} name="github" onclick={() => {}} />
			<LinkIcon icon={microsoft} name="microsoft" onclick={() => {}} />
			<LinkIcon icon={facebook} name="facebook" onclick={() => {}} />
			<LinkIcon icon={twitter} name="twitter" onclick={() => {}} />
			<LinkIcon icon={google} name="google" onclick={() => {}} />
		</div>
	</div>
</div>

<style>
	@import '98.css/dist/98.css';
	img {
		height: 50px;
		width: 50px;
	}

	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.window {
		min-width: 300px;
		max-width: 600px;
	}
	.window-body {
		display: flex;
		justify-content: space-evenly;
	}

	form {
		margin-left: 10px;
		display: flex;
	}
	form div > input {
		margin-bottom: 8px;
		height: 23px;
	}
	.submit {
		margin-left: 10px;
		max-height: 21px;
		max-width: 80px;
	}
</style>
