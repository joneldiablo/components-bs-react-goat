const React = require('react');
const Component = require('./component');

class ComplexComponent extends Component {}

const nameSuffixes = () => ({});

module.exports = ComplexComponent;
module.exports.default = ComplexComponent;
module.exports.nameSuffixes = nameSuffixes;
module.exports.ComplexComponentProps = class {};
module.exports.ComplexComponentState = class {};
