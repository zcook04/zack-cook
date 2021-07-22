import classes from './blogcard.module.css'
import Link from 'next/link'

function BlogCard(props) {
    const link = `/blogs/${props.slug}`
    return (
        <Link href={link}>
            <article className={classes.wrapper}>
                <h2>{props.title}</h2>
                <p>{props.date}</p>
                <p>{props.slug}</p>
            </article>
        </Link>
    )
}



export default BlogCard