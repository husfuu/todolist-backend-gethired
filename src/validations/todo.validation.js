exports.createTodoValidationsSchema = {
    title: {
        exists: {
            errorMessage: "title cannot be null",
        },
    },
};

exports.updateTodoValidationsSchema = {
    activity_group_id: {
        exists: {
            errorMessage: "activity_group_id cannot be null",
        },
    },
    title: {
        exists: {
            errorMessage: "title cannot be null",
        },
    },
};
