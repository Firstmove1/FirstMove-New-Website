
import Home from './pages/Home';
import Schools from './pages/Schools';

function App() {
  const isSchoolsPage =
    new URLSearchParams(window.location.search).get('page') === 'schools';

  return (
    <div className="min-h-screen">
      {isSchoolsPage ? <Schools /> : <Home />}
    </div>
  );
}

export default App;
