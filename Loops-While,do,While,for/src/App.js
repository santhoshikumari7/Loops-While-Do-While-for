
import './App.css';

function App() {
  return (
    <div className="App">
   <button onClick={()=>{

   let engMarks = 85;
   if(engMarks >= 35){
    console.log("Student passed in English");

   }
}}
   >if</button>
   <button onClick={()=>{
  
  let telMarks = 55;
  while(telMarks >= 1000){
  console.log("telMarks");
  telMarks++;
  }

   }}>while</button>

   <button onClick={()=>{
   let mathMarks = 70;
  do{
    console.log("Student passed in Maths");
  }while(mathMarks >= 35);
 
   }}
   >Do while</button>
   <button onClick={()=>{

  for(let i=1; i<=1000; i++){
    
    console.log(`Save The Trees Save The Future`);
  }
    
   }}
   >for</button>
   <button onClick={()=>{
   for(let i=1;i<=1000;i++){
    if(i === 123 || 
      i === 456 ||
      i === 694 ||
      i === 695 ||
      i === 696 ||
      i === 697 ||
      i === 789 ){

       continue;
    }
    
    for(let j=1;j<=100;j++){
      if(j === 44 ||
         j === 45 ||
         j === 46 ||
         j === 53 ||
         j === 67 ||
         j === 81
         ){
        continue;
      }
      
      console.log(`${i}*${j} = ${i*j}`);

    }
   }


   }}>Nested Loops</button>
    </div>
  );
}

export default App;
