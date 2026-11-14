
import Home from './pages/Home';
import Schools from './pages/Schools';
import PrivateCoaching from './pages/PrivateCoaching';

function App() {
  const currentPage = new URLSearchParams(window.location.search).get('page');

  return (
    <div className="min-h-screen">
      {currentPage === 'schools' ? (
        <Schools />
      ) : currentPage === 'coaching' ? (
        <PrivateCoaching />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
