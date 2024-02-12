import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GymLogo from "../assets/icons/gym.png";

function HorizontalScrollbar({ data,getDataFromCard }) {
  data = Array.from(data);
  // console.log(data);
  if (data) {
    return (
      <Carousel className="bg-white w-1/2 shadow-lg md:w-3/4 rounded-sm">
        <CarouselContent>
          {data.map((item) => {
            return (
              <CarouselItem
                key={item}
                onClick= {(e) => {
                  window.location.href='#exercise'
                  getDataFromCard(item)
                }}
                className="h-40 flex items-center justify-center flex-col shadow-lg cursor-pointer hover:border-y-2 border-red-500  md:basis-1/3"
              >

                <img className="h-10 w-10 m-4" src={GymLogo} alt="logo" />
                <h1 className="m-4">{item.toUpperCase()}</h1>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
}

export default HorizontalScrollbar;
