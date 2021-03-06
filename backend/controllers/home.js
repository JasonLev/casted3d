/**
 * GET /
 * Home page.
 */


exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.patient = function(req, res) {
    res.render('patient', {
          title: 'Patient Flow'
              });
};

exports.intake = function(req, res) {
    res.render('intake', {
          title: 'Intake Flow'
              });
};

exports.doctor = function(req, res) {
    res.render('doctor', {
          title: 'Doctor Flow'
              });
};

exports.patient_ADNviewer = function(req, res) {
    res.render('patient_ADNviewer', {
          title: 'ADN Viewer'
              });
};

exports.patient_gallery = function(req, res) {
    res.render('patient_gallery', {
          title: 'Patient Cast Selection'
              });
};