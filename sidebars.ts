import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      items: ['get-started/quickstart', 'get-started/registry'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/and-gate-circuit',
        'tutorials/blinking-led-circuit',
        'tutorials/copying-a-reference-circuit',
        'tutorials/motor-driver-circuit',
        'tutorials/or-gate-circuit',
        'tutorials/parts-of-a-pcb',
        'tutorials/pushbutton-led-circuit',
        'tutorials/ESP32-D0WDQ6-schematic',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced/soup'],
    },
  ],
};

export default sidebars;
