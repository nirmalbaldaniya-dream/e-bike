// tailwind.config.js
module.exports = {
  mode: 'jit',
 // These paths are just examples, customize them to match your project structure
  purge: {
    enabled: true,
    content: ['./src/**/*.ts'],
    options: {
      keyframes: true,
      fontFace: true
    }
  },
  theme: {
    // ...
  }
  // ...
}