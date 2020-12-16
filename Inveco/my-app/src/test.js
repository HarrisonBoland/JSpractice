import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    liked: false
  }
  
  likeButtonHandler = () => {
    if (this.state.liked === true) {
      this.setState({
        liked: false
      })
    }
    if (this.state.liked === false) {
      this.setState({
        liked: true
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <h2 className={`like-button ${this.state.liked ? 'liked' : ''}`} onClick={this.likeButtonHandler}>Like | {this.state.liked ? '101' : '100'}</h2>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}