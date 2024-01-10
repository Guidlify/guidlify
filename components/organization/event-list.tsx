import React from "react"

import BlogPost from "@/components/organization/blog-post"

const eventHostedData = [
  {
    imageSrc: "/organization/team.png",
    tag: "Most popular",
    title: "Many desktop publishing packages and web page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
    avatarSrc: "/organization/avatar.png",
    organizationName: "WebXGuild",
  },
  {
    imageSrc: "/organization/team.png",
    tag: "Most popular",
    title: "Many desktop publishing packages and web page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
    avatarSrc: "/organization/avatar.png",
    organizationName: "WebXGuild",
  },
]

const EventList: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col justify-center space-y-5 md:justify-evenly md:space-y-4 lg:flex-row lg:space-y-0">
      {eventHostedData.map((event, index) => (
        <BlogPost
          key={index}
          imageSrc={event.imageSrc}
          tag={event.tag}
          title={event.title}
          description={event.description}
          avatarSrc={event.avatarSrc}
          orgName={event.organizationName}
        />
      ))}
    </div>
  )
}

export default EventList
