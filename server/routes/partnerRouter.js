const { request } = require("express");
const PartnerController = require("./../controllers/PartnerController");
const Router = require("express");
const router = new Router();

router.get("/all", PartnerController.get_all);
module.exports = router;
