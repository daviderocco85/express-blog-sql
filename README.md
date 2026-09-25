# Express Blog SQL

Progetto Blog con Express.js, Routing, Endpoint API CRUD e integrazione con Database MySQL.


# Obiettivi

## Milestone 1

- Importare il DB blog_db su **MySQL Workbench**.
- Installare il client `mysql2` con `npm i mysql2` nell’app **Express**.
- Creare un file di configurazione per connettere il database.
- Inserire un `console.log` nella logica di connessione. 
- Avviare l’applicazione per verificare che non ci siano errori.

## Milestone 2

- Restituire con la **API di INDEX** la lista dei posts recuperata dal database in formato **JSON**.
- Verificare su **Postman** che la risposta sia corretta.

## Milestone 3 

- Eliminazione con la **API di DESTROY** di un post dal database.
- Verificare su **Postman** che la chiamata non dia errore e risponda `204`.
- Verificare su **MySQL Workbench** che il post venga effettivamente rimosso.

## Milestone 4

- Resituire con la **API di SHOW** il post desiderato in formato **JSON**.
- Verificare su **Postman** che la risposta sia corretta.

## Bonus

- Restituire con la **SHOW** il post comprensivo di tag, recuperandoli grazie alla relazione tra `post` e `tags`, esistente sul database.




