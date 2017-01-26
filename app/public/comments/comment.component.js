(function() {
    'use strict'
    angular.module('app')
        .component('comments', {
            controller: controller,
            templateUrl: '/comments/comments.html'

        })

    function controller() {
        var vm = this;
        vm.$onInit = function() {
            console.log("onInit()");
        }

        vm.getPosts = function() {
            console.log("getPosts()");
        }
    }
}());
