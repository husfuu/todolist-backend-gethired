const { validationResult } = require("express-validator");

const { activities } = require("../models");
const AppError = require("../helpers/error");

exports.getAllAGs = async (req, res, next) => {
    try {
        const result = await activities.findAll();

        res.status(200).json({
            status: "Success",
            message: "Success",
            data: result,
        });

        return result;
    } catch (error) {
        next(error);
    }
};

exports.getAGById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await activities.findByPk(id);

        if (!result) {
            throw new AppError(`Activity with ID ${id} Not Found`, 404, "Not Found");
        }

        res.status(200).json({
            status: "Success",
            message: "Success",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

exports.createAG = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new AppError(errors.array()[0].msg, 400, "Bad Request");
        }
        const { email, title } = req.body;

        const newAG = await activities.create({
            email,
            title,
        });

        res.status(201).json({
            status: "Success",
            message: "Success",
            data: newAG,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateAGById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title } = req.body;

        const ag = await activities.findByPk(id);

        if (!ag) {
            throw new AppError(`Activity with ID ${id} Not Found`, 404, "Not Found");
        }

        await activities.update(
            {
                title,
            },
            {
                where: { id },
            }
        );

        const result = await activities.findByPk(id);

        res.status(200).json({
            status: "Success",
            message: "Success",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteAG = async (req, res, next) => {
    try {
        const id = req.params.id;

        const ag = await activities.findByPk(id);

        if (!ag) {
            throw new AppError(`Activity with ID ${id} Not Found`, 404, "Not Found");
        }

        await activities.destroy({
            where: {
                id,
            },
        });

        res.status(200).json({
            status: "Success",
            message: "Success",
            data: {},
        });
    } catch (error) {
        next(error);
    }
};
