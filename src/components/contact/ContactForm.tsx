import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BASE_URL = import.meta.env.VITE_API_URL;

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  offerCode?: string; // optional coupon/offer code
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contact, setContact] = useState<any>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    offerCode: "",
  });

  // Fetch contact info for display (phone, email, address, hours)
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/contacts`);
        const data = await res.json();
        if (data.success) {
          setContact(data.data);
        }
      } catch (error) {
        console.error("Failed to load contact info", error);
      }
    };

    fetchContact();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // POST form to user-contact API
      const res = await fetch(`${BASE_URL}/api/usercontacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: "Message Sent",
          description: "Thank you! We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          offerCode: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-tvm-blue p-8 text-white">
            <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
            <p className="mb-8 text-blue-100">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-blue-100">{contact?.phone || "Loading..."}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-blue-100">{contact?.email || "Loading..."}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-blue-100">{contact?.address || "Loading..."}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-blue-100">
                    {contact?.workingHours?.days} : {contact?.workingHours?.time}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {contact?.socials?.map((social, index) => {
                  let svg = null;

                  switch (social.platform) {
                    case "Facebook":
                      svg = (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      );
                      break;
                    case "Twitter":
                      svg = (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      );
                      break;
                    case "Instagram":
                      svg = (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      );
                      break;
                    case "LinkedIn":
                      svg = (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      );
                      break;
                    default:
                      svg = null;
                  }

                  return svg ? (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {svg}
                    </a>
                  ) : null;
                })}
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8">
            <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Coupon/Offer Code */}
                <div className="md:col-span-2">
                  <Label htmlFor="offerCode">Coupon/Offer Code (Optional)</Label>
                  <Input
                    type="text"
                    id="offerCode"
                    name="offerCode"
                    value={formData.offerCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
