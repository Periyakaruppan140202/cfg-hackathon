const router = require("express").Router();
const uploadController = require("../Controllers/upload");
const upload = require("../Middleware/upload");

router.post("/uploadExcel", upload.single("excel"), uploadController.upload);

module.exports = router;
