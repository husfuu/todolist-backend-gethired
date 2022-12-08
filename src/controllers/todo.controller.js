const { validationResult } = require("express-validator");

const { Todos } = require("../models");
const AppError = require("../helpers/error");

exports.getAllTodos = async (req, res, next) => {
    let result;

    try {
        const activityGroupId = req.query.activity_group_id;

        if (activityGroupId) {
            result = await Todos.findAll({
                where: { activity_group_id: activityGroupId },
            });
        } else {
            result = await Todos.findAll();
        }

        return res.status(201).json({
            status: "Success",
            message: "Success",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

exports.getTodoById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const todo = await Todos.findByPk(id);

        if (!todo) {
            throw new AppError(`Todo with ID ${id} Not Found`, 404, "Not found");
        }

        res.status(200).json({
            status: "Success",
            message: "Success",
            data: todo,
        });
    } catch (error) {
        next(error);
    }
};

exports.createTodo = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new AppError(errors.array()[0].msg, 400, "Bad request");
        }

        const data = {
            activityGroupId: req.body.activity_group_id,
            title: req.body.title,
            isActive: true,
            priority: req.body?.priority ?? "very-high",
        };

        const newTodo = await Todos.create({
            activity_group_id: data.activityGroupId,
            title: data.title,
            isActive: data.isActive,
            priority: data.priority,
        });

        res.status(201).json({
            status: "Success",
            message: "Success",
            data: newTodo,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateTodoById = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new AppError(errors.array()[0].msg, 400, "Bad request");
        }

        const id = req.params.id;
        const data = {
            title: req.body.title,
            isActive: req.body.is_active ? "1" : "0",
            priority: req.body?.priority ?? "very-high",
        };

        const todo = await Todos.findByPk(id);

        if (!todo) {
            throw new AppError(`Todo with ID ${id} Not Found`, 404, "Not found");
        }

        await Todos.update(
            {
                title: data.title,
                isActive: data.isActive,
                priority: data.priority,
            },
            {
                where: { id },
            }
        );

        const result = await Todos.findByPk(id);

        res.status(200).json({
            status: "Success",
            message: "Success",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Todos.destroy({
            where: { id },
        });

        res.status(200).json({
            status: "Success",
            message: "Success",
        });
    } catch (error) {
        next(error);
    }
};
