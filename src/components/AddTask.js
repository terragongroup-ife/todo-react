import React from 'react';
import ShowTask from './ShowTask';
import {createAddTask , createDeleteTask} from '../actions';
import {connect} from 'react-redux';
import store from '../store';


class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : '', 
            content : ''
        }
        this.createTask = this.createTask.bind(this);
        
    }

    createTask(){
        if(this.state.title != '' && this.state.content!=''){
        const action = createAddTask(this.state.title, this.state.content)
        store.dispatch(action);
        }
        
    }
    render(){


        return (

            <div className="container">
                <h1>Todo Application (Beta) </h1>
                <div className="form-group">
                    <label> Title </label> 
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={(event) => {this.setState({title:event.target.value})}}
                    />
                </div>

                <div className="form-group">
                    <textarea className="form-control" placeholder="About Task"
                    onChange={(event) => {this.setState({content: event.target.value})}}></textarea>
                </div>

                <div className="form-group">
                    <input type="button" 
                    className="btn btn-primary" 
                    value="Add Task"
                    onClick={this.createTask}
                    ></input>
                </div>


                <div className="container"></div>
                <br/>
                <ShowTask taskList={store.getState()} />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps) (AddTask);