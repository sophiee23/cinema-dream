import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';

// 1. 3개의 페이지 필요. 홈페이지, movie, movie detail 페이지
// 2. 홈페이지에서 배너를 볼 수 있음
//  2-1. 3가지 섹션의 영화. Top Popular movie / top rated movie / upcoming movie
//  2-2. 각 영화에 마우스 오버 : 제목, 장르, 점스, 인기도, 청불여부
//  2-3. 영화 섹션은 슬라이드
// 3. 영화 디테일 페이지에서 영화에 대한 디테일한 정보. 포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익 러닝타임 등
//  3-1. trailer 누르면 예고편 유투브
//  3-2. 영화 리뷰 볼 수 있음
//  3-3. 관련된 영화 조회
// 4. 영화 검색 기능
// 5. 영화 정렬 기능
// 6. 영화 필터링 기능
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/movies/:id" element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
