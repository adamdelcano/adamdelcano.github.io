import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Intro() {
  const myName = useRef(null);
  const mission = useRef(null);
  const whyCare = useRef(null);
  const contactPointer = useRef(null);

  useEffect(() => {
    const nameTyped = new Typed(myName.current, {
      strings: ["^100Adam del Cano"],
      typeSpeed: 50,
    });
    const missionTyped = new Typed(mission.current, {
      strings: [
        "^1000Web development^2000",
        "^1000Full-stack development^2000",
        "^1000Frontend development^2000",
        "Weird ideas^2000",
      ],
      typeSpeed: 50,
      loop: true,
    });
    const whyCareTyped = new Typed(whyCare.current, {
      strings: ["^2000You want me to do that for you."],
      typeSpeed: 50,
    });
    const contactTyped = new Typed(contactPointer.current, {
      strings: [
        "^4000Professional Inquiries: adam.j.delcano@gmail.com\nPersonal Contact: robotmascot@gmail.com\nsocials: @robotmascot on bsky.app and treehouse.systems.social",
      ],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      nameTyped.destroy();
      missionTyped.destroy();
      whyCareTyped.destroy();
      contactTyped.destroy();
    };
  }, []);

  return (
    <>
        <form className="max-w-lg self-start justify-self-start">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Whose site is this?
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-green-100 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight disabled"
                id="grid-name"
                type="text"
                ref={myName}
                disabled
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-mission"
              >
                What does he do?
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-green-100 border border-gray-900 rounded py-3 px-4 leading-tight disabled"
                id="grid-mission"
                type="text"
                placeholder=""
                ref={mission}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Why should I care?
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-green-100 border border-gray-900 rounded py-3 px-4 leading-tight disabled"
                id="grid-password"
                ref={whyCare}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="contact-pointer"
              >
                How can I get in touch?
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-900 text-green-100 border border-gray-900 rounded py-3 px-4 leading-tight"
                id="contact-pointer"
                ref={contactPointer}
                disabled
                rows={5}
              />
            </div>
          </div>
        </form>
    </>
  );
}
