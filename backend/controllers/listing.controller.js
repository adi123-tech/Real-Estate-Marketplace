const List = require("../mongodb/ListingSchema");

const createList =async (req, res, next) => {
  try {
    const data = await List.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { createList };
