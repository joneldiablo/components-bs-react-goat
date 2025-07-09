import React from "react";

import fieldComponents from "../fields";
import Component, { ComponentProps } from "../../component";

export interface GroupProps extends ComponentProps {
  label?: string;
  labelClasses?: string;
  fieldClasses?: string;
  fields?: any[];
}

export default class Group extends Component<GroupProps> {

  static jsClass = 'Group';
  static defaultProps: Partial<GroupProps> = {
    ...Component.defaultProps,
    fieldClasses: 'mb-3',
    fields: []
  }

  constructor(props) {
    super(props);
    this.mapFields = this.mapFields.bind(this);
  }

  mapFields(field, i) {
    const { fieldClasses } = this.props;
    const DefaultField = field.type?.toLowerCase().includes('group') ?
      Group :
      fieldComponents.Field
    const Field = (fieldComponents[field.type] || DefaultField);

    const cn = [field.classes, fieldClasses];
    const fieldProps = {
      key: i + '-' + field.name,
      ...field,
      classes: cn.flat().join(' ')
    }
    if (field.fields) {
      fieldProps.children = field.fields.map(this.mapFields);
      delete fieldProps.fields;
    }
    return React.createElement(Field, { ...fieldProps });
  }

  content(children = this.props.children) {
    const { label, fields, labelClasses } = this.props;
    return React.createElement(React.Fragment, {},
      label && React.createElement('label', { className: labelClasses }, label),
      fields && fields.map(this.mapFields),
      children
    );
  }

}