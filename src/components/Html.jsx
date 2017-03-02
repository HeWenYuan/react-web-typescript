import * as React from 'react';


export default class Html extends React.Component {
  render () {
    return (
      <html>
        <head></head>
        <body>
          {this.props.childrens}
        </body>
      </html>
    );
  }
}