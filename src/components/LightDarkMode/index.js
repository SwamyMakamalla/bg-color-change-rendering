// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  toDarkMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  toLightMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    let authButton

    if (mode === true) {
      authButton = (
        <div className="card-container">
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.toDarkMode}>
            Light Mode
          </button>
        </div>
      )
    } else {
      authButton = (
        <div className="card-container card-container-white">
          <h1 className="heading heading-block">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.toLightMode}>
            Dark Mode
          </button>
        </div>
      )
    }
    return <div className="bg-container">{authButton}</div>
  }
}

export default LightDarkMode
