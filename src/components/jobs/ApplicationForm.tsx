
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { jobCategories, experienceLevels } from "@/data/jobListings";
import { Upload, Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  jobCategory: z.string().min(1, "Please select a job category"),
  experienceLevel: z.string().min(1, "Please select your experience level"),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  message: z.string().min(10, "Cover letter must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      jobCategory: "",
      experienceLevel: "",
      portfolio: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!resumeFile) {
      toast({
        title: "Resume is required",
        description: "Please upload your resume before submitting",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();

      // append form fields
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // append resume file
      formData.append("resume", resumeFile);

      const res = await fetch("/api/job-application", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
      setResumeFile(null);

      toast({
        title: "Application submitted!",
        description: "We'll review your application and contact you soon.",
      });

    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }

      setResumeFile(file);
    }
  };

  if (submitted) {
    return (
      <div id="application-form" className="bg-white py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to TVM IT Solutions. We've received your application and will review it shortly.
              Our team will contact you if your qualifications match our requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => {
                setSubmitted(false);
                form.reset();
                setResumeFile(null);
              }}>
                Submit Another Application
              </Button>
              <Button variant="outline" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                Back to Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="application-form" className="bg-white py-20">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the next step in your career. Fill out the form below to apply for a position at TVM IT Solutions.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {jobCategories.filter(cat => cat !== "All Categories").map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {experienceLevels.filter(level => level !== "All Levels").map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourportfolio.com" {...field} />
                      </FormControl>
                      <FormDescription>Share a link to your portfolio or LinkedIn profile</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="md:col-span-2">
                  <div className="mb-6">
                    <FormLabel className="block mb-2">Upload Resume</FormLabel>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <input
                        type="file"
                        id="resume"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="resume"
                        className="cursor-pointer flex flex-col items-center justify-center"
                      >
                        <Upload size={36} className="text-gray-400 mb-2" />
                        <span className="text-gray-600 mb-1">
                          {resumeFile ? resumeFile.name : "Click to upload your resume"}
                        </span>
                        <span className="text-xs text-gray-400">
                          PDF or Word documents only (max 5MB)
                        </span>
                      </label>
                    </div>
                    {resumeFile && (
                      <p className="text-sm text-green-600 mt-2 flex items-center">
                        <CheckCircle2 size={14} className="mr-1" />
                        {resumeFile.name} ({Math.round(resumeFile.size / 1024)} KB)
                      </p>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself and why you're interested in this position..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <Button type="submit" disabled={isSubmitting} className="px-8">
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" /> Submit Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
