/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Docusaurus sidebar configuration.
 * This file defines the order of docs in the navigation sidebar.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorials",
      items: [
        "tutorials/and-gate-circuit",
        "tutorials/blinking-led-circuit",
        "tutorials/copying-a-reference-circuit",
        "tutorials/motor-driver-circuit",
        "tutorials/or-gate-circuit",
        "tutorials/pushbutton-led-circuit",
        "tutorials/parts-of-a-pcb",
        "tutorials/ESP32-D0WDQ6-schematic" // Added ESP32 schematic tutorial
      ]
    }
  ]
};
