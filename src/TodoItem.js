import React from 'react'

class TodoItem extends React.Component{
	render (){
		return (
			<div onClick={this.handleClick}>{this.props.content}</div>
	    )
	}

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		//this.props.deleteItem(this.props.index)
		
		const {deleteItem,index} = this.props
		deleteItem(index)
	}
}

export default TodoItem