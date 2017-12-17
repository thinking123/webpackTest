import angular from 'angular'
import sc from './my.scss'
import _ from 'lodash'
import {myCls} from './my1.css'
import u1 from '../../static/imgTest/u2.jpg'

console.log('output css==========')
console.dir(sc)
console.dir(myCls)
let test = angular.module('mainApp');

test.controller('TestController' , ['$scope' , ($scope)=>{
    $scope.name = '111111111111111';

    $scope.changeName = ()=>{
        // alert('2222222222222222')
        $scope.name = '222222222 11'
    }
    $scope.newName = '11';
}])
//
// if (module.hot){
//     console.log('loading..................')
//     module.hot.accept()
// }
