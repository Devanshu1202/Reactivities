import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

function App() {
  const [activities, setActivities]=useState([ ]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      // console.log(response.data);
      setActivities(response.data);
      console.log(activities);
    })
  }, [])

  console.log(activities);
  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities'/>
        <ul>
        {activities.map((activity: any) =>(
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
        </ul>
    </div>
  );
}

export default App;
