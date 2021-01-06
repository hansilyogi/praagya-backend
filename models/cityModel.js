var mongoose = require("mongoose");

var citySchema = mongoose.Schema({
  Name: String,
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: true,
  },
});

var citySchemaModel = mongoose.model("City", citySchema);

module.exports = {
  citySchemaModel,
};
