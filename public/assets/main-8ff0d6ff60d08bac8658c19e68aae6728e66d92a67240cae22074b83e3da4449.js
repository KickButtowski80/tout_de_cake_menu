$(document).ready(function(){function e(){n()}function n(){o.addEventListener("click",t),m&&m.addEventListener("click",t),u&&u.addEventListener("click",t),d.addEventListener("click",function(e){var n=e.target;i&&n!==o&&t()})}function t(){i?classie.remove(c,"show-menu"):classie.add(c,"show-menu"),i=!i}var c=document.body,d=document.querySelector(".content-wrap"),o=document.getElementById("open-button"),u=document.getElementById("close-button"),i=!1,m=document.getElementById("menu-link");e()});