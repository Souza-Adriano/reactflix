import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain, { randomBanner } from './components/BannerMain'
import Footer from './components/Footer'
import mock from './data/dados_iniciais.json';

function App() {
  const banner = randomBanner(mock.categorias)
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={banner.titulo}
        url={banner.url}
        videoDescription={banner.category}
      />
      <Carousel
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
