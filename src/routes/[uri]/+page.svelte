<script > 
	export let data 
	$: ({ post } = data)
</script>

<section class="prose max-w-full"> 
	<h1>{post?.title}</h1>
	<h2>This page is served from 'src/routes/[uri]/'</h2>
	<div>
	{@html post?.content}
	</div> 
</section>
