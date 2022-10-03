import Image from "next/image";

const Investment = () => {
  return (
    <div className=" container container-investment p-4">
      <div className="row">
        <div className="col-4">
          <Image
            src="/images/image2.jpg"
            alt="image2"
            width={300}
            height={300}
          />
        </div>
        <div className="col-8">
          <div>INVESTMENT POLICY</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            nam nihil ad doloremque voluptatem aliquam ullam ab sint eaque quod
            architecto cum. Alias inventore odit assumenda facere? Consectetur,
            fugit explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investment;
