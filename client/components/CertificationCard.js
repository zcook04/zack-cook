import classes from './certification-card.module.css'
import Image from 'next/image'

function CertificationCard(props) {
    return (
    <div className={classes.certCard}>
        <div className={classes.certImg}>
            <Image width="100" height="100" src={props.img} alt={props.alt} />
        </div>
        <div className={classes.certInfo}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
    )
}

export default CertificationCard
