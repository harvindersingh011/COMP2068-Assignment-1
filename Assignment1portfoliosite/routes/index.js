'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/home', function (req, res) {
    res.render('home', { home: 'Home Page' });
});

router.get('/service', function (req, res) {
    res.render('service', { service: 'Service Page' });
});

router.get('/project', function (req, res) {
    res.render('project', { project: 'Project Page' });
});

router.get('/contactme', function (req, res) {
    res.render('contactme', { contactme: 'Contact Page' });
});

router.get('/aboutme', function (req, res) {
    res.render('aboutme', { aboutme: 'Aboutme Page' });
});



module.exports = router;
