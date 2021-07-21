import Facebook from '../social-icons/Facebook'
import Linkedin from '../social-icons/Linkedin'
import Youtube from '../social-icons/Youtube'
import Twitter from '../social-icons/Twitter'

import classes from './Footer.module.css'

function Footer() {        const color = "lightBLue"
    return (
        <footer className={classes.footer}><div className={classes.wrapper}>
            <div className={classes.social}>
                <h3>Connect With Me On Social Media</h3>
                <div className={classes.socialIcons}>
                    <Facebook height="40px" width="40px"/>
                    <Linkedin height="40px" width="40px"/>
                    <Youtube height="40px" width="40px"/>
                    <Twitter height="40px" width="40px"/>
                </div>
            </div>
        </div></footer>
    )
}

export default Footer
