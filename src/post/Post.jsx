import './post.css';

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4g-MlGkp_mkCJvEvx0S7XEpjJFnutJ9jFKQ&usqp=CAU"
				alt=""
			/>

			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>

				<span className="postTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis.
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus
				fugiat, error rerum sequi, itaque expedita voluptate cum provident
				consequuntur ex modi? Blanditiis odit ipsam impedit enim dolores quia
				eum.
			</p>
		</div>
	);
}
