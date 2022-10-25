import Image from "next/image"
import Link from "next/link"

interface Props {
    text: string
}
const Header = ({ text }: Props) => {

    return (
        <div className="header">
            <Link href={'/'}>
                <Image
                    src={`https://gochecklists.app/images/home.svg`}
                    width={60}
                    height={60}
                    alt={'Home'}
                ></Image>
            </Link>
            <h1>{text}</h1>
            <Link href={'work-in-progress'}>
                <Image
                    src={`https://gochecklists.app/images/settings.svg`}
                    width={60}
                    height={60}
                    alt={'Home'}
                ></Image>
            </Link>
        </div >
    )
}

export default Header