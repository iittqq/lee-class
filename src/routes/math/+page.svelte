<script lang="ts">
	import '../../app.css';
	const plans = [
		{
			name: 'Unit 1: Place Value and Base 10',
			image: '/mathunit1.png',
			description:
				'Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text ',
			links: ['none', 'none']
		}
	];
</script>

<div class="math-page">
	<h1 class="math-header">Math</h1>
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
	.math-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.math-header {
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
		@media (max-width: 768px) {
			flex-direction: column-reverse;
		}
		p {
			width: 40vw;
			@media (max-width: 768px) {
				width: 90vw;
			}
		}
		img {
			width: 40vw;
			max-height: 300px;
			@media (max-width: 768px) {
				width: 90vw;
			}
		}
	}
	.plan-description {
		text-align: center;
	}
	.plans-divider {
		width: 85%;
	}
</style>
