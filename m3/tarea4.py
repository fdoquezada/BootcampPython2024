""" CUE: CONCEPTOS BÁSICOS DE PYTHON
DRILLING: CÁLCULO ARITMÉTICO SENCILLO UTILIZANDO UN MÓDULO.
Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE:
Conceptos Básicos de Python.
EJERCICIO:
El objetivo de la presente actividad es realizar un cálculo aritmético sencillo, haciendo uso de
variables, operaciones aritméticas, y de la función print(). Para ello requerimos importar el
módulo math.
ENUNCIADO DEL PROBLEMA:
Requerimos hacer el cálculo de la raíz cuadrada de una variable llamada “y” que tiene valor 81,
utilizando el módulo de la librería math incorporada en Python. El resultado debemos asignarlo a
una variable que será impresa en pantalla. """

print("****** comienzo del scprit ****")
#llamams a la libreria math
import math 
import numpy as np
# se asigna el valos 81 a la variable y
y=81
res = pow(y, 1/2)
res = y**(0.5)

np.sqrt(y)
math.sqrt(y)
print(y)