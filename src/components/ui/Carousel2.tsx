import { Carousel } from "@mantine/carousel";

const Carousel2 = () => {
  return (
    <Carousel
      slideSize="70%"
      height={"auto"}
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: "center",
      }}
    >
      {/* <img className="mx-1 object-cover rounded-lg" src={test} alt="" />
      <img className="mx-1 object-cover rounded-lg" src={test} alt="" />{" "}
      <img className="mx-1 object-cover rounded-lg" src={test} alt="" />{" "}
      <img className="mx-1 object-cover rounded-lg" src={test} alt="" />{" "}
      <img className="mx-1 object-cover rounded-lg" src={test} alt="" /> */}
    </Carousel>
  );
};

export default Carousel2;
