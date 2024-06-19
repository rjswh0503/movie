
import Movie from './Component/Movie/Popular';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Detail from './Component/Movie/Detail';
import './index.css';

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/movie/detail/:id/credits' element={<Detail/>}/> 
          </Routes>
        </Router>
    
  );
}

export default App;