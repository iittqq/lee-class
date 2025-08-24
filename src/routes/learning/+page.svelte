<script lang="ts">
	import WorkInProgress from '$lib/components/WorkInProgress.svelte';

	let selectedSubject: string | null = null;

	const subjects = [
		{ name: 'Math', icon: '/math.png' },
		{ name: 'Writing', icon: '/writing.png' },
		{ name: 'Reading', icon: '/reading.png' },
		{ name: 'Science', icon: '/science.png' },
		{ name: 'Social Studies', icon: '/socialstudies.png' },
		{ name: 'Health', icon: '/health.png' }
	];

	const subjectData: Record<string, any[]> = {
		Math: [
			{
				name: 'Unit 1: Place Value and Base 10',
				image: '/mathunit1.png',
				description:
					'Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text ',
				links: ['https://www.khanacademy.org/', 'https://www.khanacademy.org/']
			}
		],
		Reading: [
			{
				name: 'Unit 1: Inventors at Work',
				image: '/readingunit1.png',
				description:
					'In this module, students will listen to, read, and view a variety of texts and media that present them with information about inventors.  A genre focus on informational text provides students with opportunities to identify author’s purpose, central ideas, and text structure in order to better understand unfamiliar texts. Students will also encounter narrative nonfiction, realistic fiction, and science fiction/fantasy to build knowledge across genres.  As students build their vocabulary and synthesize topic knowledge, they will learn that people can create amazing things through innovation, perseverance, and the desire to solve problems.',
				links: ['https://www.audible.com/', 'https://www.audible.com/']
			}
		]
		// Add Writing, Science, Social Studies, Health the same way
	};
</script>

{#if !selectedSubject}
	<div class="subjects-page">
		<h1 class="page-header">Subjects</h1>
		<div class="subject-container">
			{#each subjects as subject}
				<button class="subject-stack" on:click={() => (selectedSubject = subject.name)}>
					<img src={subject.icon} alt={subject.name} />
					<h1>{subject.name}</h1>
				</button>
			{/each}
		</div>
	</div>
{:else}
	<!-- If a subject is selected, show its plans -->
	<div class="plans-page">
		<button on:click={() => (selectedSubject = null)} class="back-button">
			<img src="/back.png" alt="back" class="back-button-icon" />
		</button>
		<h1 class="plans-header">{selectedSubject}</h1>
		<hr class="header-divider" />
		{#if subjectData[selectedSubject]}
			{#each subjectData[selectedSubject] as plan}
				<h2>{plan.name}</h2>
				<div class="plan-row">
					<p class="plan-description">{plan.description}</p>
					<img src={plan.image} alt={plan.name} class="plan-image" />
				</div>
				{#each plan.links as link}
					<a href={link} target="_blank">Resource</a>
				{/each}
				<hr class="plans-divider" />
			{/each}
		{:else}
			<WorkInProgress />
		{/if}
	</div>
{/if}

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
	}
	.subject-container img {
		width: 150px;
		height: 150px;
	}
	.subject-stack {
		text-align: center;
		cursor: pointer;
		text-decoration: none;
		color: #000;
		transition: transform 0.5s ease-in-out;
		background: none;
		border: none;
	}
	.subject-stack:hover {
		transform: scale(1.1);
	}

	.plans-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.back-button {
		position: fixed;
		left: 5rem;
		top: 5rem;
		background: none;
		border: none;
		cursor: pointer;
		@media (max-width: 768px) {
			left: 1rem;
		}
	}
	.back-button-icon {
		height: 25px;
		width: 25px;
	}
	.plans-header {
		font-size: 3rem;
	}
	.header-divider {
		width: 25%;
	}
	.plan-row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		width: 90vw;
	}
	.plan-row p {
		width: 40vw;
	}
	.plan-row img {
		width: 40vw;
	}
	.plan-description {
		text-align: center;
	}

	.plans-divider {
		width: 85%;
	}
	@media (max-width: 768px) {
		.subject-container {
			grid-template-columns: repeat(2, auto);
			grid-template-rows: repeat(3, auto);
		}
		.plan-row {
			flex-direction: column-reverse;
		}
		.plan-row p,
		.plan-row img {
			width: 90vw;
		}
	}
</style>
