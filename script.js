const btn = document.querySelector("button");
let tasks = [];
const renderTable = () => {
    
    var itterator = 1;
    var table = document.getElementById("dyn");
    table.innerHTML = '';
    tasks.forEach((ele) => {
        const newRow = document.createElement("tr");
        for(let i = -1;i<2;i++)
        {
            const head = document.createElement("td");
            let data;
            if(!(i<0))
            data = document.createTextNode(ele[i]);
            else
            data = document.createTextNode(itterator);
            head.appendChild(data);
            newRow.appendChild(head);
        }
        const btn = document.createElement("button");
        btn.setAttribute("onClick",`add(${itterator})`);
        btn.innerHTML += "Remove";
        newRow.appendChild(btn);
        table.appendChild(newRow);
        itterator++;
    })
}
renderTable();

const add = (Flag) => {

    if(Flag<0){
    console.log("we here")
    var TaskName = document.getElementById("Task");
    var TaskTime = document.getElementById("Time");
    tasks.push([TaskName.value,TaskTime.value]);
    TaskName.value = "";
    TaskTime.value="";
    renderTable();
    }
    else{
        tasks.splice(Flag-1,1);
        renderTable();
    }
}