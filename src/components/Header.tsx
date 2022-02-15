import { Image } from "@chakra-ui/react";
import images from '../assets/images';

export function Header() {
    return (
        <a href="/">
            <Image p="22px 0px" src={images.logo} />
        </a>
    )
}