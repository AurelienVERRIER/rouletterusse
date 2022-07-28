import React from 'react'

class Homepage extends React.Component {
  constructor() {
    super()

    this.state = {
      play: false,
    }
  }

  handlePlayClick = () => {
    this.setState({ play: true })
  }

  render() {
    return (
      <>
        <div>
          <ul className="choices">
            <button
              className="btn btn-danger"
              onClick={this.props.handlePlayClick}
            >
              Jouer
            </button>
          </ul>
        </div>
      </>
    )
  }
}

export default Homepage
