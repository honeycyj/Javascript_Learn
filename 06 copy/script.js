const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const trigger = window.innerHeight;

    boxes.forEach(b => {
        const boxTop = b.getBoundingClientRect().top
        const boxHeight = b.getBoundingClientRect().height

        const Amount = (trigger - boxTop);

        console.log(Amount);



        if (Amount > 0 && Amount < 180) {
            const persent = Amount / 180 * 100 * 2 - 200;
            const opacity = Amount / 180;
            b.style.transform = `translateX(${persent}%)`;
            b.style.opacity = `${opacity}`;
        } else if (Amount > 180) {
            b.style.transform = `translateX(0%)`;
        }

        // if (boxTop < trigger) {
        //     box.classList.add('show')
        // } else {
        //     box.classList.remove('show')
        // }
    });

};

