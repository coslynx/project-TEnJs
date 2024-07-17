const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN_HERE',
  tracesSampleRate: 1.0,
});

module.exports = Sentry;