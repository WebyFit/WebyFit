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
        rating: 4.5,
        desc: "Gambiarra à la GBT é o prato definitivo para quem quer uma refeição saudável, mas está totalmente sem tempo, ingredientes ou habilidades culinárias. Inspirado na alta tecnologia, esse prato é uma obra-prima da engenhosidade alimentar!"
    },
    {
        id: 1,
        nome: "Fernando a'la Ele",
        imagem: require('./assets/prato2.png'),
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8,
        desc: "Fernando a'la Ele é uma salada exuberante que incorpora a frescura do ovo, azeitonas salgadas, cenouras crocantes, beterrabas vibrantes, milho doce, brócolis tenros e repolho refrescante. Esta combinação colorida de ingredientes não apenas estimula os sentidos, mas também oferece uma explosão de sabores e texturas, transformando cada garfada em uma experiência gastronômica única e deliciosa."
    },
    {
        id: 2,
        nome: "Omelete a'la Ovo",
        imagem: require('./assets/prato3.png'),
        classification: 0,
        price: 12.50,
        tempoPreparo: 10,
        rating: 4.0,
        desc: "O Omelete a'la Ovo é uma criação simples, mas deliciosamente satisfatória. Um ovo perfeitamente preparado é harmoniosamente combinado com uma mistura fresca de salada, criando uma refeição que é tanto nutritiva quanto deliciosa. A suavidade do ovo contrasta maravilhosamente com a crocância dos vegetais, proporcionando uma experiência gastronômica equilibrada e reconfortante para os amantes da comida saudável."
    },
    {
        id: 3,
        nome: "Carne a'la JIFC",
        imagem: require('./assets/prato4.png'),
        classification: 0,
        price: 20.00,
        tempoPreparo: 12,
        rating: 4.8,
        desc: "Carne a'la JIFC é um prato robusto que leva os comensais a uma viagem culinária irresistível. O arroz perfeitamente cozido serve como base para a carne suculenta, as batatas doces caramelizadas, os tomates suculentos e uma variedade de vegetais frescos e coloridos. Cada garfada é uma celebração de sabores, desde a terra até o mar, criando uma sinfonia de gostos que se misturam de forma harmoniosa. Este prato não apenas sacia a fome, mas também satisfaz os paladares mais exigentes, deixando uma impressão duradoura e deliciosa."
    },
]

export {produtos}