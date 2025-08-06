jest.mock('../containers/alert-container/alert-container', () => function Alert() {}, { virtual: true });
jest.mock('../containers/card-container', () => function Card() {}, { virtual: true });
jest.mock('../containers/modal-container', () => function Modal() {}, { virtual: true });
jest.mock('../containers/offcanvas/offcanvas', () => function Offcanvas() {}, { virtual: true });
jest.mock('../containers/panel-container/panel-container', () => function Panel() {}, { virtual: true });
jest.mock('../containers/grid-container', () => function Grid() {}, { virtual: true });
jest.mock('../containers/tabs-container', () => function Tabs() {}, { virtual: true });
jest.mock('../containers/scroll-container', () => function Scroll() {}, { virtual: true });
jest.mock('../containers/slide-container', () => function Slide() {}, { virtual: true });
jest.mock('../containers/footer-container', () => function Footer() {}, { virtual: true });
jest.mock('../containers/modal-button-container', () => function ModalButton() {}, { virtual: true });
jest.mock('../containers/dropdown-button-container', () => function DropdownButton() {}, { virtual: true });

const containersModule = require('../containers');
const containers = containersModule.default;
const { addContainers } = containersModule;

describe('containers registry', () => {
  test('exposes all default containers', () => {
    expect(containers.AlertContainer).toBeDefined();
    expect(containers.CardContainer).toBeDefined();
    expect(containers.ModalContainer).toBeDefined();
  });

  test('addContainers registers new components', () => {
    const Demo = () => null;
    addContainers({ Demo });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((containers as any).Demo).toBe(Demo);
  });
});
