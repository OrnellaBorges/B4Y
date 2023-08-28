import {createSlice} from "@reduxjs/toolkit"

//récupération du panier présent dans le localStorage que l'on stock dans une variable lsBasket
let lsBasket = JSON.parse(window.localStorage.getItem('b4y-basket'))
//si lsBasket est null (introuvable dans le storage pas de panier)
if(lsBasket === null){
    //on initialise un tableau vide pour lsBasket
    lsBasket = []
}

//cette fonction va calculer le prix total du panier venant du storage (si le storage est vide elle retournera 0)
const calculateTotalAmount = (basket) => {
    let basketPrice = 0
    basket.forEach((b) => {
        basketPrice += parseInt(b.quantityInCart) * parseFloat(b.price)
    })
    return basketPrice
}
//on appel la fonction pour initialiser un prix par défault lors du chargement du panier dans le store
let totalPrice = calculateTotalAmount(lsBasket)

/*on initialise une state: 
    soit on aura basket avec un tableau d'objet et totalPrice avec la somme totale
    soit on aura basket avec un tableau vide et totalPrice à zero
*/
const initialState = {
    basket: lsBasket,
    totalPrice: totalPrice
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        modifyBasket: (state, action) => {
            let total = calculateTotalAmount(action.payload)
            state.basket = action.payload
            state.totalPrice = total
        },
        cleanBasket: (state) => {
            state.basket = []
            state.totalPrice = 0
        }
    }
})

export const {modifyBasket, cleanBasket} = basketSlice.actions
export const selectBasket = (state) => state.basket
export default basketSlice.reducer