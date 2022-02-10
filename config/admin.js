module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bfc36cd5354619b83956823f2f9792fd'),
  },
});
