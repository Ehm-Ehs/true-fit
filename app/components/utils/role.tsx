import {
  FaTasks,
  FaProjectDiagram,
  FaUsersCog,
  FaServer,
  FaTools,
  FaNetworkWired,
  FaPencilRuler,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaChartLine,
  FaShieldAlt,
  FaUserCheck,
  FaChalkboardTeacher,
  FaKeyboard,
  FaBriefcase,
} from "react-icons/fa";

export const roleMap: Record<
  string,
  {
    icon: JSX.Element;
    link: string;
  }
> = {
  "Frontend Developer": {
    icon: <FaCode />,
    link: "https://roadmap.sh/frontend",
  },
  "Backend Developer": {
    icon: <FaServer />,
    link: "https://roadmap.sh/backend",
  },
  "DevOps Engineer": {
    icon: <FaTools />,
    link: "https://roadmap.sh/devops",
  },
  "Data Scientist": {
    icon: <FaChartLine />,
    link: "https://roadmap.sh/data-scientist",
  },
  "QA Engineer": {
    icon: <FaBug />,
    link: "https://roadmap.sh/qa",
  },
  "Security Analyst": {
    icon: <FaShieldAlt />,
    link: "https://roadmap.sh/cyber-security",
  },
  "Product Manager": {
    icon: <FaTasks />,
    link: "https://roadmap.sh/product-manager",
  },
  "Project Manager": {
    icon: <FaProjectDiagram />,
    link: "https://roadmap.sh/project-management",
  },
  "UI/UX Designer": {
    icon: <FaPencilRuler />,
    link: "https://roadmap.sh/ui-ux",
  },
  "UX Researcher": {
    icon: <FaUserCheck />,
    link: "https://roadmap.sh/ui-ux",
  },
  "Technical Writer": {
    icon: <FaKeyboard />,
    link: "https://roadmap.sh/technical-writer",
  },
  "Creative Director": {
    icon: <FaPaintBrush />,
    link: "https://www.google.com/search?q=how+to+become+a+creative+director",
  },
  "Systems Architect": {
    icon: <FaNetworkWired />,
    link: "https://roadmap.sh/software-architect",
  },
  "Team Lead": {
    icon: <FaUsersCog />,
    link: "https://www.google.com/search?q=tech+team+lead+skills",
  },
  "Team Coach": {
    icon: <FaChalkboardTeacher />,
    link: "https://www.google.com/search?q=team+coach+in+tech",
  },
};
