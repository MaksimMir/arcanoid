window.addEventListener('DOMContentLoaded', () => {
    function init() {
        let elem = document.querySelector('.square');
        elem.addEventListener('mousedown', function(evt) {
            drag(this, evt);
        });
    };

    function drag(element, event) {
        let startX = event.clientX,
            startY = event.clientY;

        let originX = element.offsetLeft,
            originY = element.offsetTop;

        let deltaX = startX - originX,
            deltaY = startY - originY;

        document.addEventListener('mousemove', moveHendler);
        document.addEventListener('mouseup', upHendler);

        function moveHendler(evt) {
            element.style.left = (evt.clientX - deltaX) + 'px';
            element.style.top = (evt.clientY - deltaY) + 'px';
        }

        function upHendler() {
            document.removeEventListener('mouseup', upHendler);
            document.removeEventListener('mousemove', moveHendler);
        }
    };

    init();
})
