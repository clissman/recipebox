import React, { Component } from 'react'

class DisplayRecipe extends Component {
    constructor(props) {
        super(props)
        this.state={
            contentEditable: false
        }
    }
    handleClick = (recipeName) => {
        this.props.removeRecipe(recipeName)
    }

    handleClick2 = () => {
        this.setState({
            contentEditable: !this.state.contentEditable
        })
    }

    alterRecipe = (recipeName) => {
        this.props.alterRecipe(recipeName)
    }

    render() {
        let displayRecipe = []
        const { recipes, currentRecipe } = this.props

        recipes.forEach((recipe, index) => {
            if (recipe.name !== currentRecipe) {
                return
            }
            displayRecipe.push(
                <div key={recipe.name} className="DisplayRecipe">
                    <div className="DisplayRecipeEdit">
                        <h2 id={index} className="RecipeName" contentEditable={this.state.contentEditable} onBlur={this.alterRecipe}>
                            {recipe.name}
                        </h2>
                    </div>
                    <div className="btns">
                        <button onClick={() => this.handleClick(index)}><i className="far fa-trash-alt"></i></button>
                        {this.state.contentEditable === false ?
                            <button onClick={() => this.handleClick2()}><i className="far fa-edit"></i></button> 
                            :
                            <button onClick={() => this.handleClick2()}><i className="far fa-check-square"></i></button>
                        }
                    </div>
                    <Ingredients recipe={recipe.ingredients} />
                    <Instructions instructions={recipe.instructions} />
                </div>
            )
        })

        return (
            <div>{displayRecipe}</div>
        )
    }
}

function Instructions(props) {
    return (
        <div className="Instructions">
            <h2>Instructions</h2>
            {props.instructions.map(paragraph => <p key={paragraph[2]+'_'+paragraph[5]}>{paragraph}</p>)}
        </div>
    )
}

function Ingredients(props) {
    return (
        <div className="Ingredients">
            <h2>Ingredients</h2>
            <ul>
                {props.recipe.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
    )
}


export default DisplayRecipe