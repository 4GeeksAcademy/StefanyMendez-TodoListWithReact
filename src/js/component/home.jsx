import { array } from "prop-types";
import React, { useEffect, useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [todo, setTodo] = useState("")
	const [todos, setTodos] = useState([])
	const [numberTasks, setTasks] = useState("No tasks, add a task")
	
	const handleSubmit = () => {
		
		if (todo !== "") {
			setTodos([todo, ...todos])
			setTasks(todos.length+1)
		}
		
	}
	const eliminarTodos = (id) => {
		const delTodo = todos.filter((to, index)=> index !== id);
		
		setTodos([...delTodo])
		setTasks(todos.length-1)
		
		if (todos.length-1 === 0) setTasks("No tasks, add a task")
	}
	
	return (
		<div className="conteiner-fluid">
			<h1>Todos</h1>
			<div className="container-todos" >
				
					<input className="input" name="task" type="text" placeholder="What needs to be done?" value={todo} onChange={(e)=>{setTodo(e.target.value)}} onKeyDown={(e)=>{
						if(e.keyCode === 13){
							handleSubmit();
							setTodo("")	
					}
				}}/>
			
				<ul className="list-group list-group-flush">
					{
						todos.map((t, index) => (
							<li className="list-group-item" key={index}>
								<label>{t}</label>
								<button className="btnClose" onClick={()=>eliminarTodos(index)}><i className="fa-solid fa-xmark"></i></button>
							</li>
						))
					}

				</ul>
				<hr />
				<label className="footer">{numberTasks + " items left"} </label>
			</div>
			<span id="place1" className="placeholder placeholder-xs shadow"></span>
			<br />
			<span id="place2" className="placeholder placeholder-xs shadow"></span>
		</div>
	);
};

export default Home;
