(function () {
    "use strict";

    angular
        .module('baby-mean')
        .controller('homeCtrl',['$scope', '$location', 'homeSvc', function ($scope, $location, homeSvc) {

            homeSvc.getPosts().success(function (posts) {
                $scope.posts = posts;
            });

//            postsService.getPost($routeParams.postId).success(function (post) {
//                $scope.post = post;
//            });

            $scope.createPost = function (newPost) {
                newPost.time = Date().getTime();
                homeSvc.createPost(newPost);
                $location.path('/posts');
            };

            $scope.slides = [
                {
                    image: '/images/casey_with_family2.jpg',
                    text: 'Casey with Family'
                },
                {
                    image: '/images/graduation.jpg',
                    text: 'High School Graduation'
                },
                {
                    image: '/images/casey_with_friends2.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/casey_with_friends3.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/cross_country.jpg',
                    text: 'High School Cross Country'
                },
                {
                    image: '/images/casey_with_friends4.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/casey_with_friends5.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/casey_with_friends6.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/casey_with_friends7.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/casey_with_friends8.jpg',
                    text: 'Casey with friends'
                },
                {
                    image: '/images/casey_with_family.jpg',
                    text: 'Casey with Family'
                },
                {
                    image: '/images/casey_with_austin.jpg',
                    text: 'Time Well Spent'
                },
                {
                    image: '/images/casey_with_rachel.jpg',
                    text: 'Casey with Rachel'
                }
            ];

            $scope.CarouselDemoCtrl = function() {
                $scope.myInterval = 4000;
            }();
            $scope.CollapseDemoCtrl = function(){
                $scope.isCollapsed = true;
            }

        }]);

})();

//(function () {
//    "use strict";
//
//    angular
//        .module('posts')
//        .controller('postsController', ['$scope', 'postsService', '$location', '$routeParams', function ($scope, postsService, $location, $routeParams) {
//            postsService.getPosts().success(function (posts) {
//                $scope.posts = posts;
//            });
//
//            postsService.getPost($routeParams.postId).success(function (post) {
//                $scope.post = post;
//            });
//
//            $scope.createPost = function (newPost) {
//                postsService.createPost(newPost);
//                $location.path('/posts');
//            };
//
//            $scope.editPost = function (post) {
//                postsService.editPost(post);
//                $location.path('/posts');
//            };
//
//            $scope.deletePost = function (id) {
//                postsService.deletePost(id);
//                $location.path('/posts');
//            }
//
//
//        }]);
//})();