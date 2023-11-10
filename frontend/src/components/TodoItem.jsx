import React from 'react';
import { Card, Form } from 'react-bootstrap';


const TodoItem = ({todoItem}) => {

  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Body>
            <Card.Text as='h3'>
                {todoItem.task}
            </Card.Text>

        </Card.Body>
      
    </Card>
)}
export default TodoItem;
