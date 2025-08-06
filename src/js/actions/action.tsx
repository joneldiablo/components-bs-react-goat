import resolveRefs from "dbl-utils/resolve-refs";
import eventHandler from "dbl-utils/event-handler";
import Component, { ComponentProps } from "@farm-js/react-goat/component";
import Goat from "@farm-js/react-goat/goat";

/**
 * Properties for {@link ActionComponent}.
 *
 * @example
 * ```tsx
 * <ActionComponent name="save" icon="check">Save</ActionComponent>
 * ```
 */
export interface ActionComponentProps extends ComponentProps {
  /**
   * Apply the Bootstrap `.btn` class when true.
   */
  classButton?: boolean;
  /**
   * Identifier of a component to close when the action is triggered.
   */
  close?: string | boolean;
  /**
   * Disables the action element.
   */
  disabled?: boolean;
  /**
   * HTML form attribute.
   */
  form?: string;
  /**
   * URL hash for navigation actions.
   */
  hash?: string;
  /**
   * Icon name displayed before the content.
   */
  icon?: string | boolean;
  /**
   * Additional classes for the icon.
   */
  iconClasses?: string;
  /**
   * Extra properties forwarded to the icon component.
   */
  iconProps?: Record<string, any>;
  /**
   * Optional identifier dispatched with events.
   */
  id?: string | number;
  /**
   * Identifier of a component to open when the action is triggered.
   */
  open?: string | boolean;
  /**
   * Search portion for navigation actions.
   */
  search?: string;
  /**
   * Status key used to render a status icon.
   */
  status?: string | boolean;
  /**
   * Map of classes for each status value.
   */
  statusClasses?: Record<string, string>;
  /**
   * Map of icons for each status value.
   */
  statusIcons?: Record<string, string>;
  /**
   * Options passed to the navigation function.
   */
  navOptions?: Record<string, any>;
  /**
   * Destination used when `type` is `link`.
   */
  to?: string | number;
  /**
   * Type of the action, defaults to `button`.
   */
  type?: string;
  /**
   * Value dispatched on click.
   */
  value?: any;
  /**
   * Horizontal content alignment.
   */
  justifyContent?: "start" | "center" | "end";
}

/**
 * React component that renders a Bootstrap based action button.
 *
 * It handles navigation, opening or closing other components and
 * dispatching custom events using `dbl-utils/event-handler`.
 */
export default class ActionComponent extends Component<ActionComponentProps> {
  static jsClass = "Action";

  static defaultProps: Partial<ActionComponentProps> = {
    ...Component.defaultProps,
    type: "button",
    classButton: true,
    open: false,
    close: false,
    statusIcons: {
      success: "check",
      error: "x",
      warning: "exclamation",
      loading: "spinner",
    },
    statusClasses: {
      success: "text-bold text-success",
      error: "text-bold text-danger",
      warning: "text-bold text-warning",
      loading: "spinner",
    },
    iconClasses: "",
    iconProps: {},
    justifyContent: "center",
  };

  static schemaContent = {
    actionIcon: {
      name: ["$props/name", "actionIcon"],
      component: "Icons",
      icon: "$props/icon",
      style: {
        width: "var(--bs-btn-font-size)",
      },
    },
    actionContent: {
      name: ["$props/name", "actionContent"],
      tag: "span",
    },
    actionStatus: {
      name: ["$props/name", "actionStatus"],
      component: "Icons",
      icon: "$state/status",
      classes: "float-end",
    },
  };

  protected tag: any = "button";
  protected classes = "d-inline-flex align-items-center";
  protected schema;
  protected goat;

  /**
   * Creates an instance of {@link ActionComponent}.
   */
  constructor(props: ActionComponentProps) {
    super(props);
    this.classes += " justify-content-" + props.justifyContent;
    this.onClick = this.onClick.bind(this);
    Object.assign(this.state, {
      localClasses: props.classButton ? "btn" : "",
    });
    this.eventHandlers.onClick = this.onClick;
    this.schema = resolveRefs(ActionComponent.schemaContent, { props });
    this.goat = new Goat({ ...props }, this.mutations.bind(this));
  }

  /**
   * Handles click events and dispatches navigation or custom actions.
   */
  protected onClick(e: any) {
    e.stopPropagation();
    const {
      navigate,
      to,
      search,
      hash,
      navOptions = {},
      type,
      open,
      close,
      value,
      name,
      id,
    } = this.props;

    if (type === "link" && to) {
      if (typeof to === "number") navigate(to);
      else {
        navigate(
          { pathname: to, search, hash },
          { ...navOptions, state: { name, id, value } }
        );
      }
    }

    if (open) {
      eventHandler.dispatch(`update.${open}`, { open: true });
    }
    if (close) {
      eventHandler.dispatch(`update.${close}`, { open: false });
    }

    let dispatch: any = name;
    if (value || id) {
      dispatch = { [name]: value, id };
    }
    eventHandler.dispatch(name, dispatch);
  }

  /**
   * Additional properties applied to the rendered element.
   */
  protected get componentProps(): Record<string, any> {
    const { type: prevType, disabled, form, _props = {} } = this.props;
    const type = prevType === "link" ? "button" : prevType;
    return { type, disabled, ..._props, form: form ? `${form}-form` : undefined };
  }

  /**
   * Builds the internal content using a Goat schema.
   */
  protected content(): React.ReactNode {
    return this.goat.buildContent(this.schema);
  }

  /**
   * Mutates child component properties based on schema updates.
   */
  protected mutations(name: string, config: Record<string, any>) {
    const search = name.replace(`${this.props.name}-`, "");
    switch (search) {
      case "actionIcon": {
        const cn: string[] = [];
        if (this.props.children) cn.push("me-2");
        return {
          ...this.props.iconProps,
          active: !!this.props.icon,
          icon: this.props.icon,
          classes: [cn, this.props.iconClasses].flat().join(" "),
        };
      }
      case "actionStatus": {
        const classes = [config.classes, this.props.statusClasses?.[this.props.status as string]];
        if (this.props.icon || this.props.children) classes.push("ms-2");
        return {
          active: !!this.props.status,
          icon: this.props.statusIcons?.[this.props.status as string],
          classes,
        };
      }
      case "actionContent": {
        return {
          active: !!this.props.children,
          content: this.props.children,
        };
      }
      default:
        return {};
    }
  }
}
