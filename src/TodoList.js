import React,{Fragment}from 'react'
import TodoItem from './TodoItem.js'
import Test from './Test.js'
import './style.css'

class TodoList extends React.Component {
	render(){
		return (
           <Fragment>
               <div> 
                   <label htmlFor="insertArea">输入内容</label>
                   <input 
                       id="insertArea"
                       className="input"
                       value= {this.state.inputValue}
                       onChange= {this.handleInputChange.bind(this)} 
                    />
                   <button onClick={()=>this.handleBtnClick()}>提交</button> 
               </div>
               <ul>
                  {this.getTodoItem()}
               </ul>
               <Test content={this.state.inputValue}/>
           </Fragment>
	    )
	}

	constructor(props){
       super(props)
       this.state = {
       	  inputValue:'',
       	  list:[]
       }
	}

	getTodoItem(){
		return (
                this.state.list.map((item,index)=>{
                	return (
                      <TodoItem content={item} 
                                index={index}
                                key={index}
                                deleteItem={this.handleItemDelet.bind(this)}/>
                	)
                })
			)
	}

	handleInputChange(e){
		const value = e.target.value
		this.setState( ()=>({
			inputValue: value
		}))
	}

	handleBtnClick(){
		this.setState( (prevState)=>({  //prevState 避免不小心改变state状态
			list:[...prevState.list,prevState.inputValue],
		 	inputValue:''
		}))
	}

	handleItemDelet(index){
        //const list = [...this.state.list]
        //list.splice(index,1)
        // this.setState({
        // 	list : list
        // })
        this.setState((prevState)=>{
        	const list = [...prevState.list]
        	list.splice(index,1)
        	return {
        		list:list
        	}
        })
	}
}

export default TodoList

