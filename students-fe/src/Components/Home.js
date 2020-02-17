import React,{Component} from 'react';
import {Route,NavLink,BrowserRouter} from 'react-router-dom';
import StudentList from './Studentlist';
import StudentCreate from './Studentcreate';

class Home extends Component{
	render(){
		return(
		<div>
		<h1>This is an Example of Reactifying Django</h1>
		<StudentList />
		</div>
		)
	}
}

export default Home;