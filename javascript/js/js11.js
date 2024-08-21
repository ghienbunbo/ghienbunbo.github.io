function scale() {
    var img = document.getElementById("img");
    var scaleValue = document.querySelector('input[name="scale"]:checked').value;

    // Extract percentage value and convert to decimal for scale function
    var scaleDecimal = parseFloat(scaleValue) / 100;

    img.style.transform = `scale(${scaleDecimal})`;
}
