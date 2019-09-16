





//UI class for options

class Options{
    AddOptionCheckBox(){
        let firstTableBody=document.querySelector('#checkbox-table');
        let tableRow = document.createElement('tr');
        let outputCheckBox =` <th scope="row" id="firstT-head"><div class="form-check-inline align-middle checkbox-option">
        <input type="checkbox"  class="form-check-input align-middle" name="optradio2"></div>Option${counter++}</th>
        <td><input type="text" id="optionA"  placeholder= "Olusegun Obasanjo"></td>
        <td class="delete-item">
        <i class="fa fa-trash" style="font-size: 18px;"></i>
        </td>  `;
        tableRow.innerHTML= outputCheckBox;
        let lastTableRow = document.querySelector('#lastcheckboxrow');
        firstTableBody.insertBefore( tableRow,lastTableRow );
   
   
    }

    AddOptionRadioButton(){
        let firstTableBody=document.querySelector('#radio-table');
        let tableRow = document.createElement('tr');
        let outputRadioButton = `<th scope="row" id="firstT-head"><div class="form-check-inline align-middle">
        <input type="radio"  class="form-check-input align-middle" name="optradio2 "></div>Option${counter++}</th>
        <td><input type="text" class="radio-option"  placeholder= "Olusegun Obasanjo"></td>
        <td class="delete-item">
        <i class="fa fa-trash" style="font-size: 18px;"></i>
        </td>`;
       
        tableRow.innerHTML= outputRadioButton;
        let lastTableRow = document.querySelector('#lastradiorow');
        firstTableBody.insertBefore( tableRow,lastTableRow );
   

    }
        
    DeleteOption(event){
        if (event.target.parentElement.classList.contains("delete-item")) {
            event.target.parentElement.parentElement.remove();
 }
    }

}




let optionUI = new Options();
  


// Event listener for adding  checkbox options
const addOptionCheckbox = document.querySelector('#addCheckboxOption');
addOptionCheckbox.addEventListener('click', AddOptionTemplateCheckbox);
let counter = 2;



 function AddOptionTemplateCheckbox(e){
    if($("#switcher1-3").prop("checked") === false)
        {
        optionUI.AddOptionCheckBox();
        }
    
 }
 
 // Event listener for adding radio options 

 const addOptionRadio = document.querySelector('#addRadioOption');
addOptionRadio.addEventListener('click', AddOptionTemplateRadio);
let numbering = 2;



 function AddOptionTemplateRadio(e){
    if($("#switcher1-3").prop("checked") === true)
        {
        optionUI.AddOptionRadioButton();
        }
    
 }


 //Event listener for toggle switch 
$( "#switcher1-3" ).click(function() {
    $( ".select-option" ).toggle();
  });





//Event listener for deleting radio options


  document.querySelector('#radio-table').addEventListener('click', DeleteOption);
          function DeleteOption(e) {
            optionUI.DeleteOption(e);
                e.preventDefault();
  }
   
  //Event listener for deleting checkbox options

  document.querySelector('#checkbox-table').addEventListener('click', DeleteOption);
  function DeleteOption(e) {
    optionUI.DeleteOption(e);
        e.preventDefault();
}

let serialNumber = 0;

// Event listeners for displaying questions and answers on the below table 
document.querySelector('#submitToTable').addEventListener('click', SubmitQuestionsAndOptions);
    function SubmitQuestionsAndOptions(e) {
        let tableQuestion =  document.querySelector('#question').value;
        let options = document.querySelectorAll('.radio-option');

        let values =  Array.prototype.map.call( options, function(option){

            return option.value; 
        
        });
        
        function checkForEmpty(value){
            return value === '';
        }

        if(tableQuestion ===''||values.every(checkForEmpty) )
        {alert("failed")}

        
        let tableRow = document.createElement('tr');
        
        let tableHead = document.createElement('th');
        tableHead.append(serialNumber++);
        

        // Question Column
        let firstTableData = document.createElement('td');
        
        firstTableData.append(tableQuestion);
        

        //Options Column
        let secondTableData = document.createElement('td');
        let unorderedList = document.createElement('ul');
        
        

        options.forEach((option) => {
            let list = document.createElement('li');
            
               list.append(option.value);
               let horizontalRule = document.createElement('hr');
               list.append(horizontalRule);
               unorderedList.append(list)

        });
        ;
        
        secondTableData.append(unorderedList);
        

        //edit icon  columns
        let thirdTableData = document.createElement('td');
        thirdTableData.innerHTML =`
        <i class="fa fa-edit" style="font-size: 18px;"></i>`;

        // delete icon columns

        let lastTableData = document.createElement('td');
        lastTableData.innerHTML =`  <i class="fa fa-trash" style="font-size: 18px;"></i>`;

     //insert all into the tablerow
        tableRow.append(tableHead);
        tableRow.append(firstTableData);
        tableRow.append(secondTableData);
        tableRow.append(thirdTableData);
        tableRow.append(lastTableData);
       // tableRow.appendChild(lastTwoColumns);
        let tableTemplateRow = document.querySelector('#question-options-template');
        tableTemplateRow.appendChild(tableRow);
        


        
        e.preventDefault();
    }





