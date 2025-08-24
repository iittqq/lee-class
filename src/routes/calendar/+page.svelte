<script lang="ts">
	import WorkInProgress from '$lib/components/WorkInProgress.svelte';
	import { goto } from '$app/navigation';

	export let fallback = '/';

	function goBack() {
		if (typeof window === 'undefined') return;

		const ref = document.referrer;
		const sameOrigin = ref && new URL(ref).origin === window.location.origin;

		if (sameOrigin && window.history.length > 1) {
			window.history.back();
		} else {
			goto(fallback, { replaceState: true });
		}
	}
</script>

<div class="calendar-page">
	<WorkInProgress />
	<button type="button" aria-label="go-back" on:click={goBack} class="back-button">
		<img src="/return.png" alt="return" />
	</button>
</div>

<style>
	.calendar-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 90vh;
	}
	.back-button {
		margin-top: 1rem;
		background: none;
		cursor: pointer;
		border: none;
		padding: 1rem;
		img {
			width: 25px;
			height: 25px;
		}
	}
</style>
