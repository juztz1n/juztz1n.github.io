// Scroll Dataset for CSS.
const debounce = (fn) =>
{
    let frame;

    return (...params) =>
    {
        if (frame)
        {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() =>
        {
            fn(...params);
        });
	}
};

const storeScroll = () =>
{
    document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

// Scroll To.
function goToHeader() {
    var element = document.getElementById("header");
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function goToContent() {
    var element = document.getElementById("projects");
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function goToAbout() {
    var element = document.getElementById("about");
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function goToFooter() {
    var element = document.getElementById("footer");
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}
