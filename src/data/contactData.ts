export interface SocialLink {
  platform: "Facebook" | "Twitter" | "Instagram" | "LinkedIn";
  url: string;
}

export interface WorkingHours {
  days: string;
  time: string;
}

export interface ContactData {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  workingHours: WorkingHours;
  socials: SocialLink[];
}


export const contactData: ContactData = {
  companyName: "TVM IT Solutions",

  phone: "+91 9309917269",

  email: "futuretech@tvmit solution.com",

  address:
    "Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India",

  workingHours: {
    days: "Mon - Fri",
    time: "9:00 AM - 6:00 PM"
  },

  socials: [
    {
      platform: "Facebook",
      url: "https://facebook.com/tvmit"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/tvmit"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/tvmit"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/tvmit"
    }
  ]
};
