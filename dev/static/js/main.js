// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const sandwichToggle = function() {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.header__toggle');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let navMenu = document.querySelector('.nav');
        let body = document.querySelector(".body");
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('opened');
        navMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');

        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};
sandwichToggle();

if (window.innerWidth >= 1280) {
    $(function() {
        $(window).scroll(function() {
            var catalog = document.querySelector('.menu');
            var navCatalog = document.querySelector('.nav');
            var bodyIndex = document.querySelector('.body-index');

            if ($(this).scrollTop() >= 300) {
                $('header').addClass('scrolling');
                catalog.classList.remove('index-active');
                navCatalog.classList.remove('catalog-opened');

            } else {
                $('header').removeClass('scrolling');
                catalog.classList.add('index-active');
            }
        });
    });
}

window.addEventListener("resize", function() {
    if (window.innerWidth >= 1280) {
        $(function() {
            $(window).scroll(function() {
                var catalog = document.querySelector('.menu');
                var navCatalog = document.querySelector('.nav');
                var bodyIndex = document.querySelector('.body-index');

                if ($(this).scrollTop() >= 300) {
                    $('header').addClass('scrolling');
                    catalog.classList.remove('index-active');
                    navCatalog.classList.remove('catalog-opened');

                } else {
                    $('header').removeClass('scrolling');
                    catalog.classList.add('index-active');
                }
            });
        });
    }
});

var searchOpener = document.getElementsByClassName("header__loipe");
var elNodes = document.querySelector(".header__loipe");
var searchBody = document.querySelector(".search");
var headerO = document.querySelector(".body-index");
var introSl = document.querySelector(".intro");
var searchInput = document.querySelector(".search__upper-input");
var searchReset = document.querySelector(".search__upper-reset");

for (var i = 0; i < searchOpener.length; i++) {
    var elem = searchOpener[i];
    elem.addEventListener("click", function() {
        searchBody.classList.add('active');
        headerO.classList.add('searching');
    });
}

searchInput.oninput = function() {
    searchBody.classList.add('filled');
};

searchReset.onclick = function() {
    searchBody.classList.remove('filled');
    searchInput.value = '';
}

$(document).mouseup(function(e) {
    var div = $(".search"); //класс элемента вне которого клик
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active');
        headerO.classList.remove('searching');
    }
});

const header = document.querySelector("header");
let lastScroll = 0;

const throttle = (func, time = 100) => {
    let lastTime = 0;
    return () => {
        const now = new Date();
        if (now - lastTime >= time) {
            func();
            time = now;
        }
    };
};

const validateHeader = () => {
    const windowY = window.scrollY;
    const windowH = window.innerHeight / 2;
    const catalog = document.querySelector('.nav');
    let sandwichElement = document.querySelector('.header__toggle');
    if (windowY > windowH) {
        // We passed the first section, set a toggable class
        header.classList.add("is-fixed");
        // Determine is we ready to animate
        if (windowY > windowH + 40) {
            header.classList.add("can-animate");
            if (windowY < lastScroll) {
                // Determine if we scrolling up
                header.classList.add("scroll-up");
                catalog.classList.remove("active");
                sandwichElement.classList.remove("opened");
            } else {
                header.classList.remove("scroll-up");
                catalog.classList.remove("active");
                sandwichElement.classList.remove("opened");
            }
        } else {
            header.classList.remove("scroll-up");
        }
    } else {
        header.classList.remove("is-fixed", "can-animate");
    }
    lastScroll = windowY;
};

window.addEventListener("scroll", throttle(validateHeader, 100));
