# AngularScout

_Aplicacion de una red social para compartir rutas e informacion de grupos scouts_

## Construido con 🛠️

### Front-end

* HTML5
* CSS3
* Bootstrap
* Angular 10

`Firebase` https://scroutes-2020.web.app/home

### Back-end

* Nodejs
* Express

`Heroku` https://scroutes.herokuapp.com/

Endpoints

> /api/rutas

    "get": {

        "id": "numero id",
        
        "nombre": "titulo de la ruta",
        
        "localizacion": "municipio de inicio",
        
        "longitud": "coordenada de inicio longitud",
        
        "latitud": "coordenada de inicio latitud",
        
        "puntos_ruta": "coordenadas gps de puntos de la ruta",
        
        "distancia": "distancia en km",
        
        "circular": "tipo de ruta",
        
        "altitud_max": "altitud maxima en metros",
        
        "altitud_min": "altitud minima en metros",
        
        "dificultad": "escala de dificultad",
        
        "fecha_creacion": "fecha registro de la ruta, formato unix",
        
        "imagenes": {
        
            "imagen1": "imagen de la ruta",
            
            "imagen2": "imagen de la ruta",
            
            "imagen3": "imagen de la ruta",
            
            "imagen4": "imagen de la ruta",
            
            "imagen5": "imagen de la ruta",
            
            "imagen6": "imagen de la ruta",
            
                    },
                    
        "descripcion": "Descripción de la experiencia",
        
        "duracion": "tiempo total de ruta en horas:minutos:segundos",
        
        "fk_usuarioId": "relacion de id de usuario",
        
        "puntuacion": "puntuacion de 1 a 5",
        
        "usuario": "nombre del usuario que la creo"
        
        }

> /api/eventos

    "get": {

        "id": "numero id",
        
        "nombre": "titulo del evento",
        
        "ciudad": "ciudad del evento",
        
        "fecha": "fecha del evento, formato unix",
        
        "longitud": "coordenada del evento longitud",
        
        "latitud": "coordenada del evento latitud",
        
        "sitio_web": "web del evento",
        
        "descripcion": "Descripción del evento",

        "imagenes": "imagen del evento",
        
        "fk_usuarioId": "relacion de id de usuario creador",
        
        "fk_rutaId": "relacion de id con una ruta",
        
        }




-Database: MySQL.

RESTful backend based on Node.js and MongoDB

