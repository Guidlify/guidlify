
import { Icons } from "../icons"

const ContactUs = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center py-6 text-center xs:py-12">
				<h1 className="font-heading text-3xl tracking-wide sm:text-xl md:text-2xl lg:text-3xl">
					Join the conversation
				</h1>
				<h3 className="text-balance max-w-[45rem] flex-wrap leading-normal text-muted-foreground sm:text-lg sm:leading-8">
					Come and Connect, Chat with the Guidlify Community
				</h3>
				<div className="v mt-4 flex">
					<div className="mr-4">
						<Icons.Discord className="h-8 w-8 text-[#5865F2]" />
					</div>
					<div className="mr-2">
						<Icons.X className="h-7 w-7" />
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactUs
