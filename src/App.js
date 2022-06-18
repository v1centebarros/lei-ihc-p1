import './static/css/App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './pages/home'
import Radio from './pages/radio'
import Program from './pages/program'
import Library from './pages/library'
import Search from './pages/search'
import NotFound from './pages/notFound'
import useLocalStorage from 'react-use-localstorage'

function App() {
	
	const [followingRadios, setFollowingRadios] = useLocalStorage('radios', "[]");
	const [playingData, setPlayingData] = useLocalStorage('playing', "[]");

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home playingData={[playingData, setPlayingData]} radioData={[followingRadios,setFollowingRadios]}/>} />
				<Route path="/radio/:id" element={<Radio playingData={[playingData, setPlayingData]} radioData={[followingRadios,setFollowingRadios]}/>} />
				<Route path="/radio/:rid/program/:pid" element={<Program playingData={[playingData, setPlayingData]} radioData={[followingRadios,setFollowingRadios]}/>} />
				<Route path="/library" element={<Library playingData={[playingData, setPlayingData]} radioData={[followingRadios,setFollowingRadios]}/>} />
				<Route path="/search" element={<Search playingData={[playingData, setPlayingData]} radioData={[followingRadios,setFollowingRadios]}/>} />
				<Route path="/*" element={<NotFound playingData={[playingData, setPlayingData]} radioData={[followingRadios,setFollowingRadios]}/>} />
			</Routes>
		</BrowserRouter>
  	);
}

export default App;