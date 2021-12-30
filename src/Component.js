import './App.css';
import { useState } from 'react'
import Data from './Data';

function Component() {

    const [IdData, setIdData] = useState()
    const [Input, setInput] = useState()
    const [Items, setItems] = useState([])

    const addData = () => {
        setItems((newData) => {
            return [...newData, IdData, Input]
        })
       
        setInput("");
        setIdData("");
    }

    const idChange = (e) => {
        setIdData(e.target.value)
    }
    const inputChange = (e) => {
        setInput(e.target.value)
    }

  return (
    <>
      <div className="main">

      <div className="center">
          <br />
          <h2>Task</h2>
        <div className="inner">
            <input className="id" type="number" autoFocus onChange={idChange} value={IdData} placeholder='ID' />
            <input type="text" placeholder='Name' onChange={inputChange} value={Input}/>
            <i className='fa fa-check' onClick={addData}></i>
        </div>



        <ol>

            {
                Items.map((oldData, index) => {
                    return <Data inputData={oldData} 
                   />
                })
            }
            </ol>
            
        
      </div>

      </div>
    </>
  );
}

export default Component;
