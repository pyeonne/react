import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import NavigateSample from './NavigateSample';

function App() {
    const location = useLocation();
    return (
        <div>
            <ul>
                <li>
                    <Link to=''>홈</Link>
                </li>
                <li>
                    <Link to='/about'>소개</Link>
                </li>
                <li>
                    <Link to='/profiles'>프로필</Link>
                </li>
                <li>
                    <Link to='/navigate'>Navigate 예제</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/info' element={<About />} />
                <Route path='profiles/*' element={<Profiles />} />
                <Route path='navigate' element={<NavigateSample />} />
                <Route
                    path='/*'
                    element={
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
