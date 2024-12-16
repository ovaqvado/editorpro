import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Editor from '../pages/Editor/Editor'
import Home from '../pages/Home/Home'

export default function Routers() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/editor' element={<Editor />} />
			<Route path='/about' element={<About />} />
		</Routes>
	)
}
