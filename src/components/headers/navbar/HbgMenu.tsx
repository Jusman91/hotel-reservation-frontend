import Button from "@/components/elements/Button"
import { IProps } from "@/types"
import { MdMenuOpen } from "react-icons/md"

const HbgMenu = ({onClick}: IProps) => {
  return (
    <Button
        icon={<MdMenuOpen/>}
        onClick={onClick}
        className="block md:hidden text-3xl text-teal-700 hover:text-teal-500 duration-200 border-none p-0">
      </Button>
  )
}

export default HbgMenu