import './singlePost.css';

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem, ipsum dolor sit amet.
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Ankit</b>
					</span>
					<span className="singlePostDate"> 1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam porro
					est doloremque cum neque harum saepe enim! Laudantium animi ipsum
					quisquam modi sunt magni, eaque officiis possimus amet molestias
					ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
					porro est doloremque cum neque harum saepe enim! Laudantium animi
					ipsum quisquam modi sunt magni, eaque officiis possimus amet molestias
					ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
					porro est doloremque cum neque harum saepe enim! Laudantium animi
					ipsum quisquam modi sunt magni, eaque officiis possimus amet molestias
					ipsam?
				</p>
			</div>
		</div>
	);
}
