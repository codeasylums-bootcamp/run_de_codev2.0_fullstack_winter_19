var userna;
var use=localStorage.getItem("un");
var j=0;
var x=[]

function sca(){
  
    axios.get(`http://localhost:3001/users`)
    .then((response)=>{
        console.log(response)
        document.getElementById('scards').innerHTML+=``
       var len=response.data.length;
       for(let i=0;i<len;i++)
       { if(response.data[i].usertype=='Retailer')
       { userna=response.data[i].username;
         document.getElementById('scard').innerHTML+=`
        
         <div style="display:inline-block;">
         <span class="card ml-5 mr-5 align-center" style="width: 100%;height:50%;border-width:10px;border-color:black;background-image: linear-gradient(to right,#00ff88 0%,white,#00ff88 0%);border-radius:20px">
  <span class="card-body align-center">
  <img src="home-chef.jpg" style="height:40%;width:40%;align-content:center;margin-left:25%;border-radius:30%">
  <br><input type="button" class="btn-lg btn-outline-primary" id="place${j}" value="${response.data[i].username}" onclick="order(this)" style="color:dark;margin-left:40%;" >
  </span>
         </span>
         </div>
     
     `
    j++;//<img src="..." class="card-img-top" alt="...">
   }
    }})
        
    

    .catch((err) => {
       console.log(err)
    })
    
   
    
}

//<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

function order(objButton){
  /*document.getElementById('scard').innerHTML=` <ul>
  <li>

  </li>
</ul>`*/
   var val=objButton.value;
axios.get(`http://localhost:3001/retailers`)
    .then((response)=>{
        
        var si=response.data.length 
      
         
        
     
      for(let y=0;y<si;y++)
      {  console.log(val)
        console.log(response.data[y].username)
        if(val==response.data[y].username){
          localStorage.setItem("usn",response.data[y].username);
          window.open('placeorder.html')
        } 
      }
     
      
      
    
        
        
    })

    .catch((err) => {
       console.log(err)
    })
      
    
  

}

function status(){

  axios.get(`http://localhost:3001/ors`)
  .then((response)=>{
         var size1= response.data.length
         console.log(size1)
         
          for(let i=0;i<size1;i++)
         {  
           x[i]=response.data[i]._id;
           if(response.data[i].funame==use) {
           
          document.getElementById('scards').innerHTML=`<h1 style="text-align: center;color:white">  Your Order Status</h1>
          <div id="l${i}">
          <h3 style="color:white">Your order from ${response.data[i].rname} was: ${response.data[i].cf}
          <button class="btn btn-secondary"  onclick="pass(${i})"  >OK</button></h3>
          </div>
          `
          document.getElementById('scard').innerHTML=``
         }
         }
})
      
  

  .catch((err) => {
     console.log(err)
  })
}

function pass(p){
  document.getElementById(`l${p}`).innerHTML='';
  del(x[p]);
  
}

function del(orderID)
{
    axios.delete(`http://localhost:3001/ors/${orderID}`)
    .then(res=>{
        console.log('deleted')
        console.log(res)

    })
    .catch(err=>{
        console.log(err)
    })
}