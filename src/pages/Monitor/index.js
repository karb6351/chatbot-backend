import React, { Component } from 'react';

import { subscribeToUsersMonitor, disconnectToUserMonitor } from '../../api/monitor';

export default class Monitor extends Component {
	constructor(props) {
    super(props);
		this.state = {
			onlineUsers: {},
			isFetching: false
    };
	}

	componentDidMount = () => {
    this.mounted = true;
    subscribeToUsersMonitor((err, onlineUsers) => {
      if(this.mounted){
        this.setState({
          ...this.state,
          onlineUsers: onlineUsers,
        });
      }
    })
	};

	componentWillUnmount = () => {
    this.mounted = false;
    disconnectToUserMonitor();
	};

	render() {
		const { onlineUsers } = this.state;
		return (
			<div>{Object.keys(onlineUsers).map((item, index) => 
      <div key={index}>
        <p>{item}</p>
        <p>{JSON.stringify(onlineUsers[item])}</p>
      </div>)}</div>
		);
	}
}
