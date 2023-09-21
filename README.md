# RestaurantGustov
Control de vacaciones de empleados del restaurante Gustov.

# Se elavoro de acuerdo al problema planteado
El restaurante Gustov requiere de un control de vacaciones de sus empleados. Usted es requerido para implementar una solución donde sea posible registrar: los datos de cada empleado y su fecha de inicio en el restaurante. Además emitir un recibo de vacaciones cuando un funcionario solicite vacaciones.

Considerar la escala de días de vacación siguiente.

- 1 a 5 años  15 días de vacación.
- 6 a 10 años 20 días de vacación.
- De 11 años en adelante 30 días de vacación.


# Detalles del entorno de desarrollo usado para esta practica
Version: 1.82.2 (user setup)
Commit: abd2f3db4bdb28f9e95536dfa84d8479f1eb312d
Date: 2023-09-14T05:55:25.390Z
Electron: 25.8.1
ElectronBuildId: 23779380
Chromium: 114.0.5735.289
Node.js: 18.15.0
V8: 11.4.183.29-electron.0
OS: Windows_NT x64 10.0.22621

# Requisitos para correr el proyecto
Lo que se uso en la elaboracion del proyecto 
- https://nodejs.org/es/blog/release/v16.13.0 (Descargar e instalar Node Js v16.13.0)
- npm install -g @angular/cli@13.3.2 (Instalar angular v13.3.2 desde el CMD)
- https://www.npackd.org/p/git64/2.39.1 (Descargar e instalar Git v2.39.1)
- El editor de codigo de su preferencia (Ejemplo: Sublime, Visual Code)
- Xampp v7.4.1 (MySql)

# Clonar el proyecto y abrir el proyecto
Abrir el CMD en la ruta donde se clonara el proyecto.
-   Ejecutar (git clone https://github.com/Douglashc/RestaurantGustov.git)
- Abrir la carpeta del proyecto con su editor

# Instalar dependencias y ejecutar el proyecto
Base de datos
- Crear una base de datos con el nombre de (gustovrestaurant)

Dependencias del servidor, debe abrir una terminal.
- cd Server
- npm install
- npm start (Las tablas de la base de datos se migrara automaticamente y el servidor entrara en ejecucion)

Dependencias del cliente, debe abrir otra terminal terminal.
- cd Client
- npm install
- ng serve (El cliente entrara en ejecucion)
