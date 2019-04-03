import React, { Component } from 'react'

class SelectRecipe extends Component {
    handleChange = (e) => {
        this.props.handleChange(e.target.value)
    }

    render() {
        const allRecipes = []
        const { recipes } = this.props
        recipes.map(recipe => {
            return allRecipes.push(<option key={recipe.name} value={recipe.name}>{recipe.name}</option>)
        })
        return (
            <form className="SelectRecipe">
                <select size="4" value={this.props.currentRecipe} onChange={this.handleChange}>
                    {allRecipes}
                </select>
            </form>
        )
    }
}

export default SelectRecipe