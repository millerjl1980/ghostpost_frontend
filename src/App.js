import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/posts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  render(){
    return (
      <div>
        <h1>Ghostpost!</h1>
        <ul>
        {this.state.posts.map(post => {
          return (
            <div>
            <li>Type: {post.post_type}</li>
            <li>Content: {post.content}</li>
            <li>Likes: {post.up_vote}</li>
            <li>Dislikes: {post.down_vote}</li>
            <li>Dated: {post.sub_time}</li>

            <br></br>
            </div>)
        })}
        </ul>
      </div>
    );
  }
  
}

export default App;