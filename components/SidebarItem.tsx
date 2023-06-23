
import Link from "next/link";
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";

interface SidebarItemProps{
  icon: IconType;
  label: string;
  active?: boolean;
  herf: string;
}



const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  herf,
}) => {
  return (
    <Link 
    href={herf}
    className={twMerge(``)}>

    </Link>
  )
}

export default SidebarItem