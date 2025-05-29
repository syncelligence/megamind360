import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Privacy Policy – Megamind360</h1>
        <p className="text-gray-600 mb-6">
          At Megamind360, we are committed to protecting your privacy. Our core values ensure that your personal information, especially student data, is handled with the utmost care and confidentiality.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>No Data Sharing:</strong> We do not share student data with any third parties under any circumstances.</li>
          <li><strong>No Marketing Use:</strong> Student data is never used for marketing, promotional campaigns, or advertisements.</li>
          <li><strong>Data Collection:</strong> Only minimal and necessary data is collected for course enrollment, communication, and certification.</li>
          <li><strong>Secure Storage:</strong> All data is stored on secure, encrypted systems with restricted access.</li>
          <li><strong>No Sale of Data:</strong> We do not sell or rent student information to anyone.</li>
          <li><strong>User Control:</strong> Students can access, update, or request deletion of their personal data at any time.</li>
          <li><strong>Compliance:</strong> We comply with all relevant data protection laws and regulations.</li>
          <li><strong>Third-Party Tools:</strong> Any third-party tools used (e.g., payment gateways) are vetted for compliance with privacy standards.</li>
          <li><strong>Cookies:</strong> Our website uses minimal cookies, only for essential functionality and performance tracking.</li>
          <li><strong>Policy Updates:</strong> We may update this policy periodically and will notify users of any significant changes.</li>
        </ol>
      </div>
    </div>
  );
};

export default Privacy; 