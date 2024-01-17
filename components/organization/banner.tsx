import Image from "next/legacy/image"

const BannerOrganization: React.FC<{ url: string }> = ({ url }) => {
  return (
    <>
      <Image
        alt="banner of organization"
        src={`${url}`}
        width={1200}
        height={300}
        layout="responsive"
        priority={true}
      />
    </>
  )
}

export default BannerOrganization
