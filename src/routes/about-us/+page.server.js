export const load = async ({ params }) => {
	const post = await fetch('https://cmvaheadless.wpengine.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
        query ($id: ID = "") {
          page(idType: URI, id: $id) {
            id 
            isFrontPage
            title(format: RENDERED)
            status
            slug 
            uri
            isPostsPage
            content(format: RENDERED)
            contentTypeName
            databaseId    
          }
        }
      `,
			variables: {
				id: 'about-us'
			}
		})
	})
		.then((res) => res.json())
		.then(({ data }) => data);

	return { post: post?.page };
};
