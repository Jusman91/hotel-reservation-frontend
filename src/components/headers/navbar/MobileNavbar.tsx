import { Drawer } from "antd"
import List from "./List"
import { IToggleButton } from "@/types"
import Button from "@/components/elements/Button"
import CloseIcon from "./CloseIcon"

const MobileNavbar = ({isOpen, onClick}: IToggleButton) => {
  return (
    <Drawer
      style={{
        background: '#1e293b',
      }}
      closeIcon={CloseIcon()}
      width={'250px'}
      placement="right"
      onClose={onClick}
      open={isOpen}
    >
      <List mobile/>
      <Button
        type="primary"
        className="bg-teal-700 w-full mt-5">
          Login
      </Button>
    </Drawer>
  )
}

export default MobileNavbar