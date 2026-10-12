"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiVercel,
  SiRender,
  SiRailway,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiGooglegemini,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { TbApi, TbBrain, TbRobot, TbBrandVscode, TbCode } from "react-icons/tb";

const iconMap: Record<string, React.ElementType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiVercel,
  SiRender,
  SiRailway,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiGooglegemini,
  RiOpenaiFill,
  TbApi,
  TbBrain,
  TbRobot,
  TbBrandVscode,
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "w-5 h-5" }) => {
  const IconComponent = iconMap[name] || TbCode;
  return <IconComponent className={className} />;
};
