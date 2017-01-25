import React, { Component } from 'react';
import { Accordion, Panel, Button, Modal } from 'react-bootstrap';
import logo from './logo.svg';
import { LIST_OF_RECIPES } from './data';
import './App.css';

const RecipeList = ({ recipes }) =>
  <Accordion>
    { recipes.map(recipe =>
      <Panel key={recipe.id} eventKey={recipe.id} header={recipe.name}>
        <IngredientList ingredients={recipe.ingredients} />
      </Panel>
    )}
  </Accordion>

const IngredientList = ({ ingredients }) =>
  <div className="ingredientList">
    <h2>Ingredients</h2>
    <ul>
      { ingredients.map(ingredient =>
        <li key={ingredient.id}>{ingredient.name}</li>
      )}
    </ul>
  </div>

const NewRecipeModal = ({heading, showModal, hideModal}) =>
  <Modal show={showModal} onHide={hideModal}>
    <Modal.Header closeButton>
      <Modal.Title>{heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      This is the body text
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={hideModal}>Submit</Button>
    </Modal.Footer>
  </Modal>

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: LIST_OF_RECIPES,
      newRecipeModal: false,
    };
    this.openNewRecipeForm = this.openNewRecipeForm.bind(this);
    this.closeNewRecipeForm = this.closeNewRecipeForm.bind(this);
  }

  openNewRecipeForm() {
    this.setState({ newRecipeModal: true });
  }

  closeNewRecipeForm() {
    this.setState({ newRecipeModal: false });
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RecipeList recipes={recipes} />
        <Button bsStyle="primary"
                bsSize="large"
                onClick={this.openNewRecipeForm}
        >
          Add New Recipe
        </Button>
        <NewRecipeModal heading="Add New Recipe"
                        showModal={this.state.newRecipeModal}
                        hideModal={this.closeNewRecipeForm}
        />
      </div>
    );
  }
}

export default App;
