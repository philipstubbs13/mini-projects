import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    // we need to prevent the default behavior of the form, 
    // which if we don't will cause the page to refresh when you hit the submit button.
    e.preventDefault();
    // we need to carve out a space in our Firebase database where we'd like to store
    // all of the items that people are bringing to the potluck.
    // We do this by calling the ref method and passing in the destination
    // we'd like them to be stored (items).
    const itemsRef = firebase.database().ref('items');
    // here we grab the item the user typed in (as well as their username) from the state,
    // and package it into an object so we ship it off to our Firebase database.
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    // similar to the Array.push method, 
    // this sends a copy of our object so that it can be stored in Firebase
    itemsRef.push(item);
    // This clears out the inputs so that an additional item can be added.
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.currentItem} />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;