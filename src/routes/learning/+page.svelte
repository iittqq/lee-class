<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	const subjects = [
		{
			name: 'Math',
			icon: '/math.png',
			route: '/math'
		},
		{
			name: 'Writing',
			icon: '/writing.png',
			route: '/writing'
		},
		{
			name: 'Reading',
			icon: '/reading.png',
			route: '/reading'
		},
		{
			name: 'Science',
			icon: '/science.png',
			route: '/science'
		},
		{
			name: 'Social Studies',
			icon: '/socialstudies.png',
			route: '/socialstudies'
		},
		{
			name: 'Health',
			icon: '/health.png',
			route: '/health'
		}
	];
</script>

<div class="subjects-page">
	<h1 class="page-header">Subjects</h1>
	<div class="subject-container">
		{#each subjects as subject}
			<a href={subject.route} class="subject-stack">
				<img src={subject.icon} alt={subject.name} />
				<h1>{subject.name}</h1>
			</a>
		{/each}
	</div>
</div>

<style>
	.page-header {
		margin-bottom: 3rem;
		text-align: center;
		font-size: 3rem;
	}
	.subject-container {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(2, auto);
		gap: 20px;
		justify-content: space-evenly;
		align-items: center;
		img {
			width: 150px;
			height: 150px;
		}
		@media (max-width: 768px) {
			grid-template-columns: repeat(2, auto);
			grid-template-rows: repeat(3, auto);
		}
	}
	.subject-stack {
		text-align: center;
		text-decoration: none;
		color: #5b618a;
		transition: transform 0.5s ease-in-out;
		@media (max-width: 768px) {
			width: 40vw;
		}
	}
	.subject-stack:hover {
		transform: scale(1.1);
	}
</style>
