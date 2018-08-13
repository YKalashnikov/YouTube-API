import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDs5IGoWXTgJJVAAt_NqJER-5X5J9xgBjI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [], 
			selectedVideo: null,
		};

		this.videoSearch('I am not afraid'); 
	}

	videoSearch(term) {
		YTSearch(
			{
				key: API_KEY,
				term: term,
			},
			videos => {
				this.setState({ videos: videos, selectedVideo: videos[0]
				 }); 
			}
		);
	}

	render() {
	
		const videoSearch = debounce(term => {
			this.videoSearch(term);
		}, 300);
		return (
			<div className="container">
				<SearchBar onSearchTermChange={videoSearch} />
				<div className="columns">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
						videos={this.state.videos}
						onVideoSelect={selectedVideo => {
							this.setState({ selectedVideo });
						}}
					/>
				</div>
			</div>
		);
	}
}

export default App;
