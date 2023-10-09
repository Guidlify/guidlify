import Image from "next/legacy/image"

const Benefits = () => {
  const benefitData = [
    {
      imageSrc: "benefits-1.png",
      title: "Event Management",
      description:
        "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
    },
    {
      imageSrc: "benefits-2.png",
      title: "Funding Opportunity",
      description:
        "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
    },
    {
      imageSrc: "benefits-3.png",
      title: "Community Engagement",
      description:
        "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
    },
    {
      imageSrc: "benefits-4.png",
      title: "Event Metrics",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
  ]

  return (
    <div className="m-12 p-12">
      <div className="text-center xs:mb-16 xs:text-xs sm:mb-8 md:text-left">
        <h1 className="mb-2 font-semibold xs:text-2xl md:text-3xl">
          Enhance Benefits
        </h1>
        <h3 className="font-light md:text-lg">
          Collaborate with the community to make your event successful
        </h3>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {benefitData.map((benefit, idx) => (
          <div key={idx} className="max-w-40 mx-auto sm:mx-0">
            <div className="mb-4">
              <div className="items-center justify-center xs:flex sm:justify-start">
                <Image
                  alt={`benefits icon for subcategory ${idx}`}
                  src={`/home-page/benefits-section/${benefit.imageSrc}`}
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <div className="mt-4 items-center text-center sm:text-left">
                <h1 className="xs:text-md mb-2 font-semibold tracking-wider md:text-lg">
                  {benefit.title}
                </h1>
                <h3 className="xs:text-xs md:text-sm">{benefit.description}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits
