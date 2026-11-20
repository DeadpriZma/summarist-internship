"use client";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";

import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

import { useState } from "react";
import Modal from "./components/Modal";

const features = [
  {
    icon: <AiFillFileText />,
    title: "Read or listen",
    description: "Save time by getting the core ideas from the best books.",
  },
  {
    icon: <AiFillBulb />,
    title: "Find your next read",
    description: "Explore book lists and personalized recommendations.",
  },
  {
    icon: <AiFillAudio />,
    title: "Briefcasts",
    description: "Gain valuable insights from briefcasts",
  },
];

const statisticsOne = [
  {
    number: "93%",
    description: (
      <>
        of Summarist members <b>significantly increase</b> reading frequency.
      </>
    ),
  },
  {
    number: "96%",
    description: (
      <>
        of Summarist members <b>establish better</b> habits.
      </>
    ),
  },
  {
    number: "90%",
    description: (
      <>
        have made <b>significant positive</b> change to their lives.
      </>
    ),
  },
];

const statisticsTwo = [
  {
    number: "91%",
    description: (
      <>
        of Summarist members <b>report feeling more productive</b> after
        incorporating the service into their daily routine.
      </>
    ),
  },
  {
    number: "94%",
    description: (
      <>
        of Summarist members have <b>noticed an improvement</b> in their overall
        comprehension and retention of information.
      </>
    ),
  },
  {
    number: "88%",
    description: (
      <>
        of Summarist members <b>feel more informed</b> about current events and
        industry trends since using the platform.
      </>
    ),
  },
];

const headingsOne = [
  "Enhance your knowledge",
  "Achieve greater success",
  "Improve your health",
  "Develop better parenting skills",
  "Increase happiness",
  "Be the best version of yourself!",
];

const headingsTwo = [
  "Expand your learning",
  "Accomplish your goals",
  "Strengthen your vitality",
  "Become a better caregiver",
  "Improve your mood",
  "Maximize your abilities",
];

const reviews = [
  {
    name: "Hanna M.",
    review: (
      <>
        This app has been a <b>game-changer</b> for me! It's saved me so much
        time and effort in reading and comprehending books. Highly recommend it
        to all book lovers.
      </>
    ),
  },
  {
    name: "David B.",
    review: (
      <>
        I love this app! It provides <b>concise and accurate summaries</b> of
        books in a way that is easy to understand. It's also very user-friendly
        and intuitive.
      </>
    ),
  },
  {
    name: "Nathan S.",
    review: (
      <>
        This app is a great way to get the main takeaways from a book without
        having to read the entire thing.{" "}
        <b>The summaries are well-written and informative.</b> Definitely worth
        downloading.
      </>
    ),
  },
  {
    name: "Ryan R.",
    review: (
      <>
        If you're a busy person who{" "}
        <b>loves reading but doesn't have the time</b> to read every book in
        full, this app is for you! The summaries are thorough and provide a
        great overview of the book's content.
      </>
    ),
  },
];

