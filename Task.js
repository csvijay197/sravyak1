
let counter=1;

var tableData = [];
var btnvalue="insert";
var indexvalue;

function addItem() {
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const year = document.getElementById("year").value;
	/*console.log("additem");*/
	  if (name=='' && category=='' && year=='') {
		  document.getElementsByClassName("error-msg")[0].style.display="block";
		  return;
	  }
	 
	 if(name==''){
		  document.getElementById("name").style.borderColor = "red";
		  document.getElementsByClassName("error")[0].style.display="block";
		  /*alert("Please Enter The Name")*/
		  return;
	  }
	  if(category==''){
		  document.getElementById("category").style.borderColor = "red";
		  document.getElementsByClassName("error")[0].style.display="block";
		  /*alert("Please Enter The category");*/
		  return;
	  }
	  if(year==''){
		  document.getElementById("year").style.borderColor = "red";
		  document.getElementsByClassName("error")[0].style.display="block";
		  /*alert("Please Enter The year");*/
		  return;
	  }
	  	  
		  document.getElementby
	   if(btnvalue =="insert"){
	   let newItem = {
		  id:counter++,		
		  name: name,
		  category: category,
		  year: year,
		}	 
		tableData.push(newItem);
		/*alert("Item added successfully!");*/
	  }
	  /*if (!/^[a-zA-Z\s]+$/.test(name)) {
		alert("Name should only contain alphabets and spaces.");
		return;
	}*/
	  else{
		  console.log("else..");
		  console.log("indexvalue");
		  console.log(tableData[indexvalue])
		  
		 tableData[indexvalue].name=document.getElementById("name").value; 
		 tableData[indexvalue].category=document.getElementById("category").value 
		 tableData[indexvalue].year=document.getElementById("year").value
		  
		  btnvalue="insert";
		  alert("Item updated successfully!");
		  
	  }
 
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("year").value = "";
    
   
	updateTable();
	
    } 
	
function updateTable() {
  const table = document.getElementById("CustomTable");
  if (!table) {
   console.error("Table with id CustomTable not found.");
    return;
  }

  const tableBody = table.getElementsByTagName("tbody")[0];
  if (!tableBody) {
    console.error("Table body not found.");
    return;
  }

  tableBody.innerHTML = "";

  tableData.forEach((item, index) => {
    const row = tableBody.insertRow();

    row.innerHTML =`
	  <td>${index+1}</td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.year}</td>
      <td><button class="action-btn edit" onclick="editRow(${index})">edit</button></td>
      <td><button class="action-btn delete" onclick="deleteRow(${index})">delete</button></td>
    `;
  });
}
function deleteRow(index) {
  tableData.splice(index, 1)
  updateTable();
}

function editRow(index) {
  const item = tableData[index];

  document.getElementById("name").value = item.name;
  document.getElementById("category").value = item.category;
  document.getElementById("year").value = item.year;

  btnvalue="update";
  
  indexvalue=index;
}
function searchFun() {
  let searchInput = document.getElementById("search").value.toLowerCase();
  if(searchInput == ""){
	  searchRes=[];
	  searchRes=tableData;
	   searchTable();
  return
  }
    searchRes=[];
	for(let index=0;index <tableData.length;index++){
		if(tableData[index].name.toLowerCase().includes(searchInput)){
			searchRes.push(tableData[index]);
		}
          searchTable();
	}
	console.log(searchRes);
	for(let index=0;index <tableData.length;index++){
		if(tableData[index].category.toLowerCase().includes(searchInput)){
			searchRes.push(tableData[index]);
		}
          searchTable();
	}
	console.log(searchRes);
	
	for(let index=0;index <tableData.length;index++){
		if(tableData[index].year.toLowerCase().includes(searchInput)){
			searchRes.push(tableData[index]);
		}
          searchTable();
	}
	console.log(searchRes);
	
	function searchTable(){
	let tbody=document.getElementById("table-data");
      tbody.innerHTML=" ";

  if (searchRes.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6">No Data found.</td></tr>`;
    return;
  }
	
  searchRes.forEach((item, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.year}</td>
        <td><button class="action-btn edit" onclick="editRow(${index})">edit</button></td>
       <td><button class="action-btn delete" onclick="deleteRow(${index})">delete</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
 }
}
let isAscending = true; 

function sortName() {
  tableData.sort((a, b) => {
    if (isAscending) {
      return a.name.localeCompare(b.name); 
    } else {
      return b.name.localeCompare(a.name); 
    }
  });
  isAscending = !isAscending;

  sortFun();
}


function sortCategory(){
    tableData.sort((a, b) => {
        if (isAscending) {
          return a.category.localeCompare(b.category); 
        } else {
          return b.category.localeCompare(a.category); 
        }
      });
      
      isAscending = !isAscending;
      sortFun();
}

function sortYear(){
   tableData.sort((a, b) => {
        if (isAscending) {
          return a.year.localeCompare(b.year); 
        } 
		else {
          return b.year.localeCompare(a.year); 
        }
      });

      isAscending = !isAscending;
      
      sortFun();
}


function sortFun() {
    let tbody = document.getElementById("table-data");
    tbody.innerHTML = ''; 


    for (let index = 0; index < tableData.length; index++) {
        const element = tableData[index];
        let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td>${element.category}</td>
                    <td>${element.year}</td>
                    <td><button class ="button-edit" onclick="editItem(${index})">Edit</button></td>
                    <td><button class ="button-delete" onclick="deleteItem(${index})">Delete</button></td>
                </tr>`;
        tbody.innerHTML += row; 
    }
}

function validYearFun() {
    let yearInput = document.getElementById("year");
    let validYear = yearInput.value.trim();
    let currentYear = new Date().getFullYear();

    
    if (!/^\d{4}$/.test(validYear)) {
        alert("Enter a valid 4-digit year.");
        yearInput.value = '';
        return false;
    }

    validYear = parseInt(validYear, 10);
	
	if (validYear === 0) {
        alert("The year cannot be 0000. Please enter a valid year.");
        yearInput.value = '';
        return false;
    }
   
    if (validYear > currentYear) {
        alert("The year cannot be in the future. Please enter a valid year.");
        yearInput.value = '';
       return false;
    }

    return true;
}