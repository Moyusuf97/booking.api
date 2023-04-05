const clean = require("../models/clean");
const user = require("../models/user");




exports.getClean = async (req, res) => {
  try {
    const städareList = await clean.distinct('Städare');
    res.json(städareList); 
  } catch (err) {
    res.json({ message: err });
  }
};

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

exports.createUser = async (req, res) => {
  try {
    const user1 = new user({
      name: req.body.name
     



    })

    const newuser = await user1.save()

    
    res.json(newuser);
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

exports.deleteManyClean = async (req, res) => {
  try {
    const { ids } = req.body;
    const result = await clean.deleteMany({ _id: { $in: ids } });
    if (result.deletedCount === 0) {
      res.status(404).send({ message: 'No bookings found to delete' });
    } else {
      res.status(200).send("Deleted succefully");
    }
  } catch (error) {
    console.error('Failed to delete bookings:', error);
    res.status(500).send({ message: 'Failed to delete bookings' });
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
