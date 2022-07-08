import { useRef } from 'react';

import Card from '../UI/Card'
import classes from './NewMeetUpForm.module.css'

export default function NewMeetUpForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;   

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData);
  }

  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      {/* Title */}
      <div className={classes.control}>
        <label htmlFor='title' >Meetup Title</label>
        <input type="text" required id="title" ref={titleInputRef}></input>
      </div>

      {/* Image */}
      <div className={classes.control}>
        <label htmlFor='image' >Image</label>
        <input type="url" required id="image" ref={imageInputRef}></input>
      </div>

      {/* Address */}
      <div className={classes.control}>
        <label htmlFor='image' >Address</label>
        <input type="text" required id="address" ref={addressInputRef}></input>
      </div>

      {/* Description */}
      <div className={classes.control}>
        <label htmlFor='image' >Description</label>
        <textarea required id="description" rows='5' ref={descriptionInputRef}/>
      </div>

      {/* Submit Button */}
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
}