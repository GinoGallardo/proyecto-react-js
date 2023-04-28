import { TYPE } from "./Actioncart";

export const compraInicialState = {
  productos: [
    {id: 1, name: 'Producto 1', descripcion:'Descripcion', precio: 100},
    {id: 2, name: 'Producto 2', descripcion:'Descripcion', precio: 200},
    {id: 3, name: 'Producto 3', descripcion:'Descripcion', precio: 300},
    {id: 4, name: 'Producto 4', descripcion:'Descripcion', precio: 400},
    {id: 5, name: 'Producto 5', descripcion:'Descripcion', precio: 500},
    {id: 6, name: 'Producto 6', descripcion:'Descripcion', precio: 600},
  ],
  cart: [],
};

export function Reducecart(state,action){
  switch(action.type){
    case TYPE.Add_to_Cart:{
    }
    case TYPE.Remove_One_From_Cart:{
    }
    case TYPE.Remove_All_From_Cart:{
    }
    case TYPE.Reset_Cart:{
    }
    default:
      return state;
  }
    
}

export default Reducecart;