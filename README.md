To start the project you can do
This will start all the database, server, middleware and the UI

```
npm install
lerna bootstap
npm run startDev
```

The database and server are located inside `packages/backend`
The middleware is located inside `packages/web-docker`
The UI is located inside `packages/ui`

## Hygen

Template code generator

To create a new component do `hygen component new`. This will inject a new component to `packages/ui/src/components`
