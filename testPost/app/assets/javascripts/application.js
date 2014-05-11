// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

$(document).keydown(function(event){
    switch (event.keyCode) {
            case 37:
            	//var pathname = $(location).attr('href');
            	var current_page = getParameterByName('page');
            	var next_page = parseInt(current_page)-1;

                window.location.replace("http://localhost:3000/welcome/index?page="+next_page);
                break
            case 39:
                var current_page = getParameterByName('page');
            	var next_page = parseInt(current_page)+1;

                window.location.replace("http://localhost:3000/welcome/index?page="+next_page);
                break;
        }});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}