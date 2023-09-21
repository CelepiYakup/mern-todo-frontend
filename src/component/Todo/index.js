import React, { useEffect, useState } from "react";
import Form from "./Form";
import { Container } from "./style";
import TodoList from "./TodoList/index";
import { useAuthContext } from './hooks/useAuthContext'

function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null); 

    const { user } = useAuthContext();

    const fetchData = async () => {
        try {
            const response = await fetch("/api/todos", {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                },
            });
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            setError(error.message); 
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);

    const addTodo = async (e) => {
        e.preventDefault();
    
        if (input.length === 0) return null;
    
        try {
            await fetch("/api/todos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`,
                },
                body: JSON.stringify({
                    text: input,
                    completed: false,
                }),
            });
    
            fetchData(); 
            setInput(""); 
        } catch (error) {
            console.error('Something wrong:', error);
           
            setError("Something wrong: " + error.message);
        }
    };
  

    return (
        <Container>
            <Form input={input} setInput={setInput} addTodo={addTodo} />
            <TodoList todos={todos} fetchData={fetchData} />
        </Container>
    );
}

export default Todo;
