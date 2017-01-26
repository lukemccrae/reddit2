(function() {
    'use strict'
    angular.module('app')
        .component('posts', {
            controller: controller,
            templateUrl: '/posts/posts.html'

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
