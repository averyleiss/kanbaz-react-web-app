import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons({ className }: { className?: string }) {
  return (
    <div className={`d-flex align-items-center ${className || ""}`}>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}