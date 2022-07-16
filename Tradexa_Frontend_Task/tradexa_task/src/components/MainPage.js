
import React, { Component } from 'react'
import Spiner from './spiner';

export default class MainPage extends Component {

  
  constructor(){
    super();
     this.pageStart=0;
     this.pageEnd=10;
    this.state={
        table_content:[],
        load:true,
        totalData:0,
        formFlag :false,
        title:"",
        body:"",
        pageSize:10,
        pagedata:[],      
    }
  }

  addNewItem=()=>{
    this.setState({
      formFlag:true
    })
  }

  getData =async()=>{
    let url='https://jsonplaceholder.typicode.com/posts';
    let data= await fetch(url);
    let parsedata= await data.json()
    this.setState ({
      table_content:parsedata,
      pagedata:this.state.table_content.slice(this.pageStart,this.state.pageSize+this.pageStart),
      totalData:this.state.table_content.length,
      load:false

     })
 }


 async componentDidMount(){
    this.getData();
 }

      postData = async () =>{
        const newTableDetails=[this.state.table_content];
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({newTableDetails}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => {
          return response.json()
        }).then(json => {
        });
        
      }

      handleSubmit = async () => {
          const newDetails ={
              title: this.state.title,
              body: this.state.body,
              userId: Math.ceil(this.state.table_content.length/10),
              id:this.state.table_content.length+1
          }
          this.setState({table_content:[...this.state.table_content,newDetails]})
          this.setState({formFlag:false})
          this.postData();
        };


    // handleSubmit = async () => {
    //   const newDetails ={
    //       title: this.state.title,
    //       body: this.state.body,
    //       userId: Math.random().toString(36).slice(2),
    //       id:999
    //   }
    //   this.setState({table_content:[...this.state.table_content,newDetails]})
    //   this.setState({formFlag:false})
    //   console.log(this.state.table_content);
    // };

    handlePrev= async()=>{
      this.pageEnd=this.pageStart+this.state.pageSize
      this.pageStart=this.pageStart-this.state.pageSize
      this.setState(
        { 
          pagedata:this.state.table_content.slice(this.pageStart,this.state.pageSize+this.pageStart),
        })
        // console.log(this.pageStart);
     }

    handleNext= async()=>{
      this.pageEnd=Math.min(this.state.pageSize+this.pageStart, this.state.table_content.length-1)
      this.pageStart=this.pageStart+this.state.pageSize

      this.setState(
        { 
          pagedata:this.state.table_content.slice(this.pageStart,Math.min(this.state.pageSize+this.pageStart, this.state.table_content.length)),

        })
        // console.log(this.pageEnd);
    }


    render() {
      if(this.state.load){
        return <Spiner></Spiner>
      }

      if(this.state.formFlag){
        return(
          <>
            <form className='container col-sm-4 my-10' >
              <div className="form-group my-3">
                <label >Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={(e) => this.setState({title:e.target.value})}/>
              </div>
              <div className="form-group my-2">
                <label>Body</label>
                <input type="text" className="form-control" id="body" placeholder="Enter descripion" onChange={(e) => this.setState({body:e.target.value})}/>
              </div>
              <button type="submit" className="btn btn-primary my-2" onClick={this.handleSubmit}>Submit</button>
            </form>
        </>
        )
      }

      
      return (
     
         <div className='container  my-3'>
          <button className="btn btn-info float-xl-rigth"  onClick={this.addNewItem} >Add</button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">UserId</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
               {
                  this.state.pagedata.map((val,i)=>{
                   
                     return <tr key={i}>
                      <td>{val.userId}</td>
                      <td>{val.id}</td>
                      <td>{val.title}</td>
                      <td>{val.body}</td>
                    </tr>
                  })
                } 
             
              
            </tbody>
            
          </table>
          <div className=" container d-flex justify-content-between ">
            <button className="btn btn-dark" disabled={this.pageStart===0} onClick={this.handlePrev} >&laquo;  Previous</button>
            <button className="btn btn-dark" disabled={this.pageEnd===this.state.table_content.length-1} onClick={this.handleNext} >Next &raquo;  </button>
          </div>
          </div>
      
      )
  }
}
