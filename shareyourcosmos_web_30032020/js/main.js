document.addEventListener("DOMContentLoaded", function(){


	// alert("this is ok loaaaded  ssd yes");

	var wW = document.getElementById('upload_link').offsetWidth;
	// var wH = wW * 0.5626;
	// alert(wW);
	// document.getElementById('mVideo').style.height=wH+"px";
	// alert("iframe width: " + (wH));
	// alert("ww1");
});


function driveUploaderCallback(status) {
    if (status == 'done') {
    var afterUpload = document.getElementById('after-upload');
    afterUpload.style.left='0';
    // afterUpload.innerHTML = 'Thank you for your upload! You will be redirected soon.';
      // setTimeout(function() {
        // window.location = '#thank-you-page';
      // }, 3000);
      // alert("upload done");
    }
}
function closeUpload(){
	var afterUpload = document.getElementById('after-upload');
    afterUpload.style.left='120%';
    setTimeout(function(){
    	location.reload();
    }, 900);
     // location.reload(); 
}
function openAGBs(){
	// alert("agb's displayed and read");
	document.getElementById('AGBs').style.display='block';
	document.getElementById('upload_link_box').style.display='none';
}
function closeAGBs(){
	document.getElementById('AGBs').style.display='none';
	document.getElementById('upload_link_box').style.display='block';
}

function resizeF(){
	// var wW = document.getElementById('mVideo').offsetWidth;
	// var wH = wW * 0.5626;
	// document.getElementById('mVideo').style.height=wH+"px";
	// alert("resize iframe width: " + (wH));
}

window.addEventListener('load', function() {
    // alert('All assets are loaded');
    // document.getElementById('wait_for_load').style.height="0px";
    resizeF();
})
