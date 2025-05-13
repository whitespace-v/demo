const { Partners } = require("../storage/models");

class PartnerController {
  async get_all(req, res, next) {
    const partners = await Partners.findAll();
    res.json({ partners });
  }
}
module.exports = new PartnerController();
