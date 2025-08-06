import React from "react";
import Container from "./container";

import type { Classes } from "../component";

export interface FooterContainerProps {
  classes?: Classes;
}

export default class FooterContainer extends Container {
  static jsClass = 'FooterContainer';
  static defaultProps: Partial<FooterContainerProps> = {
    ...Container.defaultProps,
    classes: 'footer bg-light py-3'
  };

  tag: keyof React.JSX.IntrinsicElements = 'footer';

  content(children: React.ReactNode = this.props.children): ReturnType<Container['content']> {
    return <div className={String(this.props.classes)}>{children}</div>;
  }
}
