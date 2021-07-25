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
            <div className={classes.imgWrapper} >
                <Image src={props.image} width='200' height='200' />
            </div>
            <div className={classes.infoWrapper} >
                <div className={classes.headerContainer} >
                    <h2>{props.title}</h2>
                    <p>{formattedDate}</p>
                </div>
                <p>{props.desc}</p>
            </div>
            </article>
        </Link>
    )
}



export default BlogCard