import classes from './blog-title.module.css'

function BlogHeading(props) {
    return (
        <section className={classes.blogTitleWrapper}>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </section>
    )
}

export default BlogHeading
