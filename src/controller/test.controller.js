import angular from 'angular'

let test = angular.module('mainApp');

test.controller('TestController' , ($scope)=>{
    $scope.name = '111111111111111';

    $scope.changeName = ()=>{
        // alert('2222222222222222')
        $scope.name = '222222222 11'
    }
    $scope.newName = '11';
})
//
// if (module.hot){
//     console.log('loading..................')
//     module.hot.accept()
// }
