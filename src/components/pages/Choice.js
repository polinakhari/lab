import React, {useState} from 'react'
import Form from "../form/Form"
export default function Choice() {
const [type, setType] = useState("domain");

    return (
        <div className="choice">
            <div className="collection">
                    <div className="example_f collection_item" onClick={() => {setType("domain")}}><i class="fab fa-internet-explorer"></i><span>На уровне домена</span></div>
                    <div className="example_f collection_item" onClick={() => {setType("site")}}><i class="fas fa-sitemap"></i><span>На уровне сайта</span></div>
                    <div className="example_f collection_item" onClick={() => {setType("page")}}><i class="fas fa-print"></i><span>На уровне страницы</span></div>
                    <div className="example_f collection_item" onClick={() => {setType("feedback")}}><i class="fas fa-comments"></i><span>На уровне обратной связи</span></div>
                    <div className="example_f collection_item" onClick={() => {setType("communication")}}><i class="fas fa-american-sign-language-interpreting"></i><span>На уровне взаимодействия с пользователем</span></div>
                </div>
            <Form type={type}/>
        </div>
    )
}
