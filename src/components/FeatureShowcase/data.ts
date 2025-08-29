export interface Feature {
  id: number;
  featureId: string;
  title: string;
  description: string[];
  gradient: string;
  featureName: string;
}

export const features: Feature[] = [
  {
    id: 1,
    featureId: 'Feature No.1 -',
    title: 'TEXT HEADING DISPLAY',
    description: [
      'Lorem ipsum dolor: sit amet consectetur adipiscing elit, sed do eiusmod.',
      'Ut enim minim: veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      'Sed ut perspiciatis: unde omnis iste natus error sit voluptatem accusantium doloremque.',
      'Excepteur sint occaecat: cupidatat non proident sunt in culpa qui officia deserunt mollit.',
    ],
    gradient: 'linear-gradient(to bottom, #D8326F, #A3318A, #6333A3)',
    featureName: 'Feature 1 : Lorem ipsum dolor',
  },
  {
    id: 2,
    featureId: 'Feature No.2 -',
    title: 'DYNAMIC CONTENT',
    description: [
      'This is the second feature, demonstrating dynamic content switching.',
      'As you click or scroll, the text and visuals change seamlessly.',
      'Each feature has its own unique information and style.',
      'Built to be flexible and easily updatable.',
    ],
    gradient: 'linear-gradient(to bottom, #00c6ff, #0072ff)',
    featureName: 'Feature 2 : Lorem ipsum dolor',
  },
  {
    id: 3,
    featureId: 'Feature No.3 -',
    title: 'SCROLL-DRIVEN INTERACTION',
    description: [
      'The component reacts to your scroll position.',
      'This creates an immersive and engaging user experience.',
      'The active feature is always in sync with your scroll.',
      'After the last feature, the page continues to scroll normally.',
    ],
    gradient: 'linear-gradient(to bottom, #e1eec3, #f05053)',
    featureName: 'Feature 3 : Lorem ipsum dolor',
  },
  {
    id: 4,
    featureId: 'Feature No.4 -',
    title: 'FULLY RESPONSIVE DESIGN',
    description: [
      'Works beautifully on all devices, from mobile to desktop.',
      'The layout intelligently adapts to the screen size.',
      'Ensuring a consistent and optimal experience for every user.',
      'The mobile layout is stacked for readability and ease of use.',
    ],
    gradient: 'linear-gradient(to bottom, #ff9966, #ff5e62)',
    featureName: 'Feature 4 : Lorem ipsum dolor',
  },
  {
    id: 5,
    featureId: 'Feature No.5 -',
    title: 'CLEAN & SELF-CONTAINED',
    description: [
      'Designed to be modern, clean, and visually appealing.',
      'Perfectly follows the provided Figma design specifications.',
      'A self-contained component for easy integration into any React project.',
      'Built with best practices using React and modern CSS.',
    ],
    gradient: 'linear-gradient(to bottom, #7b4397, #dc2430)',
    featureName: 'Feature 5 : Lorem ipsum dolor',
  },
];
