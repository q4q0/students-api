const constants = {
  defaultServerResponse: {
    status: 400,
    message: '',
    body: {},
  },
  studentMessage: {
    STUDENTS_FETCHED: 'Students fetched successfully',
    STUDENT_FETCHED: 'Student fetched successfully',
    STUDENT_CREATED: 'Student created Successfully',
    STUDENT_UPDATED: 'Student updated successfully',
    STUDENT_DELETED: 'Student deleted successfully',
  },
  databaseMessage: {
    STUDENT_NOT_FOUND: 'Student not found in the database',
    INVALID_ID: 'Invalid id',
  },
};

module.exports = constants;
