document.getElementById('btnid').addEventListener('click', function() {
    var imgContainer = document.getElementById('imageContainer');
    var imgElement = document.getElementById('myImage');
    var loaderElement = document.getElementById('loaderImage');

    // Display loader image
    loaderElement.classList.remove('hidden');

    // Hide original image until new image loads
    imgElement.classList.add('hidden');
    document.getElementById('fileInput').click();
    
    setTimeout(function() {
        var imageUrl = 'Images/Blue\ umbrella.png'; // Replace with your image path

        var tempImage = new Image();
        
        tempImage.onload = function() {
            imgElement.src = tempImage.src;

            // Hide loader after 2 seconds
            setTimeout(function() {
                loaderElement.classList.add('hidden');
                imgElement.classList.remove('hidden');
            }, 2000);
        };
        tempImage.src = imageUrl;
    }, 1000); 
});

document.getElementById('fileInput').addEventListener('change', function() {
    var fileInput = this;
    var imageContainer = document.getElementById('imageContainer');
    var uploadedImage = document.getElementById('uploadedImage');

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            var reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('imageElement').src = e.target.result;
                document.getElementById('imageElement').style.display = 'block';
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid .jpg or .png file.');
        }
    }
});


function changeBackgroundColor(button) {
    document.body.style.backgroundColor= "lightgreen";
    var computedStyle = window.getComputedStyle(button);
    
    
    var color = computedStyle.backgroundColor;
    var lightColor = getLightColor(rgbToHex(color), 150);
    
    console.log("Clicked button color:", color.toString(16));
    console.log("Light color:", lightColor);
    document.body.style.backgroundColor = lightColor;
    document.getElementById('btnid').style.backgroundColor = color;
    
}
function rgbToHex(rgb) {
    // Split the RGB string into individual components
    var rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (!rgbArray) {
        return rgb;
    }

    // Convert each component to hexadecimal
    var hex = "#";
    for (var i = 1; i <= 3; i++) {
        var component = parseInt(rgbArray[i], 10);
        var hexComponent = component.toString(16);
        hex += hexComponent.length == 1 ? "0" + hexComponent : hexComponent;
    }

    return hex;
}

function getLightColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}