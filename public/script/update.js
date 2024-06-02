
document.addEventListener('DOMContentLoaded', () => {




    let editButtons = document.querySelectorAll('.edit__btn');
    let editText = '';
    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let id = button.getAttribute('data-id')
            console.log(id);


            let ele = document.getElementById(`input-edit-${id}`);
            ele.style.opacity = 1;
            ele.style.visibility = 'visible';

            // update function for send data to route 

            async function updatedData() {
                editText = document.getElementById(`edit-text${id}`).value;
                document.getElementById(`edit-text${id}`).focus();
                console.log(editText);


                // HIDING INPUT BOXM
                ele.style.opacity = 0;
                ele.style.visibility = 'hidden';
                location.reload();
                try {
                    let response = await fetch(`/api/v1/todo/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name: editText }) // Send data as JSON
                    })
                    console.log(response);
                    if (response.ok) {
                        console.log('reload');
                        location.reload();
                    }
                    else {
                        console.log("Unable to update data ", response.status)
                    }
                } catch (error) {
                    console.log("Unable to fetch data " + error)
                }
            }

            // SAVE BUTTON EDITED TEXT 

            document.getElementById(`save-btn-${id}`).addEventListener('click', (e) => {
                e.preventDefault();
                updatedData();
            })
            document.getElementById(`edit-text${id}`).addEventListener("keydown", (e) => {

                if (e.key === 'Enter') {
                    updatedData();

                }
            })

            console.log(editText)
            console.log(ele)

        })


    })

});

console.log('hii')