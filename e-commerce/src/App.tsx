import React from 'react';
import Header from './componentes/Header';
import { Banner } from './componentes/banner';
import { Main } from './componentes/main';


function App() {
  return (
    <>
      <Header/>
      <Banner title='Promoção'/>
      <Main/>
    </>
    
  );
}

export default App;
