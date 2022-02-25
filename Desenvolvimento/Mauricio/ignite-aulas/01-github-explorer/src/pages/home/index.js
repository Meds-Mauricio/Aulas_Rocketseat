import React from 'react'
import './styles.scss'

import note from '../../assets/imagem2.jpg'

export default function Home() {
    return (
        <div className='container'>
            <div className='content'>
                <div className='header'>
                    <img src={note} />
                    <p>Notebook Sansung Intel Celeron-6305 4gb 500GB...</p>
                </div>
                <div className='value'>
                    <p>R$ 2.2290,97</p>
                </div>
                <div className='portion'>
                    <p>10x de 229.09 s/juros</p>
                </div>
            </div>
        </div>
    )
}
