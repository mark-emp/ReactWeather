var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application that has been built using the <a href="https://facebook.github.io/react" target="_blank">React</a> JavaScript library as part of <a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">The Complete React Web App Developer Course</a>.</p>
      <p>Weather information is taken from <a href="https://openweathermap.org" target="_blank">OpenWeatherMap</a>.</p>
      <p>The GitHub repository containing the soucrce code can be found <a href="https://github.com/mark-emp/ReactWeather" target="_blank">here</a>.</p>
    </div>
  )
};

module.exports = About;
