

document.addEventListener('DOMContentLoaded', () => {
    let deleteButtons=document.querySelectorAll('.delete__btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click',async(e)=>{
            e.preventDefault();
            const taskId = button.getAttribute('data-id');
            console.log(taskId)
            // button.style.display='none' 

            try {
               const response=await fetch(`/api/v1/todo/${taskId}`,{
                method:'DELETE'
               })
               if (response.ok) {
                console.log('success delete')
                // document.getElementById(`task-${taskId}`).style.display="none"
                location.reload();

               }
               else{
                console.error('Error deleting task:', response.status);
               }
                
            } catch (error) {
                console.log('unable to fetch api'+error)
            }
        })
    });
    
});