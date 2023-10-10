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
        nome: "Gambiarra a'la GBT",
        imagem: "GBT.jpeg",
        classification: 2,
        price: 15.50,
        tempoPreparo: 8,
        rating: 4.5
    },
    {
        nome: "Carne al'a JIFC",
        imagem: "JIFC.png",
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8 
    },
    {
        nome: "Carne al'a JIFC",
        imagem: "JIFC.png",
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8 
    },
    {
        nome: "Carne al'a JIFC",
        imagem: "JIFC.png",
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8 
    },
]

export {produtos}