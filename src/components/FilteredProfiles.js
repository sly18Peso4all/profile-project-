import React,{useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import {Badge, Card} from "react-bootstrap";

export default function FilteredProfiles(props){
    let { skill } = useParams();

    return(
        <>
            {props.data.filter(user=> user.fields.skills_.map(s=>s.toLowerCase()).indexOf(skill.toLowerCase())>-1).map((userIndex)=>(
        <div>

            <Card style={{width: '18rem', margin: '2px'}}>
                <Card.Img style={{height: '150px'}} variant="top"
                                  src={`${userIndex.fields.profileImage?.fields.file.url}`}/>
                      <Card.Body>
                          <p>Filtered UserProfiles</p>
                            <Card.Title>{userIndex.fields.firstName} {userIndex.fields.lastName}</Card.Title>
                            <Card.Text>
                                {userIndex.fields.profileDescription}
                            </Card.Text>
                          {userIndex.fields.skills_.map((r) => (<Badge className="m-2" variant="secondary"><Link className="text-white">{r}</Link></Badge>))}

                          <br/>
                            <a href={`mailto:mail}?subject=Request a new employee`} target="_blank"
                               className="btn btn-primary mb-4">Send Email</a>
                            <br/>
                            <a href="#" target="_blank" className="btn btn-secondary m-2">LinkedIn</a>
                            <a href="#" target="_blank" className="btn btn-secondary m-2">GitHub</a>
                        </Card.Body>
                    </Card>
                </div>
            ))};

            </>
    )

}