const express = require('express');
const router = express.Router();

const Task = require('../models/task');

/*----- GETTING DATA FROM DB -----*/
router.get('/', async (req, res) => {

    const tasks = await Task.find();
    res.json(tasks);

}); 

/*----- FIND ONE ELEMENT FROM DB -----*/
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

/*----- POSTING DATA ON DB -----*/
router.post('/', async (req, res) => {

    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'Task saved' });

});

/*----- EDITING DATA FROM DB -----*/
router.put('/:id', async (req, res) => {

    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({ status: 'Task updated' });

});

/*----- DELETING DATA FROM DB -----*/
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ status: 'Task deleted' });
})



module.exports = router;