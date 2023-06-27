import { createContext, useContext, useReducer, useEffect } from "react";

export const initialState = {
  theme: localStorage.getItem('theme') || "light",
  APIdata: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type){
    case 'light':
      localStorage.setItem('theme', action.playload)
      return {...state, theme: action.payload}

    case 'dark':
      localStorage.setItem('theme', action.payload)
      return {...state, theme: action.payload}

    case 'APIdata':
      const data = {...state, data: action.payload}
      return data

    case 'addFav':
      localStorage.setItem('favs', JSON.stringify([...state.favs, action.payload]))
      return {...state, favs: [...state.favs, action.payload]}

    case 'removeFav':
      const newList = state.favs.filter(d => d.id !== action.payload.id)
      localStorage.setItem('favs', JSON.stringify(newList))
      return {...state, favs: newList}

    case 'removeAllFavs':
      localStorage.setItem('favs', '[]')
      return {...state, favs: []}
    default: 
      throw new Error('action type error')
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)
  const API = 'https://jsonplaceholder.typicode.com/users'

  const getList = async() => {
    try {
      const res = await fetch(API)
      if(res.ok){
        const data = await res.json()
        dispatch({type: 'APIdata', payload: data})
      }else{
        dispatch({type: 'APIdata', payload: res})
      }
    } catch (error) {  }
  }

  useEffect(() => {
    const favsStorage = localStorage.getItem('favs') || "[]"
    localStorage.setItem('favs', favsStorage)
    getList()
  }, [])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)