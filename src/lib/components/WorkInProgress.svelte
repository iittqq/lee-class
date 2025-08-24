<script lang="ts">
	import BackButton from './BackButton.svelte';
</script>

<div class="work-in-progress-container">
	<img src="/work-in-progress.png" alt="work-in-progress" />
	<BackButton />
</div>

<style>
	.work-in-progress-container {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		img {
			height: 200px;
			width: 200px;
		}
	}
</style>
