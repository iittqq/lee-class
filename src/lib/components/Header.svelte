<script lang="ts">
	import '../../app.css';
	import NavPopover from './NavPopover.svelte';
</script>

<div class="header-container">
	<a href="/"><img src="/logo.png" alt="logo" class="logo" /> </a>
	<NavPopover />
</div>

<style>
	.logo {
		height: 50px;
		width: auto;
		@media (min-width: 768px) {
			height: 50px;
		}
	}

	.header-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
