'use strict'
import React from 'react'

module.exports = React.createClass({

  getInitialState: function () {

    console.log("init")

    return {
      val: 0
    }
  },

  render: function () {
    console.log("render app", this.state, this.state.val)
    return (
      <div>
        <h3 className='row spacer'>

            Value :
        

            {this.state.val}

        </h3>
        <div className='row spacer'>
          <button>+ 1</button>
          <button>- 1</button>
        </div>
      </div>
    )
  }

})
