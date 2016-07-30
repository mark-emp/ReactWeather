var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out:</p>
      <ol>
        <li><Link to='/?location=Oxford'>Oxford, UK</Link></li>
        <li><Link to='/?location=Croyde'>Croyde, UK</Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;
