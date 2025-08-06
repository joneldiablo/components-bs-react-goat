import Action from "./actions/action";
import containers from "./containers";
import fields from "./fields";
import BrandNavigation from "./navigation/brand-navigation";
import CardListNavigation from "./navigation/card-list-navigation";
import CardsNavigation from "./navigation/cards-navigation";
import HeaderNavigation from "./navigation/header-navigation";
import Navbar from "./navigation/navbar";
import Navigation from "./navigation/navigation";
import SideNavigation from "./navigation/side-navigation";
import Table from "./tables/table";

/**
 * Aggregated collection of Bootstrap components.
 *
 * @example
 * ```tsx
 * import components from "@farm-js/components-bs-react-goat/components";
 * const SaveAction = components.Action;
 * ```
 */
const components = {
  Action,
  ...containers,
  ...fields,
  BrandNavigation,
  CardListNavigation,
  CardsNavigation,
  HeaderNavigation,
  Navbar,
  Navigation,
  SideNavigation,
  Table,
};

export default components;
