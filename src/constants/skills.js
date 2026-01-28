import { FaReact, FaJs, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiTypescript, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  // { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 95 },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
  { name: 'Redux', icon: <SiRedux />, level: 85 },
  { name: 'GitHub', icon: <FaGithub />, level: 88 },
  { name: 'GitLab', icon: <FaGitlab />, level: 80 },
  // { name: 'Microsoft Office', icon: <SiMicrosoftoffice />, level: 75 },
];

export default skills;