const Goals = require('../models/goal')

// get all goals
const getAllGoals = async (req, res) => {
    try {
        const goals = await Goals.find()
        res.status(200).json({ success: true, goals });
    } catch (error) {
        res.json(error)
    }
}

// get a single goal
const getGoal = async (req, res) => {
    const { goalId } = req.params
    try {
        const goal = await Goals.findById({ _id: goalId })
        res.status(200).json({ success: true, goal });
    } catch (error) {
        res.json(error)
    }
}

// create goals
const createGoals = async (req, res) => {
    const { title, description } = req.body
        if (!title || !description) {
            return res.status(400).json({success: false, message: 'please fill all the input fields'})
        }
    try {
        const goal = await Goals.create({ ...req.body });
        res.status(201).json({success: true, goal})
    } catch (error) {
        res.json(error)
    }
}

// update goal
const updateGoal = async (req, res) => {
    const { goalId } = req.params
    try {
        const goal = await Goals.findByIdAndUpdate({ _id: goalId }, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({success: true, goal})
    } catch (error) {
        res.json(error)
    }
}

// delete goal
const deleteGoal = async (req, res) => {
    const { goalId } = req.params;
    try {
        const goal = await Goals.findByIdAndDelete({_id: goalId})
        res.status(200).json({success: true})
    } catch (error) {
        
    }
}

module.exports = {getAllGoals, getGoal, createGoals, updateGoal, deleteGoal}