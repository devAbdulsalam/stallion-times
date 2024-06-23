import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen px-5 py-6 mx-auto xl:px-24 lg:px-8">
      {" "}
      <section className="mx-auto container mt-10 font-medium">
        <header className="">
          <h1 className="text-5xl font-bold">
            About Us<span className="text-primary">.</span>
          </h1>
        </header>{" "}
        <hr className="hidden lg:block my-1" />
      </section>{" "}
      <div className="container mx-auto my-8 font-medium">
        <div className="w-full flex justify-center text-start items-center">
          <p>
            Welcome to <b>Stallion Times</b>, an esteemed online New Media
            organization officially registered under the Corporate Affairs
            Commission. As a premier independent news entity, we are committed
            to delivering meticulously verified and unadulterated news reports
            to both our discerning Nigerian audience and the global community.
          </p>
        </div>{" "}
        <div className="prose max-w-full mt-8">
          <h2 className="text-2xl font-bold mb-4">Commitment to Excellence</h2>{" "}
          <p>
            Our unwavering commitment to excellence in journalism is paramount.
            We prioritize the creation of top-tier content, aspiring to
            cultivate trust among our readers and the wider public. Every member
            of our team collectively and individually upholds the principles of
            journalistic integrity, ensuring that <b>Stallion Times </b>{" "}
            reporting is accurate, fair, and unbiased.
          </p>
        </div>{" "}
        <div className="prose max-w-full mt-8">
          <h2 className="text-2xl font-bold mb-4">Objective Reporting</h2>{" "}
          <p>
            At <b>Stallion Times</b>, our objective is to present the facts
            objectively, allowing our readers to form their own conclusions. We
            are dedicated to providing a comprehensive understanding of each
            story, ensuring it is easily digestible for our diverse audience.
          </p>
        </div>{" "}
        <div className="prose max-w-full mt-8">
          <h2 className="text-2xl font-bold mb-4">Independence is Key</h2>{" "}
          <p>
            Independence is a cornerstone of our ethos. We maintain a
            non-partisan stance, autonomously selecting subjects for coverage,
            free from the influence of financial interests or advertisers. free
            from the influence of financial interests or advertisers.{" "}
            <b>Stallion Times </b> recognizes its influence and corresponding
            responsibility, pledging to rectify any errors transparently and
            promptly.
          </p>
        </div>{" "}
        <div className="prose max-w-full mt-8">
          <h2 className="text-2xl font-bold mb-4">Social Responsibility</h2>{" "}
          <p>
            Embracing Social Responsibility is integral to our mission. We
            adhere to the highest social standards, fostering a culture of
            respect, diversity, and gender equality. Prioritizing the health and
            dignity of our stakeholders, we strive to contribute positively to
            the communities we serve.
          </p>
        </div>{" "}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>{" "}
          <p>
            For any inquiries or to get in touch with us, please feel free to
            contact us via email at{" "}
            <a href="info.@stalliontimes.com" className="underline">
              info.@stalliontimes.com
            </a>
            .
          </p>{" "}
          <p>You can also connect with us on:</p>{" "}
          <ul className="list-disc pl-6 font-semibold my-2">
            <li>
              Facebook:{" "}
              <a
                href="https://web.facebook.com/StallionTimesng"
                target="_blank"
                className="underline"
              >
                www.facebook.com/stalliontimes
              </a>
            </li>{" "}
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/stallion_times"
                target="_blank"
                className="underline"
              >
                @stallion_times
              </a>
            </li>{" "}
            <li>
              Youtube:{" "}
              <a
                href="https://www.tyoutube.com/stallion_times"
                target="_blank"
                className="underline"
              >
                Stallion Times
              </a>
            </li>{" "}
          </ul>{" "}
          <p>
            Thank you for choosing Stallion Times as your trusted source for
            reliable and insightful news coverage.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
