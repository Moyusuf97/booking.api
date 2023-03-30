const clean = require("../models/clean");

exports.getAllClean = async (req, res) => {
  try {
    res.json(await clean.find());
  } catch (error) {
    res.json({ message: error });
  }
};
exports.getCleanByID = async (req, res) => {
  try {
    res.json(await clean.findById(req.params.postid));
  } catch (error) {
    res.json({ message: error });
  }
};
exports.createClean = async (req, res) => {
  try {
    const clean1 = new clean({
      Level: req.body.Level,
      Städare: req.body.Städare,
      Status: req.body.Status,
      Date: req.body.Date,
      Time: req.body.Time,
     



    })

    const newclean = await clean1.save()

    
    res.json(newclean);
  } catch (error) {
    res.json({ message: error });
  }



};


exports.deleteClean = async (req, res) => {
  try {
    res.json(await clean.deleteOne({'_id': req.params.cleanid}));
  } catch (error) {
    res.json({ message: error });
  }

};

exports.updateClean = async (req, res) => {
  try {
    res.json(await clean.updateOne(
      {'_id': req.params.cleanid},
      {
        $set: {
          Level: req.body.Level,
          Städare: req.body.Städare,
          Status: req.body.Status,
          Date: req.body.Date,
          Time: req.body.Time,


        }
      }
      
      ));
  } catch (error){
    res.json({message: error });
  }
};