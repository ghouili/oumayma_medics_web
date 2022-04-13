import React, { createContext, useState } from 'react'

const MainContext = createContext();

function Providercontxt({ children }) {
  const [auth, setAuth] = useState(true);
  const [sideBarShown, setSideBarShown] = useState(false);

  const Values = { auth, setAuth, sideBarShown, setSideBarShown };
  return (
    <MainContext.Provider value={Values}>
      { children }
    </MainContext.Provider>
  )
}

export  { Providercontxt, MainContext }