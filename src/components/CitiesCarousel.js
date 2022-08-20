import Carousel from "./Carousel";
function CitiesCarousel(){
    const items = [
        { url: "/img/cities/ciudad-del-cabo.jpg", title: "Cape Town" },
        { url: "/img/cities/dubai.jpg", title: "Dubai" },
        { url: "/img/cities/estambul.jpg", title: "Istambul" },
        { url: "/img/cities/guiza.jpg", title: "Gizah" },
        { url: "/img/cities/helsinki.jpg", title: "Helsinki" },
        { url: "/img/cities/kyoto.jpg", title: "Kyoto" },
        { url: "/img/cities/oaxaca.jpg", title: "Oaxaca" },
        { url: "/img/cities/porto.jpg", title: "Porto" },
        { url: "/img/cities/reykjavik.jpg", title: "Reykjavik" },
        { url: "/img/cities/sidney.jpg", title: "Sidney" },
        { url: "/img/cities/udaipur.jpg", title: "Udaipur" },
        { url: "/img/cities/venecia.jpg", title: "Venice" }
      ]
return(
    <Carousel data={items}/>
)
}
export default CitiesCarousel