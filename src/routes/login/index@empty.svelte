<script type="ts">
	import { supabase } from '$lib/services/supabase';
	import github from '$lib/assets/github.png';
	import google from '$lib/assets/google.png';
	import microsoft from '$lib/assets/microsoft.png';
	import keyLogin from '$lib/assets/key-login.png';
	import LinkIcon from '$lib/link-icon.svelte';

	let email: string;
	let password: string;

	const login = async () => {
		const { user, error } = await supabase.auth.signIn({ email, password });
		console.log({ user, error });
	};

	const signup = async () => {
		const { user, error } = await supabase.auth.signUp({ email, password });
		console.log({ user, error });
	};

	const loginWithProvider = async (provider: 'google' | 'azure' | 'github') => {
		const { user, error } = await supabase.auth.signIn({ provider });
	};
</script>

<div class="container">
	<div class="window">
		<div class="title-bar">
			<div class="title-bar-text"><p>Welcome to Miduows</p></div>
		</div>
		<div class="window-body">
			<img src={keyLogin} alt="Login to Miduows" draggable="false" />
			<form on:submit|preventDefault>
				<div>
					<div class="field">
						<label for="username">E-mail:</label>
						<input type="email" bind:value={email} />
					</div>
					<div class="field">
						<label for="password">Password:</label>
						<input type="password" bind:value={password} />
					</div>
				</div>

				<div class="submit">
					<button on:click={login}>Login</button>
					<button on:click={signup}>Sign Up</button>
				</div>
			</form>
		</div>
		<div class="window-body"><p>Or sign in with...</p></div>
		<div class="window-body">
			<LinkIcon icon={github} name="github" onclick={() => loginWithProvider('github')} />
			<LinkIcon icon={microsoft} name="microsoft" onclick={() => loginWithProvider('azure')} />
			<LinkIcon icon={google} name="google" onclick={() => loginWithProvider('google')} />
		</div>
	</div>
</div>

<style>
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
	form div > input,
	form div > button {
		margin-bottom: 8px;
		height: 23px;
	}
	form .field {
		display: flex;
		justify-content: end;
		align-items: baseline;
	}
	.submit {
		margin-left: 10px;
		max-height: 21px;
		max-width: 80px;
	}

	label,
	p {
		margin: 0;
		user-select: none;
	}
</style>
