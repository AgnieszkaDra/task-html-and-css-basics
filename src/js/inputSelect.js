export const selectMember = (el) => {

    el.addEventListener("change", function() {
        //
    // Get the selected option's value
    const selectedValue = el.value;
    console.log(typeof selectedValue)
    const teamContainer = document.querySelector('.team__container'); 
    const teamPersonPrototype = document.querySelector('.team__person'); 


    if(selectedValue === "addYou") {
        const you = document.querySelector('.team__person.you')
      you.classList.remove('you')
        // teamContainer.appendChild(teamPersonClone)
        const fileInput = document.getElementById('fileInput');
        const image = document.getElementById('image');

        // Add an event listener to the file input element
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];

            if (file) {
                // Create a FileReader instance
                const reader = new FileReader();

                // Set up an event handler for when the file is loaded
                reader.onload = function (e) {
                    // Set the image source to the loaded image data
                    image.src = e.target.result;

                    // Display the image
                    image.style.display = 'block';
                    fileInput.style.visibility = 'hidden'
                };

                // Read the file as a data URL (base64 encoded)
                reader.readAsDataURL(file);
            }
        });

      


    }})}

    // if (image) {
    //   reader.readAsDataURL(image);
    // }




        
      
  