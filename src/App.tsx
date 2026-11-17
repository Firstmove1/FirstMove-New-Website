
import Home from './pages/Home';
import Schools from './pages/Schools';
import PrivateCoaching from './pages/PrivateCoaching';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const currentPage = new URLSearchParams(window.location.search).get('page');

  return (
    <div className="min-h-screen">
      {currentPage === 'schools' ? (
        <Schools />
      ) : currentPage === 'coaching' ? (
        <PrivateCoaching />
      ) : currentPage === 'contact' ? (
        <Contact />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
