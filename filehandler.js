var fs = require('fs');

module.exports = function(filename, sucessFn, errorFn){
    fs.readFile(filename, function(err, data){
        if(err){
            errorFn(err);
        }else{
            sucessFn(data);
        }
    })
}