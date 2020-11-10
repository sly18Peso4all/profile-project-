import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let contentful = require('contentful')

let client = contentful.createClient({
    space: 'qylnzaqla1yd',
    accessToken: 'e9ynq4JKVQCnX08LfMSpA_7OYMLfYpqihfmlyKQHuZc'
})

export default function App() {

    client.getEntries()
        .then(function (entries) {
            // log the title for all the entries that have it
            entries.items.forEach(function (entry) {

                    console.log(entry)
            })
        })
  return (
      <div className="App">

      </div>
    
  );
}

