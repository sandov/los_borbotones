const malla_3 = 
[
    {
        id: 0, //debe ser único
        nombre: "Álgebra para Ingeniería",
        codigo: "BAIN017",
        semestre: 1,
        creditos: 6,
        tasa_repr: 0.34,
        requisitos: []
    },
    {
        id: 1, 
        nombre: "Geometría para Ingeniería",
        codigo: "BAIN012",
        semestre: 1,
        creditos: 6,
        tasa_repr: 0.32,
        requisitos: []
    },
    {
        id: 2,
        nombre: "Introducción a la programación",
        codigo: "INFO013",
        semestre: 1,
        creditos: 4,
        tasa_repr: 0.99,
        requisitos: []
    },

    {
        id: 3, 
        nombre: "Cálculo I para Ingeniería",
        codigo: "BAIN037",
        semestre: 2,
        creditos: 6,
        tasa_repr: 0.45,
        requisitos: [0]
    },
    {
        id: 4,
        nombre: "Física I para Ingeniería",
        codigo: "BAIN012",
        semestre: 2,
        creditos: 6,
        tasa_repr: 0.12,
        requisitos: [0,1]
    },
    {
        id: 5,
        nombre: "Programación",
        codigo: "INFO023",
        semestre: 2,
        creditos: 4,
        tasa_repr: 0.23,
        requisitos: [2]
    }
]

export default malla_3;