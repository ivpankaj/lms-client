import { FaChalkboard } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoBookOutline, IoGiftOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import { TbBrandOpenai } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";

export const options = [
  { label: "Home", value: "/dashboard", icon: IoHomeOutline },
  { label: "Learn", value: "/dashboard/learn", icon: IoBookOutline },
  { label: "Classroom", value: "/dashboard/classroom", icon: FaChalkboard },
  { label: "Quiz", value: "/dashboard/quiz", icon: MdOutlineVideoSettings },
  { label: "Course (FSD)", value: "/home/fsd", icon: MdOutlineVideoSettings},
  { label: "Course (DMB)", value: "/home/dm", icon: MdOutlineVideoSettings},
  { label: "Course (DMA)", value: "/home/dma", icon: MdOutlineVideoSettings},
  { label: "Interview", value: "/home/interview", icon: MdOutlineVideoSettings },
  { label: "Projects", value: "/dashboard/projects", icon: GoProject },
  { label: "Notes", value: "/dashboard/notes", icon: CgNotes },
  { label: "Refer and Earn", value: "/dashboard/referearn", icon: IoGiftOutline },
  { label: "Seekhle AI", value: "/dashboard/learnai", icon: TbBrandOpenai },
];