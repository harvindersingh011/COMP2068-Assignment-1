'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

/* getting home page*/
router.get('/home', function (req, res) {
    res.render('home', { home: 'Home Page' });
});

/* getting service page*/
router.get('/service', function (req, res) {
    res.render('service', { service: 'Service Page' });
});

/* getting project page*/
router.get('/project', function (req, res) {
    res.render('project', { project: 'Project Page' });
});

/* getting contact me page*/
router.get('/contactme', function (req, res) {
    res.render('contactme', { contactme: 'Contact Page' });
});

/* getting aboutme page*/
router.get('/aboutme', function (req, res) {
    res.render('aboutme', { aboutme: 'Aboutme Page' });
});



module.exports = router;
