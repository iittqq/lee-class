<script lang="ts">
	import '../../app.css';
	const plans = [
		{
			name: 'Unit 1: Inventors at Work',
			image: '/readingunit1.png',
			description:
				'In this module, students will listen to, read, and view a variety of texts and media that present them with information about inventors.  A genre focus on informational text provides students with opportunities to identify author’s purpose, central ideas, and text structure in order to better understand unfamiliar texts. Students will also encounter narrative nonfiction, realistic fiction, and science fiction/fantasy to build knowledge across genres.  As students build their vocabulary and synthesize topic knowledge, they will learn that people can create amazing things through innovation, perseverance, and the desire to solve problems.',
			links: ['none', 'none']
		}
	];
</script>

<div class="reading-page">
	<h1 class="reading-header">Reading</h1>
	<hr class="header-divider" />
	{#each plans as plan}
		<h2>{plan.name}</h2>
		<div class="plan-row">
			<p class="plan-description">{plan.description}</p>
			<img src={plan.image} alt="plan" />
		</div>
		{#each plan.links as link}
			<a href={link}> Resource</a>
		{/each}
		<hr class="plans-divider" />
	{/each}
</div>

<style>
	.reading-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.reading-header {
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
		p {
			width: 40vw;
			@media (max-width: 768px) {
				width: 90vw;
			}
		}
		img {
			height: 300px;
		}
		@media (max-width: 768px) {
			flex-direction: column-reverse;
		}
	}
	.plan-description {
		text-align: center;
	}
	.plans-divider {
		width: 85%;
	}
</style>
