# Notes APP

📝 Notas Personales
¡Bienvenido a la aplicación de Notas Personales! Este es un proyecto sencillo desarrollado con Vue 3 y Pinia para ayudarte a organizar tus ideas, tareas y recordatorios de una manera limpia e intuitiva.

✨ Características
### Creación de Notas
Añade nuevas notas con un título fácilmente.

### Gestión de Notas
Edita el título de tus notas existentes.

### Eliminación de Notas
Borra notas marcadas con un solo clic.

### Interfaz Intuitiva
Diseño limpio y responsivo para una experiencia de usuario agradable.

### Estado de la Aplicación
Manejo de estados de carga y error para una mejor retroalimentación visual.

## 🚀 Tecnologías Utilizadas
Vue 3: El framework progresivo de JavaScript para construir interfaces de usuario.

Pinia: El store de estado oficial de Vue, ligero y fácil de usar.

CSS Scoped: Estilos encapsulados por componente para evitar conflictos.

Fetch API: Para la comunicación con la API.

Beeceptor: Utilizado como un servicio de mock API para simular el backend.

##⚙️ Configuración y Ejecución Local
Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

Clonar el Repositorio:

git clone <URL_DE_TU_REPOSITORIO>
cd <nombre_de_tu_repositorio>

Instalar Dependencias:

npm install
# o si usas yarn
# yarn install

Ejecutar la Aplicación:

npm run dev
# o si usas yarn
# yarn dev

La aplicación se iniciará en http://localhost:5173 (o un puerto similar).

## ⚠️ Consideraciones sobre la API (Beeceptor)
Esta aplicación utiliza Beeceptor (https://ca1e5708a0c092b5548e.free.beeceptor.com/api/users/) como un servicio de mock API para simular las operaciones de backend (obtener, añadir, eliminar notas).

Es importante tener en cuenta lo siguiente:

Límites de Uso: Beeceptor es un servicio gratuito y tiene límites de peticiones. Si muchas personas (incluyéndote a ti) acceden y utilizan la aplicación de demostración que apunta a este endpoint, es posible que los límites de tu cuenta de Beeceptor se agoten. Cuando esto sucede, las operaciones de la aplicación (añadir, borrar, cargar notas) dejarán de funcionar temporalmente hasta que los límites se restablezcan.

No Persistencia Real: Beeceptor está diseñado para simular respuestas de API y no para una persistencia de datos a largo plazo. Los datos que se añaden o eliminan en la aplicación a través de Beeceptor no se guardan de forma permanente y pueden desaparecer si el mock se resetea o si alcanzas los límites.

Para un entorno de producción o una demostración más robusta y persistente, se recomendaría integrar un backend real con una base de datos (por ejemplo, Firebase, Supabase, o un backend personalizado).

## 📞 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
Correro: ernesto.boza.delacruz@gmail.com
Teléfono: +34 687716626
