import './login.css';

export default function Login() {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>Email</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your Email..."
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your Password..."
				/>
				<button className="loginButton">Login</button>
			</form>
			<button className="loginRegisterButton">Register</button>
		</div>
	);
}
