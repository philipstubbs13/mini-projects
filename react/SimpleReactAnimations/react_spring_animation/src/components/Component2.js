import React, { Component } from 'react';
import { Spring } from 'react-spring';

export default class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        { props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat ab ea debitis delectus esse quis iste consequatur, porro architecto et autem animi provident aspernatur laudantium sequi. Fugiat, harum distinctio?</p>
              <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
}

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0',
}
