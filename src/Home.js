import React  from 'react';
import axios from 'axios'
import { isArray } from 'util';
import {Form} from './FunComp'

class Home extends React.Component
{
   constructor(){
        super()
        this.state = {
            title: "Welcome React Js"
         };
   }
    onTextChange=(event)=>{
      this.setState({'text':event.target.value});
    }

    onSubmit=()=>{
       alert(this.state.text);
    }

    componentDidMount()
    {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            let data = response.data,renderData=[];
            if(isArray(data)){
                renderData=  data.map((item)=> 
                <div>
                  <p>userId : {item.userId}</p>
                  <p>id : {item.id}</p>
                  <p>title : {item.title}</p>
                  <p>body : {item.body}</p>
                </div>
              ) 
            }
           this.setState({title : renderData});
      });
    }

   render(){
     return (
           <div> 
              <Form 
                  text={this.state.text} 
                  textChange={this.onTextChange} 
                  onSubmit={this.onSubmit}
               
              />
               <Form 
                  text={this.state.text} 
                  textChange={this.onTextChange} 
                  onSubmit={this.onSubmit}
               
              />
               <Form 
                  text={this.state.text} 
                  textChange={this.onTextChange} 
                  onSubmit={this.onSubmit}
               
              />
           </div>
     );
   }
}
export default Home