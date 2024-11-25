// defining the API URL
const allMedicines = 'http://localhost:8000/medicines'

// making a get request for all medicines
fetch(allMedicines)
  .then(response => {
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.json();
  })
  .then(data => {
    //alert(data);
    console.log(data);
    //data=JSON.stringify(data, null, 2);
    medicines=data.medicines;
    //alert(medicines);

    let table = '<table style="border-collapse: collapse;">';

    table += `
     <thead>
      <tr>
        <th>Medicine Name</th>
        <th>Price</th>
      </tr>
     </thead>

    <tbody>
  `;

    medicines.forEach(medicine => {
        //alert(medicine.name);
        table += `
      <tr>
        <td>${medicine.name}</td>
        <td>${medicine.price}</td>
      </tr>
    `;
    });
 // closing the table after loop
    table += `
    </tbody>
  </table>
  `;

  const container = document.getElementById('container');
  container.innerHTML = table;

})
.catch(error => {
    console.error('Error:', error);
});



// adding the event for the search medicine action

document.getElementById('searchButton').addEventListener('click', searchMedicines);
document.getElementById('searchMedicine').addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        searchMedicines();
    }
});

function searchMedicines(){
    //alert('inside the func');
    const query = document.getElementById('searchMedicine').value.trim();
    if(query === ''){
        alert('Please enter a medicine name.');
        return;
    }

    // constructing the URL with the search query
    const searchMedicineUrl = `${allMedicines}/${query}`;
    //alert(searchMedicineUrl);

    fetch(searchMedicineUrl)
       .then(response => {
          if(!response.ok){
            throw new Error('Network response was not ok');
          }
          return response.json();
       })
       .then(data => {
        console.log(data);
        const ol = document.createElement('ol');
        const li = document.createElement('li');
        li.innerHTML = data.name;
        const ul = document.createElement('ul');
        ul.innerHTML = data.price;

        li.appendChild(ul);
        ol.appendChild(li);
        
        const container = document.getElementById('container');
        container.appendChild(ol);

       })
       .catch(error => {
        console.error('Error:',error);
       });
}

       // creating a new medicine

       const createMedicineUrl = 'http://localhost:8000/create'

       const addMedicineForm = document.getElementById('add-Medicine');
       const responseData = document.getElementById('response-data');

       addMedicineForm.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(addMedicineForm);

        const requestOptions = {
            method: 'POST',
            body: formData,
        };

        fetch(createMedicineUrl, requestOptions)
          .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then(data => {
            responseData.textContent = data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
       });

       
       //updating the price of the medicine

       const updatePriceUrl = 'http://localhost:8000/update' 


       const updatePriceform = document.getElementById('updatePrice-form');
       const updateData = document.getElementById('update-data');

       updatePriceform.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(updatePriceform);

        const requestOptions = {
            method: 'POST',
            body: formData,
        };

        fetch(updatePriceUrl, requestOptions)
          .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then(data => {
            updateData.textContent = data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
       });

       //deleting a medicine

       const deleteMedicineUrl = 'http://localhost:8000/delete'

       const deleteMedicineForm = document.getElementById('deletePrice-form');
       const deleteData = document.getElementById('delete-data');

       deleteMedicineForm.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = new FormData(deleteMedicineForm);

        const requestOptions = {
            method: 'DELETE',
            body: formData,
        };

        fetch(deleteMedicineUrl, requestOptions)
          .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then(data => {
            deleteData.textContent = data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
       });




