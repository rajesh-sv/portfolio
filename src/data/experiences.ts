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
      "Delivered high-quality work for diverse clients, thus winning Client Appreciation and Applause Awards totaling Rs 1.5 lakhs. Also received a special Shoutout in Deloitte’s Data Intelligence newsletter",
      "Collaborated with business stakeholders to clarify requirements and ensure successful implementation",
      "Developed and maintained financial models within Oracle Fusion Analytics Warehouse (FAW), enabling data-driven decision-making for budgeting, forecasting, and financial planning",
      "Leveraged data visualization skills to create interactive dashboards and reports in Oracle Analytics Cloud (OAC), providing actionable insights to the stakeholders.",
      "Boosted report loading times significantly, from avg. 6min to avg. 8s, through innovative optimization techniques",
      "Ensured data integrity and security within Oracle FAW and OAC by implementing best practices for data governance and access control",
      "Automated repetitive tasks using Python scripts, achieving daily time savings and increasing productivity",
    ],
  },
];
