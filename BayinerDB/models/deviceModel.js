const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema(
  {
    deviceTypeId: {
      type: Number,
      required: [true, 'A device must have a typeID'],
      validator: { age: { $type: 'number', $mod: [1, 0] } }
    },
    mill: {
      type: Boolean,
      default: false
    },
    plastic: {
      type: Boolean,
      default: false
    },
    carboy: {
      type: Boolean,
      default: false
    },
    firmId: {
      type: Number,
      trim: true,
      required: [true, 'A device must have a firmId'],
      validator: { age: { $type: 'number', $mod: [1, 0] } }
    },
    firmName: {
      type: String,
      required: [true, 'A device must have a firmName']
    },
    ip: {
      type: String,
      required: [true, 'A device must have a ip'],
      maxlength: [
        40,
        'A device name must have less or equal then 40 characters'
      ],
      minlength: [9, 'A device name must have more or equal then 10 characters']
    },
    imei: {
      type: String,
      required: [true, 'A device must have a imei'],
      maxlength: [
        40,
        'A device name must have less or equal then 40 characters'
      ],
      minlength: [9, 'A device name must have more or equal then 10 characters']
    },
    gsmNo: {
      type: String,
      required: [true, 'A device must have a gsmNo'],
      maxlength: [
        40,
        'A device name must have less or equal then 40 characters'
      ],
      minlength: [9, 'A device name must have more or equal then 10 characters']
    },
    serialNo: {
      type: String,
      required: [true, 'A device must have a serialNo'],
      maxlength: [
        40,
        'A device name must have less or equal then 40 characters'
      ],
      minlength: [9, 'A device name must have more or equal then 10 characters']
    },
    userPassword: {
      type: String,
      required: [true, 'A device must have a userPassword'],
      maxlength: [
        40,
        'A device name must have less or equal then 40 characters'
      ],
      minlength: [9, 'A device name must have more or equal then 10 characters']
    },
    adminPassword: {
      type: String,
      required: [true, 'A device must have a adminPassword'],
      maxlength: [
        40,
        'A device name must have less or equal then 40 characters'
      ],
      minlength: [9, 'A device name must have more or equal then 10 characters']
    },
    quota: {
      type: Number,
      validator: { age: { $type: 'number', $mod: [1, 0] } },
      required: [true, 'A device must have a quota']
    },
    counter: {
      type: Number,
      validator: { age: { $type: 'number', $mod: [1, 0] } },
      required: [true, 'A device must have a counter']
    },
    connectionLevel: Number,
    settings: { type: String, default: '' },
    lastConnectionDate: {
      type: String,
      validator: {
        lastConnectionDate: { $regex: /^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}$/ }
      },
      required: [true, 'A device must have a last connection date']
    },
    deviceStatuId: {
      type: Number,
      required: [true, 'A device must have a statu ID'],
      trim: true,
      validator: { age: { $type: 'number', $mod: [1, 0] } }
    },
    isActive: {
      type: Boolean,
      default: false
    },
    note: {
      type: String,
      default: ''
    },
    note2: {
      type: String,
      default: ''
    },
    createdInfo: {
      type: String,
      validator: {
        lastConnectionDate: { $regex: /^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}$/ }
      },
      required: [true, 'A device must have a createdInfo']
    },
    updatedInfo: {
      type: String,
      validator: {
        lastConnectionDate: { $regex: /^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}$/ }
      },
      required: [true, 'A device must have a updatedInfo']
    },
    deviceGeo: {
      location: {
        type: String
      },
      cityName: {
        type: String
      },
      townName: {
        type: String
      }
    },
    mainFirmInfo: {
      mainFirmId: {
        type: Number
        //required: true
      },
      firmQuota: {
        type: Number
        //required: true
      },
      mainFirmName: {
        type: String
        //required: true
      },
      mainFirmQuota: {
        type: Number
        //required: true
      }
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

/*
 //AGGREGATION MIDDLEWARE
deviceSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});*/

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
