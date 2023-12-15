import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
    const Todos = useSelector(state => state.todos)
    const Dispatch = useDispatch()
    console.log(Todos)
    return (
        <div>
            {Todos && Todos.map((x) => (<div key={x.id}>{x.text} <button onClick={() =>Dispatch(removeTodo(x.id))}> del</button></div>))}
        </div>
    )
}