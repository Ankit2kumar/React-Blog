import './sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nZJjTnFEm_CFh33YVtM_r8stemBCIRzLfQ&usqp=CAU"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
					voluptatem quaerat dolor autem soluta quos itaque modi eos veritatis.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Cinema</li>
					<li className="sidebarListItem">Tech</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fab fa-facebook-square"></i>
					<i className="sidebarIcon fab fa-twitter-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
					<i className="sidebarIcon fab fa-instagram-square"></i>
				</div>
			</div>
		</div>
	);
}
