const request = require('request');
const express = require('express');

const options = {
  method: 'GET',
  url: 'https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/8000105',
  headers: {
    'DB-Client-Id': 'clientId',
    'DB-Api-Key': 'clientSecret',  // aus sicherheitsgründen die clientid und das clientsecret entfernt weil Repo öffentlich
    accept: 'application/xml'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});