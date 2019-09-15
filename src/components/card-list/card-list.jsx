import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card'

export const CardList = (props) => {
    //props.children is whatever component that is inside CardList component

    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster}></Card>
                ))
            }
        </div>
    );
}