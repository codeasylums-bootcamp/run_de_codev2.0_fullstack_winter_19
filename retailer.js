var arr=[];
var name=localStorage.getItem("un");
function add(){
    document.getElementById('tbaody').innerHTML+=`<tr><td>${document.getElementById('item').value} </td> <td>Rs. ${document.getElementById('price').value} </td></tr>`
    var item=document.getElementById('item').value;
    var price=document.getElementById('price').value;
    
    arr.push([item,price])
    
    document.getElementById('item').value=''
    document.getElementById('price').value=''
   

}
function final(){
    alert("List updated successfully");
    axios.post('http://localhost:3001/retailers',{
        
        menu: arr,
        username: name
    })
    .then((response)=>{

        console.log(response);
    })
    .catch((error)=>{

        console.log(error);
    })
    document.getElementById('tbaody').innerHTML=''
}




