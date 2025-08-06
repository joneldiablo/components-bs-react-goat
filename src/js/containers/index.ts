import AlertContainer from "./alert-container/alert-container";
import CardContainer from "./card-container";
import ModalContainer from "./modal-container";
import OffcanvasContainer from "./offcanvas/offcanvas";
import PanelContainer from "./panel-container/panel-container";
import GridContainer from "./grid-container";
import TabsContainer from "./tabs-container";
import ScrollContainer from "./scroll-container";
import SlideContainer from "./slide-container";
import FooterContainer from "./footer-container";
import ModalButtonContainer from "./modal-button-container";
import DropdownButtonContainer from "./dropdown-button-container";

/**
 * Registry of available container components.
 *
 * @example
 * ```ts
 * import containers, { addContainers } from "./containers";
 * const Extra = () => null;
 * addContainers({ Extra });
 * console.log(containers.Extra); // Extra
 * ```
 */
const CONTAINERS = {
  AlertContainer,
  CardContainer,
  ModalContainer,
  OffcanvasContainer,
  PanelContainer,
  GridContainer,
  TabsContainer,
  ScrollContainer,
  SlideContainer,
  FooterContainer,
  ModalButtonContainer,
  DropdownButtonContainer,
};

/**
 * Merges custom containers into the registry.
 *
 * @param newContainers - mapping of names to container components.
 */
export const addContainers = (
  newContainers: Record<string, any>
): void => {
  Object.assign(CONTAINERS, newContainers);
};

export {
  AlertContainer,
  CardContainer,
  ModalContainer,
  OffcanvasContainer,
  PanelContainer,
  GridContainer,
  TabsContainer,
  ScrollContainer,
  SlideContainer,
  FooterContainer,
  ModalButtonContainer,
  DropdownButtonContainer,
};

/**
 * All registered container components.
 */
export default CONTAINERS;
