/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (objeto) => {
    const m = {
        fetchMenu: () => objeto,
        consumption: [],
        order: (produto) => {
            if (objeto.food[produto] || objeto.drinks[produto]) {
                m.consumption.push(produto);
            } else {
                return 'Item indisponível';
            }
        },
    };
    return m;
};

module.exports = createMenu;
