export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);

const reducer = (state, action) => {

    console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET': 
            const existingItem = state.basket.find(item => item.id === action.item.id);
            if (existingItem) {
                return {
                    ...state,
                    basket: state.basket.map(item => 
                        item.id === action.item.id 
                            ? { ...item, quantity: item.quantity + action.item.quantity }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, quantity: action.item.quantity }],
                };
            }
        
        case 'REMOVE_FROM_BASKET': 
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1); 
            } else{
                console.warn(
                    `Can't remove the product (id: ${action.id}) as its not present in the basket!`
                )
            }

            return {...state, basket : newBasket}

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                basket: state.basket.map(item => 
                    item.id === action.id 
                        ? { ...item, quantity: action.quantity }
                        : item
                )
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;