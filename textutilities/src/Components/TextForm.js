import React,{useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("")
  const handleUC =(event)=>{
    if(dis){
      props.showAlert("Please enter text","success");
    }
    else{
      let newText=text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Upper case","success");
    }
  }
  const handleLC =(event)=>{
    if(dis){
      props.showAlert("Please enter text","success");
    }
    else{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower case","success");
    }
  }
  const speak = () => {
    if(dis){
      props.showAlert("Please enter text","success");
    }
else{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}
  }
  const handleOC =(event)=>{
    setText(event.target.value)
  }
  let dis=(text.length===0)?true:false;
  return (
    <>
    <h3>{props.heading}</h3>
    <div className=" mb-3 container my-5" >
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text here" value={text} onChange={handleOC}
         style={{backgroundcolour: props.Mode==='light'? '#a2a8b1': 'white', color:props.Mode=== 'dark'?'blue': 'black'}}
         ></textarea>

         <button className="btn btn-info my-4" onClick={handleUC} >UpperCase</button>
         <button className="btn btn-primary my-4 mx-1" onClick={handleLC} >LowerCase</button>
         <button className="btn btn-warning my-4 mx-1" onClick={speak} >Listen It</button>
         <h3>Preview Your Text</h3>
         <p>{text}</p>
         <p>Words are {text.split(/\s+/).filter((a1)=>{
           return a1.length!==0;
         }).length} </p>
         <p>Lenght is {text.trim().length}</p>
         <p>Time to read 
         {text.split(/\s+/).filter((a1)=>{
           return a1.length!==0;
         }).length *0.008}
         </p>
    </div>
    </>
  );
}
