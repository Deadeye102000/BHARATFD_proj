const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
	{
		question: {
			type: String,
			required: true,
			trim: true,
		},
		answer: {
			type: String,
			required: true,
			trim: true,
		},
		translations: {
			type: Map,
			of: {
				question: { type: String, trim: true },
				answer: { type: String, trim: true },
			},
			default: {}, 
		},
	},
	{ timestamps: true }
);


faqSchema.methods.getTranslation = function (lang) {
	if (lang === "en" || !this.translations || !this.translations.has(lang)) {
		return {
			question: this.question,
			answer: this.answer,
		};
	}
	return this.translations.get(lang);
};

const FAQ = mongoose.model("FAQ", faqSchema);
module.exports = FAQ;