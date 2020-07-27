import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain'
import Footer from './components/Footer'
import mock from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={mock.categorias[0].videos[0].titulo}
        url={mock.categorias[0].videos[0].url}
        videoDescription={`Descricao do video aqui.`}
      />
      <Carousel
        ignoreFirstVideo
        category={mock.categorias[0]}
      />
      <Carousel
        category={mock.categorias[1]}
      />
      <Carousel
        category={mock.categorias[2]}
      />
      <Carousel
        category={mock.categorias[3]}
      />
      <Carousel
        category={mock.categorias[4]}
      />
      <Carousel
        category={mock.categorias[5]}
      />
      <Footer/>
    </div>
  );
}

export default App;
