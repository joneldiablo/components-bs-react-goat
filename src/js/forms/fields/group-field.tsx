import React from "react";

import Field, { FieldProps } from "./field";

export interface GroupFieldProps extends FieldProps {
  groupClasses?: string;
}

export default class GroupField extends Field<GroupFieldProps> {

  static jsClass = 'GroupField';
  static defaultProps: Partial<GroupFieldProps> = {
    ...Field.defaultProps
  }

  get inputNode() {
    const { children, groupClasses } = this.props;
    const start = [], end = [];
    Object.values(children || []).forEach(ch => {
      if (!ch) return;
      const c = ch.type === 'section' ? ch.props.children : ch;
      if (c.props?.position === 'start')
        start.push(ch);
      else if (c.props?.position === 'end')
        end.push(ch);
    });
    const cn = ['input-group', groupClasses];
    const inputNode = (React.createElement('div',
      { className: cn.flat().join(' ') },
      start,
      React.createElement('input', { ...this.inputProps }),
      end
    ));
    return inputNode;
  }

  content() {
    return super.content(false);
  }

};