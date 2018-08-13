import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
	const videoItems = props.videos.map(video => {
		//console.log('video',video)
		return (
			<VideoListItem
				key={video.etag}
				video={video}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});

	return (
		<div className="column is-4">
			{videoItems}
		</div>
	);
};

export default VideoList;
