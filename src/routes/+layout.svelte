 
<script>
import '../app.css';
</script>

<div class="prose mx-auto">
	<nav class="flex justify-between text-center">
		<a href="/">Home</a>
		<a sveltekit:prefetch href="/about-us/">About Us (Client) </a>
		<a sveltekit:reload href="/about-us/">About Us (Reload)</a>
	</nav>
	<main class="bg-white p-8">
		<slot />
	</main> 
</div>

<style>
	a {
		display:block;
		padding:1rem;
	}
</style>