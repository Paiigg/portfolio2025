import React from "react";
import AvatarSection from "./avatar-section";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="md:h-screen p-4 max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-10 "
    >
      <h2 className=" font-bold text-4xl ">About Me</h2>
      <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0 items-center">
        <AvatarSection />
        <p className="w-full text-justify">
          Lulusan Teknik Elektro yang memiliki kemampuan dalam otomatisasi
          industri, termasuk penguasaan PLC, wiring, serta desain CAD. Mampu
          merancang, mengembangkan, dan mengimplementasikan solusi teknis yang
          efisien. Aktif berpartisipasi dalam proyek yang melibatkan perangkat
          keras dan perangkat lunak di bidang elektro, serta memiliki
          keterampilan komunikasi yang baik dan mampu membangun hubungan yang
          positif dengan tim. Memiliki hobi dalam pemrograman web dan
          pengembangan IoT sebagai bentuk ketertarikan dalam mengikuti
          perkembangan teknologi.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
