
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 lg:px-12 xl:px-24 py-16">
      <h1 className="text-4xl font-semibold text-black mb-4">
        Privacy Policy – Zahrix Electromechanical Services
      </h1>
      <p className="text-md text-black mb-8">
        <strong>Effective Date: 12/07/25 </strong>
      </p>

      <section className="space-y-6 text-gray-800 leading-relaxed">
        <div>
          <h2 className="text-4xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-2xl text-black">
            At ZAHRIX Electromechanical Services, we value your privacy and are
            committed to protecting your personal data. This Privacy Policy
            outlines our practices regarding the collection, use, and storage of
            your information.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-2 text-black">
            Data Storage and Security
          </h2>
          <p className="text-2xl text-black">
            At ZAHRIX Electromechanical Services, our commitment to protecting
            your personal data and ensuring the security of your information is
            paramount. We understand the importance of maintaining the trust and
            confidence of our customers, and we adhere to the highest standards
            of data protection and security. When you engage with us, whether
            through our website, phone, or in-person interactions, we collect
            various types of information, including your name, email address,
            phone number, and details about the services you request, such as
            CCTV installation, electrical installation, and BMS services. This
            information is crucial for providing and managing our services
            effectively, responding to your inquiries and continuosly improving
            our customer experience to meet your evolving needs. To ensure the
            confidentiality, integrity and availability of your data, we
            implement robust security measures, including advanced encryption
            protocols , secure data storage solutions and strict access
            controls. Our teram is trained to handle your information with care,
            and we limit access your data to authorized personnal only. ensuring
            that your information is protected against unauthorized access, loss
            or damage. Furthermore you have certain rights regarding your
            personal data including access to your data , correct or delete your
            information, and we are dedicated to respecting these rights in
            accordance with applicable laws and regulations.if you have any
            questions or concerns about our privacy practices, would like to
            request access your data , or wish to exercise any of your rights ,
            please do not hesitate to contact us through the channel provided on
            our website. We are committed to transparency and will provide you
            with the neccessary assistance and information. Additionaly, we
            reserve the right to update this privacy policy periodically to
            reflect changes in our practices, technologies, or legal
            requirements, and we encourage you to review this page regularly to
            stay informed about how we protect your data to ensure that you are
            aware of any changes that may affect you.
          </p>
        </div>
        <Link
            to="/quote"
            className="inline-flex items-center px-6 py-3 bg-[#4B69A9] text-white font-medium hover:bg-blue-700 transition shadow"
          >
        
            Contact Us
          </Link>
      </section>
    </div>
  );
}
