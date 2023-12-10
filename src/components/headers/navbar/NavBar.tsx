import Logo from "./Logo";
import List from "./List";
import MobileNavbar from "./MobileNavbar";
import { useToggle } from "@/hooks/toggle";
import HbgMenu from "./HbgMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <>
      <Logo/>
      <div className="hidden md:block">
        <List/>
      </div>
      <HbgMenu onClick={() => setIsOpen(true)} />
      <MobileNavbar
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
      </>
  )
}

export default NavBar