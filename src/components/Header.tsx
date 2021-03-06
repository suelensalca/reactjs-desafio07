import { Image } from "@chakra-ui/react";
import images from '../assets/images';
import Link from "next/link";

export function Header() {
    return (
        <Link href="/">
            <Image cursor={"pointer"} p="22px 0px" src={images.logo} alt="worldtrip-logo" />
        </Link>
    )
}