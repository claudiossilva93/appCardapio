const Data = [
  {
    id: 1,
    externalCode: "1500",
    name: "Pizzas",
    image: "http://grsoft.com.br/scripts/images.php?idfotocateg=3",
    order: 2,
    items: [
      {
        id: 10,
        name: "Pizza M",
        externalCode: "1501",
        description: "4 fatias, Até 2 sabores",
        content: "A partir de R$ 39,00",
        price: 0,
        image: "https://cardapio.anota.ai/assets/img/3pizza.jpeg",
        order: 2,
        items: [
          {
            id: 11,
            name: "Sabor",
            externalCode: "1502",
            description: "Escolha até 2 sabores",
            minimum: 1,
            maximum: 2,
            calculation: "MEDIA",
            order: 1,
            items: [
              {
                id: 1,
                name: "Calabreza",
                externalCode: "1503",
                description:
                  "Molho, tomate, calabresa, queijo, mussarela e oregano",
                image: "https://abc.png",
                price: 18,
                minimum: 0,
                maximum: 1,
                order: 1
              },
              {
                id: 1,
                name: "Portuguesa",
                externalCode: "1504",
                description:
                  "Molho, tomate, pimentao, queijo, mussarela e oregano",
                image: "https://abc.png",
                price: 20,
                minimum: 0,
                maximum: 1,
                order: 2
              }
            ]
          },
          {
            id: 12,
            name: "Borda",
            externalCode: "1505",
            description: "Escolha 1 borda",
            minimum: 1,
            maximum: 1,
            calculation: "SOMA",
            order: 2,
            items: [
              {
                id: 1,
                externalCode: "1506",
                name: "Sem borda",
                description: "",
                image: "https://abc.png",
                price: 0,
                minimum: 0,
                maximum: 1,
                order: 1
              },
              {
                id: 1,
                name: "Catupiry",
                externalCode: "1507",
                description: "",
                image: "https://abc.png",
                price: 5,
                minimum: 0,
                maximum: 1,
                order: 2
              }
            ]
          },
          {
            id: 13,
            name: "Adicionais",
            externalCode: "1508",
            description: "Turbine sua pizza",
            minimum: 0,
            maximum: 999,
            calculation: "SOMA",
            order: 3,
            items: [
              {
                id: 5,
                name: "Bacon",
                description: "",
                image: "",
                price: 0,
                minimum: 0,
                maximum: 1,
                order: 1
              },
              {
                id: 16,
                name: "Milho",
                description: "",
                image: "",
                price: 5,
                minimum: 0,
                maximum: 1,
                order: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    externalCode: "1509",
    name: "Burgers",
    image:
      "https://s3-us-west-2.amazonaws.com/anotaai/categorias/1588894119688blob",
    order: 2,
    items: [
      {
        id: 20,
        externalCode: "1510",
        name: "Burger Especial 1",
        description:
          "Pão tipo brioche, 2 burger de costela bovina, parmesan cream, cebola roxa, rúcula, queijo prato, molho chimichurri.",
        content: "",
        price: 30,
        image:
          "https://s3-us-west-2.amazonaws.com/anotaai/produtos/1587162412986blob",
        order: 2,
        items: [
          {
            id: 13,
            externalCode: "1511",
            name: "Adicionais",
            description: "",
            minimum: 0,
            maximum: 999,
            calculation: "SOMA",
            order: 1,
            items: [
              {
                id: 5,
                name: "Bacon",
                externalCode: "1512",
                description: "",
                image: "",
                price: 3,
                minimum: 0,
                maximum: 3,
                order: 1
              },
              {
                id: 16,
                externalCode: "1513",
                name: "Burger Bovino",
                description: "",
                image: "",
                price: 7,
                minimum: 0,
                maximum: 3,
                order: 2
              }
            ]
          }
        ]
      },
      {
        id: 9999,
        externalCode: "1510",
        name: "Burger Especial 2",
        description: "Pão tipo brioche, 2 burger de costela...",
        content: "",
        price: 30,
        image:
          "https://s3-us-west-2.amazonaws.com/anotaai/produtos/1587162412986blob",
        order: 2,
        items: [
          {
            id: 20,
            externalCode: "1511",
            name: "Adicionais",
            description: "",
            minimum: 0,
            maximum: 999,
            calculation: "SOMA",
            order: 1,
            items: [
              {
                id: 5,
                name: "Bacon",
                externalCode: "1512",
                description: "",
                image: "",
                price: 3,
                minimum: 0,
                maximum: 3,
                order: 1
              },
              {
                id: 16,
                externalCode: "1513",
                name: "Burger Bovino",
                description: "",
                image: "",
                price: 7,
                minimum: 0,
                maximum: 3,
                order: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    externalCode: "1514",
    name: "Açaí",
    image:
      "https://s3-us-west-2.amazonaws.com/anotaai/categorias/1588894330834blob",
    order: 2,
    items: [
      {
        id: 20,
        externalCode: "1515",
        name: "200 ML",
        description: "",
        content: "A partir de R$ 9,00",
        price: 0,
        image: "",
        order: 1,
        items: [
          {
            id: 13,
            externalCode: "1516",
            name: "Açaí",
            description: "",
            minimum: 1,
            maximum: 1,
            calculation: "SOMA",
            order: 1,
            items: [
              {
                id: 5,
                externalCode: "1517",
                name: "Açaí Tradicional",
                description: "Acompanha 2 acréscimos simples",
                image: "",
                price: 9,
                minimum: 0,
                maximum: 3,
                order: 1,
                complements: [
                  {
                    id: 13,
                    externalCode: "1518",
                    name: "Adicionais",
                    description: "Escolha até 10 itens",
                    minimum: 0,
                    maximum: 10,
                    calculation: "SOMA",
                    order: 1,
                    items: [
                      {
                        id: 5,
                        externalCode: "1519",
                        name: "Amendoim",
                        description: "",
                        image: "",
                        price: 2,
                        minimum: 0,
                        maximum: 2,
                        order: 1
                      },
                      {
                        id: 6,
                        externalCode: "1520",
                        name: "Granola",
                        description: "",
                        image: "",
                        price: 2.5,
                        minimum: 0,
                        maximum: 2,
                        order: 2
                      }
                    ]
                  },
                  {
                    id: 13,
                    name: "Frutas",
                    externalCode: "1521",
                    description: "Escolha até 2 frutas",
                    minimum: 0,
                    maximum: 2,
                    calculation: "SOMA",
                    order: 1,
                    items: [
                      {
                        id: 5,
                        externalCode: "1522",
                        name: "Morango",
                        description: "",
                        image: "",
                        price: 2,
                        minimum: 0,
                        maximum: 2,
                        order: 1
                      },
                      {
                        id: 6,
                        externalCode: "1523",
                        name: "Manga",
                        description: "",
                        image: "",
                        price: 2.5,
                        minimum: 0,
                        maximum: 2,
                        order: 2
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default Data;
