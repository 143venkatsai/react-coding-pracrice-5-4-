import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.random() * 100
    const number = Math.ceil(randomNumber)
    this.setState(() => ({count: number}))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0
    const valueType = value ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="num-type">Count is {valueType}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
