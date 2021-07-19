import Link from 'next/link'

import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <ul className={classes.navlinks}>
                    <Link href="/blogs"><li className={classes.navlink}>Blog</li></Link>
                    <Link href="/porfolio"><li className={classes.navlink}>Portfolio</li></Link>
                    <Link href="/connect"><li className={classes.navlink}>Connect</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
