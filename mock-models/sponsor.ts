import { SponsorDataProps } from "./interfaces/SponsorDataProps";

export const SponsoringOrganizationsData: SponsorDataProps = {
  organizations: [
    {
      title: "Sponsoring",
      items: [
        {
          name: "WebXDAO",
          url: "/organization/webxdao.png",
          description:
            "This is so good! I encourage everyone who is reading this right now to attend the events they host. Definitely helps people build career in tech - currently sponsoring this organization.",
        },
      ],
    },
  ],
  sponsorTierData: [
    {
      tier: "Diamond",
      price: "5000",
      about: [
        { description: "Logo on Website, Banners" },
        { description: "Dedicated Post" },
        { description: "Story Promotion" },
      ],
    },
    {
      tier: "Platinum",
      price: "1000",
      about: [
        { description: "Logo on Website" },
        { description: "Story Promotion" },
      ],
    },
    {
      tier: "Gold",
      price: "500",
      about: [
        { description: "Logo on Website" },
        { description: "Story Promotion" },
      ],
    },
    {
      tier: "Silver",
      price: "100",
      about: [{ description: "Logo on Post" }],
    },
  ],
  basicInfo: {
    eventName: "WebX Manilla",
    orgName: "WebX Guild",
    numberOfSponsors: "1",
    title: "Welcome to WebX Guild - GitHub Sponsor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris commodo. Eu augue utlectus arcu bibendum at varius vel. Faucibus pulvinar elementuminteger enim neque volutpat ac tincidunt vitae. Pharetra convallisposuere morbi leo urna molestie at. Neque gravida in fermentum et.Convallis tellus id interdum velit laoreet id donec ultricestincidunt. Eu volutpat odio facilisis mauris sit amet massa. Sedturpis tincidunt id aliquet risus feugiat in ante metus.",
    peopleInterested: "1k",
  },
}
