import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
function Featured() {
  return (
    <div className="bg-featured-img bg-fixed bg-cover text-white bg-black/60 bg-blend-overlay py-12">
      <SectionTitle subHeading="Check it Out" heading="From Our Menu" />
      <div className="md:flex justify-center items-center py-8 px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-4">
          <p>Aug 20, 2024</p>
          <h3 className="uppercase">Where Can I get Some</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            enim corrupti excepturi corporis vitae natus iste sint cumque quasi,
            perspiciatis quisquam voluptas doloremque soluta quas magnam ex
            itaque adipisci dolorum possimus sunt temporibus quos? Repellendus
            reiciendis aut perspiciatis delectus fuga nisi, ab dignissimos
            magnam blanditiis consequatur asperiores pariatur iure doloremque.
          </p>
          <button className="px-4 py-3 border-b-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
