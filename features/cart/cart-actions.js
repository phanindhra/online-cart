export const AddToCart=(item)=>{
    return {type:"ADD",payload:item};
}

export const RemoveFromCart=(item)=>{
    return {type:"REMOVE",payload:item}
}