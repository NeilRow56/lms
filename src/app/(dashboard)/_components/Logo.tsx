import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      height={72}
      width={72}
      className="rounded-full"
    />
  )
}
