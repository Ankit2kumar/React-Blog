import './write.css';

export default function Write() {
	return (
		<div className="write">
			<img
				className="writeImg"
				src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className=" writeIcon fas fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: 'none' }} />
					<input type="text" value="" className="writeInput" autoFocus={true} />
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell Your Story..."
						type="text"
						className="writeInput writeText"
					></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	);
}
