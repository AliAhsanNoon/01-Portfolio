// $(function(e){
//     e.preventDefault();
//     var section = $(this).attr("href");
//     $('html,body').animate({
//         scrollTop:$(section).offset().top()
//     }, 1300);
// });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});