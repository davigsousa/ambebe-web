import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

import Header from '../../App/Header';
import Footer from '../../App/Footer';
import HomeSection from './components/HomeSection';
import RankingSection from './components/RankingSection';
import DownloadBox from './components/DownloadBox';
import QrCode from './components/QrCode';
import logoamarela from '../../assets/logo-amarela.png';
import { Container } from './styles';

configureAnchors({ offset: -130 });
function Home() {
  return (
    <>
      <Header
        logo={logoamarela}
        links={[
          {
            name: 'Início',
            to: '/#inicio',
          },
          {
            name: 'Sobre o AMBEBE',
            to: '/#sobre',
          },
        ]}
        actionButton={{
          name: 'Download',
          to: '/#baixar',
        }}
      />
      <Container>
        <HomeSection />
        <RankingSection />
        <QrCode />
        <DownloadBox />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
