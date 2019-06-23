const malla_alternativa =
[
    {
        num_sem: 1,
        ramos:
            [
                {
                    nombre: "Álgebra para Ingeniería",
                    codigo: "BAIN017",
                    creditos: 6,
                    tasa_repr: 0.34,
                    requisitos: []
                },
                {
                    nombre: "Geometría para Ingeniería",
                    codigo: "BAIN012",
                    creditos: 6,
                    tasa_repr: 0.32,
                    requisitos: []
                },
                {
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
                    nombre: "Cálculo I para Ingeniería",
                    codigo: "BAIN037",
                    creditos: 6,
                    tasa_repr: 0.45,
                    requisitos: [
                        {
                            nombre: "Álgebra para Ingeniería",
                            codigo: "BAIN017"
                        }
                    ]
                },
                {
                    nombre: "Física I para Ingeniería",
                    codigo: "BAIN0 12",
                    creditos: 6,
                    tasa_repr: 0.12,
                    requisitos: [
                        {
                            nombre: "Álgebra para Ingeniería",
                            codigo: "BAIN017"
                        },
                        {
                            nombre: "Geometría para Ingeniería",
                            codigo: "BAIN012"
                        }
                    ]
                },
                {
                    nombre: "Programación",
                    codigo: "INFO023",
                    creditos: 4,
                    tasa_repr: 0.23,
                    requisitos: [
                        {
                            nombre: "Introducción a la programación",
                            codigo: "INFO013"
                        }
                    ]
                }
            ],
    }
];

export default malla_alternativa;
