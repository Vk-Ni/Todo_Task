var tasklist = [];

function deleteRows(e){
    var tab = document.querySelector("#tabh");
    console.log(e)
    var my_ele = e.target.closest('tr');
    tasklist=tasklist.filter((t)=>t!= my_ele.getElementsByTagName("td")[1].getElementsByTagName("p")[0].textContent)
    tab.removeChild(my_ele)

}

function checks(v){ 
    const selectedStatus = v.parentElement.parentElement
    console.log(selectedStatus)
    var kash=selectedStatus.querySelector('#drop')
    var check=selectedStatus.querySelector('#check')
    var tn=selectedStatus.querySelector('#taskname')
    console.log(kash.value)
    if(kash.value==="Completed"){
     check.checked=true;
     tn.style.textDecoration = "line-through";
    }
    else{
        check.checked=false;
        tn.style.textDecoration = "none"
    }    

    };

function checkss(s){
    const partstatis = s.parentElement.parentElement
    debugger
    console.log(partstatis)
    var chk = partstatis.querySelector('#check')
    console.log(chk)
    var sel = partstatis.querySelector('#drop')
    var tn = partstatis.querySelector('#taskname')
    console.log(sel.value)    
    console.log(chk.checked);
    if(chk.checked==true){
        sel.value="Completed";
        tn.style.textDecoration= "line-through";
    }
    else{
        tn.style.textDecoration = "none"
        sel.value = "To do"
    }
}
function addtask(){    
    var table = document.getElementById("tabh");
    var task = document.getElementById("taskn").value;
    var flag =0;
    for(let k=0;k<tasklist.length;k++){
        if(tasklist[k] == task.trim()){
            flag = 1;            
            break;
        }
    }
    if(flag == 1){
        alert("Task is already exist"); 
        return 0;
    }
    else{
        tasklist.push(task)
    } 
    var rowcount = table.rows.length;
    console.log(rowcount)
    var cellCount = table.rows[0].cells.length; 
	var row = table.insertRow(rowcount);
    for(var i=0;i<cellCount;i++){
        if(task === ''){
            alert("Task should not be empty");
            break;
        }
        if(i==0){
            debugger;
            var x = document.createElement("TD");
            var t = document.createElement("input");
            t.setAttribute('type','checkbox')
            t.setAttribute('id','check')
            // console.log(t.checked)
            t.setAttribute('onclick','checkss(this)')
            x.appendChild(t);
            row.appendChild(x);
            table.appendChild(row)
        }
        else if(i==1){
            var x = document.createElement("TD");
            var t = document.createElement("p"); 
            t.setAttribute('id','taskname')           
            t.innerHTML=task;
            console.log(task)
            x.appendChild(t);
            row.appendChild(x);
            table.appendChild(row)
        }
        else if(i==2){
            var x = document.createElement("TD");
            var t = document.createElement("input");
            var dropdown  = document.createElement("select");
            dropdown.setAttribute('id','drop')
            dropdown.appendChild(new Option("To do"))
            dropdown.appendChild(new Option("In progress"))
            dropdown.appendChild(new Option("Completed"))
            dropdown.setAttribute('onchange','checks(this)')  
            x.appendChild(dropdown);
            row.appendChild(x);
            table.appendChild(row)
        }
        else{
            var x = document.createElement("TD");
            var t = document.createElement("BUTTON");
            t.innerText="delete"
            x.append(t);
            row.appendChild(x);
            table.appendChild(row)
            t.addEventListener('click',(e)=>{
                deleteRows(e)
            })
        }
    }
}
function search(){
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("srch");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabh");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}