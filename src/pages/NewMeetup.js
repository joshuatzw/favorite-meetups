import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useHistory } from 'react-router-dom';


export default function NewMeetupPage() {
  const history = useHistory();

  function addMeetUpHandler(meetupData) {
    //Send a HTTP request here, after collecting data from the form.
    
    // Built in JS function - fetch('url to fetch from/somepage');
    // Firebase requires you to add .json at the end.
    
    // Fetch sends a Get request.
    // Adding a second argument transforms it to a POST request.
    fetch(
      'https://react-getting-started-7bb50-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(()=>{
      history.replace('/')
    });
  }

  return <section>
      <h1> Add New Meetup </h1>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler}/>
    </section>
}