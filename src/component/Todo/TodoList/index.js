import React from 'react'
import {ListContainer, Row, Text, DeleteIcon} from "./style"
import {useAuthContext} from '../hooks/useAuthContext'

function TodoList({todos, fetchData}) {
    const {user} = useAuthContext()
    const updateTodo = async (id) => {
        if (!user) {
            return;
        }
    
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: 'PATCH', 
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                },
            });
    
            fetchData();
        } catch (err) {
            console.error('Güncelleme hatası:', err);
        }
    };

    const deleteTodo = async (id) => {
        if (!user) {
            return;
        }
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                },
            });
    
            if (response.status === 200) {
                fetchData();
            } else {
                console.error('Todo silme hata:', response.statusText);
            }
        } catch (err) {
            console.error('Todo silme hata:', err.message);
        }
    };
  return (
    <div>
        <ListContainer>
            {todos?.map((todo) =>(
                <Row key={todo._id}>
                    <Text 
                    onClick={() => updateTodo(todo._id)}
                    isCompleted={todo.completed}
                    >
                        {todo.text}
                    </Text>
                    <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>

                </Row>
            ))}
        </ListContainer>
    </div>
  );
}

export default TodoList;