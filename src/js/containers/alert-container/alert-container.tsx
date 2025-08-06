import React from "react";

import Component, {
  nameSuffixes,
  ComplexComponentProps,
  ComplexComponentState,
} from "@farm-js/react-goat/complex-component";

import schema from "./alert-schema.json";

/**
 * Props for {@link AlertContainer}.
 */
export interface AlertContainerProps extends ComplexComponentProps {
  /**
   * Custom CSS classes for alert sections.
   */
  classes: Record<string, string>;
}

/**
 * State for {@link AlertContainer}.
 */
export interface AlertContainerState extends ComplexComponentState {
  /**
     * Classes built from current props.
     */
  localClasses: string;
}

/**
 * Bootstrap alert wrapper component.
 *
 * @example
 * ```tsx
 * <AlertContainer name="notice" label="Info" color="warning" />
 * ```
 */
export default class AlertContainer extends Component<
  AlertContainerProps,
  AlertContainerState
> {
  static jsClass = "AlertContainer";
  static defaultProps = {
    ...Component.defaultProps,
    schema,
    iconSize: 20,
    color: "primary",
    showClose: true,
    definitions: {},
    classes: {
      ".": "",
      label: "mb-0",
      icon: "",
      description: "",
      close: "",
    },
    rules: {
      ...nameSuffixes(["Label", "Description", "Close"]),
    },
  };
  static dontBuildContent = true;
  static wrapper = false;
  classes = "alert fade show shadow-sm";
  setOfClasses: Set<string>;

  constructor(props: AlertContainerProps) {
    super(props);
    this.setOfClasses = new Set<string>();
    Object.assign(this.state, {
      localClasses: this.buildClasses(),
    });
  }

  componentDidUpdate(prevProps: AlertContainerProps) {
    const classes = this.buildClasses(prevProps);
    if (classes !== this.state.localClasses) {
      this.setState({ localClasses: classes });
    }
  }

  /**
   * Builds the CSS class list when props change.
   */
  buildClasses(prevProps?: AlertContainerProps): string {
    const prev = prevProps || ({} as AlertContainerProps);
    if (prev.color !== this.props.color) {
      if (prev.color) {
        this.setOfClasses.delete("alert-" + prev.color);
      }
      this.setOfClasses.add("alert-" + this.props.color);
    }
    if (prev.showClose !== this.props.showClose) {
      this.setOfClasses[this.props.showClose ? "add" : "delete"](
        "alert-dismissible"
      );
    }
    return Array.from(this.setOfClasses).flat().join(" ");
  }

  /**
   * Mutates schema sections with dynamic props.
   */
  mutations(sn: string, section: Record<string, any>) {
    const { name } = this.props;
    switch (sn) {
      case name + "Label":
        return {
          icon: this.props.icon,
          label: this.props.label,
          classes: {
            ".": (this.props.classes?.label || "") + " alert-heading",
            icon:
              (this.props.classes?.icon || "") +
              " alert-icon align-text-middle",
          },
        };
      case name + "Description":
        return {
          classes:
            (this.props.classes?.description || "") +
            (this.props.icon ? " ps-4" : ""),
          content: this.props.content,
        };
      case name + "Close":
        return {
          active: this.props.showClose,
          classes: (this.props.classes?.close || "") + " btn-close",
        };
      default:
        break;
    }
    return super.mutations(sn, section);
  }
}
