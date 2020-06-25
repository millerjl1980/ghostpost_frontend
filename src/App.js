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