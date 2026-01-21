
import { useEffect } from "react";
import PageLayout from "@/components/common/PageLayout";
import JobsHero from "@/components/jobs/JobsHero";
import JobListings from "@/components/jobs/JobListings";
import ApplicationForm from "@/components/jobs/ApplicationForm";
import { Toaster } from "@/components/ui/toaster";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const JobsPage = () => {
  useEffect(() => {
    // Check if Supabase connection is working
    const checkSupabaseConnection = async () => {
      try {
        const { data, error } = await supabase.from('contact_submissions').select('id').limit(1);
        if (error) {
          console.error("Supabase connection error:", error);
        } else {
          console.log("Supabase connection successful");
        }
      } catch (err) {
        console.error("Failed to connect to Supabase:", err);
      }
    };

    checkSupabaseConnection();
  }, []);

  return (
    <PageLayout>
      <JobsHero />
      <JobListings />
      <ApplicationForm />
      <Toaster />
    </PageLayout>
  );
};

export default JobsPage;
