# Posting to Express with Objection

Let's build an application with a database to track our hobbies. The front-end React is provided so that we can focus on the back-end Express.

## Part 0.5

Investigate the provided files - React client and Express server

- How does the front-end React expect to interact with the data?

## Part 1

Set up the back-end server of the application so that we can view all of our hobbies (index page)

A Hobby should have:

- Name (required)
- Description (optional)

Remember that the back end consists of:

1. Knex Migrations
2. Objection Models
3. Express Routers

## Part 1.5

Insert some Hobby records in the database through the server `yarn console`

## Part 2

The React front-end has a form to allow users to add a new hobby. Build the back end needed to persist the data submitted via the form

- Validations (bonus)
