import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';


const TodoItem = ({ todo }) => {
    const [editble, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    let dispatch = useDispatch();

    return (
        <div className="todo-container">
            
            <div className="item-bullut row mx-2 align-items-center">
                {/* <div>{todo.id.length > 1 ? todo.id[2] : todo.id} </div> */}
                <div><svg style={{height: '13px'}} viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={3} /></svg></div>
                <div className=" input-name col">
                    {editble ? <input type="text" className="form-control" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> : <h4 className="todo-body"> {todo.name} </h4>}
                    
                </div>

                <button 
                    onClick={() =>{
                        console.log("update");
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name: name
                            }
                            
                        ));
                        if(editble){
                            setName(todo.name);
                        }
                        setEditable(!editble);
                    }}
                    className=""
                >{editble ? 
                    <svg style={{color: '#0EBB82'}} viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                    : 
                <svg style={{color: '#0EBB82'}} viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                }</button>

                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className=""><svg style={{color: '#E95E51'}} viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg></button>
            </div>
        </div>

    )
}


export default TodoItem;