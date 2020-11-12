import React, {useState} from 'react';
import '../App.css';
import { Card, Badge} from "react-bootstrap";
import Skills from "./Skills";



export default function Profile(props) {
    return (
        <div>
            <Card style={{width: '18rem', margin: '2px'}}>
                <Card.Img style={{height: '150px'}} variant="top"
                          src={props.profileValue.profileImage.fields.file.url}/>
                <Card.Body>
                    <Card.Title>{props.profileValue.firstName} {props.profileValue.lastName}</Card.Title>
                    <Card.Text>
                        {props.profileValue.profileDescription}
                    </Card.Text>
                    <Badge className="m-2" variant="primary">skillz</Badge>
                    {props?.profileValue?.skills_?.map(skill => <Badge>{skill}</Badge>)}
                    <br/>
                    <a href={`mailto:${props.profileValue.email}?subject=Request a new employee`} target="_blank"
                       className="btn btn-primary mb-4">Send Email</a>
                    <br/>
                    <a href="#" target="_blank" className="btn btn-secondary m-2">LinkedIn</a>
                    <a href="#" target="_blank" className="btn btn-secondary m-2">GitHub</a>
                </Card.Body>
            </Card>
        </div>
    );
}

