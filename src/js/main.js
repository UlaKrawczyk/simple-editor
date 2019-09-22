"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const textArea = document.querySelector('.editor__area--js');
const btnLoad = document.querySelector('.editor__button--load');
const btnSave = document.querySelector('.editor__button--save');

btnSave.addEventListener('click', function () {
  localStorage.setItem('areaInput', textArea.value);
})

btnLoad.addEventListener('click', function () {
  if (localStorage.getItem('areaInput')) {
    textArea.value = localStorage.getItem('areaInput');
  }
})