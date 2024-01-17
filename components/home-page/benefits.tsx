import Image from "next/legacy/image"

const Benefits = () => {
  const benefitData = [
    {
      imageSrc: "trekking.svg",
      title: "Event Management",
      description:
        "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
    },
    {
      imageSrc: "piggy-bank.svg",
      title: "Funding Opportunity",
      description:
        "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
    },
    {
      imageSrc: "truck.svg",
      title: "Community Engagement",
      description:
        "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
    },
    {
      imageSrc: "trophy.svg",
      title: "Event Metrics",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
  ]

	return (
		<div className="mx-auto flex max-w-[64rem] flex-col">
			<div className="text-center xs:mb-16 sm:mb-8 md:text-left">
				<h2 className="font-heading text-lg tracking-wide sm:text-lg md:text-xl lg:text-3xl">
					Enhance Benefits
				</h2>
				<h3 className="text-balance flex-wrap leading-normal text-muted-foreground sm:text-md sm:leading-8">
					Collaborate with the community to make your event successful
				</h3>
			</div>

			<div className="flex flex-col md:flex-row gap-4">
				{benefitData.map((benefit, idx) => (
					<div key={idx} className="flex-1 flex items-center sm:items-start justify-center xs:flex sm:justify-start flex-col">
						<Image
							alt={`benefits icon for subcategory ${idx}`}
							src={`/home-page/benefits-section/${benefit.imageSrc}`}
							width={75}
							height={75}
							className="w-full h-full object-contain"
						/>
						<div className="mt-4 items-center text-center sm:text-left">
							<h1 className="xs:text-md mb-2 font-semibold tracking-wider md:text-md">
								{benefit.title}
							</h1>
							<h3 className="flex-wrap leading-normal text-muted-foreground sm:leading-8">{benefit.description}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Benefits
