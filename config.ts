export default {
  subscribeForm: process.env.SUBSCRIBE_FORM || '',
  ghost: {
    baseUrl: process.env.GHOST_URL || 'example.com',
    contentKey: process.env.CONTENT_KEY || 'content-key',
    apiVersion: 4,
  },
};
