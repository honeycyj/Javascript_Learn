class BIM {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
        this.bmi = weight / height ** 2;
    }

}


const mark = new BIM(95, 1.88);
const john = new BIM(85, 1.76);

const markHigherBMI = mark.bmi > john.bmi




console.log(markHigherBMI)


const imageUrl = "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU";


(async () => {
    const response = await fetch(imageUrl)
    const imageBlob = await response.blob()
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
        const base64data = reader.result;
        // console.log(base64data);


        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            base64 = base64data; //base64 string

        //size canvas
        canvas.width = 34,
            canvas.height = 34;

        //create image, set src to base64 and onload draw to canvas
        var image = new Image();
        image.onload = (function (canvas, ctx) {
            return function () {
                ctx.drawImage(this, 0, 0);

                //now we can finally get a Uint8ClampedArray
                var imageData = ctx.getImageData(0, 0, 34, 34);
                console.log(imageData.data);
            };
        })(canvas, ctx);
        image.src = base64;
    }
})()
