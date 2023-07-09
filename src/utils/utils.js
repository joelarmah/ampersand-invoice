export const itemTotal = (item) => {
    return (item.qty * item.price).toFixed(2);
}

export const getSubTotal = (items) => {
  return items.reduce((total, { qty, price }) => total + qty * price, 0).toFixed(2);
};

export const getTotal = (items) => {
    // let total = 0;
    // return items.map((item) => (total = Number(total) + ((Number(item.qty) * Number(item.price)))));
    return items.reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0).toFixed(2)
};
