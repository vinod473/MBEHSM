import React from 'react';
import ContactComponent from './component/ContactComponent';
import NavbarComponent from './component/NavbarComponent';
import CarouselComponent from './component/CarouselComponent';
import QuickAccessCards from './component/QuickAccessCards';
import Copyright from './component/CopyrightComponent';
import MessageComponent from './component/MessageComponent';
import BrandContent from './component/BrandContent';

const App = () => {
  return (
    <div>
      <header>
        <ContactComponent />
        <BrandContent />
        <NavbarComponent />
      </header>
      <main>
        <CarouselComponent />
        <MessageComponent />
        <QuickAccessCards />
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
