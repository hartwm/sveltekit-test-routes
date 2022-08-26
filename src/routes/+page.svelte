 

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1> Home</h1>
	<a sveltekit:prefetch href="/about-us/">About Us &rarr; - Client </a><br>
	<a sveltekit:reload href="/about-us/">About Us &rarr; - Reload</a>
</section>
