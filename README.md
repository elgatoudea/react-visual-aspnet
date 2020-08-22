# react-visual-aspnet
Realización de proyecto final de informática avanzada. CRUD de React con ASP.Net de visual Studio en C#

## En el Microsoft SQL ServerManagement Studio

Debes realizar la restauración del backUp de la base de datos que esta en la carpeta del proyecto BaseDatos

## En VisualStudio

En el proyecto, puede ejecutar el IIS Express y verificar que arranque en el puerto correcto y que los datos ya esten allí:

### `http://localhost:51532/api/DPaciente/`

Sino funciona debes ir a appsettings.json y cambiar el nombre Server =DESKTOP-JU6RL8P por el nombre del servidor de base de datos tuyo

## En React.JS

En el proyecto,

En el directorio del proyecto, puede ejecutar:

### `npm start`

Si el puerto del visual no es el localhost:51532 debes ingresar a la carpeta react-app\src\actions\api.js y modificar por el puerto que te de el visual al iniciar

Ejecuta la aplicación en modo de desarrollo.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

La página se volverá a cargar si realiza modificaciones.<br />
También verá cualquier error en la consola.
