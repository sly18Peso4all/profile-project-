import React from 'react';
import '../App.css';
import { Card, Badge } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Profiles(props) {
    return (
            <>
                {props.data.map((userIndex)=>(
                    <div>
                    <Card style={{width: '18rem', margin: '2px'}}>
                        <Card.Img style={{height: '150px'}} variant="top" src={userIndex.fields.profileImage.fields.url}/>
                        <Card.Body>
                            <Card.Title>{userIndex.fields.firstName} {userIndex.fields.lastName}</Card.Title>
                            <Card.Text>
                                {userIndex.fields.profileDescription}
                            </Card.Text>
                            {userIndex.fields.skills_.map((r) => (<Badge className="m-2" variant="secondary"><Link className="text-white" >{r}</Link></Badge>))}
                            <br/>
                            <a href={`mailto:${userIndex.fields.email}?subject=Request a new employee`} target="_blank"
                               className="btn btn-primary mb-4">Send Email</a>
                            <br/>
                            <a href={userIndex?.fields?.linkedIn} target="_blank" className="btn btn-secondary m-2">LinkedIn</a>
                            <a href={userIndex?.fields?.gitHub} target="_blank" className="btn btn-secondary m-2">GitHub</a>
                        </Card.Body>
                    </Card>
</div>
                ))};
</>
    );
}