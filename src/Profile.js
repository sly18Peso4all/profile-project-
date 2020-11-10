import React from 'react';
import './App.css';
import {Button, Card,} from "react-bootstrap";


export default function Profile(props) {
  return (
    <div>

        <Card style={{ width: '18rem', margin: '2px'}}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.profileValue.firstName} {props.profileValue.lastName}</Card.Title>
                <Card.Text>
                    {props.profileValue.profileDescription}
                </Card.Text>
                <a href={`mailto:${props.profileValue.email}?subject=Request a new employee`} target="_blank" className="btn btn-primary m-2">Send Email</a>
                <br />
                <a href="#" target="_blank" className="btn btn-primary m-2">LinkedIn</a>
                <a href="#" target="_blank" className="btn btn-primary m-2">GitHub</a>
            </Card.Body>
        </Card>


    </div>
  );
}
