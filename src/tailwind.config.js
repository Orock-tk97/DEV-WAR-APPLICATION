module.exports = {
    theme: {
      extend: {  
        gradients: {
        'gradient-blue-purple': {
          from: 'blue-600',
          to: 'purple-500',
        },
        'gradient-purple-blue': {
          from: 'purple-500',
          to: 'blue-600',
      },}, // Add custom theme modifications here
    },
    plugins: [], // Add Tailwind plugins here
    content: ["./src/**/*.{html,js,jsx}"],
  }
};
  
  