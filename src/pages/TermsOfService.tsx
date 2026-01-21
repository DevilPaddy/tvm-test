
import PageLayout from "@/components/common/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout
      title="Terms of Service | TVM IT Solutions"
      description="TVM IT Solutions terms of service - rules and guidelines for using our services and website."
      keywords="terms of service, terms and conditions, legal terms, TVM IT Solutions"
      canonicalUrl="https://tvmitsolution.com/terms-of-service"
    >
      <div className="container-custom max-w-4xl py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-tvm-darkBlue mb-8">Terms of Service</h1>
        <div className="text-tvm-darkGray prose prose-headings:text-tvm-darkBlue prose-headings:font-semibold prose-a:text-tvm-blue max-w-none">
          <p className="text-lg font-medium mb-6">Effective Date: April 29, 2025</p>
          
          <h2 className="text-2xl mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website and services of TVM IT Solutions ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">2. Services Description</h2>
          <p>
            TVM IT Solutions provides IT services including but not limited to web development, mobile application development, digital marketing, SEO services, and IT maintenance. Our services are subject to change without notice.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">3. User Obligations</h2>
          <p>
            When using our services, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information for all required fields</li>
            <li>Maintain the security of your account login information</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not engage in activities that could harm our website, services, or infrastructure</li>
            <li>Not interfere with other users' access to or use of our services</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, and software, are owned by TVM IT Solutions, our licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="mt-3">
            For client projects, intellectual property ownership is determined by the specific terms outlined in each project contract. Unless explicitly stated otherwise in a written agreement:
          </p>
          <ul>
            <li>Clients retain ownership of content they provide</li>
            <li>TVM IT Solutions retains ownership of pre-existing code, tools, and methodologies</li>
            <li>Custom code developed for a client transfers to the client upon full payment</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">5. Payment and Billing</h2>
          <p>
            Payment terms are as follows:
          </p>
          <ul>
            <li>Prices for our services are subject to change with notice</li>
            <li>Initial deposits may be required before work begins</li>
            <li>Payment schedules will be outlined in project proposals or contracts</li>
            <li>Late payments may incur a fee and/or result in work being paused</li>
            <li>Refunds are issued at the discretion of TVM IT Solutions and depend on the stage of project completion</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">6. Project Delivery and Acceptance</h2>
          <p>
            Project delivery timelines:
          </p>
          <ul>
            <li>Estimated timelines are provided in good faith but are not guaranteed</li>
            <li>Delays may occur due to changes in project scope, client feedback, or technical challenges</li>
            <li>Clients are expected to provide feedback and required content in a timely manner</li>
            <li>Projects are considered accepted if no feedback is received within 14 days of delivery</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">7. Maintenance and Support</h2>
          <p>
            After project completion:
          </p>
          <ul>
            <li>Support for fixing bugs is provided for 30 days at no additional cost</li>
            <li>Ongoing maintenance and support are available for an additional fee</li>
            <li>Response times vary based on the severity of the issue and support package selected</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">8. Limitation of Liability</h2>
          <p>
            TVM IT Solutions shall not be liable for:
          </p>
          <ul>
            <li>Indirect, incidental, special, consequential, or punitive damages</li>
            <li>Data loss or business interruption</li>
            <li>Issues arising from client-provided content or third-party services</li>
            <li>Damages exceeding the amount paid by the client for the services in question</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">9. Termination</h2>
          <p>
            Either party may terminate the service agreement:
          </p>
          <ul>
            <li>With written notice as specified in the project contract</li>
            <li>Immediately if the other party breaches a material term of this agreement</li>
            <li>In case of termination, the client is responsible for payment for all completed work</li>
          </ul>
          
          <h2 className="text-2xl mt-8 mb-4">10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of Maharashtra, India, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective when posted on this page with a new effective date. Your continued use of our services after such changes constitutes your acceptance of the new Terms of Service.
          </p>
          
          <h2 className="text-2xl mt-8 mb-4">12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>TVM IT Solutions</strong><br />
            Email: futuretech@tvmitsolution.com<br />
            Phone: +91 9309917269<br />
            Address: Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India<br />
            Website: <a href="https://tvmitsolution.com" className="text-tvm-blue hover:underline">https://tvmitsolution.com</a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
