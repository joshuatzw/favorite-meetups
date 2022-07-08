import { useState, useEffect } from "react";

import MeetUpList from "../components/meetups/MeetUpList";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // To prevent infinite loops, useEffect hook will be utilised to prevent infinite API calls. 
  // useEffect takes 2 arguments: (1) function, (2) an array of dependencies.
  // This ensures that the API FETCH REQUEST IS ONLY CALLED WHEN SOME CRITERIA IS MET.
  // When dependency is left as an empty Array [], useEffect is then only called ONCE the first time Comp is rendered.

  // Rule of using useEffect. You should add all external values that your effect relies on.
  useEffect(() => {
    // Fetching Data from API
    // Since the default for fetch is Get, there's no need to configure it with a second argument.
    setIsLoading(true);
    fetch(
      "https://react-getting-started-7bb50-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // This data returned is an object, not an array, transforming required.
        // We put all the data into a list.
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup)
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
        
      });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p> Loading... </p>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetups </h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}
