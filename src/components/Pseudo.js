import React from 'react'

class Pseudo extends React.Component {
    constructor() {
        super();
    
        this.state = {
          pseudo: "",
        }
      }

handlePseudo = (e) => {
    this.setState({pseudo: e.target.value});
    }

	render() {
		return(
            <div className="pseudoForm ">
                <form onSubmit={this.handleSubmit} className="d-flex flex-column m-5 p-5 bg-light">
                    <label 
                        htmlFor="inputPseudo" 
                        className="fs-1 text-center">Choisissez votre pseudo
                    </label>
                    <input 
                        type="text" 
                        className={`fs-1 ${(this.state.pseudo.length > 1) ? "is-valid" : "is-invalid"}`} 
                        id="inputPseudo" 
                        onChange={this.handlePseudo}>
                    </input>
	                <button 
                        type="submit"
                        className="buttonSubmit"
                        onClick={this.props.handleLetsGoClick}
                        >Valider
                    </button>
                </form>
  
            </div>
		)
	}
}

export default Pseudo