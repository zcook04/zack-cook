import { useRouter } from 'next/router'


function SingleBlogPage() {
    const router = useRouter();

    return (
        <main>
          <h1>A single blog page</h1>  
          <p>Placeholder text for a single blog page.  You attempted to access blog: {router.query.blogId}</p>
        </main>
    )
}

export default SingleBlogPage
