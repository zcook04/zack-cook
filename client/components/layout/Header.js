import Link from 'next/link'
import Head from 'next/dist/next-server/lib/head'

import classes from './Header.module.css'

function Header() {
    return (
        <>

        <header className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.hidden}><Link href="/" passHref>Home</Link></div>
                <nav className={classes.navlinks}>
                    <Link href="/blogs" passHref><li className={classes.navlink}>Blog</li></Link>
                    <Link href="/portfolio" passHref><li className={classes.navlink}>Portfolio</li></Link>
                    <Link href="/connect" passHref><li className={classes.navlink}>Connect</li></Link>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header
