import classes from './filter.module.css'

import Arrow from '../../buttons/Arrow'

function Filter(props) {
    const {searchVal, setSearchVal} = props

    const changeHandler = (e) => {
        setSearchVal(e.target.value.toLowerCase())
    }

    return (
        <section className={classes.wrapper}>
                <input value={searchVal} onChange={changeHandler} type="text" className={classes.searchInput} id="portfolio-search" placeholder="Search for a Pokemon"/>
                <div className={classes.pagination}>
                    <Arrow flipped='True' height="40px" width="25px" />
                    <p>Showing 0/{props.count}</p>
                    <Arrow height="40px" width="25px"/>
                </div>
        </section>
    )
}

export default Filter
