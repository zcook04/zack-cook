import classes from './blogcard.module.css'
import Link from 'next/link'
import Image from 'next/image'

function BlogCard(props) {
    const link = `/blogs/${props.slug}`
    const date = new Date(props.date)
    const formattedDate = date.toLocaleString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return (
        <Link href={link}>
            <article className={classes.wrapper}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <p>{formattedDate}</p>
                <Image src={`\/${props.image}`} width='200' height='200' />
            </article>
        </Link>
    )
}



export default BlogCard