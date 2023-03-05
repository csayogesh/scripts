// ==UserScript==
// @name         Simple Speed Controller for Youtube
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Allows you to play youtube videos from 0 to 16 times normal speed
// @author       YB
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const map = {
        1: {id: '1x_speed', speed: 1},
        1.5: {id: '15x_speed', speed: 1.5},
        2: {id: '2x_speed', speed: 2},
        2.5: {id: '25x_speed', speed: 2.5},
        3: {id: '3x_speed', speed: 3},
        4: {id: '4x_speed', speed: 4},
    };

    //every fraction of a second check if the controller's injected and if theres a video
    //I have to do this because I don't think theres an easy way to detect the crazy history rewrite stuff that they do to give the illusion of you loading a page when you're actually not
    window.setInterval(function() {

        if(!document.getElementById("1x_speed")) {
            //create speed controller
            var one_x = document.createElement('button');
            one_x.id = '1x_speed';
            one_x.innerText = '1X';
            one_x.onclick = function() {
                let speed = window.localStorage.getItem("pb:speed");
                if(speed) {
                    let md = map[speed];
                    let id = document.getElementById(md['id']);
                    id.style.background = "";
                }
                document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = 1;
                window.localStorage.setItem("pb:speed", 1);
            };
            document.getElementById("above-the-fold").children[0].appendChild(one_x);
        }

        if(!document.getElementById("15x_speed")) {
            //create speed controller
            one_x = document.createElement('button');
            one_x.id = '15x_speed';
            one_x.innerText = '1.5X';
            one_x.onclick = function() {
                let speed = window.localStorage.getItem("pb:speed");
                if(speed) {
                    let md = map[speed];
                    let id = document.getElementById(md['id']);
                    id.style.background = "";
                }
                document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = 1.5;
                window.localStorage.setItem("pb:speed", 1.5);
            };
            document.getElementById("above-the-fold").children[0].appendChild(one_x);
        }

        if(!document.getElementById("2x_speed")) {
            var two_x = document.createElement('button');
            two_x.id = '2x_speed';
            two_x.innerText = '2X';
            two_x.onclick = function() {
                let speed = window.localStorage.getItem("pb:speed");
                if(speed) {
                    let md = map[speed];
                    let id = document.getElementById(md['id']);
                    id.style.background = "";
                }
                document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = 2;
                window.localStorage.setItem("pb:speed", 2);
            };
            document.getElementById("above-the-fold").children[0].appendChild(two_x);
        }

        if(!document.getElementById("25x_speed")) {
            two_x = document.createElement('button');
            two_x.id = '25x_speed';
            two_x.innerText = '2.5X';
            two_x.onclick = function() {
                let speed = window.localStorage.getItem("pb:speed");
                if(speed) {
                    let md = map[speed];
                    let id = document.getElementById(md['id']);
                    id.style.background = "";
                }
                document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = 2.5;
                window.localStorage.setItem("pb:speed", 2.5);
            };
            document.getElementById("above-the-fold").children[0].appendChild(two_x);
        }


        if(!document.getElementById("3x_speed")) {
            two_x = document.createElement('button');
            two_x.id = '3x_speed';
            two_x.innerText = '3X';
            two_x.onclick = function() {
                let speed = window.localStorage.getItem("pb:speed");
                if(speed) {
                    let md = map[speed];
                    let id = document.getElementById(md['id']);
                    id.style.background = "";
                }
                document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = 3;
                window.localStorage.setItem("pb:speed", 3);
            };
            document.getElementById("above-the-fold").children[0].appendChild(two_x);
        }

        if(!document.getElementById("4x_speed")) {
            two_x = document.createElement('button');
            two_x.id = '4x_speed';
            two_x.innerText = '4X';
            two_x.onclick = function() {
                let speed = window.localStorage.getItem("pb:speed");
                if(speed) {
                    let md = map[speed];
                    let id = document.getElementById(md['id']);
                    id.style.background = "";
                }
                document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = 4;
                window.localStorage.setItem("pb:speed", 4);
            };
            document.getElementById("above-the-fold").children[0].appendChild(two_x);
        }

        let speed = window.localStorage.getItem("pb:speed");
        if(speed) {
            let md = map[speed];
            let id = document.getElementById(md['id']);
            id.style.background = "aqua";
            document.getElementsByClassName("html5-video-container")[0]
                    .getElementsByClassName("video-stream html5-main-video")[0]
                    .playbackRate = speed;
        }
    }, 300);

})();
