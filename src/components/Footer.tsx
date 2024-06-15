import gdrp from "../assets/EU GDPR Compliant.png";
import norton from "../assets/Norton by Symantec.png";
import stripe from "../assets/Stripe.png";
import paypal from "../assets/PayPal New 2023.png";
import { FacebookFilled, MediumCircleFilled, TwitterCircleFilled, YoutubeFilled } from "@ant-design/icons";

export const Footer = () => {
  return (
    <div className="bg-brown py-10 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
          <div className="text-white col-span-2">
            <span className="font-semibold">What is Campoal?</span>
            <p className="mt-8 space-y-2 font-light text-sm">
              Campoal is a complete WordPress theme used to create Petition
              Platforms, Foundations, and Non-profit websites where anyone can
              start a social movement, collect supporters, and fundraise to
              change something in society.
            </p>
            <div className="flex mt-4 space-x-4">
              <img src={gdrp} alt="GDPR" className="h-12" />
              <img src={norton} alt="Norton" className="h-12" />
              <img src={stripe} alt="Stripe" className="h-12" />
              <img src={paypal} alt="Paypal" className="h-12" />
            </div>
          </div>
          <div className="text-white">
            <span className="font-semibold">Company</span>
            <ul className="mt-8 space-y-2 font-light text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Impact</li>
              <li>Testimonials</li>
              <li>Team members</li>
            </ul>
          </div>
          <div className="text-white">
            <span className="font-semibold">Resource</span>
            <ul className="mt-8 space-y-2 font-light text-sm">
              <li>Guide</li>
              <li>FAQs</li>
              <li>Press kits</li>
              <li>Compliance</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="text-white">
            <span className="font-semibold">Community</span>
            <ul className="mt-8 space-y-2 font-light text-sm">
              <li>Shop</li>
              <li>Blog</li>
              <li>Forum</li>
              <li>Membership</li>
              <li>Help center</li>
              <li>Support desk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white mt-20">
        <div className="max-w-7xl mx-auto flex justify-between">
          <span className="text-sm font-normal">@2021 Campoal. Powered by Conikal LLC</span>
          <div className="flex space-x-4">
            <FacebookFilled />
            <TwitterCircleFilled />
            <YoutubeFilled />
            <MediumCircleFilled />
          </div>
        </div>
      </div>
    </div>
  );
};
