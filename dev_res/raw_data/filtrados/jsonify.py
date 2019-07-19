import json
import csv

archivo_entrada = "obras_civiles_2015" 

id_lectura = 0

dict_ramos = {}

with open(archivo_entrada) as csvfile: #calcula numero de semestres
    reader = csv.DictReader(csvfile)
    max_sem = 0

    for row in reader:
        semestre = row["semestre_en_malla"]

        if (int(semestre) > max_sem):
            max_sem = int(semestre)
    
        dict_ramos[row["asignatura_codigo"]] = id_lectura

        id_lectura = id_lectura + 1
        

malla = [] #malla es arreglo vacio de semestres

for i in range(int(max_sem)): #añade semestres vacíos al arreglo de semestres (es decir, a la malla)
    malla.append( #añadir diccionario semestre
        {
            "num_sem": i,
            "ramos":[]
        }
)

#ahora iteramos de verdad sobre cada ramo y lo vamos añadiendo en su respectivo semestre.
with open(archivo_entrada) as csvfile:
    reader = csv.DictReader(csvfile)

    id_cont = 0

    for row in reader:
        codigo = row['asignatura_codigo']
        nombre = row["asignatura_nombre"]
        creditos = row["asignatura_creditos"]
        creditos_sct = row["asignatura_creditosSCT"]
        codigo_carrera = row["carrera"]
        carrera_nombre = row["carrera_nombre"]
        anno_malla = row["malla"]
        semestre = row["semestre_en_malla"]
        requisitos = row["requisitos"]
        es_optativo = row["optativo"]
        tasa_repr = row["fail_rate"]

        malla[int(semestre)-1]["ramos"].append(
            {
                "id" : id_cont,
                "nombre" : nombre,
                "codigo" : codigo,
                "creditos" : creditos,
                "tasa_repr" : tasa_repr,
                "requisitos":[]
            }
        )

        lista_req = requisitos.split(',')

        for req in lista_req:
            req = req.strip()
            #print(req, dict_ramos[req])
            print(dict_ramos.get('req', "default_value")
            #malla[int(semestre)-1]["ramos"][id_cont]["requisitos"].append(dict_ramos[req])

        id_cont += 1


malla_json = json.dumps(malla, indent = 4)

#print(malla_json)

print(dict_ramos)