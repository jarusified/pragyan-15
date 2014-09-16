var baseUrl = './media/loading/', 
    $log = $('#sample2-log').val(''), 
    $progress = $('#percent'), 
    loader = new PxLoader(); 
 
// add 100 images to the queue 
for(var i=1; i < 6; i++) { 
    // this time we'll create a PxLoaderImage instance instead of just 
    // giving the loader the image url 
    var pxImage = new PxLoaderImage(baseUrl +i+".png"); 
    console.log(pxImage);
    // we can add our own properties for later use 
    pxImage.imageNumber = i + 1; 
 
    loader.add(pxImage); 
} 
 
// callback that runs every time an image loads 
loader.addProgressListener(function(e) { 
 
    // log which image completed 
    $log.val($log.val() + 'Image ' + e.resource.imageNumber + ' Loaded\r'); 
 
    // scroll to the bottom of the log 
    $log.scrollTop($log[0].scrollHeight); 
    var completed=(e.completedCount/e.totalCount)*100;
    // the event provides stats on the number of completed items 
    $progress.text(completed); 
}); 
 
loader.start();