document.querySelector(".container").animate(

[
    {
        opacity:0,
        transform:"translateY(40px)"
    },

    {
        opacity:1,
        transform:"translateY(0px)"
    }

],

{
    duration:1500,
    fill:"forwards"
}

);