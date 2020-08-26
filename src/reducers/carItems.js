import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const carItems = createReducer(initialState, {
  ADD_TO_CAR: (state, action) => {
    return {
      ...state,
      items: [...state.items, action.payload]
    };
  },

  REMOVE_FROM_CAR: (state, action) => {
    return {
      ...state,
      items: state.items.filter(carItem => carItem.id !== action.payload.id)
    };
  },

  UPDATE_CAR: (state, action) => {
    let newArr = state.items.map((item, index) => {
      if (item.id == action.payload.id) {
        return {
          id: action.payload.id,
          complements: action.payload.complements,
          content: action.payload.content,
          description: action.payload.description,
          externalCode: action.payload.externalCode,
          image: action.payload.image,
          items: action.payload.items,
          listaAdicionais: action.payload.listaAdicionais,
          name: action.payload.name,
          order: action.payload.order,
          price: action.payload.price,
          qtdItem: action.payload.qtdItem,
          valorTotal: action.payload.valorTotal
        };
      }

      return item;
    });

    return {
      ...state,
      items: newArr
    };
  }
});

export default carItems;
