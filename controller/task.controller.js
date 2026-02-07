import Task from "../models/task.models.js";

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }
        const task = await Task.create({
            title,
            description,
        });
        res.status(201).json({message: "Task created successfully", task});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateTask = async (req, res) => {
    try {
        //basic validation to check if the body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "No data provided" });
        }
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({message: "Task updated successfully", task});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { 
    createTask,
    getTasks,
    updateTask,
    deleteTask
};