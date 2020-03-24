import React, {useContext} from 'react'
import RecomTypes from '../layouts/RecomTypes'


const Home = () => {
    document.body.classList.remove("bg_new");

    return (
        <div className="home">
            <div className="bgimg"></div>
            <div className="intro">
                <h1>Получить SEO рекомендации</h1>
                <RecomTypes/>
            </div>
        </div>
    )
}
export default Home