const {staticFile} = require("../appModules/http-utils/static-file");
const { getData, endpoints } = require('../appModules/api/index');
const { config } = require('../appModules/rating/index');
const { makeRatingFile } = require('../appModules/rating/index');

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games)
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = { mainRouteController };