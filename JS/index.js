document.addEventListener('DOMContentLoaded', function () {

  let selectedNumber; // Variable to store the selected number

  function numberRated(event) {//this function will target the content stored in the variable
    selectedNumber = event.target.textContent;
  }

  function submitClicked() { //this function will display the content stored in the variable in the element with id--selectedRate
    selectedRate.innerHTML = selectedNumber;
  }/*selectedRate.innerHTML is used to access the content of an HTML element with the id selectedRate.
The content of the HTML element is then updated with the value stored in the variable selectedNumber.*/


  const buttonElements = document.getElementsByClassName('numbers');

  for (let i = 0; i < buttonElements.length; i++) {
    const button = buttonElements[i];

    button.addEventListener('click', numberRated);


    button.addEventListener('click', function () {
      Array.from(buttonElements).forEach(function (btn) {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  }


  submitBtn.addEventListener('click', submitClicked);


  // Define a function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();

    if (selectedNumber) { // Check if at least one button is selected
      div1.style.display = 'none';
      div2.style.display = 'block';
    } else {
      alert("Please select at least one rating");
    }
  }

  div1.style.display = 'block';
  div2.style.display = 'none';

   // Add event listener to the submit button
  submitBtn.addEventListener('click', handleSubmit);

});







 
