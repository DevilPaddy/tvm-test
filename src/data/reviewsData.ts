export type ServiceCategory =
  | "Website Development"
  | "Android App Development"
  | "Digital Marketing"
  | "Influencer Marketing";

export interface Review {
  _id?: string; 
  name: string;
  email: string;
  companyName?: string;
  serviceUsed: ServiceCategory;
  rating: number; 
  review: string;
  isApproved: boolean;
  createdAt: string;
}


export const reviews: Review[] = [
  {
    name: "Rushikesh Deshmukh",
    email: "rushikesh@nibelimited.com",
    companyName: "Nibe Limited",
    serviceUsed: "Website Development",
    rating: 5,
    review: "Thank you for your support. TVM IT team is very supportive and professional.",
    isApproved: true,
    createdAt: "2024-06-05"
  },
  {
    name: "Rushikesh Deshmukh",
    email: "rushikesh@nibelimited.com",
    companyName: "Nibe Limited",
    serviceUsed: "Website Development",
    rating: 5,
    review: "Excellent experience working with TVM IT Solutions. Highly recommended for web development.",
    isApproved: true,
    createdAt: "2024-06-06"
  },
  {
    name: "Vaibhav Dapke",
    email: "vaibhav@gmail.com",
    companyName: "",
    serviceUsed: "Digital Marketing",
    rating: 4,
    review: "They increased my followers significantly. Team is supportive and good at their work.",
    isApproved: true,
    createdAt: "2024-06-07"
  },
  {
    name: "Amit Kulkarni",
    email: "amit@startupx.com",
    companyName: "StartupX",
    serviceUsed: "Android App Development",
    rating: 5,
    review: "Very professional Android app development service. App performance and UI are excellent.",
    isApproved: false,
    createdAt: "2024-06-08"
  },
  {
    name: "Sneha Patil",
    email: "sneha@brandify.com",
    companyName: "Brandify",
    serviceUsed: "Influencer Marketing",
    rating: 4,
    review: "Great influencer campaign management. Good reach and engagement.",
    isApproved: true,
    createdAt: "2024-06-09"
  }
];


export const reviewCategories: (ServiceCategory | "All")[] = [
  "All",
  "Website Development",
  "Android App Development",
  "Digital Marketing",
  "Influencer Marketing"
];
