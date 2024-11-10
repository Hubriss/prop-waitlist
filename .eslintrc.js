module.exports = {
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Allow modern ECMAScript features
    sourceType: 'module', // Allow import/export syntax
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  extends: [
    'eslint:recommended', // Basic ESLint rules
    'plugin:react/recommended', // React specific linting
    'plugin:@typescript-eslint/recommended', // TypeScript specific linting
    'plugin:react-hooks/recommended', // React hooks linting
    'next/core-web-vitals', // Built-in Next.js linting (includes best practices for Next.js)
  ],
  plugins: [
    'react', // React specific linting
    '@typescript-eslint', // TypeScript specific linting
  ],
  rules: {
    // 1. Avoid unused variables
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused function args starting with "_"
    
    // 2. Disallow the use of 'any' type
    '@typescript-eslint/no-explicit-any': 'warn',
    
    // 3. React specific linting rules
    'react/no-unescaped-entities': 'warn', // Ensure entities like `'` and `"` are escaped in JSX
    
    // 4. Prevent usage of console.log in production
    'no-console': ['warn', { allow: ['warn'] }],
    
    // 5. Allow JSX fragments shorthand
    'react/jsx-fragments': ['warn', 'syntax'],
    
    // 6. Ensure JSX component names are in PascalCase
    'react/jsx-pascal-case': 'warn',
    
    // 7. Disable React in scope requirement for Next.js (since Next.js doesn't require it)
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off', // Next.js 12+ automatically imports React when needed
    
    // 8. Allow TypeScript to infer types in certain situations
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional if you don't want to enforce return types for functions
    
    // 9. Allow unused imports/variables in testing files or ignored variables with _ prefix
    'no-unused-vars': 'off', // Handled by `@typescript-eslint/no-unused-vars`
    
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'], // Apply these rules to TypeScript files
      rules: {
        // Override rules for TypeScript files if necessary
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
