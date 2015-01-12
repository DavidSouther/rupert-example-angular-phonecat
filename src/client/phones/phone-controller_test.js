describe('PhoneListController', function(){

  beforeEach(module('phonecat.phones.controller'));

  var sut = null;
  beforeEach(inject(function($controller){
    sut = $controller('PhoneController', {$scope: {}});
  }));

  it('should create "phones" model with 3 phones', function() {
    sut.phones.length.should.equal(3);
  });
});
