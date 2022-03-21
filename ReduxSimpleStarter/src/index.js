import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom'


import SearchBar from './components/search_bar';
import youtubeApiSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'Your key';



// create a new component. This component should produce some HTML


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        youtubeApiSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }
    // babe compiles JSX into vanila js which can be rendered into DOM
    render() {

        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={term => videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }

};

//  Take this component's generated HTML and put it on page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))