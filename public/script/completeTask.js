document.addEventListener('DOMContentLoaded',(e)=>{

    let checkBoxes=document.querySelectorAll('.input__checkbox');

    checkBoxes.forEach(checkBox=>{
        checkBox.addEventListener('change',async(e)=>{
            const taskId=checkBox.id.replace('checkbox-','')
            console.log(taskId);
            
            const isCompeted=checkBox.checked;
            console.log(isCompeted);
            try {
                let response=await fetch(`/api/v1/todo/${taskId}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({completed:isCompeted})
                })
                if (response.ok) {
                    console.log("task complete")
                    // location.reload()
                }else {
                    console.error('Error updating task:', response.status);
                }
            } catch (error) {
                console.error('Error during update:', error);
            }

        })
    })
})