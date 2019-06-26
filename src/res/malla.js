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
    },
    {
        num_sem: 6,
        ramos: 
            [
                {
                    id: 30, 
                    nombre: "Programación Concurrente",
                    codigo: "INFO163",
                    creditos: 4,
                    tasa_repr: 0.17,
                    requisitos: [23]
                },
                {
                    id: 31,
                    nombre: "Compiladores",
                    codigo: "INFO165",
                    creditos: 5,
                    tasa_repr: 0.22,
                    requisitos: [26]
                },
                {
                    id: 32,
                    nombre: "Investigación Operativa II",
                    codigo: "INFO173",
                    creditos: 5,
                    tasa_repr: 0.19,
                    requisitos: [13,19,27]
                },
                {
                    id: 33, 
                    nombre: "Analisis de Sistemas Linales",
                    codigo: "INFO183",
                    creditos: 5,
                    tasa_repr: 0.27,
                    requisitos: [15,29]
                },
                {
                    id: 34,
                    nombre: "Base de Datos",
                    codigo: "INFO261",
                    creditos: 6,
                    tasa_repr: 0.13,
                    requisitos: [26]
                },
                 {
                    id: 35,
                    nombre: "Computación Gráfica",
                    codigo: "INFO265",
                    creditos: 6,
                    tasa_repr: 0.03,
                    requisitos: [17,23]
                },
            ]
    },
    {
        num_sem: 7,
        ramos: 
            [
                {
                    id: 36, 
                    nombre: "Economía General",
                    codigo: "IECO102",
                    creditos: 4,
                    tasa_repr: 0.12,
                    requisitos: [13,17]
                },
                {
                    id: 37,
                    nombre: "Sistemas Operativos",
                    codigo: "INFO182",
                    creditos: 4,
                    tasa_repr: 0.21,
                    requisitos: [30]
                },
                {
                    id: 38,
                    nombre: "Comunicaciones",
                    codigo: "INFO185",
                    creditos: 6,
                    tasa_repr: 0.05,
                    requisitos: [13,19,29]
                },
                {
                    id: 39, 
                    nombre: "Software de Ingeniería",
                    codigo: "INFO189",
                    creditos: 4,
                    tasa_repr: 0.12,
                    requisitos: [14,20,22,33]
                },
                {
                    id: 40,
                    nombre: "Fundamentos de Ingeniería de Software",
                    codigo: "INFO263",
                    creditos: 5,
                    tasa_repr: 0.08,
                    requisitos: [25,28]
                },
                 {
                    id: 41,
                    nombre: "Ingeniería de Sistemas",
                    codigo: "INFO270",
                    creditos: 4,
                    tasa_repr: 0.12,
                    requisitos: [26]
                },
            ]
    },
    {
        num_sem: 8,
        ramos: 
            [
                {
                    id: 42, 
                    nombre: "Taller de Ingeniería de Software",
                    codigo: "INFO264",
                    creditos: 6,
                    tasa_repr: 0.03,
                    requisitos: [17,34,40]
                },
                {
                    id: 43,
                    nombre: "Interfaz Humano-Computador",
                    codigo: "INFO266",
                    creditos: 6,
                    tasa_repr: 0.04,
                    requisitos: [40]
                },
                {
                    id: 44,
                    nombre: "Sistemas de Información",
                    codigo: "INFO271",
                    creditos: 4,
                    tasa_repr:0.03,
                    requisitos: [25,36,41] 
                },
                {
                    id: 45, 
                    nombre: "Ingeniería Económica",
                    codigo: "INFO272",
                    creditos: 4,
                    tasa_repr: 0.14,
                    requisitos: [32,36]
                },
                {
                    id: 46,
                    nombre: "Redes",
                    codigo: "INFO281",
                    creditos: 6,
                    tasa_repr: 0.13,
                    requisitos: [37,38]
                },
                 {
                    id: 47,
                    nombre: "Taller de Integración de TIC",
                    codigo: "INFO284",
                    creditos: 6,
                    tasa_repr: 0.03,
                    requisitos: [21,28,33]
                },
                ]
            },
        {
        num_sem: 9,
        ramos: 
            [
                {
                    id: 48, 
                    nombre: "Inglés Funcional",
                    codigo: "CIDI108",
                    creditos: 4,
                    tasa_repr: 0.05,
                    requisitos: []
                },
                {
                    id: 49,
                    nombre: "Práctica Profesional",
                    codigo: "EICI297",
                    creditos: 8,
                    tasa_repr: 0,
                    requisitos: [42,43,44,45,46,47]
                },
                {
                    id: 50,
                    nombre: "Optativo Profesional I",
                    codigo: "ELECT02",
                    creditos: 0,
                    tasa_repr: 0,
                    requisitos: []
                },
                {
                    id: 51, 
                    nombre: "Seminario de Ética Profesional",
                    codigo: "INFO251",
                    creditos: 2,
                    tasa_repr: 0,
                    requisitos: [42,45,46]
                },
                {
                    id: 52,
                    nombre: "Proyecto I",
                    codigo: "INFO252",
                    creditos: 4,
                    tasa_repr: 0.03,
                    requisitos: [42,44,45]
                },
                 {
                    id: 53,
                    nombre: "Taller de Base de Datos",
                    codigo: "INFO268",
                    creditos: 4,
                    tasa_repr: 0.008,
                    requisitos: [42]
                },
                {
                    id: 54,
                    nombre: "Evaluación de Desempeño",
                    codigo: "INFO273",
                    creditos: 5,
                    tasa_repr: 0.025,
                    requisitos: [32,37,46]
                },
                {
                    id: 55,
                    nombre: "Sistemas de Gestión Estrategicos",
                    codigo: "INFO275",
                    creditos: 5,
                    tasa_repr: 0.025,
                    requisitos: [25,41,45]
                },
            ]
    },
    {
        num_sem: 10,
        ramos: 
            [   
             {
                    id: 56, 
                    nombre: "Taller de Software-Proyecto Integración de TIC",
                    codigo: "EICI245",
                    creditos: 5,
                    tasa_repr: 0,
                    requisitos: [39,42,43,46,47]
                },
                {
                    id: 57, 
                    nombre: "Arquitectura de Sistemas",
                    codigo: "EICI246",
                    creditos: 6,
                    tasa_repr: 0.07,
                    requisitos: [44,55,42,46,47]
                },
                {
                    id: 58,
                    nombre: "Realidad Tecnológica Nacional",
                    codigo: "EICI247",
                    creditos: 2,
                    tasa_repr: 0,
                    requisitos: [42,45,46]
                },
                {
                    id: 59,
                    nombre: "Inteligencia Artificial",
                    codigo: "INFO267",
                    creditos: 6,
                    tasa_repr: 0.09,
                    requisitos: [28]
                },
                {
                    id: 60, 
                    nombre: "Simulación",
                    codigo: "INFO274",
                    creditos: 4,
                    tasa_repr: 0.04,
                    requisitos: [32]
                },
                {
                    id: 61,
                    nombre: "Sistema de Gestión Tácticos",
                    codigo: "INFO276",
                    creditos: 4,
                    tasa_repr: 0.008,
                    requisitos: [25,41,45]
                },
         ]
    },
    {
        num_sem: 11,
        ramos: 
            [
                {
                    id: 62, 
                    nombre: "Administración de TIC",
                    codigo: "EICI255",
                    creditos: 6,
                    tasa_repr: 0.05,
                    requisitos: [56,57,61]
                },
                {
                    id: 63,
                    nombre: "Estrategia y Sistemas",
                    codigo: "EICI261",
                    creditos: 6,
                    tasa_repr: 0,
                    requisitos: [57,61]
                },
                {
                    id: 64,
                    nombre: "Proyecto de Titulo",
                    codigo: "EICI298",
                    creditos: 6,
                    tasa_repr: 0,
                    requisitos: []
                },
                {
                    id: 65, 
                    nombre: "Optativo Profesional II",
                    codigo: "ELEC21",
                    creditos: 0,
                    tasa_repr: 0,
                    requisitos: []
                },
                {
                    id: 66,
                    nombre: "Optativo Profesional III",
                    codigo: "ELEC22",
                    creditos: 0,
                    tasa_repr: 0.13,
                    requisitos: []
                },
                                {
                    id: 67,
                    nombre: "AnteProyecto de Titulo",
                    codigo: "INFO253",
                    creditos: 4,
                    tasa_repr: 0.03,
                    requisitos: [56,57,61]
                },
        ]
    },
];

export default malla;