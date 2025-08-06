import React, { createRef } from "react";
import moment from "moment";

import Field, { FieldProps, FieldState } from "./field";

export interface DateRangeFieldProps extends FieldProps {}
export interface DateRangeFieldState extends FieldState {}

export default class DateRangeField<
  TProps extends DateRangeFieldProps = DateRangeFieldProps,
  TState extends DateRangeFieldState = DateRangeFieldState
> extends Field<DateRangeFieldProps, DateRangeFieldState> {

  static jsClass = 'DateRangeField';
  static defaultProps = {
    ...Field.defaultProps,
    default: ['', '']
  };

  inputEnd!: React.RefObject<HTMLInputElement | null>;

  constructor(props: TProps) {
    super(props);
    this.inputEnd = createRef<HTMLInputElement>();
  }

  isInvalid(value: any[]) {
    let error = super.isInvalid(value);
    this.inputEnd.current?.setCustomValidity('');
    const isAfter = moment(value[0]).isAfter(value[1]);
    if (isAfter) this.inputEnd.current?.setCustomValidity(String(this.props.errorMessage));
    return (error || isAfter);
  }

  get type() {
    return 'date';
  }

  onChange({ target }: { target: HTMLInputElement }) {
    const { name } = this.props;
    const { value } = this.state;
    const { value: newValue } = target;
    const i = target.name === name ? 0 : 1;
    value[i] = newValue;
    this.setState({
      value,
      error: this.isInvalid(value)
    }, () => { if (value.every((v: any) => !!v)) this.returnData() });
  }

  get inputNode() {
    const { inline } = this.props;
    const { error } = this.state;
    const inputProps = this.inputProps;
    const cnMiddle = ['input-group-text bg-transparent p-0', this.props.controlClasses];
    if (error) cnMiddle.push('border-danger');
    const style = {
      ...inputProps.style,
      borderRight: 'none',
    }
    const style2 = {
      ...inputProps.style,
      borderLeft: 'none',
    }
    const inputNode = (React.createElement('div',
      { className: "input-group" },
      React.createElement('input', { ...inputProps, style, value: inputProps.value[0] }),
      React.createElement('span', { className: cnMiddle.flat().join(' ') }, '-'),
      React.createElement('input',
        {
          ...inputProps,
          name: inputProps.name + '-end',
          ref: this.inputEnd,
          id: inputProps.name + '-end',
          style: style2, value: inputProps.value[1]
        })
    ));
    return (inline
      ? React.createElement('div', { className: "col-auto" }, inputNode)
      : inputNode);
  }

}
