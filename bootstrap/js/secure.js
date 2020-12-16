
function mischandler(){
    return false;
}

function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
var isCtrl = false;
document.onkeyup=function(e)
{
    if(e.which == 17)
        isCtrl=false;
}

document.onkeydown=function(e)
{
    if(e.which == 17)
        isCtrl=true;
    if((e.which == 85) || (e.which == 67) && isCtrl == true)
    {
        // alert(‘Keyboard shortcuts are cool!’);
        return false;
    }
}


    function killCopy(e){
        return false
    }
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
}
//Disable right click script
var message = "";
///////////////////////////////////
function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false")


		
		$(document).ready(function(){
		    jQuery('#camera_wrap').camera({
		        loader: false,
		        pagination: false ,
		        minHeight: '200',
		        thumbnails: false,
		        height: '39,0625%',
		        caption: true,
		        navigation: true,
		        fx: 'mosaic'
		    });
		    var owl = $("#owl");
		    owl.owlCarousel({
		        items : 7, //10 items above 1000px browser width
		        itemsDesktop : [995,5], //5 items between 1000px and 901px
		        itemsDesktopSmall : [767, 3], // betweem 900px and 601px
		        itemsTablet: [700, 3], //2 items between 600 and 0
		        itemsMobile : [479, 2], // itemsMobile disabled - inherit from itemsTablet option
		        navigation : true,
		    });
		    $().UItoTop({ easingType: 'easeOutQuart' });
		    $('#stuck_container').tmStickUp({});
		    $('.gallery a.gal_item').touchTouch();
		});





function mischandler(){
    return false;
}

function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
var isCtrl = false;
document.onkeyup=function(e)
{
    if(e.which == 17)
        isCtrl=false;
}

document.onkeydown=function(e)
{
    if(e.which == 17)
        isCtrl=true;
    if((e.which == 85) || (e.which == 67) && isCtrl == true)
    {
        // alert(‘Keyboard shortcuts are cool!’);
        return false;
    }
}


    function killCopy(e){
        return false
    }
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
}

//Disable right click script
var message = "";
///////////////////////////////////
function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false")

>

function mischandler(){
    return false;
}

function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
var isCtrl = false;
document.onkeyup=function(e)
{
    if(e.which == 17)
        isCtrl=false;
}

document.onkeydown=function(e)
{
    if(e.which == 17)
        isCtrl=true;
    if((e.which == 85) || (e.which == 67) && isCtrl == true)
    {
        // alert(‘Keyboard shortcuts are cool!’);
        return false;
    }
}


    function killCopy(e){
        return false
    }
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
}
var message = "";
///////////////////////////////////
function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false")


function mischandler(){
    return false;
}

function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
var isCtrl = false;
document.onkeyup=function(e)
{
    if(e.which == 17)
        isCtrl=false;
}

document.onkeydown=function(e)
{
    if(e.which == 17)
        isCtrl=true;
    if((e.which == 85) || (e.which == 67) && isCtrl == true)
    {
        // alert(‘Keyboard shortcuts are cool!’);
        return false;
    }
}


    function killCopy(e){
        return false
    }
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
}


//Disable right click script
var message = "";
///////////////////////////////////
function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false")
