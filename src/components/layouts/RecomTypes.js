import React from 'react'
import { Link } from 'react-router-dom'

const RecomTypes = () => {
    return (
        <div className="collection">
                    <Link className="example_f collection_item" to="/domain"><i class="fab fa-internet-explorer"></i><span>На уровне домена</span></Link>
                    <Link className="example_f collection_item" to="/site"><i class="fas fa-sitemap"></i><span>На уровне сайта</span></Link>
                    <Link className="example_f collection_item" to="/page"><i class="fas fa-print"></i><span>На уровне страницы</span></Link>
                    <Link className="example_f collection_item" to="/feedback"><i class="fas fa-comments"></i><span>На уровне обратной связи</span></Link>
                    <Link className="example_f collection_item" to="/communication"><i class="fas fa-american-sign-language-interpreting"></i><span>На уровне взаимодействия с пользователем</span></Link>
                </div>
    )
}
export default RecomTypes
