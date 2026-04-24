import { cn } from "@/lib/utils";
import {
  BrainIcon,
  CodeIcon,
  DatabaseIcon,
  Edit3Icon,
  EyeIcon,
  FileJson2Icon,
  GlobeIcon,
  Link2Icon,
  MouseIcon,
  MousePointerClick,
  SendIcon,
  TextIcon,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Launch browser",
      description:
        "Initiates a browser instance to begin the web scraping process, enabling interaction with web pages.",
      icon: <GlobeIcon className="stroke-[#06b6d4]" />,
      hoverChipClassName: "group-hover/feature:bg-[#06b6d4]",
    },
    {
      title: "Page to HTML",
      description:
        "Extracts the complete HTML content of the current page for detailed analysis and processing.",
      icon: <CodeIcon className="stroke-[#4de082]" />,
      hoverChipClassName: "group-hover/feature:bg-[#4de082]",
    },
    {
      title: "Extract text from element",
      description:
        "Retrieves the text content from a specified HTML element using a given CSS selector.",
      icon: <TextIcon className="stroke-[#4de082]" />,
      hoverChipClassName: "group-hover/feature:bg-[#4de082]",
    },
    {
      title: "Fill input",
      description:
        "Automatically fills a specified input field with a desired value, emulating user input.",
      icon: <Edit3Icon className="stroke-[#95d3ba]" />,
      hoverChipClassName: "group-hover/feature:bg-[#95d3ba]",
    },
    {
      title: "Click Element",
      description:
        "Simulates a click action on a specified HTML element, triggering any associated events or navigation.",
      icon: <MousePointerClick className="stroke-[#95d3ba]" />,
      hoverChipClassName: "group-hover/feature:bg-[#95d3ba]",
    },
    {
      title: "Scroll to element",
      description:
        "Scrolls to a specified element on the page, emulating user behavior for dynamic content loading.",
      icon: <MouseIcon className="stroke-[#06b6d4]" />,
      hoverChipClassName: "group-hover/feature:bg-[#06b6d4]",
    },
    {
      title: "Wait for element",
      description:
        "Pauses the workflow until a specified element becomes visible or hidden on the page.",
      icon: <EyeIcon className="stroke-[#4de082]" />,
      hoverChipClassName: "group-hover/feature:bg-[#4de082]",
    },
    {
      title: "Deliver via webhook",
      description:
        "Sends the scraped data to an external API endpoint through a POST request for further processing or storage.",
      icon: <SendIcon className="stroke-[#95d3ba]" />,
      hoverChipClassName: "group-hover/feature:bg-[#95d3ba]",
    },
    {
      title: "Extract data via AI",
      description:
        "Uses AI to parse HTML content and extract structured data based on a custom prompt, returning JSON output.",
      icon: <BrainIcon className="stroke-[#06b6d4]" />,
      hoverChipClassName: "group-hover/feature:bg-[#06b6d4]",
    },
    {
      title: "Read JSON",
      description:
        "Reads and retrieves a specific key or property from a JSON object for use in workflows.",
      icon: <FileJson2Icon className="stroke-[#4de082]" />,
      hoverChipClassName: "group-hover/feature:bg-[#4de082]",
    },
    {
      title: "Build JSON",
      description:
        "Adds or updates data within an existing JSON object or creates a new one with the specified properties.",
      icon: <DatabaseIcon className="stroke-[#95d3ba]" />,
      hoverChipClassName: "group-hover/feature:bg-[#95d3ba]",
    },
    {
      title: "Navigate to URL",
      description:
        "Navigates to a specified URL, loading the desired web page for scraping or interaction.",
      icon: <Link2Icon className="stroke-[#06b6d4]" />,
      hoverChipClassName: "group-hover/feature:bg-[#06b6d4]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          index={index}
          hoverChipClassName={feature.hoverChipClassName as string}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  hoverChipClassName,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  hoverChipClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/5",
        (index === 0 || index === 4 || index === 8) && "lg:border-l border-white/5",
        index < 8 && "lg:border-b border-white/5"
      )}
    >
      {index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#4de082]/5 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#4de082]/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#89938d]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 transition-all duration-200 origin-center",
            hoverChipClassName
          )}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#e1e3e0]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#89938d] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
