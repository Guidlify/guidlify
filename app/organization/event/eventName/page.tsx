"use client"

import Image from "next/legacy/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AvatarOverLap from "@/components/home-page/avatar-overlap"
import { Icons } from "@/components/icons"
import BannerOrganization from "@/components/organization/banner"
import CustomProgressBar from "@/components/organization/custom-progress-bar"

const BrandSponsors = [
  Icons.TransistorLogoTxt,
  Icons.TupleLogoTxt,
  Icons.StaticKitLogoTxt,
  Icons.MirageLogoTxt,
  Icons.LaravelLogoTxt,
  Icons.StatamicLogoTxt,
]

const eventSnapshots = [
  "/organization/eventSnapshot1.png",
  "/organization/eventSnapshot2.png",
  "/organization/eventSnapshot3.png",
]

const EventPage = () => {
  return (
    <div className="container mb-20">
      {/* <BannerOrganization url="/organization/banner.png" /> */}
      <div className="px-10">
        <div className="mb-4 mt-10">
          <h3 className="flex justify-center text-lg">Live & Virtual Event</h3>
          <div className="relative mt-2 hover:opacity-60">
            <Image
              alt="banner of organization"
              src={`/organization/event-name-snapshot.jpeg`}
              width={1135}
              height={536}
              layout="responsive"
              priority={true}
              className="shrink-0 rounded-3xl object-cover transition-all duration-300 hover:cursor-pointer hover:opacity-60"
            />
            <div className="absolute bottom-8 left-8 flex items-center">
              <Icons.PlayEvent className="h-[60px] w-[60px] rounded-full bg-gray-300 text-[#111827]" />
              <div className="ml-8 text-lg font-medium">2023 Teaser</div>
            </div>
          </div>
        </div>
        <div className="mx-4 flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="mt-10 text-2xl font-semibold">WebX Manilla</h1>
            <h3 className="mb-0 text-xl font-medium text-gray-600 dark:text-gray-400">
              WebX Guild
            </h3>
            <div className="flex items-center justify-start text-violet-500">
              Philippines, Manila
              <span>
                <Icons.Location className="ml-1 h-[17px] w-[17px] text-[#878787]" />
              </span>
            </div>
            <div className="mr-6 mt-2">
              <Button className="bg-violet-500 px-10">
                <Icons.plusSquare className="mr-2 h-4 w-4 shrink-0" />
                Register Now
              </Button>
            </div>
            <div className="mt-1 flex items-center justify-start text-violet-500">
              185d : 14h : 25m : 53s{" "}
              <span>
                <Icons.Clock className="ml-2 h-[17px] w-[17px] text-[#878787]" />
              </span>
            </div>
            <div className="ml-3 mt-3 flex items-center text-left">
              <div className="mr-3">
                <AvatarOverLap
                  size={34}
                  url={"/organization/avatar.png"}
                  option="black"
                />
              </div>
              <span className="mt-2 text-sm text-black dark:text-white">
                vincent, myrnjad, maxime and others are attending this event!
              </span>
            </div>
          </div>
          <div className="flex w-[calc(300px)] flex-col">
            <div className="mb-8 mt-20 flex flex-col items-center justify-center">
              <CustomProgressBar value={3000} max={5000} />
              <div className="mb-1 mt-2 flex text-2xl font-bold">
                US${" "}
                <span className="text-gray-500 dark:text-gray-300">3000</span>
              </div>
              <div className="text-sm">pledge of US$ 5000 goal</div>
              <div className="mt-5 flex">
                <Button className="bg-violet-500">
                  <Icons.plusSquare className=" mr-2 h-4 w-4 shrink-0" />
                  Sponsor this Event
                </Button>
                <div className="ml-2 flex items-center justify-center">
                  <Button className="bg-violet-500">
                    <Icons.gripHorizontal className="h-4 w-4 shrink-0" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-6 flex flex-col">
            <div className="border-b-1 ml-2 mt-6 w-full border" />
            <div className="mx-4">
              <p className="mr-4 py-5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Iaculis urna id volutpat lacus laoreet. Porta non pulvinar neque
                laoreet suspendisse. Amet luctus venenatis lectus magna
                fringilla. Nisi vitae suscipit tellus mauris a. Amet aliquam id
                diam maecenas ultricies mi eget mauris. Senectus et netus et
                malesuada fames ac turpis egestas. Posuere morbi leo urna
                molestie at. Orci eu lobortis elementum nibh tellus molestie.
              </p>
              <div className="flex">
                {eventSnapshots.map((item, idx) => (
                  <div key={idx} className="relative mr-4">
                    <Image
                      src={item}
                      alt={`event snapshot ${idx}"`}
                      width={360}
                      height={246}
                      className="rounded-md object-cover"
                    />
                    <div className="absolute left-0 top-0 h-full w-full rounded-md opacity-50 dark:bg-black"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mr-6 mt-20 rounded-lg border-2 border-gray-200 p-2">
              <h1 className="my-8 ml-6 text-2xl font-bold tracking-wide">
                Featured Speakers
              </h1>
              <div className="mx-2 mb-6 flex justify-around">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <Avatar className="h-[155px] w-[155px]">
                      <AvatarImage
                        src={"/organization/avatar.png"}
                        alt="avatar image"
                      />
                      <AvatarFallback>{"GL"}</AvatarFallback>
                    </Avatar>
                    <div className="mt-6 text-xl font-bold">John Doe</div>
                    <div className="mt-1 text-sm">CEO, GitHub</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 flex items-center justify-around">
              <div className="ml-6 flex w-[300px] flex-col ">
                <h1 className="mb-1 text-2xl font-bold tracking-wide">
                  Schedule
                </h1>
                <h3 className="">
                  A representation of the event planning of the WebX Manila
                </h3>
              </div>
              <div className="flex w-[calc(100%-350px)] justify-end">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="bg-violet-300">
                    <TabsTrigger
                      value="tabs1"
                      className="bg-transparent text-violet-700"
                    >
                      TabsList1
                    </TabsTrigger>
                    <TabsTrigger
                      value="tabs2"
                      className="bg-transparent text-violet-700"
                    >
                      TabsList2
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tabs1">
                    Make changes to your account here.
                  </TabsContent>
                  <TabsContent value="tabs2">
                    Change your password here.
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="mb-2 mt-16 text-center text-3xl font-semibold">
                Current sponsorships for our event
              </h1>
              <div className="flex items-center justify-start md:justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-3">
                  {BrandSponsors.map((BrandIcon, index) => (
                    <BrandIcon
                      key={index}
                      className="mx-16 h-32 w-32 text-violet-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage
