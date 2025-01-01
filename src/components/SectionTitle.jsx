function SectionTitle({ heading, subHeading }) {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-4 ">
      <p className="text-yellow-600">---{subHeading}---</p>
      <h3 className="uppercase text-5xl border-y-4 py-2">{heading}</h3>
    </div>
  );
}

export default SectionTitle;
