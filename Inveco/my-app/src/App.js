import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    liked: false,
    counter: 100,
  };

  likeButtonHandler = () => {
    if (this.state.liked === true) {
      this.setState((state) => ({
        liked: false,
        counter: (state.counter -= 1),
      }));
    }
    if (this.state.liked === false) {
      this.setState((state) => ({
        liked: true,
        counter: (state.counter += 1),
      }));
    }
  };

  render() {
    return (
      <>
        <div>
          <h2
            className={`like-button ${this.state.liked ? 'liked' : ''}`}
            onClick={this.likeButtonHandler}
          >
            Like | <span className={'likes-counter'}>{this.state.counter}</span>
          </h2>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                        border: 2px solid #d9d9d9;
                        width: 75px;
                        background-color: #f2f2f2;
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
