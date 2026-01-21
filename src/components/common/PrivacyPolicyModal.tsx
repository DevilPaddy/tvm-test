
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { usePrivacyPolicy } from "@/context/PrivacyPolicyContext";

const PrivacyPolicyModal = () => {
  const { isPrivacyPolicyOpen, closePrivacyPolicy } = usePrivacyPolicy();

  return (
    <Dialog open={isPrivacyPolicyOpen} onOpenChange={closePrivacyPolicy}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sticky top-0 bg-white z-10 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-tvm-darkBlue">Privacy Policy</DialogTitle>
            <Button variant="ghost" size="icon" onClick={closePrivacyPolicy}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>Effective Date: April 29, 2025</DialogDescription>
        </DialogHeader>

        <div className="text-tvm-darkGray prose prose-headings:text-tvm-darkBlue prose-headings:font-semibold prose-a:text-tvm-blue max-w-none">
          <h2 className="text-xl font-medium mt-6 mb-3">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Personal Information:</strong> Name, email address, phone number, company name, billing information.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device type, operating system, and usage data.</li>
            <li><strong>Marketing and Analytics Data:</strong> Cookie data, page views, click data, and form submissions.</li>
            <li><strong>Client Project Data:</strong> Information shared with us for development, marketing, or SEO purposes.</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and manage our services (web development, app development, digital marketing, SEO, software development)</li>
            <li>Communicate with you about inquiries, quotes, or projects</li>
            <li>Improve our website and services</li>
            <li>Analyze user behavior to enhance user experience and marketing strategies</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Third-party service providers (e.g., hosting, analytics, advertising platforms)</li>
            <li>Legal authorities if required by law</li>
            <li>Business partners involved in project execution (with confidentiality agreements)</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">4. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Site performance and analytics</li>
            <li>Personalized marketing campaigns</li>
            <li>User experience improvements</li>
          </ul>
          <p>You may manage cookie preferences through your browser settings or via our cookie consent banner.</p>
          
          <h2 className="text-xl font-medium mt-6 mb-3">5. Data Security</h2>
          <p>We implement industry-standard security measures, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>SSL encryption</li>
            <li>Secure development practices</li>
            <li>Access controls and authentication for client portals</li>
            <li>Regular audits and monitoring</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">6. Client and Project Confidentiality</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All data shared for development or marketing projects is treated as confidential.</li>
            <li>Non-Disclosure Agreements (NDAs) are signed upon request.</li>
            <li>We protect client intellectual property with secure storage and limited access.</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access or correct your personal data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>File a complaint with a data protection authority (if applicable)</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">8. Third-Party Links</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Our website may contain links to other websites.</li>
            <li>We are not responsible for their content or privacy practices.</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">9. Changes to This Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We may update this policy from time to time.</li>
            <li>Updates will be posted on this page with a new effective date.</li>
          </ul>
          
          <h2 className="text-xl font-medium mt-6 mb-3">10. Contact Us</h2>
          <p>If you have any questions or concerns about this policy, contact us at:</p>
          <p>
            <strong>TVM IT Solutions</strong><br />
            Email: futuretech@tvmitsolution.com<br />
            Phone: +91 9309917269<br />
            Website: <a href="https://tvmitsolution.com" className="text-tvm-blue hover:underline">https://tvmitsolution.com</a>
          </p>
        </div>
        
        <DialogFooter className="sticky bottom-0 bg-white pt-4 z-10">
          <Button onClick={closePrivacyPolicy}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
