import React ,{Component, Components} from'react';
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
        this.firstName=event.target.value;
        console.log("First Name Is",this.firstName);

    }
    takelastName(event){
        console.log('Iam Called....',event.target.value);
        this.lastName=event.target.value;
        console.log("Last Name Is",this.lastName);

    }
    handleReset = () => {
        this.setState({
          FullName: [{}]
        });
      };

    render(){
    return(
        <div>
            <Title/>
            <br/>
            <Input title='First Name' change={this.takefirstname.bind(this)}/>
            <br/>
            <Input title='Last Name' change={this.takelastName.bind(this)}/>
            <br/>
            <br/>
            <Operations title='GREET' click={this.makeFullName.bind(this)}/>
            
            <Operations title='CLEAR ALL' click={this.handleReset.bind(this)}/>
             <br/>
             <br/>
            <Output result={this.FullName}/>  
        </div>
        
    )}
}
