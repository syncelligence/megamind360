import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6">
          <strong>Company:</strong> Megamind360<br />
          <strong>Website:</strong> <a href="http://www.megamind360.com" className="text-brand-primary hover:underline">www.megamind360.com</a>
        </p>
        <p className="text-gray-600 mb-6">
          Please read these Terms and Conditions ("Terms") carefully before using our website, services, or enrolling in any of our training programs. By accessing or using any part of our platform, you agree to be bound by these Terms.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-6">
          By using our website or enrolling in any courses offered by Megamind360, you agree to comply with and be legally bound by these Terms and our Privacy Policy. If you do not agree, you must not use our services.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Eligibility</h2>
        <p className="text-gray-600 mb-6">
          Our services are intended for individuals who are 16 years of age or older. By using our platform, you represent and warrant that you meet this age requirement.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Course Enrollment and Access</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Enrollment is confirmed only upon receipt of full payment unless otherwise specified.</li>
          <li>Access to course materials is granted for the duration stated at the time of enrollment.</li>
          <li>Unauthorized sharing, copying, or resale of course content is strictly prohibited.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Intellectual Property</h2>
        <p className="text-gray-600 mb-6">
          All content provided by Megamind360, including course materials, videos, text, graphics, and logos, is the property of Megamind360 and protected by intellectual property laws.
        </p>
        <p className="text-gray-600 mb-6">
          You may not:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Reproduce, distribute, or republish course content.</li>
          <li>Use any content for commercial purposes without prior written consent.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">5. User Conduct</h2>
        <p className="text-gray-600 mb-6">
          Users agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Misuse the platform or interfere with its operation.</li>
          <li>Use the platform for any unlawful or unauthorized purpose.</li>
          <li>Submit any false or misleading information.</li>
        </ul>
        <p className="text-gray-600 mb-6">
          We reserve the right to suspend or terminate access for users who violate these conditions.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Payments and Refunds</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>All payments must be made in full at the time of registration unless otherwise agreed.</li>
          <li>Refunds may be issued in accordance with our Refund Policy (available on our website).</li>
          <li>Any applicable taxes are the responsibility of the user.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          Megamind360 is not liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Any indirect, incidental, or consequential damages arising from the use or inability to use our services.</li>
          <li>Technical issues or interruptions beyond our control.</li>
        </ul>
        <p className="text-gray-600 mb-6">
          We do not guarantee job placement or career outcomes from course completion.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Privacy and Data Protection</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>We do <strong>not</strong> share student data with third parties.</li>
          <li>Student information is <strong>never used for marketing purposes</strong>.</li>
          <li>For full details, please refer to our <a href="/privacy" className="text-brand-primary hover:underline">Privacy Policy</a>.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Third-Party Services</h2>
        <p className="text-gray-600 mb-6">
          Our platform may include links to third-party tools or services (e.g., payment gateways). We are not responsible for the content, policies, or practices of these services.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Modifications to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to update these Terms at any time. Changes will be posted on our website, and continued use of our services implies acceptance of the revised Terms.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Termination</h2>
        <p className="text-gray-600 mb-6">
          We may suspend or terminate access to our services at our sole discretion, with or without notice, if a user breaches these Terms.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Governing Law</h2>
        <p className="text-gray-600 mb-6">
          These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction/State/Country], without regard to its conflict of law provisions.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Contact Information</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Email:</strong> <a href="mailto:support@megamind360.com" className="text-brand-primary hover:underline">support@megamind360.com</a><br />
          <strong>Address:</strong> Gagan Avencia, Near Gera Imperium Alpha, Kharadi, Pune 411014
        </p>
      </div>
    </div>
  );
};

export default Terms; 