const express=require('express');
const request=require('./todoController')
const Router=express.Router();

Router
  .route('/todo')
  .get(request.home)
  // .get(request.resetTask)
  .post(request.addTask)



Router
  .route('/todo/:taskId')
  .delete(request.deleteTask)
  .put(request.updateTask)
Router
  .route('/todo/work')
  .get(request.addWork)

module.exports=Router