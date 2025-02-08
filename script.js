document.getElementById("flowerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let color = document.getElementById("color").value;
    
    // Mapping colors to flowers
    let flowerMap = {
        "red": "https://example.com/red-rose.png",
        "yellow": "https://example.com/yellow-sunflower.png",
        "pink": "https://example.com/pink-tulip.png",
        "white": "https://example.com/white-lily.png",
        "purple": "https://example.com/purple-orchid.png"
    };

    let flowerImageURL = flowerMap[color];

    // Display result
    document.getElementById("message").innerHTML = 
        `Happy Valentine's Day, ${name}! <br> Here’s a beautiful ${color} flower for you in ${location}. ❤️`;
    document.getElementById("flowerImage").src = flowerImageURL;
    document.getElementById("result").classList.remove("hidden");
});
