const malla = 
[
    {
        num_sem: 1,
        ramos:
            [
                {
                    id: 0, //debe ser único
                    nombre: "Álgebra para Ingeniería",
                    codigo: "BAIN0xx",
                    tasa_repr: 0.34,
                    requisitos: []
                },
                {
                    id: 1, 
                    nombre: "Geometría para Ingeniería",
                    codigo: "BAIN0yy",
                    tasa_repr: 0.32,
                    requisitos: []
                }
            ],
        min_id:0,
        max_id:1
    },
    {
        num_sem: 2,
        ramos: 
            [
                {
                    id: 2, 
                    nombre: "Cálculo I para Ingeniería",
                    codigo: "BAIN0xz",
                    tasa_repr: 0.45,
                    requisitos: [1]
                },
                {
                    id: 3,
                    nombre: "Física I para Ingeniería",
                    codigo: "BAIN0yz",
                    tasa_repr: 0.12,
                    requisitos: [2]
                }
            ],
        min_id:2,
        max_id:3
    }
];

export default malla;
