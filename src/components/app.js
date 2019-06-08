import React, { Component } from 'react';
import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='backgroundSkew'>
          <div className='madlib-heading'>
            <h1>Bottega Mad Libs</h1>
            <div className='madlib-subheading'>
              Fill out the Field below and click the generate button<br/>to see the Mad Libs story.
            </div>
          </div>
          <MadlibForm name='Matthew'/>
        </div>
      </div>
    );
  }
}
