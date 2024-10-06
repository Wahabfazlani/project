// nav bar ki java hy ye
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});
// nav bar ki cjava yaha tk hy
function openModal(car) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const image = document.getElementById('modal-image');
    const engine = document.getElementById('modal-engine');
    const horsepower = document.getElementById('modal-horsepower');
    const efficiency = document.getElementById('modal-efficiency');

    const carDetails = {
        car1: {
            // title: 'Car Model A',
            image: 'pic1.png',
            // engine: 'Engine: 2.0L Turbo',
            // horsepower: 'Horsepower: 250 hp',
            // efficiency: 'Fuel Efficiency: 30 MPG',

        },
        car2: {
            // title: 'Car Model B',
            image: 'pic2.png',
            // engine: 'Engine: 2.5L Naturally Aspirated',
            // horsepower: 'Horsepower: 200 hp',
            // efficiency: 'Fuel Efficiency: 28 MPG',
        },
        car3: {
            // title: 'Car Model C',
            image: 'pic3.jpg',
            // engine: 'Engine: 3.0L V6',
            // horsepower: 'Horsepower: 300 hp',
            // efficiency: 'Fuel Efficiency: 25 MPG',
        },
        car4: {
            // title: 'Car Model D',
            image: 'pic4.png',
            // engine: 'Engine: 1.8L Hybrid',
            // horsepower: 'Horsepower: 150 hp',
            // efficiency: 'Fuel Efficiency: 50 MPG',
        },
        car5: {
            // title: 'Car Model E',
            image: 'pic5.jpg',
            // engine: 'Engine: 2.4L Turbo',
            // horsepower: 'Horsepower: 280 hp',
            // efficiency: 'Fuel Efficiency: 32 MPG',
        },
        car6: {
            // title: 'Car Model F',
            image: 'pic6.jpg',
            // engine: 'Engine: 3.5L V8',
            // horsepower: 'Horsepower: 350 hp',
            // efficiency: 'Fuel Efficiency: 22 MPG',
        },
        car7: {
            // title: 'Car Model G',
            image: 'pic7.jpg',
            // engine: 'Engine: 2.0L Electric',
            // horsepower: 'Horsepower: 150 hp',
            // efficiency: 'Fuel Efficiency: 120 MPG-E',
        },
        car8: {
            // title: 'Car Model H',
            image: 'pic8.jpg',
            // engine: 'Engine: 2.5L Hybrid',
            // horsepower: 'Horsepower: 200 hp',
            // efficiency: 'Fuel Efficiency: 45 MPG',
        },
    };

    const details = carDetails[car];
    title.textContent = details.title;
    image.src = details.image;
    engine.textContent = details.engine;
    horsepower.textContent = details.horsepower;
    efficiency.textContent = details.efficiency;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

