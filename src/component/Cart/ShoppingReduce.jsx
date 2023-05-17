import TYPES from "./shoppingAction";
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpeg'
import img4 from '../../img/img4.jpeg'
import img5 from '../../img/img5.jpeg'
import img6 from '../../img/img6.jpeg'

export const shoppingInitialState = {
  products: [
    {id: 1, name: 'Producto 1', image: img1, descripcion:'Descripcion', price: 100},
    {id: 2, name: 'Producto 2', image: img2, descripcion:'Descripcion', price: 200},
    {id: 3, name: 'Producto 3', image: img3, descripcion:'Descripcion', price: 300},
    {id: 4, name: 'Producto 4', image: img4, descripcion:'Descripcion', price: 400},
    {id: 5, name: 'Producto 5', image: img5, descripcion:'Descripcion', price: 500},
    {id: 6, name: 'Producto 6', image: img6, descripcion:'Descripcion', price: 600},
  ],
  cart: [],
};

export function ShoppingReduce(state,action){
  switch(action.type){
    case TYPES.ADD_TO_CART:{
      let newItem = state.products.find(
        (product) => product.id === action.payload
        );
      let itemInCart = state.cart.find(item=> item.id === newItem.id)
      
      return itemInCart
        ? {
          ...state, 
          cart: state.cart.map(item=>
            item.id===newItem.id
            ? {...item, quantity: item.quantity + 1}
            : item
            ),
          }
          :{
            ...state,
            cart: [...state.cart, {...newItem, quantity: 1}],
          };
        }

    case TYPES.REMOVE_ONE_FROM_CART:{
      let itemToDelete = state.cart.find(item => item.id===action.payload);
      
      return itemToDelete.quantity > 1 ? {
        ...state,
        cart: state.cart.map((item) =>
        item.id=== action.payload
        ? {...item, quantity: item.quantity - 1}
        :item
        ),
      }
      :{
        ...state,
        cart: state.cart.filter((item)=>item.id !== action.payload),
      };
    }

    case TYPES.REMOVE_ALL_FROM_CART:{
      return {
        ...state,
        cart: state.cart.filter((item)=>item.id !== action.payload),
      }
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
    
  }
    
}

export default ShoppingReduce;