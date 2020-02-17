import React,{Component} from "react";
import { Modal, ModalHeader, Button, ModalFooter,Fragment,Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

//,
class StudentCreate extends Component{
constructor(props){
	super(props);
	this.state={
	pk:0,
	Name:"",
	email:"",
	phone_number:""

	}
	this.onChange=this.onChange.bind(this)
	this.sudentcreate=this.sudentcreate.bind(this)
	this.sudentedit=this.sudentedit.bind(this)
}

componentDidMount(){
 console.log(this.props.student)
 if(this.props.student){
 const {pk,Name,email,phone_number} = this.props.student
 this.setState({pk,Name,email,phone_number})
 console.log(this.state)
 }


}

onChange(e){
this.setState({[e.target.name]:e.target.value})
}

sudentcreate(e){

	e.preventDefault();
	axios.post("http://localhost:8000/api/student/",
	this.state).then(()=>{
    this.props.resetState();
    this.props.toggle();

	})

}

sudentedit(e){
	e.preventDefault();
	axios.put("http://localhost:8000/api/student/"+this.state.pk+"/",this.state).then(()=>{
	this.props.resetState();
    this.props.toggle();


	})



}


	render(){
	const student=this.props.student
		return(
	<Form onSubmit= {student ? this.sudentedit:this.sudentcreate}>
        <FormGroup>
          <Label for="Name">Name:</Label>
          <Input
            type="text"
            name="Name"
            value={this.state.Name}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="phone_number">Phone:</Label>
          <Input
            type="text"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.onChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>

		)

	}

}

export default StudentCreate;