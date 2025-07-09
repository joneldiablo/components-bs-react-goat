const React = require('react');
class Component extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.eventHandlers = {};
    this.classes = '';
  }
  addClasses(){return true;}
  deleteClasses(){return true;}
  render(){return React.createElement(React.Fragment,null,this.props.children);}
}
Component.defaultProps={};
module.exports = Component;
module.exports.default=Component;
