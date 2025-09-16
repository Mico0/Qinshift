export interface Job {
  id: number;
  // Mandatory to be shown in the posting
  companyName: string;
  companyLogo: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: WorkType;
  // Show the below in the details expanding element
  location: string;
  country: string;
  qualifications: string;
  description: string;
  isApplied: boolean;
  //Shown in the company details page + companyName and companyLogo
  companyAddress: string;
  companyIndustry: string;
  companyWebsite: string;
}

export enum WorkType {
  REMOTE = 'Remote',
  ON_SITE = 'On-Site',
  HYBRID = 'Hybrid',
}
