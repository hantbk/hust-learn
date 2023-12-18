"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcTabletAndroid,
  FcMultipleDevices,
  FcSurvey,
  FcStatistics,
  FcMindMap,
  FcSportsMode,
  FcCommandLine,
  FcGraduationCap
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Data Science": FcSurvey,
  "Data Analytics": FcStatistics,
  "Machine Learning": FcSportsMode,
  "Deep Learning": FcMindMap,
  "Computer Science": FcMultipleDevices,
  "Mobile Development": FcTabletAndroid,
  "Web Development": FcEngineering,
    "Game Development": FcCommandLine,
    "Software Engineering": FcGraduationCap,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}