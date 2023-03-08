import React from "react";
import Progress from "./Progress";
import { FaGithub, FaInstagram } from "react-icons/fa";
import {
  MdEmail,
  MdCamera,
  MdSports,
  MdSportsEsports,
  MdPhoneAndroid,
} from "react-icons/md";
import { SiSketchup } from "react-icons/si";

const Contact = () => {
  return (
    <section className="grid w-full gap-16 rounded-lg p-6 dark:bg-slate-600 dark:dark:text-white md:grid-cols-1 lg:hidden">
      <div>
        <h1 className="text-center font-bold uppercase">Contact</h1>{" "}
        <div className="mt-2 grid grid-cols-1 gap-6 text-left font-semibold text-slate-700 dark:text-white">
          <div className="flex flex-wrap gap-2">
            <MdEmail size={"28px"} />
            yusfifarkhan92@gmail.com
          </div>
          <div className="flex flex-wrap gap-2">
            <MdPhoneAndroid size={"28px"} />
            +6281390667626
          </div>
          <div className="flex flex-wrap gap-2">
            <FaGithub size={"28px"} />
            @yusfifarkhan
          </div>
          <div className="flex flex-wrap gap-2">
            <FaInstagram size={"28px"} />
            @yusfi.farkhan
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold uppercase">TECHNICAL SKILL</h1>{" "}
        <div className="mt-2 grid grid-cols-1 gap-6 text-left">
          <Progress name="HTML5" value="95" />
          <Progress name="CSS3" value="87" />
          <Progress name="Javascript" value="95" />
          <Progress name="React" value="80" />
          <Progress name="SQL DB" value="85" />
          <Progress name="NoSQL DB" value="84" />
          <Progress name="Adobe CS" value="70" />
          <Progress name="CorelDraw" value="84" />
          <Progress name="Office" value="100" />
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold uppercase">Hobby & Interest</h1>{" "}
        <div className="mt-2 grid grid-cols-1 gap-6 text-left font-semibold text-slate-700 dark:text-white">
          <div className="flex gap-2">
            <MdSports size={"28px"} />
            Badminton
          </div>
          <div className="flex gap-2">
            <MdSportsEsports size={"28px"} />
            Video Game
          </div>
          <div className="flex gap-2">
            <MdCamera size={"28px"} />
            Videography
          </div>
          <div className="flex gap-2">
            <SiSketchup size={"28px"} />
            3D Design
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
