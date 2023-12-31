const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" :  
    const existingItem = state.find((state) => state.product._id === action.payload.product._id);
    console.log(existingItem)
    if (!existingItem) {
      // Le produit n'existe pas dans le panier, ajoutez-le
      return [...state, action.payload];
    }

    // Le produit existe déjà, vous pouvez choisir de mettre à jour la quantité ou effectuer une autre action si nécessaire.
    return state;
       
       
        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.product._id !== action.payload
            })
        
        default: return state;
   
    }
    
}


export default addItems;