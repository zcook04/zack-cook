import React, { useEffect, useState } from 'react'
import Filter from '../../../components/portfolio/pokedex/Filter'
import axios from 'axios'
import PokeCard from '../../../components/portfolio/pokedex/PokeCard'

import classes from './pokedex.module.css'

function Pokedex() {
    const [pokemon, setPokemon] = useState([])
    const [searchVal, setSearchVal] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        const getInitialData = async () => {
            const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150', (data) => data)
            setPokemon(data.data.results)
        }
        getInitialData()
    }, [])

    useEffect(() => {
        if (searchVal) {
            const currentLength = pokemon.filter(poke => poke.name.includes(searchVal)).length
            setCount(currentLength)
        } else {
            setCount(pokemon.length)
        }
    }, [pokemon, searchVal])

    return (
        <section className={classes.wrapper}>
            <Filter 
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            count={count}
            />
            <section className={classes.pokeCards}>
                {pokemon && pokemon.map(poke => {
                return <PokeCard 
                    name={poke.name}
                    url={poke.url} 
                    key={poke.name} />}
                )
                .filter(item => {
                    if(searchVal) {
                        return item.props.name.includes(searchVal)
                    } else {
                        return true
                    }
                    })
                .slice(0, 25)}

            </section>    
        </section>
    )
}

export default Pokedex
