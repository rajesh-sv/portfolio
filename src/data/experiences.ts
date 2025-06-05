export type experienceType = {
  id: string;
  company: string;
  jobRole: string;
  time: string;
  location: string;
  points: string[];
};

export const experiences: experienceType[] = [
  {
    id: "1",
    company: "Deloitte US India",
    jobRole: "Data Engineer",
    time: "Sep 2022 - Present",
    location: "Bengaluru, India",
    points: [
      "Built an internal Python tool to help the team compare and analyze large hierarchical datasets from EDM and ERP systems with different formats (child parent vs level based). Engineered a tree-diff algorithm to reconstruct hierarchies, detect structural mismatches, rollup issues, and generate Excel reports - reducing hours of manual work to under a second and streamlining future comparisons.",
      "Automated a repetitive documentation task using pyautogui, enabling the team to extract relevant content from Oracle documentation and paste it into Excel for client-ready reports. Replaced a manual, tedious process with a reliable script, improving turnaround time and easing team workload during client engagements.",
      "Engineered a Python script to automate OBIEE report modifications by directly editing the underlying XML structure, eliminating the need for repetitive manual UI tasks (e.g., styling individual column headers). Reduced multi minute operations to seconds of execution, accelerating report customization in a legacy system.",
      `Developed a custom JavaScript utility to automate the selection of 1000s of security assignments within a web interface lacking a "select all" option. Empowered the security team from repetitive manual clicks, delivering a significant productivity boost and streamlining a previously time-consuming process.`,
      "Designed and implemented data integration processes using Oracle Fusion Data Intelligence (FDI), modelling data from diverse sources (terraform, ERP, EDM) to create a unified semantic model for reporting.",
      "Applied performance optimization techniques to drastically reduce report/application load times, achieving improvements from 6 minutes down to 8 seconds.",
      "Consistently delivered high quality technical solutions for diverse clients, earning Applause and Outstanding Performance Awards, and receiving a Special Shoutout in Deloitte’s Data Intelligence newsletter.",
    ],
  },
].reverse();
