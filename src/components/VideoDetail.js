import React from 'react';
import Timestamp from 'react-timestamp';

import './VideoDetail.css';

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div className="block">
				<span className="loader" size="massive"></span>

			</div>
		);
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail column is-8">
			<div className="video-container">
				<iframe src={url} title="videos" />
			</div>
			<br />
			<div className="box video-meta">
				<div className="video-title">
					{video.snippet.title}
				</div>
				<div>
			<hr/>
				</div>
				<article className="media">
					<div className="media-content">
						<div className="content">
							<p>
								{video.snippet.description}
							</p>
						</div>
						<div className="video-chanel">
						by {video.snippet.channelTitle}, Published on  
						<div className="Time">
						<Timestamp time={video.snippet.publishedAt} /> 
						</div>
					</div>
					</div>
				</article>
			</div>
		</div>
	);
};

export default VideoDetail;
