const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  // Add any additional configuration here
});

module.exports = Sentry;