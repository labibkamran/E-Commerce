module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          port: '', // Leave empty if not using a specific port
          pathname: '/**', // Allow all paths under this hostname
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', // For user profile images
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  