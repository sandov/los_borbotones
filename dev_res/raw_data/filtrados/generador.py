import csv

with open('obras_civiles_2015') as csvfile:
    reader = csv.DictReader(csvfile)
    json_out = "[{}]"

    print("{:<17}".format('asignatura_codigo'), end='\t')
    print("{:<60}".format("asignatura_nombre"), end='\t')
    print("{:<19}".format("asignatura_creditos"), end='\t')
    print("{:<22}".format("asignatura_creditosSCT"), end='\t')
    print("{:<15}".format("carrera"), end='\t')
    print("{:<60}".format("carrera_nombre"), end='\t')
    print("{:<10}".format("malla"), end='\t')
    print("{:<17}".format("semestre_en_malla"), end='\t')
    print("{:<25}".format("requisitos"), end='\t')
    print("{:<15}".format("optativo"), end='\t')
    print("{:<15}".format("fail_rate"), end='\t')
    print()
    print()


    for row in reader:
        print("{:<17}".format(row['asignatura_codigo']), end='\t')
        print("{:<60}".format(row["asignatura_nombre"]), end='\t')
        print("{:<19}".format(row["asignatura_creditos"]), end='\t')
        print("{:<22}".format(row["asignatura_creditosSCT"]), end='\t')
        print("{:<15}".format(row["carrera"]), end='\t')
        print("{:<60}".format(row["carrera_nombre"]), end='\t')
        print("{:<10}".format(row["malla"]), end='\t')
        print("{:<17}".format(row["semestre_en_malla"]), end='\t')
        print("{:<25}".format(row["requisitos"]), end='\t')
        print("{:<15}".format(row["optativo"]), end='\t')
        print("{:<15}".format(row["fail_rate"]), end='\t')
        print()

	
