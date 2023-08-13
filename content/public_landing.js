document.addEventListener("DOMContentLoaded", function () {
    const svgElement = document.getElementById("arrow-path");
    const flipPoint = window.innerHeight * .5;
    const downArrowPath = "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z";
    const upArrowPath = "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z";

    window.addEventListener("scroll", function () {
        const currentScroll = window.scrollY;

        if (currentScroll >= flipPoint) {
            svgElement.setAttribute("d", upArrowPath);
        } else {
            svgElement.setAttribute("d", downArrowPath);
        }
    });
});
