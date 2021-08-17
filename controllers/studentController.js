const constants = require('../constants/index');
const boom = require('@hapi/boom');
const studentService = require('../services/studentService');

const getAllStudents = async (req, res, next) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await studentService.getAllStudents(req.body);
    response.status = 200;
    response.message = constants.studentMessage.STUDENTS_FETCHED;
    response.body = serviceResponse;
  } catch (err) {
    console.log(`ERROR => Controller: getAllStudents: ${err}`.red);
    response.message = error.message;
  }
  return res.status(response.status).json(response);
};

const createStudent = async (req, res, next) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await studentService.createStudent(req.body);
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_CREATED;
    response.body = serviceResponse;
  } catch (err) {
    console.log(`ERROR => Controller: createStudent: ${err}`.red);
    response.message = err.message;
  }
  return res.status(response.status).json(response);
};

const getStudentById = async (req, res, next) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await studentService.getStudentById(req.params.id);
    response.status = 200;
    response.message = constants.studentMessage.STUDENTS_FETCHED;
    response.body = serviceResponse;
  } catch (err) {
    console.log(`ERROR => Controller: getStudentById: ${err}`.red);
    response.message = err.message;
  }
  return res.status(response.status).json(response);
};

const updateStudentById = async (req, res, next) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await studentService.updateStudentById(
      req.params.id,
      req.body
    );
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_UPDATED;
    response.body = serviceResponse;
  } catch (err) {
    console.log(`ERROR => Controller: updateStudentById: ${err}`.red);
    response.message = err.message;
  }
  return res.status(response.status).json(response);
};

const deleteStudentById = async (req, res, next) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await studentService.deleteStudentById(
      req.params.id
    );
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_DELETED;
    response.body = serviceResponse;
  } catch (err) {
    console.log(`ERROR => Controller: deleteStudentById: ${err}`.red);
    response.message = err.message;
  }
  return res.status(response.status).json(response);
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