const footerLinks = [
  {
    title: "Actions",
    links: ["Summarist Magazine", "Cancel Subscription", "Help", "Contact us"],
  },
  {
    title: "Useful Links",
    links: [
      "Pricing",
      "Summarist Business",
      "Gift Cards",
      "Authors & Publishers",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Code of Conduct"],
  },
  {
    title: "Other",
    links: ["Sitemap", "Legal Notice", "Terms of Service", "Privacy Policies"],
  },
];

const numberStats = [
  {
    icon: <BiCrown />,
    title: "3 Million",
    description: "Downloads on all platforms",
  },
  {
    icon: (
      <>
        <BsStarFill />
        <BsStarHalf />
      </>
    ),
    title: "4.5 Stars",
    description: "Average ratings on iOS and Google Play",
    isStars: true,
  },
  {
    icon: <RiLeafLine />,
    title: "97%",
    description: "Of Summarist members create a better reading habit",
  },
];

function StatisticsDetails({ data }) {
  return (
    <div className="flex w-full flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10">
      {data.map((item) => (
        <div key={item.number} className="flex gap-4">
          <div className="mt-1 text-xl font-semibold text-[#0365f2]">
            {item.number}
          </div>

          <div className="text-base font-light text-[#394547] md:text-xl">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}

function StatisticsHeadings({ headings, alignRight = false }) {
  return (
    <div
      className={`flex w-full flex-col justify-center ${
        alignRight ? "items-start md:items-end" : ""
      }`}
    >
      {headings.map((heading, index) => (
        <div
          key={heading}
          className={`mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px] ${
            index === headings.length - 1 ? "mb-0" : ""
          }`}
        >
          {heading}
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-8 text-center text-2xl font-bold text-[#032b41] md:text-[32px]">
      {children}
    </h2>
  );
}

function LoginButton({ onClick }) {
  return (
    <button
      className="flex h-10 w-full min-w-[180px] max-w-[300px] items-center justify-center rounded bg-[#2bd97c] text-base text-[#032b41] transition-colors duration-200 hover:bg-[#20ba68] active:translate-y-px"
      onClick={onClick}
    >
      Login
    </button>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden bg-white font-sans">
      {/* NAVBAR */}
      <nav className="h-20">
        <div className="mx-auto flex h-full w-full max-w-[1070px] items-center justify-between px-6">
          <figure className="max-w-[200px]">
            <img
              src="/logo.png"
              alt="Summarist logo"
              className="h-full w-full"
            />
          </figure>

          <ul className="flex gap-6 text-[#032b41]">
            <li className="cursor-pointer transition-colors hover:text-[#2bd97c]" onClick={() => setIsModalOpen(true)}> 
              Login
            </li>
            <li className="hidden cursor-not-allowed sm:block">About</li>
            <li className="hidden cursor-not-allowed sm:block">Contact</li>
            <li className="hidden cursor-not-allowed sm:block">Help</li>
          </ul>
        </div>
      </nav>

      {/* LANDING */}
      <section id="landing">
        <div className="w-full py-10">
          <div className="mx-auto w-full max-w-[1070px] px-6">
            <div className="flex">
              <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 text-2xl font-bold text-[#032b41] md:text-[40px]">
                  Gain more knowledge
                  
                  in less time
                </div>

                <div className="mb-6 text-lg font-light leading-relaxed text-[#394547] md:text-xl">
                  Great summaries for busy people,
                  <br className="hidden md:block" />
                  individuals who barely have time to read,
                  <br className="hidden md:block" />
                  and even people who don’t like to read.
                </div>

                <LoginButton onClick={() => setIsModalOpen(true)} />
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>

              <figure className="hidden w-full justify-end md:flex">
                <img
                  src="/landing.png"
                  alt="Summarist landing illustration"
                  className="h-full w-full max-w-[400px] object-contain"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="w-full py-10">
          <div className="mx-auto w-full max-w-[1070px] px-6">
            <SectionTitle>Understand books in few minutes</SectionTitle>

            <div className="mb-24 grid grid-cols-1 gap-10 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-2 flex justify-center text-[48px] text-[#032b41] md:text-[60px]">
                    {feature.icon}
                  </div>

                  <h3 className="mb-4 text-xl font-medium text-[#032b41] md:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-light text-[#394547] md:text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* FIRST STATISTICS ROW */}
            <div className="mb-8 flex flex-col gap-8 md:mb-24 md:flex-row md:gap-20">
              <StatisticsHeadings headings={headingsOne} />
              <StatisticsDetails data={statisticsOne} />
            </div>

            {/* SECOND STATISTICS ROW */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-20">
              <div className="order-1 w-full md:order-none">
                <StatisticsDetails data={statisticsTwo} />
              </div>

              <StatisticsHeadings headings={headingsTwo} alignRight />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="w-full py-10">
          <div className="mx-auto w-full max-w-[1070px] px-6">
            <SectionTitle>What our members say</SectionTitle>

            <div className="mx-auto max-w-[600px]">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="mb-8 rounded bg-[#fff3d7] p-4 font-light"
                >
                  <div className="mb-2 flex gap-2 text-[#032b41]">
                    <div>{review.name}</div>

                    <div className="flex gap-1 text-[#0564f1]">
                      {[...Array(5)].map((_, index) => (
                        <BsStarFill key={index} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>

                  <div className="leading-[1.4] tracking-[0.3px] text-[#394547]">
                    {review.review}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <LoginButton onClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section id="numbers">
        <div className="w-full py-10">
          <div className="mx-auto w-full max-w-[1070px] px-6">
            <SectionTitle>Start growing with Summarist now</SectionTitle>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
              {numberStats.map((stat) => (
                <div
                  key={stat.title}
                  className="flex flex-col items-center rounded-xl bg-[#d7e9ff] px-6 pb-10 pt-6 text-center"
                >
                  <div
                    className={`mb-2 flex h-[60px] items-center gap-1 text-[#0365f2] ${
                      stat.isStars ? "text-xl" : "text-5xl"
                    }`}
                  >
                    {stat.icon}
                  </div>

                  <h3 className="mb-4 text-[32px] font-semibold text-[#032b41] md:text-[40px]">
                    {stat.title}
                  </h3>

                  <p className="text-sm font-light text-[#394547] md:text-base">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#f1f6f4]">
        <div className="mx-auto w-full max-w-[1070px] px-6 py-10">
          <div className="my-8 mb-16 flex flex-col justify-between gap-8 text-sm md:flex-row">
            {footerLinks.map((section) => (
              <div key={section.title} className="relative z-10">
                <h3 className="mb-4 text-lg font-semibold text-[#032b41]">
                  {section.title}
                </h3>

                <div>
                  {section.links.map((link) => (
                    <div key={link} className="mb-3 leading-none last:mb-0">
                      <a className="cursor-not-allowed text-sm text-[#394547]">
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="font-medium text-[#032b41]">
              Copyright © 2023 Summarist.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
