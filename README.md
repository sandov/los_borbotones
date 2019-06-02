# Aplicación malla curricular

Desarrollador: Los Borbotones

Estado: Comenzando el desarrollo

Aplicación para mostrar las mallas curriculares de las carreras de
la facultad de ingeniería.

# Documentación para los desarrolladores

## Instalación de Node.js en Ubuntu

Node.js es necesario para poder usar React.


```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Para otras distribuciones, ver la documentación en el sitio de Node 

## Archivos del esqueleto

Luego de instalar Node, se ejecutó el comando

    npx create-react-app

lo cual generó el esqueleto de una app React, incluyendo las 
carpetas public, src, los archivos package\*, etc.


Al clonar este repositorio, el desarrollador obtiene todas 
esas carpetas automáticamente (excepto por una de la que
hablaremos abajo), por lo que no es necesario
ejecutar este comando de nuevo.

## Instalar dependencias npm

La única carpeta que no está subida al repositorio es la
carpeta con las dependencias de node, llamada "node_modules".

Esta carpeta guarda las librerías de Javascript. La práctica
estándar es no subirla al repo (git la ignora porque la tenemos
incluida en nuestro archivo .gitignore).

Como consecuencia, cuando clonemos el repo, debemos ejecutar el
siguiente comando:

    npm install

Este creará la carpeta node_modules y guardará en ella las librerías
necesarias automáticamente. npm sabe qué librerías instalar porque
están especificadas en los archivos package\*.

## Servir la aplicación

Para servir la aplicación desde nuestro computador, ejecutamos el
comando

    npm start

Lo cual ejecuta el servidor localmente, nos muestra el puerto 
donde está corriendo el server y abre el navegador para ver
la app como cliente.


# Resumiendo

Teniendo node ya instalado:

    git clone https://github.com/sandov/los_borbotones
    cd los_borbotones/
    npm install
    npm start

Tutorial de React: https://reactjs.org/tutorial/tutorial.html
Versión en español: https://es.reactjs.org/tutorial/tutorial.html



