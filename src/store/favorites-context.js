import { useState, createContext } from "react";

// createContext() returns an Object, but it is also a component, explaining why the const is capitalised.
// createContext() takes an argument - which is the default state.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // declaring these functions does nothing at the start, only helps with autocompletion.
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// Responsibility: providing the context to all interested components that want to listen/read its values
// Also responsible for updating the context values.
// the const.Provider is an inbuilt function. memorise.
// Provider wants a value, that's the value that it stores which other components can listen to.

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  function addFavoriteHandler(favoriteMeetup) {
    // Ensuring that you get the latest version of the state.
    setUserFavorites((prevUserFavortites) => {
      return prevUserFavortites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavortites)=>{
      return prevUserFavortites.filter(meetup => {
        if (meetup.id === meetupId) {
          return false
        } else {
          return true
          // This means that meetup.id was not equal to meetupId, so do not remove it
        }
      });
    })
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  // YOU STOPPED HERE. CREATED CONTEXT FUNCTIONS. NEXT STEP IS TO CALL THEM WITHIN COMPONENTS THAT REQUIRE THEM.

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    // Pointing to the functions so that we can call them in components later on
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  
  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;