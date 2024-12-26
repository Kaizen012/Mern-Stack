import express from 'express';
import cors from 'cors';
import Taskmodel from './Taskmodel.js';

const app= express();
app.use(express.json());
app.use(cors());
const taskRouter = express.Router()

app.use('/api/task', taskRouter)
taskRouter.post('/', async (req, res) => {
    const {name} = req.body
    try{
        const task = await new Taskmodel({name}).save()
        res.status(201).send({
            message: "Created successfully",
            task
        })
    }
    catch(error){
        res.status(500).send({
            error: 'Something went wrong'
        })
    }
})
export default app;
