import React, { Component } from 'react';
import axios from "axios";
import StudentCreateModel from './StudentCreateModel';
import {Route,NavLink,BrowserRouter} from 'react-router-dom';

class StudentList extends Component {

constructor(props){
	super(props);
	this.state={
	todos:[]
	}
	this.deletethis = this.deletethis.bind(this)
}

componentDidMount() {
    this.resetState();
  }

getStudents(){

    axios.get("http://localhost:8000/api/student/").then((response) => {
    this.setState({todos: response.data});
    });

  }

resetState = () =>{

	this.getStudents();
}

deletethis(e){
	confirm('are you sure want to delete this')
    axios.delete("http://localhost:8000/api/student/"+e.target.value+'/').then((response) => {
	this.getStudents();
    });
  }

  render() {
    return (
      <div>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr className="bg-gray text-red">
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Registeration Time</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(item => (
              <tr>
                <td scope="row">{item.Name}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
                <td>{item.registration_date}</td>
                <td><button value={item.pk} onClick={this.deletethis}>delete</button></td>
                <StudentCreateModel create={false} resetState={this.resetState} student={item}/>
              </tr>
            ))}
          </tbody>
        </table>
		<StudentCreateModel create={true} resetState={this.resetState} />

      </div>
    );
  }


}

export default StudentList;