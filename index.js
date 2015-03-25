'use strict';

if(!feather.config.get('staticMode') && feather.config.get('roadmap.domain') == ''){
	feather.config.set('roadmap.domain', '<?=$FEATHER_STATIC_DOMAIN?>');
}

module.exports = function(content, file, conf){
	['extend-uri'].forEach(function(process){
        content = require('./process/' + process + '.js')(content, file, conf);
    });

    return content;
};