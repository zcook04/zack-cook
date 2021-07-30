import React, { useState, useEffect } from 'react'
import PokemonTypes from './PokemonTypes'
import axios from 'axios'

import classes from './pokecard.module.css'
import { toTitleCase } from '../../../utils/tools'

function PokeCard(props) {
    const { name, url } = props
    const [image, setImage] = useState('')
    const [types, setTypes] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(url, (data) => data)
            setImage(data.data.sprites.other['official-artwork'].front_default)
            setTypes([...data.data.types])
        }
        getData()
    }, [])

    return (
        <div className={classes.wrapper}>
            <h2>{toTitleCase(name)}</h2>
            {image && <img src={image}/>}
            <div className={classes.types} >
                {types && types.map(type => {
                    return <PokemonTypes key={type.type.name} type={type.type.name} />
                })}
            </div>
        </div>
    )
}

export default PokeCard
