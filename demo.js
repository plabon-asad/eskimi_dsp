var demo1 = document.querySelectorAll('#demo1 .text_1');
var mascot_1 = document.querySelectorAll('#demo1 .mascot_1');

// Text animation
anime({
    targets: demo1,
    translateX: [-200, 0],
    opacity: [0, 1],
    endDelay: 2000,
    direction: 'alternate',
    // loop: true,
    easing: 'easeInOutCirc'
});

// Mascot animation
anime({
    targets: mascot_1,
    translateX: [200, 0],
    opacity: [0, 1],
    delay: 500,
    endDelay: 1800,
    direction: 'alternate',
    // loop: true,
    easing: 'easeInOutCirc'
});

// Task two
var task2Text = document.querySelectorAll('div#demo2 .bottom_text');

anime({
    targets: task2Text,
    translateY: [50, 0],
    // loop: true,
    easing: 'easeInOutCirc'
});

// Task three
var task3Stamp = document.querySelectorAll('div#demo3 img.stamped');

// Stamp animation
anime({
    targets: task3Stamp,
    translateX: [0, 250],
    opacity: [.5, 1],
    delay: 3000,
    // endDelay: 1000,
    zIndex: [1, 0],
    easing: 'easeInOutCirc'
});


var task3Mascot = document.querySelectorAll('div#demo3 .mascot_1_1');

// Task3 mascot
anime({
    targets: task3Mascot,
    translateX: [0, -152],
    delay: 3000,
    zIndex: 1,
    easing: 'easeInOutCirc'
});

var task3BottomText = document.querySelectorAll('div#demo3 img.bottom_text');

// Bottom text
anime({
    targets: task3BottomText,
    translateY: 13,
    delay: 3000,
    easing: 'easeInOutCirc'
});

// Task4
var task4BtnFooter = document.querySelectorAll('#demo4 .btn_4_footer img');

// Bottom text
anime({
    targets: task4BtnFooter,
    translateY: [150, 0],
    easing: 'easeInOutCirc'
});

var task4Btn = document.querySelectorAll('#demo4 .mascot_4 img.btn');

// Button
anime({
    targets: task4Btn,
    opacity: [0, 1],
    easing: 'easeInOutCirc'
});

var task4mascot = document.querySelectorAll('#demo4 .mascot_4 img.mascot');

// Mascot
anime({
    targets: task4mascot,
    opacity: [0, 1],
    translateY: -46,
    zIndex: 1,
    delay: 2000,
    easing: 'easeInOutCirc'
});