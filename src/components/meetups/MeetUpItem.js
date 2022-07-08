import { useContext } from 'react'

import classes from './MeetUpItem.module.css'
import Card from '../UI/Card'
import FavoritesPage from '../../pages/Favorites';
import FavoritesContext from '../../store/favorites-context';



export default function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return <Card>
  <li className={classes.item}>
    <div className={classes.image}> 
      <img src={props.image} alt ={props.title} />
    </div>
    <div className={classes.content}>
      <h3> {props.title} </h3>
      <address> {props.address} </address>
      <p> {props.description} </p>
    </div>
    <div className={classes.actions}>
      <button onClick={toggleFavoriteStatusHandler}> {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'} </button>
    </div>
  </li>
  </Card>
}