const myImage = new Image();
myImage.src = 'data:image/png;base64,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';

myImage.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 450;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 5000;
    //brightness mapping
    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
    console.log(mappedImage)

    function calculateRelativeBrightness(red, green, blue) {
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }
    //particles 
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 1.5;
            this.size = Math.random() * 1 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.3 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate() {
        
        ctx.globalAlpha = 0.005;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});