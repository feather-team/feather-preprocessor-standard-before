'use strict';

module.exports = function(content, file, conf){
	['extend-uri'].forEach(function(process){
        content = require('./process/' + process + '.js')(content, file, conf);
    });

    return content;
};