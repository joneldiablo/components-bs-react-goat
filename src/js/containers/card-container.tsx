import React from "react";

import Container, { ContainerProps } from "./container";

export interface CardContainerProps extends ContainerProps {
  headerClasses?: string;
  bodyClasses?: string;
  footerClasses?: string;
}

export default class CardContainer<TProps extends CardContainerProps = CardContainerProps> extends Container<TProps> {

  static jsClass = 'CardContainer';
  static defaultProps = {
    ...Container.defaultProps,
    fullWidth: true,
    headerClasses: '',
    bodyClasses: '',
    footerClasses: ''
  }

  classes = 'card';

  constructor(props: TProps) {
    super(props);
  }

  content(children: React.ReactNode[] = React.Children.toArray(this.props.children)) {
    if (!this.breakpoint) return this.waitBreakpoint;
    const theContent: Record<'header' | 'body' | 'footer', React.ReactElement[]> = {
      header: [],
      body: [],
      footer: []
    };
    const { headerClasses,
      bodyClasses,
      footerClasses } = this.props;
    (children as React.ReactElement<any>[]).forEach((child) => {
      if (!child) return;
      const props = (!(child.props?.style && (child.props as any).style['--component-name'])
        ? child : (child.props as any).children).props as any;

      if (props.header) {
        theContent.header.push(child);
      } else if (props.footer) {
        theContent.footer.push(child);
      } else if (props.container) {
        theContent[props.container as 'header' | 'body' | 'footer'].push(child as React.ReactElement);
      } else {
        theContent.body.push(child);
      }
    });
    const hc = ['card-header'],
      bc = ['card-body'],
      fc = ['card-footer'];

    if (headerClasses) hc.push(headerClasses);
    if (bodyClasses) bc.push(bodyClasses);
    if (footerClasses) fc.push(footerClasses);

    return React.createElement(React.Fragment, {},
      !!theContent.header.length &&
      React.createElement('div', { className: hc.flat().filter(Boolean).join(' ') }, theContent.header),
      React.createElement('div', { className: bc.flat().filter(Boolean).join(' ') }, theContent.body),
      !!theContent.footer.length &&
      React.createElement('div', { className: fc.flat().filter(Boolean).join(' ') }, theContent.footer)
    );
  }

}