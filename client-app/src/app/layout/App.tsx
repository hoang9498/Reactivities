import { useEffect, useState } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5067/api/activities')
      .then(response => {
        setActivities(response.data);
      })
  }, [])
  return (
    <div>
         <NavBar />
        <List>
          {activities.map((activity => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          )))}
        </List>
    </div>
  );
}
export default App;