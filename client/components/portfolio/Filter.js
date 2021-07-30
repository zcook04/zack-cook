import classes from './filter.module.css'

import React, { useState, useEffect } from 'react'

function Filter(props) {
    const {searchVal, setSearchVal} = props

    const changeHandler = (e) => {
        setSearchVal(e.target.value.toLowerCase())
    }

    return (
        <section className={classes.wrapper}>
                <input value={searchVal} onChange={changeHandler} type="text" className={classes.searchInput} id="portfolio-search" placeholder="Search for a Pokemon"/>
        </section>
    )
}

export default Filter
