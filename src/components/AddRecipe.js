import React, { Component } from 'react';

class AddRecipe extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let ingredients = [e.target.ingredients.value]
        let instructions = [e.target.instructions.value]
        const completeRecipe = { name, ingredients, instructions }
        this.props.pushRecipe(completeRecipe)
        this.props.toggleAdd()
    }

    render() {
        return (
            <div className="AddRecipe">
                <button onClick={() => this.props.toggleAdd()} className="AddRecipe__toggle">Add Recipe</button>
                {this.props.addRecipe === true ?
                    <div className="AddRecipe__container">
                        <form id="add-recipe" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder="Recipe name" />
                            <input type="text" name="ingredients" placeholder="Recipe ingredients" />
                            <textarea name="instructions" placeholder="Recipe instructions" />
                            <button>Add</button>
                        </form>
                    </div> :
                    null
                }
            </div>
        )
    }
}

export default AddRecipe