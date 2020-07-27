import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utillity';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
}

const INGREDIANT_PRICES = {
    salad: 0.2,
    meat: 1,
    cheese: 0.4,
    bacon: 0.7,
}

const addIngredient = (state, action) => {
    const updatedIngredientAdd = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredientsAdd = updateObject (state.ingredients, updatedIngredientAdd);
    const updatedStateAdd = {
        ingredients: updatedIngredientsAdd,
        totalPrice: state.totalPrice + INGREDIANT_PRICES[action.ingredientName],
        building: true,
    }
    return updateObject(state, updatedStateAdd);
}

const removeIngredient = (state, action) => {
    const updatedIngredientRemove = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngredientsRemove = updateObject (state.ingredients, updatedIngredientRemove);
    const updatedStateRemove = {
        ingredients: updatedIngredientsRemove,
        totalPrice: state.totalPrice + INGREDIANT_PRICES[action.ingredientName],
        building: true,
    }
    return updateObject(state, updatedStateRemove);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        error:false,
        totalPrice: 4,
        building: false,
    });
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
}

const reducer = (state = initialState, action) => {
    switch(action.type) { 
        case actionTypes.ADD_INGREDIENT: return addIngredient(state ,action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENT: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;