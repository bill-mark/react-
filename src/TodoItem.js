import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
	render (){
		return (
			<div onClick={this.handleClick}>
			    {this.props.test} - {this.props.content}
			</div>
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

TodoItem.propTypes = {
	content:PropTypes.string,
	deleteItem:PropTypes.func,
	index:PropTypes.number
}

TodoItem.defaultProps = {
	test:'hello word'
}

export default TodoItem