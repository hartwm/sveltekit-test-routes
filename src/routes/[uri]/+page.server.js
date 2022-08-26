
export const load = async ({ params }) => {
  const data = await fetch('https://cmvaheadless.wpengine.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query ($id: ID = "") {
          page(idType: URI, id: $id) {
            seo {
              metaDescription
              metaTitle
              noIndex
            }
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
            blocks {
              name
              attributesJSON
              innerBlocks {
                attributesJSON
                name
                innerBlocks {
                  attributesJSON
                  name
                  innerBlocks {
                    attributesJSON
                    name
                  }
                } 
              }
            }
            pageContent {
              flexibleContent {
                __typename
                ... on Page_Pagecontent_FlexibleContent_Accordian {
                  item {
                    content
                    title
                  }
                }
                ... on Page_Pagecontent_FlexibleContent_Callout {  
                  title 
                  description
                  button {
                    url
                    title
                    target
                  } 
                }
                ... on Page_Pagecontent_FlexibleContent_PageTitle {
                  button {
                    url
                    title
                    target
                  } 
                  subtitle
                  title 
                }
                ... on Page_Pagecontent_FlexibleContent_PageIntro {
                  title
                  subtitle
                  description
                  image {
                    srcSet
                    sourceUrl
                  }
                }
                ... on Page_Pagecontent_FlexibleContent_Cards {
                  card {
                    title
                    subtitle
                    description
                    bottom
                    link {
                      url
                      target
                      title
                    }
                  }
                }
                ... on Page_Pagecontent_FlexibleContent_Custom {
                  title
                  name
                  subtitle
                  description
                  button {
                    url
                    title
                    target
                  } 
                }
                ... on Page_Pagecontent_FlexibleContent_WysiwygContent {
                  title
                  button {
                    url
                    target
                    title
                  }
                  content
                }
                ... on Page_Pagecontent_FlexibleContent_ImageContent {
                  title
                  subtitle
                  description
                  align
                  image {
                    srcSet
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        id: params.uri,
      }
    }),


  }).then((res) => res.json()).then(({ data }) => data)

  const status = await (data?.page?.isFrontPage || data?.page?.status != 'publish') ? 404 : 200
  
  if (data?.page && status == 200) {
    return {
      post: data?.page  
    };
  }

  // no data from CMS or not published
  throw new Error(`The page "${params.uri}" was not found. Please check the URL in the address bar and try again.`); 

};
