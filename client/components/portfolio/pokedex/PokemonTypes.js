import React from 'react'

import classes from './pokemontypes.module.css'
import { toTitleCase } from '../../../utils/tools'

function PokemonTypes(props) {
    const pType = props.type
    let typeColor
    let textColor;

    switch(pType) {
        case 'fire':
            typeColor = '#F08030'
            break
        case 'water':
            typeColor = '#6890F0'
            break;
        case 'flying':
            typeColor = '#A98FF3'
            break;
        case 'grass':
            typeColor = '#78C850'
            break;
        case 'poison':
            typeColor = '#A040A0'
            break;
        case 'bug':
            typeColor = '#A8B820'
            break;
        case 'psychic':
            typeColor = 'yellow'
            break;
        case 'fairy':
            typeColor = '#D685AD'
            break;
        case 'fighting':
            typeColor = '#C22E28'
            break;
        case 'electric':
            typeColor = '#F8D030'
            break;
        case 'normal':
            typeColor = '#A8A878'
            break;
        case 'ground':
            typeColor = '#E0C068'
            break;
        case 'rock':
            typeColor = '#B6A136'
            break;
        case 'ghost':
            typeColor = '#735797'
            break;
        case 'dragon':
            typeColor = '#6F35FC'
            break;
        case 'dark':
            typeColor = '#705746'
            break;
        case 'steel':
            typeColor = '#B7B7CE'
            break;
        case 'ice':
            typeColor = '#96D9D6'
            break;
        default:
            typeColor = 'gray'


    }
    return (
        <div className={classes.wrapper} style={{ backgroundColor: typeColor, color: textColor || 'black' }}>
            {toTitleCase(pType)}
        </div>
    )
}

export default PokemonTypes
