import React from 'react'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            data: []
        }
    }

    updateSearch = (event) => {
        console.log(event.target.value)
        this.setState({searchKey: event.target.value})
    }

    search = (event) => {
        let searchTerm = event.target.value
        fetch('https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=bYFMRHm7P79nLgVnPaLhYwOxbIgn3CdZ')
        .then((response) => {
                return response.json()
            }
        )
        .then((response) => {
            this.setState({data: response.data})
        })
        .catch((error) => {console.error(error)})
    }
    render() {

        return (
            <div>
                <input type = 'text' placeholder = 'Search a Gif' onChange = {this.updateSearch}/>
                <button onClick = {this.search} value = {this.state.searchKey}>Search</button>
            </div>
            
        )
    }

}

export default Search