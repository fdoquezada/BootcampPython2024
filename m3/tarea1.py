# Lista de nombres
nombres = ["Harry Houdini", "Newton", "David Blaine", "Hawking", "Messi", "Teller", "Einstein", "Pele", "Juanes"]

# Listas de magos y científicos
magos = ["Harry Houdini", "David Blaine", "Teller"]
cientificos = ["Newton", "Hawking", "Einstein"]

# Función para hacer grandiosos a los magos
def hacer_grandioso(lista_magos):
    for i in range(len(lista_magos)):
        lista_magos[i] = "El gran " + lista_magos[i]

# Función para imprimir nombres
def imprimir_nombres(lista):
    for nombre in lista:
        print(nombre)

# Separar los nombres en tres grupos: magos, científicos y otros
otros = [nombre for nombre in nombres if nombre not in magos and nombre not in cientificos]

# Imprimir la lista completa de nombres antes de ser modificados
print("Lista completa de nombres antes de ser modificados:")
imprimir_nombres(nombres)

# Hacer grandiosos a los magos
hacer_grandioso(magos)

# Imprimir los nombres de los magos grandiosos, los científicos y los restantes
print("\nNombres de los magos grandiosos:")
imprimir_nombres(magos)

print("\nNombres de los científicos:")
imprimir_nombres(cientificos)

print("\nNombres de los restantes:")
imprimir_nombres(otros)
