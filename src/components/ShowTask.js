import React from "react";
import {createDeleteTask} from '../actions';
import store from '../store';
import {connect} from 'react-redux';

class ShowTask extends React.Component {
  constructor(props){
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    }

  
  deleteTask(index, event){
    store.dispatch(createDeleteTask(index))
  }
  render() {
    return (
      <div>
        Number of Added tasks : {this.props.taskList.length}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
         
            {this.props.taskList.map((item, index) => (
              <tr key={index++}>
                <td>{index}</td>
                 <td>{item.title}</td>
                 <td>{item.content}</td>
                 <td><button className="btn btn-danger" 
                 data-tag={item.index} 
                 onClick={(event) => {this.deleteTask(item.id, event)}}>Delete</button>
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps) (ShowTask)
// export default ShowTask;
