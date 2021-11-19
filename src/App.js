import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const currentUser = true;
	return (
		<Router>
			<TopBar />
			<Routes>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/posts">
					<Home />
				</Route>
				<Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
				<Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
				<Route path="/post/:id">
					<Single />
				</Route>
				<Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
				<Route path="/settings">{currentUser ? <Setting /> : <Login />}</Route>
			</Routes>
		</Router>
	);
}

export default App;
