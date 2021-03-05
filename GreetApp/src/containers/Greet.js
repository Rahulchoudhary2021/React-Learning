import React ,{Component} from'react';
import {Title} from '../components/Title';
import {Input} from '../components/Input';
import {Operations} from '../components/Operations';
import {Output} from '../components/Output';
export class Greet extends Component{
    constructor(){
        super();
        this.firstName='';
        this.lastName='';
        this.FullName='';
        this.state={msg:this.FullName}

    }
    clearAll(){
        this.firstName='';
        this.lastName='';
        this.setState({...this.state,msg:''});
        console.log("Clear All Input (Done).....")
      
    }
   makeFullName(){
       this.FullName=this.initcap(this.firstName) + ' ' + this.initcap(this.lastName);
       console.log("Full Name Is",this.FullName);
       this.setState({...this.state,msg:this.FullName});
       
   }
   initcap(str){
       return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
   }
    takefirstname(event){
        console.log('Iam Called.....',event.target.value);
        this.firstName =event.target.value;
        console.log("First Name Is",this.firstName);
         this.setState({...this.state});

    }
    takelastName(event){
        console.log('Iam Called....',event.target.value);
        this.lastName =event.target.value;
        console.log("Last Name Is",this.lastName);
        this.setState({...this.state});
    }
 

    render(){
    return(
        <div>
            <Title/>
            <br/>
            <Input val={this.firstName} title='First Name' change={this.takefirstname.bind(this)}/>
            <br/>
            <Input  val={this.lastName} title='Last Name' change={this.takelastName.bind(this)}/>
            <br/>
            <br/>
            <Operations  cssClass="btn btn-success"  title='GREET' click={this.makeFullName.bind(this)}/>
            <Operations cssClass="btn btn-danger" title='CLEAR ALL'   click={this.clearAll.bind(this)}/>
             <br/>
             <br/>
            <Output result={this.state.msg}/>  
        </div>
        
    )}
}
