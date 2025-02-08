document.getElementById("flowerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let color = document.getElementById("color").value;
    
    // Mapping colors to flowers and their meanings
    let flowerData = {
        "red": {
            "image": "red.jpg",
            "name": "Red Rose",
            "meaning": "Symbolizes love, passion, and romance."
        },
        "yellow": {
            "image": "Yellow.jpg",
            "name": "Sunflower",
            "meaning": "Represents happiness, warmth, and friendship."
        },
        "pink": {
            "image": "Pink.jpg",
            "name": "Pink Tulip",
            "meaning": "Expresses admiration, care, and affection."
        },
        "white": {
            "image": "white.jgp",
            "name": "White Lily",
            "meaning": "Symbolizes purity, innocence, and devotion."
        },
        "purple": {
            "image": "purple.jpg",
            "name": "Purple Orchid",
            "meaning": "Represents luxury, admiration, and mystery."
        }
    };

    let flower = flowerData[color];

    // Display result
    document.getElementById("message").innerHTML = 
        `Happy Valentine's Day, ${name}! 💕 <br>
        Here’s a beautiful <strong>${flower.name}</strong> for you in <strong>${location}</strong>. <br>
        <em>${flower.meaning}</em>`;
    
    document.getElementById("flowerImage").src = flower.image;
    document.getElementById("result").classList.remove("hidden");
});
