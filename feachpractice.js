var products;
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(responce => responce.json())
.then(json =>{
    products=json;
    var body =document.getElementById("tableBody");
    var select=document.getElementById("option");
    console.log(products);
    var option=products.map((value,index)=>
    {
        return(`
            <option>${value.title}</option>`
        );
    });
    select.innerHTML=option;
    var UIelements = products.map((value, index)=>
    {
    return (`<tr>
    <td>${value.userId}</td>
    <td>${value.id}</td>
    <td>${value.title}</td>
    <td>${value.completed}</td>
    </tr>`)
    });
    body.innerHTML=UIelements;

});

document.getElementById('search-box').addEventListener('keyup',function(value){
    let search=document.getElementById('search-box').value;
    const data=products.filter((value)=>{
        return value.first_name.indexof(search) >-1;
    });
    console.log(data)
})