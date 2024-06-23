import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen px-5 py-6 mx-auto xl:px-24 lg:px-8">
      {" "}
      <main>
        <section className="mx-auto container mt-10 font-medium">
          <header className="">
            <h1 className="text-5xl font-bold">
              Privacy Policy<span className="text-primary">.</span>
            </h1>
          </header>{" "}
          <hr className="hidden lg:block my-1" />
        </section>{" "}
        <div className="container mx-auto my-8 font-medium">
          <div className="w-full flex justify-start my-4 text-start items-center">
            <h2 className="font-bold italic text-lg">
              Last Updated: 25th January, 2024.
            </h2>
          </div>{" "}
          <div className="w-full flex justify-center text-start items-center">
            <p>
              Welcome to Daily View (&quot;us,&quot; &quot;we,&quot; or
              &quot;our&quot;). This Privacy Policy outlines the principles and
              procedures governing the collection, use, and disclosure of your
              information when you engage with our Service. We are committed to
              safeguarding your privacy rights and ensuring compliance with
              applicable laws.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>{" "}
            <ul className="list-disc ml-8">
              <li>
                Account: A unique profile created for you to access our Service
                or specific sections of it.
              </li>{" "}
              <li>
                Business: In the context of CCPA, it refers to the legal entity
                (Company) collecting consumers&quot; personal information.
              </li>{" "}
              <li>
                Consumer: In terms of CCPA, it denotes a natural person who is a
                California resident.
              </li>{" "}
              <li>
                Cookies: Small files placed on your device by a website, storing
                your browsing history and more.
              </li>{" "}
              <li>Country: Refers to Nigeria.</li>{" "}
              <li>
                Data Controller: The legal entity determining the purposes and
                means of processing Personal Data.
              </li>{" "}
              <li>
                Device: Any tool enabling access to our Service, such as a
                computer, cellphone, or tablet.
              </li>{" "}
              <li>
                Do Not Track (DNT): A concept promoting user control over online
                activity tracking.
              </li>{" "}
              <li>
                Personal Data: Information related to an identified or
                identifiable individual.
              </li>{" "}
              <li>
                Sale: In CCPA, it encompasses various forms of transferring
                Personal Information for valuable consideration.
              </li>{" "}
              <li>Service: Refers to Daily View website.</li>{" "}
              <li>
                Service Provider: A party processing data on behalf of the
                Company.
              </li>
            </ul>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">
              2. Information We Collect
            </h2>{" "}
            <p>
              We may collect personal information, including but not limited to:
            </p>{" "}
            <ul className="list-disc ml-8">
              <li>Name</li> <li>Email</li> <li>Usage data</li>
            </ul>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">
              3. How We Use Your Information
            </h2>{" "}
            <p>
              Your personal information may be used for the following purposes:
            </p>{" "}
            <ul className="list-disc ml-8">
              <li>To provide and maintain our services</li>{" "}
              <li>To notify you about changes to our services</li>{" "}
              <li>To provide customer support</li>{" "}
              <li>
                To gather analysis or valuable information to improve our
                services
              </li>
            </ul>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">4. Security</h2>{" "}
            <p>
              We prioritize the security of your personal information but
              remember that no method of transmission over the internet or
              electronic storage is 100% secure. While we strive to use
              commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">
              5. Disclosure of Your Personal Data
            </h2>{" "}
            <p>
              We disclose Personal Data in specific situations such as business
              transactions, law enforcement requests, and other legal
              obligations.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">6. GDPR Privacy</h2>{" "}
            <p className="mb-1">
              <b>Legal Basis:</b> Processing Personal Data is based on consent,
              performance of contracts, legal obligations, vital interests,
              public interests, and legitimate interests.
            </p>{" "}
            <p>
              <b>GDPR Data Protection Rights:</b> You can access, correct,
              object to processing, request erasure, and withdraw consent.
              Contact us for assistance.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">7. CCPA Privacy</h2>{" "}
            <p className="mb-1">
              <b>Your Rights under CCPA:</b> You have rights to notice, access,
              opt-out, know, and delete your Personal Data.
            </p>{" "}
            <p>
              <b>“Do Not Sell My Personal Information”:</b> We do not sell
              personal information. To opt out, follow instructions on our
              website.
            </p>{" "}
            <p>
              <b>“Do Not Track” Policy, California Privacy Rights:</b> We do not
              respond to Do Not Track signals. California residents have
              specific rights under the Shine the Light law and CCPA.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">8. Links to Other Sites</h2>{" "}
            <p>
              Our services may contain links to other sites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party&quot;s site. We strongly advise you
              to review the Privacy Policy of every site you visit.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">
              9. Children&quot;s Privacy
            </h2>{" "}
            <p>
              Our services do not address anyone under the age of 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware that a child under 13 has provided us with
              personal information, we will take steps to delete such
              information.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">
              10. Changes to This Privacy Policy
            </h2>{" "}
            <p>
              We may update our Privacy Policy from time to time. You are
              advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page. Users will be informed via email or
              prominent notices.
            </p>
          </div>{" "}
          <div className="prose max-w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>{" "}
            <p>
              For any questions about this Privacy Policy, or to get in touch
              with us, please feel free to contact us via email at{" "}
              <a href="mailto:viewyourdaily@gmail.com" className="underline">
                viewyourdaily@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </main>
  );
};

export default PrivacyPolicyPage;
