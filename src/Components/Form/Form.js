import { useState } from 'react';
import Item from '../Item/Item'
import { v4 as uuidv4 } from 'uuid';

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Apprendre le C", id: uuidv4()},
        {txt: "Continuer React", id: uuidv4()}
    ])

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => item.id !== id)
        setDataArr(filteredState)
    }

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

            <h2>Liste des choses à faire :dzqd </h2>
            <ul className='list-group'>
                {dataArr.map(item => {
                    return (
                        <Item 
                        txt = {item.txt}
                        key = {item.id}
                        id = {item.id}
                        delFunc = {deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}