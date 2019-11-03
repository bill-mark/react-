import React from 'react'

class Test extends React.Component {
	render(){
		console.log('test')
		return <div>{this.props.content}</div>
	}
}

export default Test