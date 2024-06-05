const schema=require('./todoSchema')
const task=schema.task;
const date=schema.date;
const dates=require('./public/script/date')
const toDay=dates.day
const cuDate=dates.onlyDate *1

let allTasks=[]



exports.home=async(req,res)=>{
    try {

        let allDates=await date.find({date:{$eq:cuDate}});
        await date.deleteMany({date:{$ne:(cuDate)}})

        if (allDates.length !== 0) {
            
            // console.log('same date avillable')
        }
        else{
            await date.create({date:cuDate})
            let allDeleteTask= await task.deleteMany(); //Delete all task when next day come

            // This is find previous day and delete the date 
            
            res.redirect('/api/v1/todo')
        }
    } catch (error) {
        console.log('creating date failed',error)
    }
    
    try {
         allTasks=await task.find();
    res.render("list",{listTitle:toDay,newTask:allTasks,errorMessage:null})
    
    } catch (error) {
        console.log('unbale to read data '+error)
    }

}
exports.addTask=async(req,res)=>{
    let work=req.body.task;
    if (req.body.button==='work list') {
        workList.push(work)
        res.redirect('/api/v1/todo/work')
    }
    else{
        
        try {
            await task.create({name:work})
            res.redirect('/api/v1/todo')
        } catch (error) {
            if (error.code === 11000) {
                // console.log('you enter dupicate task ')
                
                res.redirect('/api/v1/todo')
            }
            
        }

    }
}


exports.updateTask=async(req,res)=>{
    let id=req.params.taskId
    let isCompeted=req.body.completed

    
    try {
        let updatedData=await task.findByIdAndUpdate(id,{name:req.body.name,completed:isCompeted},{new:true})

        if (updatedData) {
            res.status(202).send();
        }
        else{
            res.status(404).send("unable to find data ")
        }
    } catch (error) {
        console.log('bad rquest not fetch data '+error)
    }
}
exports.deleteTask=async(req,res)=>{
    let taskId=req.params.taskId
    console.log(taskId)
    try {
        // Find and delete the task from the database
        const deletedTask = await task.findByIdAndDelete(taskId);

        if (deletedTask) {
            res.status(204).send(); // No content (success)
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).send('Error deleting task');
    }
}


// WORK LIST

exports.addWork=(req,res)=>{

    res.render('list',{listTitle:'work list',newTask:workList})
}

