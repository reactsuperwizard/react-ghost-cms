module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [ '@typescript-eslint' ],
  extends: [ 'airbnb-typescript' ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': ['tests/**/*']
      },
    ],
  }
};
