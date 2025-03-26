import React from 'react'
import { Carousel } from '../components/Carousel'

export const Home = () => {
    return (
        <section>
            <h1 className="home__title">Gain quick access to all of our educational content</h1>
            <p className="home__subtitle">Explore our <strong>Digital Repository</strong> and download interactive scientific and educational material. </p>
            <Carousel />
        </section>
    )
}
