// $(function() {
//     $('details').on('mouseover focus', function() {
//         $(this).attr('open', true);
//     }).on('mouseout blur', function() {
//         $(this).attr('open', false);
//     })
// });
// Fetch all the details elements
const details = document.querySelectorAll("details");

// Add onclick listeners
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all details that are not targetDetail
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});
