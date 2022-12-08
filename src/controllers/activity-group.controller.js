const { validationResult } = require("express-validator");

const { Activity_Groups } = require("../models");
const AppError = require("../helpers/error");

exports.getAllAGs = async (req, res, next) => {
    try {
        const result = await Activity_Groups.findAll();

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

        const result = await Activity_Groups.findByPk(id);

        if (!result) {
            throw new AppError(`Activity with ID ${id} Not Found`, 404, "Not found");
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
            throw new AppError(errors.array()[0].msg, 400, "Bad request");
        }
        const { email, title } = req.body;

        const newAG = await Activity_Groups.create({
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

        const ag = await Activity_Groups.findByPk(id);

        if (!ag) {
            throw new AppError(`Activity with ID ${id} Not Found`, 404, "Not found");
        }

        await Activity_Groups.update(
            {
                title,
            },
            {
                where: { id },
            }
        );

        const result = await Activity_Groups.findByPk(id);

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

        await Activity_Groups.destroy({
            where: {
                id,
            },
        });

        res.status(201).json({
            status: "Success",
            message: "Success",
            data: {},
        });
    } catch (error) {
        next(error);
    }
};
