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
                },
                {
                    id: 3,
                    nombre: "Comunicación: Idioma Español",
                    codigo: "BAIN009",
                    creditos: 4,
                    tasa_repr: 0.07,
                    requisitos: []
                },
                {
                    id: 4,
                    nombre: "Quimica para Ingeniería",
                    codigo: "BAIN019",
                    creditos: 4,
                    tasa_repr: 0.31,
                    requisitos: []
                },
                {
                    id: 5,
                    nombre: "Educación Fisica y Salud",
                    codigo: "DYRE060",
                    creditos: 4,
                    tasa_repr: 0.,
                    requisitos: []
                },
                {
                    id: 6,
                    nombre: "Taller de Ingeniería I",
                    codigo: "INFO015",
                    creditos: 4,
                    tasa_repr: 0.105,
                    requisitos: []
                }

            ]
    },
    {
        num_sem: 2,
        ramos: 
            [
                {
                    id: 7, 
                    nombre: "Cálculo I para Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [0]
                },
                {
                    id: 8,
                    nombre: "Física I para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [0,1]
                },
                {
                    id: 9,
                    nombre: "Programación",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [2]
                },
                {
                    id: 10, 
                    nombre: "Algebra Lineal para Ingeniería",
                    codigo: "BAIN036",
                    creditos: 5,
                    tasa_repr: 0.47,
                    requisitos: [0]
                },
                {
                    id: 11,
                    nombre: "Taller de Ingeniería II",
                    codigo: "INFO025",
                    creditos: 4,
                    tasa_repr: 0.05,
                    requisitos: [0,1,6]
                },
                {
                    id: 12,
                    nombre: "Comunicación: Idioma Inglés",
                    codigo: "BAIN039",
                    creditos: 4,
                    tasa_repr: 0.205,
                    requisitos: []
                },
            ]
    },
    {
        num_sem: 3,
        ramos: 
            [
                {
                    id: 13, 
                    nombre: "Calculo II para Ingeniería",
                    codigo: "BAIN042",
                    creditos: 5,
                    tasa_repr: 0.45,
                    requisitos: [7]
                },
                {
                    id: 14,
                    nombre: "Física 2 para Ingeniería",
                    codigo: "BAIN043",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [7,8]
                },
                {
                    id: 15,
                    nombre: "Ecuaciones Diferenciales para Ingeniería",
                    codigo: "BAIN041",
                    creditos: 5,
                    tasa_repr: 0.23,
                    requisitos: [7]
                },
                {
                    id: 16, 
                    nombre: "Estructuras Discretas",
                    codigo: "INFO043",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [10,2]
                },
                {
                    id: 17,
                    nombre: "Taller de Ingeniería III",
                    codigo: "INFO035",
                    creditos: 4,
                    tasa_repr: 0.99,
                    requisitos: [11]
                },
                {
                    id: 18,
                    nombre: "Programación Orientada a Objetos",
                    codigo: "INFO033",
                    creditos: 3,
                    tasa_repr: 0.21,
                    requisitos: [9]
                },
            ]
    },
    {
        num_sem: 4,
        ramos: 
            [
                {
                    id: 19, 
                    nombre: "Estadistica y Probabilidades para Ingeniería",
                    codigo: "BAIN052",
                    creditos: 4,
                    tasa_repr: 0.27,
                    requisitos: [10]
                },
                {
                    id: 20,
                    nombre: "Métodos Númericos para Ingeniería",
                    codigo: "BAIN053",
                    creditos: 4,
                    tasa_repr: 0.41,
                    requisitos: [15]
                },
                {
                    id: 21,
                    nombre: "Fisica III para Ingeniería",
                    codigo: "BAIN054",
                    creditos: 8,
                    tasa_repr: 0.207,
                    requisitos: [13,15]
                },
                {
                    id: 22, 
                    nombre: "Taller",
                    codigo: "INFO045",
                    creditos: 6,
                    tasa_repr: 0.008,
                    requisitos: [13,15,17]
                },
                {
                    id: 23,
                    nombre: "Estructuras de Datos y Algoritmos",
                    codigo: "INFO053",
                    creditos: 6,
                    tasa_repr: 0.39,
                    requisitos: [16,17]
                },
                {
                    id: 24,
                    nombre: "Optativo I",
                    codigo: "ELECT01",
                    creditos: 0,
                    tasa_repr: 0,
                    requisitos: []
                } 
	    ]
        },
	{
        num_sem: 5,
        ramos: 
            [
                {
                    id: 25, 
                    nombre: "Administración de Empresas",
                    codigo: "ADMI100",
                    creditos: 6,
                    tasa_repr: 0.06,
                    requisitos: [3,17]
                },
                {
                    id: 26,
                    nombre: "Teoría de Automatas",
                    codigo: "INFO164",
                    creditos: 6,
                    tasa_repr: 0.24,
                    requisitos: [23]
                },
                {
                    id: 27,
                    nombre: "Investigación Operativa I",
                    codigo: "INFO172",
                    creditos: 5,
                    tasa_repr: 0.23,
                    requisitos: [10]
                },
                {
                    id: 28, 
                    nombre: "Taller de Construcción de Software",
                    codigo: "INFO175",
                    creditos: 4,
                    tasa_repr: 0.049,
                    requisitos: [21,23]
                },
                {
                    id: 29,
                    nombre: "Arquitectura de Computadores",
                    codigo: "INFO184",
                    creditos: 5,
                    tasa_repr: 0.27,
                    requisitos: [4,7,8]
                }
            ]
    }
];

export default malla;