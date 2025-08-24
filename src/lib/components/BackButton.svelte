<script lang="ts">
	import { goto } from '$app/navigation';
	import '../../app.css';

	/** Where to send the user if there's no in-app page to go back to */
	export let fallback = '/';
	export let label = 'Go Back';

	function goBack() {
		if (typeof window === 'undefined') return;

		// Only go back if the referrer is from the same site; otherwise use fallback
		const ref = document.referrer;
		const sameOrigin = ref && new URL(ref).origin === window.location.origin;

		if (sameOrigin && window.history.length > 1) {
			window.history.back();
		} else {
			goto(fallback, { replaceState: true });
		}
	}
</script>

<button type="button" aria-label={label} on:click={goBack} class="back-button">
	{label}
</button>

<style>
	.back-button {
		margin-top: 1rem;
		cursor: pointer;
		background: none;
		border-radius: 15px;
		padding: 10px;
	}
</style>
