const malla = 
[
    {
        num_sem: 1,
        ramos:
            [
                {
                    id: 0, //debe ser único
                    nombre: "Álgebra para Ingeniería",
                    codigo: "BAIN017",
                    creditos: 6,
                    tasa_repr: 0.34,
                    requisitos: []
                },
                {
                    id: 1, 
                    nombre: "Geometría para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.32,
                    requisitos: []
                },
                {
                    id: 2,
                    nombre: "Introducción a la programación",
                    codigo: "INFO013",
                    creditos: 4,
                    tasa_repr: 0.99,
                    requisitos: []
                }
            ]
    },
    {
        num_sem: 2,
        ramos: 
            [
                {
                    id: 3, 
                    nombre: "Cálculo I para Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [0]
                },
                {
                    id: 4,
                    nombre: "Física I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [0,1]
                },
                {
                    id: 5,
                    nombre: "Programación",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [2]
                },
                {
                    id: 6, 
                    nombre: "Carpinteria",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [0]
                },
            ]
    },
    {
        num_sem: 3,
        ramos: 
            [
                {
                    id: 7, 
                    nombre: "Calculo II para Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [0]
                },
                {
                    id: 8,
                    nombre: "Fíica 2",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [3,4]
                },
                {
                    id: 9,
                    nombre: "Orientada a objetos",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [5, 0]
                },
                {
                    id: 10, 
                    nombre: "Caasdria",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [4]
                },
            ]
    },
    {
        num_sem: 4,
        ramos: 
            [
                {
                    id: 14, 
                    nombre: "Cálcua Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [9]
                },
                {
                    id: 11,
                    nombre: "Fa I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [3,4,6]
                },
                {
                    id: 12,
                    nombre: "Prograasdfón",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [6]
                },
                {
                    id: 13, 
                    nombre: "Casdfria",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [9]
                } 
	    ]
        },
	{
        num_sem: 5,
        ramos: 
            [
                {
                    id: 15, 
                    nombre: "Cálculando cosas en Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [8, 9]
                },
                {
                    id: 16,
                    nombre: "Farmacos I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [9, 10]
                },
                {
                    id: 17,
                    nombre: "Progresiones de acordes",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [9, 10, 11]
                },
                {
                    id: 18, 
                    nombre: "Casitas",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14]
                }
            ]
    },
{
        num_sem: 6,
        ramos: 
            [
                {
                    id: 19, 
                    nombre: "Cálcado",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [18, 17]
                },
                {
                    id: 20,
                    nombre: "Fast and furious",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [3, 15, 17]
                },
                {
                    id: 21,
                    nombre: "Prograamacion tv",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [6]
                },
                {
                    id: 22, 
                    nombre: "Casanova",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14]
                }
            ]
    },
{
        num_sem: 7,
        ramos: 
            [
                {
                    id: 23, 
                    nombre: "velero Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14]
                },
                {
                    id: 24,
                    nombre: "globo",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [15, 14, 10, 1, 3, 5]
                },
                {
                    id: 25,
                    nombre: "venezuela",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [10, 4]
                },
                {
                    id: 26, 
                    nombre: "bolivia",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14]
                }
            ]
    },
{
        num_sem: 8,
        ramos: 
            [
                {
                    id: 27, 
                    nombre: "Cálculos grandes para Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [21, 22]
                },
                {
                    id: 28,
                    nombre: "Farandula I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [20, 22, 23]
                },
                {
                    id: 29,
                    nombre: "Prediccion",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [6, 11, 23]
                },
                {
                    id: 30, 
                    nombre: "Camello",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14]
                }
            ]
    },
{
        num_sem: 9,
        ramos: 
            [
                {
                    id: 31, 
                    nombre: "Cálado paa Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [30, 29, 26]
                },
                {
                    id: 32,
                    nombre: "Fastidio I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [27, 28, 29]
                },
                {
                    id: 33,
                    nombre: "Presbitero",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [6, 13]
                },
                {
                    id: 34, 
                    nombre: "Caballito blanco",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14, 18]
                }
            ]
    },
{
        num_sem: 10,
        ramos: 
            [
                {
                    id: 35, 
                    nombre: "Cálculando losa Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [24, 30, 26]
                },
                {
                    id: 36,
                    nombre: "Farra I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [24, 30, 31]
                },
                {
                    id: 37,
                    nombre: "Profesional",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [6]
                },
                {
                    id: 38, 
                    nombre: "Corolario",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [14]
                }
            ]
    },
{
        num_sem: 11,
        ramos: 
            [
                {
                    id: 39, 
                    nombre: "Cljiiería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [36, 38]
                },
                {
                    id: 40,
                    nombre: "traece",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [38,37]
                },
                {
                    id: 41,
                    nombre: "pollolso",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [16, 20, 22]
                },
                {
                    id: 42, 
                    nombre: "catarol",
                    codigo: "BAIN0999",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [30, 31, 38, 23]
                }
            ]
    }
];

export default malla;