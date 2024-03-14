       document.addEventListener('DOMContentLoaded', function() {

          var inputField = document.getElementById('inputField');
      

          document.getElementById('myForm').addEventListener('submit', function(event) {

              event.preventDefault();
      

              var inputValue = inputField.value;
              var alphanumericRegex = /^[a-zA-Z0-9]+$/;
              
              if (!alphanumericRegex.test(inputValue)) {

                  showError('Input must be alphanumeric.');
              } else {

                  alert('Input is valid!'); 
                  event.target.reset();
              }
          });
      

          function showError(message) {

              var errorMessage = document.createElement('div');
              errorMessage.className = 'error';
              errorMessage.textContent = message;
      

              var form = document.getElementById('myForm');
              form.insertBefore(errorMessage, inputField);
      

              setTimeout(function() {
                  errorMessage.remove();
              }, 3000);
          }
      });
      