import classes from './underconstruction.module.css'
function UnderConstruction() {
    return (
        <section className={classes.ucWrapper}>
            <div className={classes.ucCenterBox}>
            <div className={classes.topleft}></div>
            <div className={classes.top}></div>
            <div className={classes.topright}></div>
            <div className={classes.middle}>
                <h1>Page Under Construction</h1>
                <p>Please check back soon</p>
            </div>
            <div className={classes.bottomleft}></div>
            <div className={classes.bottom}></div>
            <div className={classes.bottomright}></div>
            </div>
        </section>
    )
}

export default UnderConstruction
