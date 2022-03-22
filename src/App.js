import {Route, Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/Allmeetups';
import FavoritesPage from './pages/Favorites';
import NewmeetupsPage from './pages/Newmeetups';
import Layout from './components/layout/Layout';


function App() {
  return (
<Layout>
 
  <Routes>
    <Route exact path="/" element={<AllMeetupsPage />} />
    <Route exact path='/new-meetup'element={<NewmeetupsPage />}/>
    <Route exact path='/favorite' element={<FavoritesPage />} />
  </Routes>
</Layout>

  );
  
}

export default App;
