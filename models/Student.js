const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Entered email is not valid'],
  },
  address: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Password confirm is required'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Entered password and confirmation password do not match',
    },
  },
  level: {
    type: String,
    enum: ['oria', 'freshmen', 'sophomore', 'junior', 'senior'],
    default: 'oria', // يا هطف
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

studentSchema.methods.correctPassword = async function (
  typedPassword,
  originalPassword
) {
  return await bcrypt.compare(typedPassword, originalPassword);
};

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
