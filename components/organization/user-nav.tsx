import Image from "next/legacy/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "../icons"

export function UserNav({ organization = true }: { organization?: boolean }) {
  //   const choice = userData?.username || email // username is much better for finding avatar fallback name
  //   const shortName = choice
  //     .replace(/[^a-zA-Z]/g, '') // Remove non-alphabet characters
  //     .slice(0, 2) // Take the first two letters
  //     .toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={"" || "/organization/profile-photo.svg"}
              alt="avatar image"
            />
            <AvatarFallback>{"GL"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 dark:bg-black"
        align="end"
        forceMount
      >
        {organization ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col pt-2">
                <p className="text-sm font-medium leading-none">
                  Personal Account
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Image
                  alt="pic"
                  src={"/organization/avatar.png"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <div className="ml-2">Shadcn Webxguy</div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col pt-2">
                  <p className="text-sm font-medium leading-none">
                    Organizations
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Image
                  alt="pic"
                  src={"/organization/webxguild.png"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <div className="ml-2">WebX Guild</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Image
                  alt="pic"
                  src={"/organization/webxdao.png"}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <div className="ml-2">Blackpink Group</div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
              <Icons.plusCircle className="mr-2 h-5 w-5 shrink-0" />
              Create Organization
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col pt-2">
                <p className="text-sm font-medium leading-none">My Account</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.user className="mr-2 h-4 w-4 shrink-0" />
                Profiles
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.creditCard className="mr-2 h-4 w-4 shrink-0" />
                Billing
                <DropdownMenuShortcut>⇧⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.settings className="mr-2 h-4 w-4 shrink-0" />
                Settings
                <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.keyboard className="mr-2 h-4 w-4 shrink-0" />
                Keyboard Shortcuts
                <DropdownMenuShortcut>⇧⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.users className="mr-2 h-4 w-4 shrink-0" />
                Team
                <DropdownMenuShortcut>⇧⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.creditCard className="mr-2 h-4 w-4 shrink-0" />
                Invite users
                <Icons.chevronRight className="ml-auto mr-1 h-4 w-4 shrink-0 text-gray-700" />
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.users className="mr-2 h-4 w-4 shrink-0" />
                New team
                <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.gitHub className="mr-2 h-4 w-4 shrink-0" />
                GitHub
                <DropdownMenuShortcut>⇧⌘G</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.creditCard className="mr-2 h-4 w-4 shrink-0" />
                Support
                <Icons.chevronRight className="ml-auto mr-1 h-4 w-4 shrink-0 text-gray-700" />
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-2 text-black dark:text-gray-200">
                <Icons.cloud className="mr-2 h-4 w-4 shrink-0" />
                API
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer p-3 text-black dark:text-gray-200">
              <Icons.logOut className="mr-2 h-4 w-4 shrink-0" />
              Log Out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
