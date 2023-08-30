import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ posts: json }))
    }

    render() {
        const { posts, searchTerm } = this.state;

        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Blog posts</h1>
                </div>
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={searchTerm => this.setState({ searchTerm })}
                />
                {filteredPosts.map((post) => (
                    <div className="card" key={post.id}>
                        <div className="card-header">
                            #{post.id} {post.title}
                        </div>
                        <div className="card-body">
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                ))}
            </div>


        );
    }
}

export default App;
