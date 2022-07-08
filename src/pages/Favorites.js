import { useContext } from 'react'

import FavoritesContext from '../store/favorites-context'
import MeetUpList from '../components/meetups/MeetUpList'

export default function FavoritesPage() {

  const favoritesCtx = useContext(FavoritesContext)

  let content;

  favoritesCtx.totalFavorites === 0 
    ? content = <p>You got no favorites yet. Start adding some?</p>
    : content = <MeetUpList meetups={favoritesCtx.favorites}/>

  return <div>
    <h1> My Favorites </h1>
    {content}
  </div>
}