"use client";
import { BsFileImage, BsPeople, BsHandThumbsUp } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";


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

export default function ChoosePlan() {
  const [selected, setSelected] = useState("yearly");
  const [open, setOpen] = useState(null);

  return (
    <main className="min-h-screen w-full">
      <div className="items-center justify-center">
        <div className="bg-[#032b41] px-6 pt-12 pb-0 flex flex-col items-center justify-center w-full">
          <h1 className="font-bold text-4xl text-white text-center mb-4">
            Get Unlimited access to many amazing books to read
          </h1>
          <p className="text-white mb-4">
            Turn ordinary moments into amazing learning opportunities
          </p>
          <img src="/pricing-top.png" alt="Pricing" className="w-64 block" />
        </div>
        <div className="p-6 pt-12">
          <div className="flex flex-col sm:flex-row text-[#032b41] items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center p-2">
              <BsFileImage className="size-12 flex items-center justify-center" />
              <p className="text-sm">
                <span className="font-bold">Key ideas</span> in few min with
                many books to read
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2">
              <BsPeople className="size-12 flex items-center justify-center" />
              <p className="text-sm">
                <span className="font-bold">3 million</span> people growing with
                Summarist everyday
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2">
              <BsHandThumbsUp className="size-12 flex items-center justify-center" />
              <p className="text-sm">
                <span className="font-bold">Precise recommendations</span>{" "}
                collections curated by experts
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 pt-6 flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="font-bold text-4xl text-[#032b41] text-center mb-4">
              Select the plan that fits you
            </h1>
          </div>
          <ul className="flex items-center flex-col p-4">
            <button>
              <li
                onClick={() => setSelected("yearly")}
                className={
                  selected === "yearly"
                    ? "rounded-xl border-4 border-green-500 w-100 md:w-150"
                    : "rounded-2xl border-4 border-[#032b41] w-100 md:w-150"
                }
              >
                <h1 className="font-bold text-2xl">Premium Plus Yearly</h1>
                <h2 className="font-bold text-xl">$99.99/year</h2>
                <p className="opacity-50">7-day free trial included</p>
              </li>
            </button>

            <div className="flex items-center justify-center p-2">
              <p className="flex items-center justify-center text-gray-600">
                or
              </p>
            </div>

            <button>
              <li
                onClick={() => setSelected("monthly")}
                className={
                  selected === "monthly"
                    ? "rounded-xl border-4 border-green-500 w-100 md:w-150"
                    : "rounded-2xl border-4 border-[#032b41] w-100 md:w-150"
                }
              >
                <h1 className="font-bold text-2xl">Premium Plus Monthly</h1>
                <h2 className="font-bold text-xl">$9.99/month</h2>
                <p className="opacity-50">No free trial included</p>
              </li>
            </button>
          </ul>
          <div className="flex flex-col items-center">
            <button disabled className="m-2 w-64 cursor-not-allowed rounded bg-[#13dd71] px-6 py-2 text-[#032b41] hover:bg-[#20ba68]">
              {" "}
              {selected == "yearly" ? (
                <h1>Start your free 7-day trial</h1>
              ) : (
                <h1>Start your first month</h1>
              )}{" "}
            </button>
            {selected == "yearly" ? (
              <p className="text-xs opacity-50">
                Cancel your trial at any time before it ends, and you won't be
                charged.
              </p>
            ) : (
              <p className="text-xs opacity-50">
                30-day money back guarantee, no questions asked.
              </p>
            )}
          </div>

          <div>
            <div className="border-b py-4">
              <h2
                onClick={() => setOpen(open === 1 ? null : 1)}
                className="cursor-pointer font-bold"
              >
                How does the free 7-day trial work? {open === 1 ? "▲" : "▼"}
              </h2>
              {open === 1 && <p className="text-sm opacity-80">Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.</p>}
            </div>

            <div className="border-b py-4">
              <h2
                onClick={() => setOpen(open === 2 ? null : 2)}
                className="cursor-pointer font-bold"
              >
                Can I switch subscriptions from monthly to yearly, or yearly to monthly? {open === 2 ? "▲" : "▼"}
              </h2>
              {open === 2 && <p className="text-sm opacity-80">While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.</p>}
            </div>
            <div className="border-b py-4">
              <h2
                onClick={() => setOpen(open === 3 ? null : 3)}
                className="cursor-pointer font-bold"
              >
                What's included in the Premium plan? {open === 3 ? "▲" : "▼"}
              </h2>
              {open === 3 && <p className="text-sm opacity-80">Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.</p>}
            </div>
            <div className="border-b py-4">
              <h2
                onClick={() => setOpen(open === 4 ? null : 4)}
                className="cursor-pointer font-bold"
              >
                Can I cancel during my trial or subscription? {open === 4 ? "▲" : "▼"}
              </h2>
              {open === 4 && <p className="text-sm opacity-80">You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.</p>}
            </div>
          </div>
        </div>
        <div >
          <Link href={"/for-you"} className="flex flex-col items-center"><button className="m-2 w-64 cursor-not-allowed rounded bg-[#13dd71] px-6 py-2 text-[#032b41] hover:bg-[#20ba68]">
            Go Back</button></Link>
        </div>
        <div id="footer" className="bg-[#cff1e4]">
          <div className="mx-auto w-full max-w-[1070px] py-10 bg-[#cff1e4]">
            <div className="my-8 mb-16 flex flex-col justify-between gap-8 text-sm md:flex-row bg-[#cff1e4]">
              {footerLinks.map((section) => (
                <div key={section.title} className="relative z-10 bg-[#cff1e4]">
                  <h3 className="mb-4 text-lg font-semibold text-[#032b41] bg-[#cff1e4]">
                    {section.title}
                  </h3>

                  <div className="bg-[#cff1e4]">
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
            <div className="flex items-center justify-center ">
              <div className="font-medium text-[#032b41]">
                Copyright © 2026 Summarist.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
