import React from 'react';
import {Jumbotron, Container } from 'react-bootstrap'

export default function Menu(){

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Find Your Expert</h1>
                    <p>
                        Pick your expert based on their skills level!
                    </p>
                </Container>
            </Jumbotron>
        </div>

    )
}