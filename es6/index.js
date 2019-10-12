// http://date.jsontest.com/

import $ from 'jquery';

let promise = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://d1ate.jsontest.com/',
        dataType: 'json',
        success: function(response) {
            resolve(response);
        },
        error: function(error) {
            reject(error);
        }
    });
});


promise
    .then((data) => {
        return data.date;
    })
    .then((date) => {
        console.log('Date: ', date);
    })
    .catch((error) => {
        console.info('Server error');
    });

