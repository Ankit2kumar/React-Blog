import Sidebar from '../../sidebar/Sidebar';
import './setting.css';

export default function Setting() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Your Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.pexels.com/photos/1342650/pexels-photo-1342650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className=" settingsPPIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: 'none' }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="John" />
					<label>Email</label>
					<input type="email" placeholder="John@gmail.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
