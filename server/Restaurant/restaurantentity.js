const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		rating: {
			type: String,
			required: true
		}

});
const model = mongoose.model('res', schema);
module.exports = {
	resModel: model
};
