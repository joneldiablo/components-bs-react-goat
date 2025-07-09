import AlertContainer from "./alert-container/alert-container";
import CardContainer from "./card-container";
import ModalContainer from "./modal-container";
import OffcanvasContainer from "./offcanvas/offcanvas";
import PanelContainer from "./panel-container/panel-container";

const CONTAINERS = {
  AlertContainer,
  CardContainer,
  ModalContainer,
  OffcanvasContainer,
  PanelContainer,
};

export const addContainers = (newContainers: Record<string, any>) => {
  Object.assign(CONTAINERS, newContainers);
};

export {
  AlertContainer,
  CardContainer,
  ModalContainer,
  OffcanvasContainer,
  PanelContainer,
};

export default CONTAINERS;
