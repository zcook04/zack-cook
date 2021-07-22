import BlogContent from '../../components/blogs/blog/blog-content';
import BlogHeading from '../../components/blogs/blog/blog-title';

import {getBlogData, getBlogFiles } from '../../utils/blogUtil'

import classes from './blogslug.module.css'

function SingleBlogPage(props) {
    return (
        <article className={classes.article}>
            <BlogHeading title={props.blog.title} desc={props.blog.desc} date={props.blog.date} author={props.blog.author} image={props.blog.image}/>
            <BlogContent blogContent={props.blog.content}/>
        </article>
    )
}

export function getStaticProps(context) {
    const filename = context.params.blogSlug[0]
    const blogData = getBlogData(filename+'.md')
    return {
        props: {
            blog: blogData
        },
        revalidate: 3600
    }
}

export function getStaticPaths() {
    const blogFilenames = getBlogFiles()
    const slugs = blogFilenames.map(blog => blog.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { blogSlug: [slug] } } )),
        fallback: false
    }
}

export default SingleBlogPage
