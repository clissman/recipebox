import React, { Component } from 'react';
import AddRecipe            from './components/AddRecipe'
import SelectRecipe         from './components/SelectRecipe'
import DisplayRecipe        from './components/DisplayRecipe'
import './App.css';



 class RecipeBox extends Component {
   constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {
          id: 1,
          name: "Chicken à la King",
          ingredients: ["a chicken", "water"],
          instructions: ["Cook a chicken"]
        },
        {
          id: 2,
          name: "Beets",
          ingredients: ["five beets"],
          instructions: ["Put beets in water"]
        },
        {
          id: 3,
          name: "Licorice à la Garbage",
          ingredients: ["licorice", "garbage can"],
          instructions: ["Put licorice in garbage"]
        },
        {
          id: 4,
          name: 'Artichoke Pasta',
          ingredients: ['2 tablespoons butter', '2 cloves garlic minced', '1 cup heavy cream', '3 / 4 teaspoon salt', '1 teaspoon fresh - ground black pepper', '2 1 / 2 cups canned, drained artichoke hearts(two 14 - ounce cans), rinsed and cut into halves or quarters', '3 / 4 pound fusilli'],
          instructions: [
            "In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts.",
            "Cook until just heated through, about 3 minutes. In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives."
          ]
        }
      ],
      currentRecipe: "Beets",
      addRecipe: false
    }
   }
  updateRecipe = (e) => {
    this.setState({
      currentRecipe: e
    })
  }

  alterRecipe = (e) => {
    const { innerText, id } = e.target
    let recipeCopy = this.state.recipes
    recipeCopy[id].name = innerText
    this.setState({
      recipes: recipeCopy,
      currentRecipe: innerText
    })
  }

  toggleAdd = () => {
    this.setState((current) => ({
      addRecipe: !current.addRecipe
    }))
  }

  pushRecipe = (completeRecipe) => {
    this.setState((current) => ({
      recipes: [...current.recipes, completeRecipe]
    }))
  }

  removeRecipe = (recipeIndex) => {
    let val = 1
    let recipesCopy = [...this.state.recipes]
    if (recipeIndex === 0) {
      val = -1
    }
    recipesCopy.splice(recipeIndex, 1)
    let newIndex = this.state.recipes[recipeIndex - val].name
    this.setState({
      recipes: recipesCopy, 
      currentRecipe: newIndex
    })
  }

  componentDidMount = () => {
    if (!localStorage.getItem('localRecipes')) {
      localStorage.setItem('localRecipes', JSON.stringify(this.state.recipes))
    } else {
      this.setState({
        recipes: JSON.parse(localStorage.getItem('localRecipes'))
      })
    }
  }
  
  componentDidUpdate = () => {
      localStorage.setItem('localRecipes', JSON.stringify(this.state.recipes))
  }

  render() {
    return (
      <div className="wrapper">
        <div className="picture">
          <Title />
          <SelectRecipe recipes={this.state.recipes} handleChange={this.updateRecipe} currentRecipe={this.state.currentRecipe} />
          <AddRecipe addRecipe={this.state.addRecipe} toggleAdd={this.toggleAdd} pushRecipe={this.pushRecipe} />
        </div>
        <DisplayRecipe alterRecipe={this.alterRecipe} currentRecipe={this.state.currentRecipe} recipes={this.state.recipes} removeRecipe={this.removeRecipe} />
      </div>
    )
  }
}

function Title() {
  return (
    <div className="Title">
      <i className="fab fa-free-code-camp"></i>
      <h1>RecipeBox</h1>
    </div>
  )
}




export default RecipeBox;
