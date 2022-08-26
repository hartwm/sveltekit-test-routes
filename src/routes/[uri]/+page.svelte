<script > 
	export let data 
	$: ({ post } = data)
</script>
 
 

<section class="prose max-w-full"> 
	<h1>{post?.title} - [uri] route</h1>
	<div>
	{@html post?.content}
	</div> 
</section>
