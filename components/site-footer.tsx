import * as React from "react"

import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
	const footerData = [
		{
			title: "About",
			items: ["Company", "Store", "Open Source", "Research"],
		},
		{
			title: "Resources",
			items: ["Tools", "Blog", "Tutorials", "FAQs"],
		},
		{
			title: "Support",
			items: ["Contact Us", "Developers", "Documentation", "Integrations"],
		},
		{
			title: "Legal",
			items: ["Policy", "Terms", "Privacy", "Cookies"],
		},
	]
	return (
		<footer className={cn(className)}>
			<div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:py-0">


				<div className="flex flex-col items-center lg:items-start gap-4 md:flex-row md:gap-2 md:px-0 flex-1">

					<div className="xs:col-span-5 xs:pb-8 lg:col-span-1 lg:pb-0">
						<Image
							src={"/guildify-brand-logo.svg"}
							alt=""
							width={120}
							height={50}
						/>
					</div>

					<div className="w-full mx-auto flex flex-wrap gap-4 justify-between items-center px-4 pb-4">
						{footerData.map((column, index) => (
							<div
								key={index}
								className="flex flex-col xs:w-full sm:w-auto sm:flex-shrink-0 xs:col-span-5 xs:text-center sm:col-span-2 sm:pb-0 sm:text-left lg:col-span-1 gap-2"
							>
								<p className="font-semibold">{column.title}</p>
								{column.items.map((item, itemIndex) => (
									<p
										key={itemIndex}
										className="text-sm md:text-md cursor-pointer transition duration-200 hover:underline"
									>
										{item}
									</p>
								))}
							</div>
						))}
					</div>
				</div>
				<ModeToggle />
			</div>

			<div className="container flex flex-col items-center justify-between gap-4 md:flex-row  md:border-t md:border-muted-foreground/30 py-4">
				<h1 className="flex">
					<div className="mr-2">
						<Icons.Discord className="h-6 w-6 text-[#5865F2]" />
					</div>
					<div className="mr-2">
						<Icons.X className="h-5 w-5" />
					</div>
				</h1>
				<h1 className="xs:text-md sm:text-sm">
					Copyright © 2023 Guidlify
				</h1>
			</div>
		</footer>
	)
}
