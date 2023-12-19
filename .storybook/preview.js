/** @type { import('@storybook/react').Preview } */
const preview = {
  
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    storySort: {
      method: 'alphabetical',
      locales: 'en-US',
  }
  },
};

export default preview;