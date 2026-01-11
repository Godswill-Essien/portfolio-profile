const View = require("./view.model");
const geoip = require("geoip-lite");

exports.trackView = async (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "Unknown";

    const geo = geoip.lookup(ip);

    await View.create({
      ip,
      country: geo ? geo.country : "Unknown",
      device: req.useragent.platform,
      page: req.body.page
    });

    const total = await View.countDocuments();

    res.json({ totalViews: total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTotalViews = async (req, res) => {
  const total = await View.countDocuments();
  res.json({ total });
};
