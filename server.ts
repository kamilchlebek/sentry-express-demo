import express from 'express'
import * as Sentry from '@sentry/node'

const {
    SSR_SENTRY_DSN
} = process.env

const app = express();

Sentry.init({ dsn: SSR_SENTRY_DSN });

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

app.listen(4500);

console.log(`Node server listening on port ${4500}`)
