// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mango = () => {
    this.setState(p => ({count1: p.count1 + 1}))
  }

  banana = () => {
    this.setState(p => ({count2: p.count2 + 1}))
  }

  render() {
    const {count1} = this.state

    const {count2} = this.state

    return (
      <div className="greet1">
        <div className="greet2">
          <h1 className="greet3">
            bob ate {count1} mango and {count2} banana
          </h1>

          <div className="greet5">
            <div className="greet4">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.mango}>
                {' '}
                Eat mango
              </button>
            </div>

            <div className="greet4">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.banana}>
                {' '}
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
