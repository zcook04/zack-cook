import BlogCard from '../../components/blogs/BlogCard'
import BlogHero from '../../components/blogs/BlogHero'
import { getAllBlogs } from '../../utils/blogUtil'
import classes from './blogs.module.css'

function AllBlogsPage(props) {
    return (
        <>
        <BlogHero />
        <section className={classes.blogSection}>
            <div className={classes.wrapper}>
                {props.blogs.map((blog) => {
                    return <BlogCard key={blog.slug} title={blog.title} data={blog.data} slug={blog.slug}/>
                })}
            </div>
        </section>
        </>
    )
}

export function getStaticProps() {
    const blogList = getAllBlogs() 
    return {
        props: {
            blogs: blogList
        },
        revalidate: 3600
    }
}

export default AllBlogsPage
