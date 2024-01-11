import React from "react";


class MyVideoPlayer extends React.Component {
	render() {
		const title = this.props.title;
		const author = this.props.author;
		const thumb = this.props.thumbnail;
		const publish = this.props.datePublished;
		const views = this.props.views;
		return (
			<div >
				<div className="myVideoPlayer">
					<h2 className="subtitle" > {title} </h2>
					<div className="previewWindow">
						<img src={thumb} alt={title} />
						<img alt={title} className="play" src="https://mimo.app/i/player-button-play.png" />
					</div>
					<h4> Video Details: </h4>
					<p className="views"> {views} views </p>
					<p className="creator"> By: {author} </p>
					<p className="publish"> Published: {publish} </p>
				</div>
			</div>);
	}
}
export default MyVideoPlayer;