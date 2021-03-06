(function () {
    "use strict";

    angular
        .module('baby-mean')
        .factory('homeSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getPosts: getPosts,
//                getPost: getPost,
                createPost: createPost,
                createPostPrivate: createPostPrivate
//                editPost: editPost,
//                deletePost: deletePost
            };

            function getPosts() {

                return $http.get("api/collections/memories");
            }
//
//            function getPost(postId) {
//                return $http.get("api/collections/demotiy/" + postId);
//            }

            function createPost(newPost) {
                $http.post("api/collections/memories", newPost).then(function (res) {
                    $rootScope.$broadcast("post:added");
                });
            }

            function createPostPrivate(newPost) {
                $http.post("api/collections/Private", newPost).then(function (res) {
                    $rootScope.$broadcast("post:added");
                });
            }

//            function editPost(post) {
//                $http.put("api/collections/demotiy/" + post._id, post).then(function (res) {
//                    $rootScope.$broadcast("post:updated");
//                });
//
//            }
//
//            function deletePost(postId) {
//                $http.delete("api/collections/demotiy/" + postId).then(function (res) {
//                    $rootScope.$broadcast("post:deleted");
//                });
//            }



        }]);
})();