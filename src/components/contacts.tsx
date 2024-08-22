import React from "react";
import { InstagramBorder } from "@/components/ccomponents/instagram-border";
import { WhatsAppBorder } from "@/components/ccomponents/whatsapp-border";
import { LinkedInBorder } from "@/components/ccomponents/linkedin-border";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center space-y-6 mt-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
        Contact me by pressing one of these buttons!
      </h1>
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        <div className="flex-shrink-2">
          <InstagramBorder />
        </div>
        <div className="flex-shrink-2">
          <WhatsAppBorder />
        </div>
        <div className="flex-shrink-2">
          <LinkedInBorder />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
