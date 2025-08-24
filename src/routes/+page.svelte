<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	const utilities = [
		{
			name: "What We're Learning",
			image: '/book.png',
			route: '/learning'
		},
		{
			name: 'Calendar',
			image: '/calendar.png',
			route: '/calendar'
		},

		{
			name: 'Pictures',
			image: '/gallery.png',
			route: '/pictures'
		},

		{
			name: 'Resources',
			image: '/resource.png',
			route: '/resources'
		}
	];
</script>

<div class="home-header-container">
	<h1>Welcome to Fifth Grade!</h1>
	<p>
		This website functions as a way for parents to keep up with their children's learning and gather
		feedback for the betterment of the class. Here you'll find what the students are currently
		learning, the school calendar, photos from the year, and a little bit about myself.
	</p>
	<h1 class="section-header">Looking for something?</h1>
	<div class="utility-row">
		{#each utilities as utility}
			<a href={utility.route} class="utility-button">
				<img src={utility.image} alt="utility" class="utility-image" />
				<h3>{utility.name}</h3>
			</a>
		{/each}
	</div>
	<h4>Scroll to learn more</h4>
	<img src="/arrow.png" alt="scroll-arrow" class="scroll-arrow" />
</div>
<div class="details-row">
	<div class="details-row-text">
		<h2>Who am I?</h2>
		<hr />
		<p>
			My name is Mr. Lee, I am very excited to be your child's fifth grade teacher and look forward
			to an amazing year!
		</p>
	</div>
	<div class="image-container">
		<img src="/headshot1.jpeg" alt="headshot" class="headshot" />
	</div>
</div>
<div class="details-row-opposite">
	<div class="details-row-text">
		<h2>A little bit more about me</h2>
		<hr />
		<p>
			This is my 13th year teaching at Fir Grove Elementary. I have a passion for learning and
			teaching and I look forward to watching each child learn and grow over the school year.
		</p>
	</div>
	<div class="image-container">
		<img src="/group.JPG" alt="headshot" class="headshot" />
	</div>
</div>
<Footer />

<style>
	.home-header-container {
		margin: auto;
		width: 90vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
		h1 {
			font-size: 3rem;
		}
		p {
			width: 50vw;
			@media (max-width: 768px) {
				width: 90vw;
			}
		}
	}
	.scroll-arrow {
		height: 50px;
		width: 50px;
	}
	.details-row {
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 90vw;
		padding: 1rem;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	.details-row-opposite {
		margin: auto;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		width: 90vw;
		padding: 1rem;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	.details-row-text {
		width: 40vw;
		text-align: center;
		@media (max-width: 768px) {
			width: 90vw;
		}
	}
	.image-container {
		height: 50vh;
		width: 40vw;
		overflow: hidden;
		border-radius: 25px;
		@media (max-width: 768px) {
			width: 90vw;
			height: 300px;
		}
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.utility-row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		margin-bottom: 2rem;
		margin-top: 2rem;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	.utility-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: #000;
		transition: transform 0.5s ease-in-out;
	}
	.utility-button:hover {
		transform: scale(1.1);
	}
	.utility-image {
		width: 200px;
		height: 200px;
	}
</style>
