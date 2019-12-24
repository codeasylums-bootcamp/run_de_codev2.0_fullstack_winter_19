var use=localStorage.getItem("un");

function list(){
    axios.get(`http://localhost:3001/retailers`)
    .then((response)=>{
        console.log(response)
        console.log(use)
        
       var size=response.data.length
       for(let i=0;i<size;i++)
       {   
            console.log(response.data[i].username)
           if(response.data[i].username==use){
               var sizee=response.data[i].menu.length
               for(let j=0;j<sizee;j++){
                   document.getElementById('list').innerHTML+=`
                   <table style="width:40%; margin-left: 5%;padding:20px; background-color:white;">   
                   <tr style="border: 10px solid black; ">
                  
                    <th style="border: 10px solid black;background-color:yellow">Name of Item</th>
                       <th style="border: 10px solid black;background-color:yellow">Price of Item</th> 
                       
                       
                   </tr>
                   <tr style="border: 10px solid black; ">
                   <td style="border: 10px solid black;">${response.data[i].menu[j][0]}</td>
                       <td style="border: 10px solid black;">${response.data[i].menu[j][1]}</td>
                <br>
            </tr>
                   `
               }
           }
       }
    
    
    })
        
    

    .catch((err) => {
       console.log(err)
    })


}


{/* <li style="margin: 25px; width:400px; border:1px solid black; border-radius:5px;" class="list-group-item list-group-item-success"><span> Product: ${response.data[i].menu[j][0]}</span>
                    <span>Price: Rs. ${response.data[i].menu[j][1]}</span>
                    </li> */}

