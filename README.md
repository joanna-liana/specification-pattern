# Specification pattern

Sample (and incomplete) implementation of the Specification pattern in Node.js + TypeORM. Take a look at `ProductsService` to get the idea of the usage.

Please bear in mind that the overall product setup is quick-and-dirty, NOT production ready.

Since this repo is my playground, there other experiments included:
- TypeORM child entities
- integration tests setup with Testcontainers and swc (also extracted into this [gist](https://gist.github.com/joanna-liana/18d8f4cb95ecfb9efd12266937b1f27e))

## How to run this project

- `npm i`
- `docker-compose up`
- `npm run seed && npm start`
