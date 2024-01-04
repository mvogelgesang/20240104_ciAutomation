// lint-staged.config.js
module.exports = {
  "**/*.cls": (filenames) => "sf scanner run -f table -s 3 -t " + filenames.join(", ") 
};

