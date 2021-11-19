import './header.css';

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img
				className="headerImg"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeSJd_R1NuypU6lV1x-EFLoB0MuBr2OPXg&usqp=CAU"
				alt=""
			/>
		</div>
	);
}
