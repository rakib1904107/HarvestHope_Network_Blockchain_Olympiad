export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
};


export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
};