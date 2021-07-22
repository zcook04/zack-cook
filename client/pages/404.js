import Link from 'next/link'
import classes from './404.module.css'


function PageNotFound() {
    return (
        <section className={classes.forofor}>
            <h1>404 | Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p className={classes.button}><Link href='/'>Return Home</Link></p>
        </section>
    )
}

export default PageNotFound
