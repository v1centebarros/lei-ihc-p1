import './static/css/App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './pages/home'
import Radio from './pages/radio'
import Program from './pages/program'
import Library from './pages/library'
import Search from './pages/search'
import NotFound from './pages/notFound'
import {createContext} from "react"
import useLocalStorage from 'react-use-localstorage'

function App() {

	const radioData = useLocalStorage("radios", "[]")
	const RadioContext = createContext()
	return (
		<RadioContext.Provider value={radioData}> 
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/radio/:id" element={<Radio />} />
					<Route path="/radio/:rid/program/:pid" element={<Program />} />
					<Route path="/library" element={<Library />} />
					<Route path="/search" element={<Search />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</RadioContext.Provider>
  );
}

export default App;