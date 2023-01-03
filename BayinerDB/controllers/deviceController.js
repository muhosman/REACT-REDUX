const fs = require('fs');

const devices = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  if (req.params.id * 1 > devices.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

exports.getAllDevices = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: devices.length,
    data: {
      devices
    }
  });
};

exports.getDevice = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = devices.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
};

exports.createDevice = (req, res) => {
  // console.log(req.body);

  const newId = devices[devices.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  devices.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/devices-simple.json`,
    JSON.stringify(devices),
    () => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
};

exports.updateDevice = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteDevice = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
