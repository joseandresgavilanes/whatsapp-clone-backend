<img src="https://media.discordapp.net/attachments/842856076009144381/1035955978828521564/user-chat.png" alt="user-chat" />

### Project Chat API with NodeJS(Express)

- Express
- PostgreSQL
- Sequelize ORM
- Autenticación con Tokens
- Bcrypt para hashear constraseña
- Uso de Json Web Token

------------
## Instructivo

1. Tablas y relaciones de BBDD del proyecto [diagrama](https://dbdiagram.io/d/6139516e825b5b0146f9a927)
    1. Funcionamiento
        1. Un usuario tiene muchas conversaciones
        2. Un usuario es participante de muchas conversaciones
        3. Un usuario envia muchos mensajes
        4. Una conversacion tiene muchos participantes
        5. Una conversacion tiene muchos mensajes
2. Rutas con sus respectivos verbos
    1. /api/v1/conversations
        1. Ruta protegida
        2. Muestra conversaciones del usuario loggeado
        3. Podras crear conversaciones nuevas
    2. /api/v1/conversations/:conversation_id
        1. Ruta protegida
        2. Muestra una conversacion en especifico
        3. La podras eliminar y modificar desde aqui
    3. /api/v1/conversations/:conversation_id/messages
        1. Ruta protegida
        2. Mostrara todos los mensajes que tiene la conversacion
        3. Permitira crear nuevos mensajes
    4. /api/v1/conversations/:conversation_id/messages/:message_id
        1. Ruta protegida
        2. Mostrara un mensaje en especifico
        3. Permitira eliminarlo, pero no modificarlo

##### Funcionalidades Extra:

1. /api/v1/conversations/:conversation_id/participants
	1. Esta ruta debe estar protegida
	2. Mostrara los participantes de la conversacion
	3. Permitira agregar nuevos participantes a la conversacion

2. /api/v1/conversations/:conversation_id/participants/:participant_id
	1. Esta ruta debe estar protegida
	2. Mostrara un participante en especifico de la conversacion
	3. Permitira eliminar participantes de la conversacion

# Developers:
------------

| integrants | GitHub  | LinkedIn |
| :------------ |:---------------:| -----:|
| Angeles D'Stefano | GitHub | AD |
| Carlos Prado | [crafzito111](https://github.com/crafzito111) | [CP](https://www.linkedin.com/in/carlosluisprado/) |
| David Garcia | [2DavidGarcia4](https://github.com/2DavidGarcia4) | [DG](https://www.linkedin.com/in/david-garcia-607a40240/) |
| Elvis Espinoza | [3lvis-dev](https://github.com/3lvis-dev) | [EE](https://www.linkedin.com/in/elvis-alexander-espinoza-) |
| Omar Sosa | GitHub | OS |
| José Gavilanes | [joseandresgavilanes](https://github.com/joseandresgavilanes) | [JG](https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/) |

------------

### End
