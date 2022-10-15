import React from 'react';
import ContactComponent from './component/ContactComponent';
import NavbarComponent from './component/NavbarComponent';
import CarouselComponent from './component/CarouselComponent';
import QuickAccessCards from './component/QuickAccessCards';

const App = () => {
  return (
    <div>
      <header>
        <ContactComponent />
        <NavbarComponent />
      </header>
      <main>
        <CarouselComponent />
        <QuickAccessCards />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
