import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { Routes, Route } from 'react-router-dom';

function App() {
	const currentUser = false;
	return (
		<>
			<TopBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/posts" element={<Write />} />

				<Route
					path="/register"
					element={currentUser ? <Home /> : <Register />}
				/>
				<Route path="/login" element={currentUser ? <Home /> : <Login />} />
				<Route path="/post/:id" element={<Single />}></Route>
				<Route path="/write" element={currentUser ? <Write /> : <Login />} />
				<Route
					path="/settings"
					element={currentUser ? <Setting /> : <Login />}
				/>
			</Routes>
		</>
	);
}

export default App;
