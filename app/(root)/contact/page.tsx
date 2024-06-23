import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen px-5 py-6 mx-auto xl:px-24 lg:px-8">
      {" "}
      <main>
        <section className="mx-auto container mt-10 font-medium">
          <header className="">
            <h1 className="text-5xl font-bold">
              Contact Us<span className="text-primary">.</span>
            </h1>
          </header>{" "}
          <hr className="hidden lg:block my-1" />
        </section>{" "}
        <div className="container mx-auto my-8 font-medium">
          <iframe
            title="No 13B Farm Center, Suite 8 & 9, NUJ Plaza, Kano, Nigeria."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255348.37250196154!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80593cf7e692f02b%3A0x2b4fe0527dc4888a!2sStallion%20Times%20Media%20Services%20LTD!5e0!3m2!1sen!2sng!4v1717201551504!5m2!1sen!2sng"
            className="w-full h-96 dark:bg-slate-600 rounded-2xl bg-gray-200"
            loading="lazy"
            style={{ border: "0px" }}
          ></iframe>
          <p>You can contact us via the following channels:</p>{" "}
          <section className="mt-10">
            <div className="prose max-w-full mt-8 space-y-3">
              <h2 className="text-2xl font-bold mb-4">Email</h2>{" "}
              <p>
                For information regarding an article, story, podcast, video,
                comment, general content, please feel free to contact us via
                email at{" "}
                <a href="editor@stalliontimes.com " className="underline">
                  info.@stalliontimes.com
                </a>
                .
              </p>{" "}
              <p>
                For advertising inquiries or placements on <b>Stallion Times</b>
                , contact us via email at
                <a href="info.@stalliontimes.com" className="underline">
                  info.@stalliontimes.com
                </a>
                .
              </p>{" "}
              <p>
                If you are interested in working for <b>Stallion Times</b>,
                please contact us via email at{" "}
                <a href="info.@stalliontimes.com" className="underline">
                  info.@stalliontimes.com
                </a>
                .
              </p>
            </div>{" "}
            <div className="prose max-w-full mt-8 space-y-3">
              <h2 className="text-2xl font-bold mb-4">Our Physical Address</h2>{" "}
              <p>No 13B Farm Center, Suite 8 & 9, NUJ Plaza, Kano, Nigeria .</p>{" "}
              <p>Call: +23480999451021 or +2348051042220</p>
            </div>{" "}
            <div className="prose max-w-full mt-8">
              <h2 className="text-2xl font-bold mb-4">
                Connect with us on Social Media
              </h2>{" "}
              <p>
                You can also connect with us on social media through the
                following platforms:
              </p>{" "}
              <ul className="list-disc pl-6 font-semibold my-2">
                <li>
                  Twitter:{" "}
                  <a
                    href="https://twitter.com/stallion_times"
                    target="_blank"
                    className="underline"
                  >
                    @stallion_times
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
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/StallionTimesng"
                    target="_blank"
                    className="underline"
                  >
                    www.facebook.com/stalliontimes
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
                <li>WhatsApp: +2348099451022</li>
              </ul>
            </div>{" "}
            <p>
              Thank you for choosing Your Stallion Times as your trusted source
              for reliable and insightful news coverage.
            </p>
          </section>
        </div>
      </main>
    </main>
  );
};

export default ContactPage;
