let todoList =[{
    item:'task 1',
    dueDate: '2023-04-02'
   },
    {
        item:'task 2',
        dueDate: '2023-04-02'
    }];
displayItems();




function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem =inputElement.value;
    let todoDate =dateElement.value;
    todoList.push({item: todoItem,dueDate: todoDate});
    inputElement.value ='';
    dateElement.value ='';

    displayItems();
}


function displayItems(){
    let containerElement =  document.querySelector('.todo-container');

    let newhtml = '';

    
    for(let i= 0 ; i <todoList.length; i++){
       //let todoItem = todoList[i].item;
       //let dueDate = todoList[i].dueDate;

       let {item , dueDate} = todoList[i];
        newhtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
    
        
        `;
        
    }
    containerElement.innerHTML=newhtml;
   
}