let Mname = document.querySelector("#Name");
let NextMonth = document.querySelector("#increment");
let PreMonth = document.querySelector("#decrement");
let cells = document.querySelector('.days');

const date = new Date(); 
renderCalender = ()=>{
    date.setDate(1);

var day= date.getDay();
let lastDay = new Date( // calculate current month last date
    date.getFullYear(),
    date.getMonth()+1,0
    ).getDate();

    let preDate = new Date( // calculate last month date
    date.getFullYear(),
    date.getMonth(),0
    ).getDate();
   
    

const monthNames =[
    "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
    "December"];

    Mname.innerText= monthNames[date.getMonth()]
    let days="";
    // previous date
    for(let x = day; x>0;x--){
        days+=`<div class="pre-date">${preDate-x +1}</div>`
    }
   


    for(let i=1;i<=lastDay;i++){
        if(i===new Date().getDate() && date.getMonth()=== new Date().getMonth()){
            days+= `<div class="today-date">${i}</div>`
        }
        else{
            days+= `<div>${i}</div>`

        }
       

    }
    
    cells.innerHTML=days;

}

    NextMonth.addEventListener('click',()=>{
        date.setMonth(
            date.getMonth()+1
        )
        renderCalender();
    })
    PreMonth.addEventListener('click',()=>{
        date.setMonth(
            date.getMonth()-1
        )
        renderCalender();
    })
    renderCalender();
   
  
    
