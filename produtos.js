// TEMPLATE DE PRODUTO

/*
produto = {
    nome: string,
    imagem: string (caminho e nome),
    classification: int 0-3 (comida | fruta | vegetal | bebida),
    price: int (min 100, ao invés de usar float, o numero será dividido por 100 para a virgula),
    tempoPreparo: int (em min),
    rating: float (0 - 5)
}
*/

const produtos = [
    {
        id: 0,
        nome: "Gambiarra a'la GBT",
        imagem: require('./assets/prato1.png'),
        classification: 2,
        price: 15.50,
        tempoPreparo: 8,
        rating: 4.5
    },
    {
        id: 1,
        nome: "Fernando a'la Ele",
        imagem: require('./assets/prato2.png'),
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8 
    },
    {
        id: 2,
        nome: "Omelete a'la Ovo",
        imagem: require('./assets/prato3.png'),
        classification: 0,
        price: 12.50,
        tempoPreparo: 10,
        rating: 4.0 
    },
    {
        id: 3,
        nome: "Carne a'la JIFC",
        imagem: require('./assets/prato4.png'),
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8 
    },
]

export {produtos}