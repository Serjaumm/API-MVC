import {Router} from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';


const taskRoutes = Router();

taskRoutes.get("/getalltasks", getAllTasks);
taskRoutes.get("/getTaskById/:id", getTaskById);
taskRoutes.post("/createanewtask", createTask);
taskRoutes.put("/updatetask/:id", updateTask);
taskRoutes.delete("/deletetask/:id", deleteTask);

export default taskRoutes;