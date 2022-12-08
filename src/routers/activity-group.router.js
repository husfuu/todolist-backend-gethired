const router = require("express").Router();
const { checkSchema } = require("express-validator");
const { AGsValidationsSchema } = require("../validations/activity-group.validation");

const AGController = require("../controllers/activity-group.controller");

router.get("/activity-groups", AGController.getAllAGs);
router.post("/activity-groups", checkSchema(AGsValidationsSchema), AGController.createAG);
router.get("/activity-groups/:id", AGController.getAGById);
router.patch("/activity-groups/:id", checkSchema(AGsValidationsSchema), AGController.updateAGById);
router.delete("/activity-groups/:id", AGController.deleteAG);

module.exports = router;
