import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts: [],
      editing: false,
    }
  }

  // https://codepen.io/aamulumi/pen/NAymbW/
  castUpVote(id){
    fetch(`http://127.0.0.1:8000/api/posts/${id}/up_vote/`, {method: 'POST',})
    window.location.reload(true);
  }

  castDownVote(id){
    fetch(`http://127.0.0.1:8000/api/posts/${id}/down_vote/`, {method: 'POST',})
    window.location.reload(true);
  }

  allBoats(){
    fetch('http://127.0.0.1:8000/api/posts/boasts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  allRoats(){
    fetch('http://127.0.0.1:8000/api/posts/roasts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  highestRated(){
    fetch('http://127.0.0.1:8000/api/posts/highest_rated/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
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
        <br></br>
        <a href="http://localhost:8000/addpost">Submit a New Post</a>
        <br></br>
            <button onClick={() => this.allBoats()}>
            All Boasts
            </button>
            <br></br>
            <button onClick={() => this.allRoats()}>
            All Roasts
            </button>
            <br></br>
            <button onClick={() => this.highestRated()}>
            Highest Rated
            </button>
        <ul>
        {this.state.posts.map(post => {
          return (
            <div>
            <li><strong>{post.post_type}</strong></li>
            <li>Content: {post.content}</li>
            <li>Likes: {post.up_vote}</li>
            <li>Dislikes: {post.down_vote}</li>
            <li>Dated: {post.sub_time}</li>
            <br></br>
            <button onClick={() => this.castUpVote(post.id)}>
            UpVote
            </button>
            <button onClick={() => this.castDownVote(post.id)}>
            DownVote
            </button>
            </div>)
        })}
        </ul>
      </div>
    );
  }
  
}

export default App;