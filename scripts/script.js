function isLargeScreen() {
    return window.innerWidth >= 992;
}

function showOneTime() {
    // Hide all options first
    document.getElementById('oneTimePurchase').classList.add('d-none');
    document.getElementById('oneTimePurchaseMobile').classList.add('d-none');
    document.getElementById('subscribeOptions').classList.add('d-none');
    document.getElementById('subscribeOptionsMobile').classList.add('d-none');
    
    // Show appropriate one-time purchase option based on screen size
    if (isLargeScreen()) {
        document.getElementById('oneTimePurchase').classList.remove('d-none');
    } else {
        document.getElementById('oneTimePurchaseMobile').classList.remove('d-none');
    }

    // Update button styles
    document.getElementById('oneTimeBtn').classList.add('btn-primary');
    document.getElementById('oneTimeBtn').classList.remove('btn-outline-primary');
    document.getElementById('subscribeBtn').classList.remove('btn-primary');
    document.getElementById('subscribeBtn').classList.add('btn-outline-primary');
}

function showSubscribe() {
    // Hide all options first
    document.getElementById('oneTimePurchase').classList.add('d-none');
    document.getElementById('oneTimePurchaseMobile').classList.add('d-none');
    document.getElementById('subscribeOptions').classList.add('d-none');
    document.getElementById('subscribeOptionsMobile').classList.add('d-none');
    
    // Show appropriate subscribe option based on screen size
    if (isLargeScreen()) {
        document.getElementById('subscribeOptions').classList.remove('d-none');
    } else {
        document.getElementById('subscribeOptionsMobile').classList.remove('d-none');
    }

    // Update button styles
    document.getElementById('subscribeBtn').classList.add('btn-primary');
    document.getElementById('subscribeBtn').classList.remove('btn-outline-primary');
    document.getElementById('oneTimeBtn').classList.remove('btn-primary');
    document.getElementById('oneTimeBtn').classList.add('btn-outline-primary');
}

// Event listeners for buttons
document.getElementById('oneTimeBtn').addEventListener('click', showOneTime);
document.getElementById('subscribeBtn').addEventListener('click', showSubscribe);

// Handle screen size changes
window.addEventListener('resize', function() {
    // Re-apply the current selection when screen size changes
    if (document.getElementById('oneTimeBtn').classList.contains('btn-primary')) {
        showOneTime();
    } else {
        showSubscribe();
    }
});
document.addEventListener('DOMContentLoaded', function () {
      new Splide('#imageCarousel', {
        type      : 'loop',
        perPage   : 6,
        perMove   : 1,
        gap       : '1rem',
        autoplay  : false,
        interval  : 3000,
        pauseOnHover: true,
        breakpoints: {
          1200: { perPage: 5 },
          992 : { perPage: 4 },
          768 : { perPage: 2 },
          576 : { perPage: 1 }
        }
      }).mount();
    });

// Vertical Splide initialization
document.addEventListener('DOMContentLoaded', function () {
  const vertical = new Splide('#verticalCarousel', {
    type: 'loop',
    direction: 'ttb',
    height: '500px',
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoplay: false
  }).mount();

  // Bind custom arrow buttons
  document.getElementById('vertical-prev').addEventListener('click', () => vertical.go('<'));
  document.getElementById('vertical-next').addEventListener('click', () => vertical.go('>'));
});


// On page load, show one-time by default
window.addEventListener('load', showOneTime);