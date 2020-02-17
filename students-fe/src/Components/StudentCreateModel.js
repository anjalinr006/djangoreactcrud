import React,{Component} from "react";
import StudentCreate from './Studentcreate';

const display={
	display:'block'
}
const hide={
	display:'none'
}

class StudentCreateModel extends Component{

constructor(props){
super(props);
this.state={
	toggle:false
}

this.toggle=this.toggle.bind(this)

}

toggle(){

this.setState(prevState=>({
  toggle:!prevState.toggle

})

);

}
render(){
const create = this.props.create
var button = <td><button onClick={this.toggle}>Edit Student</button></td>

if (create){

button = <button onClick={this.toggle}>Create New Student</button>

}
return(

      <div>
	  {button}
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
	  <StudentCreate resetState={this.props.resetState} toggle={this.toggle} student={this.props.student}/>
       <a className="btn-flat" onClick={this.toggle}>Close</a>
      </div>
      <div className="modal-footer">
        <a className="btn-flat" onClick={this.toggle}>Close</a>
      </div>
    </div>
      </div>

)
}
}

export default StudentCreateModel;