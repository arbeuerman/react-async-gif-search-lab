import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch"

const gifUrl = 'https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g';

class GifListContainer extends Component {
    
    state = {
        gifUrls: [],
        // searchText: ''
    }

    componentDidMount() {
        fetch(gifUrl)
        .then(res => res.json())
        .then(json => { this.handleData(json.data)            
            //what if we don't slice it here and instead set gifulrs to all
            //.slice(0,3)
        })
        .catch(err => console.error(err));
    }

    handleData = (data) => 
    {
        const inputGifs = data.slice(0,3).map(gif => gif.images.original.url);
        this.setState({gifUrls: inputGifs})
    }

    searchForGifs = (search) => {
        // this.setState({searchText: search});
        const gifSearchUrl=`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`;
        fetch(gifSearchUrl)
        .then(res => res.json())
        .then(json => {this.handleData(json.data)})
        .catch(err => console.error(err));
    }
    
    render(){
        return(<div>
            <GifSearch handleSubmit={this.searchForGifs}/>
            <GifList gifs={this.state.gifUrls}/>
        </div>)
    }
}

export default GifListContainer;