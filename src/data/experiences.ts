export type experienceType = {
  company: string;
  jobRole: string;
  time: string;
  location: string;
  points: string[];
};

export const experiences: experienceType[] = [
  {
    company: "Deloitte US India",
    jobRole: "DC Analyst",
    time: "Sep 2022 - Present",
    location: "Bengaluru, India",
    points: [
      "Delivered high-quality work for diverse clients, thus winning Client Appreciation and Applause Awards totaling Rs 1.5 lakhs. Also received a Special Shoutout in Deloitte’s Data Intelligence newsletter",
      "Collaborated with business stakeholders to clarify requirements and upto 100+ user stories",
      "Designed and maintained financial data models within Oracle Fusion Analytics Warehouse (FAW), enabling data-driven decision-making for $3 billion in spend data",
      "Leveraged data visualization skills to create 25+ interactive dashboards and reports in Oracle Analytics Cloud (OAC) across various clients, providing actionable insights to the stakeholders",
      "Boosted report loading times significantly, from avg. 6min to avg. 8s, through optimization techniques",
      "Automated repetitive tasks using Python scripts, increasing productivity of the team by 3x",
      "Implemented test scripts to validate and ensure the data integrity of dashboards",
    ],
  },
];
