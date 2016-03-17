/**
 * Created by leibosite on 16/3/17.
 */

var Engine = require('../engine/engine.js');

module.exports = {

    test:function(req,res){
        Engine.testEngine();
        console.log('it is just a test!');
        return res.json("ok");
    }
};