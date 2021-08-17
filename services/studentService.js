const Student = require('../models/Student');
const { formatMongoData, checkObjectId } = require('../helpers/dbHelper');
const constants = require('../constants/index');
const boom = require('@hapi/boom');

const getAllStudents = async ({ skip = 0, limit = 10 }) => {
  try {
    let students = await Student.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(students);
  } catch (err) {
    console.log(`ERROR => Service: getAllStudents: ${err}`.red);
    throw new Error(err);
  }
};

const getStudentById = async (id) => {
  try {
    checkObjectId(id);
    let student = await Student.findById(id);
    if (!student) {
      throw new Error(constants.databaseMessage.INVALID_ID);
    }
    return formatMongoData(student);
  } catch (err) {
    console.log(`ERROR => Service: getProductById: ${err}`.red);
    throw new Error(err);
  }
};

const createStudent = async (reqBody) => {
  try {
    let student = new Student(reqBody);
    let result = await student.save();
    return result;
  } catch (err) {
    console.log(`ERROR => Service: createStudent: ${err}`.red);
    throw new Error(err);
  }
};

const updateStudent = async (id, updateInfo) => {
  try {
    checkObjectId(id);
    let student = await Student.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!student) {
      throw new Error(constants.databaseMessage.STUDENT_NOT_FOUND);
    }
    return formatMongoData(student);
  } catch (err) {
    console.log(`ERROR => Service: updateStudent: ${err}`.red);
    throw new Error(err);
  }
};

const deleteStudentById = async (id) => {
  try {
    checkObjectId(id);
    let student = await Student.findByIdAndDelete(id);
    if (!student) {
      throw new Error(constants.databaseMessage.STUDENT_NOT_FOUND);
    }
    return formatMongoData(student);
  } catch (err) {
    console.log(`ERROR => Service: deleteStudentById: ${err}`.red);
    throw new Error(err);
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudentById,
};
