import { useState } from 'react';
import Item from '../Item/Item'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien"},
        {txt: "Apprendre le C"},
        {txt: "Continuer React"}
    ])

    const addItem = e => {
        e.preventDefault();

        console.log(e.value);
    }


    return (
        <div className='m-auto px-4 col-12 col-sm-10 col-lg-6'>
            <form className='mb-3'>
                <label htmlFor="" className='form-label mt-3'>Chose à faire</label>
                <input type="text" className="from-control d-block w-100" id="todo" />

                <button className='mt-2 btn btn-primary d-block' onClick={addItem}>Ajouter !</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className='list-group'>
                {dataArr.map((item, index) => {
                    return (
                        <Item 
                        txt={item.txt}
                        key={item.index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}