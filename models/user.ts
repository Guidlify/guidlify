import { prisma } from "@/lib/prisma";

export type ProfileProps = string | undefined;

export async function getUserProfile(uid: ProfileProps) {
    const user = await prisma.users.findFirst({
        include: {
            profiles: {
                include: {
                    countries: true
                }
            },
        },
        where: {
            id: uid
        }
    })
    return user
}