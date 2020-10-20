import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

const TodoInput = () => {
    let [name, setName] = useState();
    let dispatch = useDispatch();

    const inputHandler = ()=>{

        if(!name) {
            message.error('Todo body is empty! Please write something');
        } else {
            dispatch(addTodo(
                {
                    id: uuid(),
                    name: name
                }
            ));
            setName('');
            message.success('Todo added successfully!');
        }

    }
    return (
        <div>
            {/* <h3>TodoInput</h3> */}
            <div className="input-form row m-2">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="col form-control" />
                <button
                    onClick={inputHandler}

                    className="add-button btn-primary mx-2">  <svg style={{height: '20px', color: 'white'}} viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg> Add</button>
            </div>
        </div>



    )
}


export default TodoInput;