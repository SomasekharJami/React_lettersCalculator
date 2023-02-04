import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {length: 0, sentence: ''}

  onTyping = event => {
    this.setState({sentence: event.target.value})
    this.setState(prevState => ({
      length: prevState.sentence.length,
    }))
  }

  render() {
    const {length, sentence} = this.state

    return (
      <div className="mainCon">
        <div className="imgCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="mainImg"
          />
        </div>
        <div className="textCon">
          <h1 className="mainH">Calculate the Letters you enter</h1>
          <div className="inpCon">
            <label className="labelP" htmlFor="inpEl">
              Enter the phrase
            </label>
            <input
              className="inpBox"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onTyping}
              value={sentence}
              id="inpEl"
            />
            <p className="countP">No.of letters: {length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
