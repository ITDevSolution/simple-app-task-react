import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonData = await response.json()
        // console.log(jsonData)
        this.setState({ posts: jsonData })
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

