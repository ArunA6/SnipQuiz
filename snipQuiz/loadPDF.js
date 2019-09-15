
function loadPDF(){

    var fileList = document.getElementsByClassName('file');
    var startPages = document.getElementsByClassName('startPage');
    var endPages = document.getElementsByClassName('endPage');

    if(!startPages.some() || !endPages.some()){
        alert("please fill any empty fields")
        return;
    }

    for (i = 0; i < fileList.length; ++i) {
        
        
        fileList[i].onchange = function(e) {
          
          console.log('aekflhvbhivb');
          var file = e.target.files[0]
          if (file.type != "application/pdf") {
            console.error(file.name, "is not a pdf file.")
            return
          }
        
          var fileReader = new FileReader();
        
          fileReader.onload = function() {
            var typedarray = new Uint8Array(this.result);
        
            PDFJS.getDocument(typedarray).then(function(pdf) {
              // you can now use *pdf* here
              console.log("the pdf has ", pdf.numPages, "page(s).")
              pdf.getPage(pdf.numPages).then(function(page) {
                // you can now use *page* here
                var viewport = page.getViewport(2.0);
                var canvasEl = document.getElementById("canvas");
                canvasEl.height = viewport.height;
                canvasEl.width = viewport.width;
        
                page.render({
                  canvasContext: canvasEl.getContext('2d'),
                  viewport: viewport
                }).then(function() {
        
                  var bg = canvasEl.toDataURL("image/png");
        
                  fabric.Image.fromURL(bg, function(img) {
                    img.scaleToHeight(1123);
                    canvas.setHeight(1123);
                    canvas.setWidth(1588);
                    canvas.setBackgroundImage(img);
                  });
                  canvas.renderAll();
                });
              });
        
            });
          };
          fileReader.readAsArrayBuffer(file);
        };
    }
}