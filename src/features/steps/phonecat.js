var mappings = require('../mappings');

module.exports = function(){
  this.When(
    /type \"([^\"]+)\" into the \"([^\"]+)\"/,
    function(value, field){
      this.world.fill(mappings[field], value);
    }
  );

  this.Then(
    /see ([0-9]+) \"([^\"]+)\"/,
    function(count, field){
      this.world.findAll(mappings[field]).then(function(elements){
        elements.length.should.equal(+count);
      });
    }
  );
};
