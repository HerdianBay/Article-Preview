import { useState } from "react";

export default function ArticlePreview() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClicked() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <section className="h-screen bg-lightGrayishBlue flex items-center font-manrope">
        <div className="container mx-auto px-6 lg:max-w-[800px] lg:px-0">
          <div className="w-full rounded-md shadow-lg bg-white overflow-hidden lg:flex lg:max-h-[300px]">
            <img
              src="./drawers.jpg"
              alt=""
              className="h-[215px] w-full lg:min-h-[300px] lg:w-[37.5%] object-cover object-top lg:object-left-bottom"
            />
            <div className="w-full lg:w-[62.5%]">
              <h3 className="px-8 mt-6 font-bold text-darkGrayishBlue lg:text-xl lg:mt-8 lg:px-10">
                Shift the overall look and feel by adding these wonderful
                touches to furnitures in your home
              </h3>
              <p className="px-8 mt-2 font-medium text-[13px] text-grayishBlue lg:px-10 lg:mt-4">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I've got some simple tips
                to help you make any room feel complete.
              </p>
              <div className="w-full flex items-center justify-between px-8 mt-10 mb-5 relative z-0">
                <div className="flex items-center gap-4">
                  <img
                    src="./avatar-michelle.jpg"
                    alt="avatar"
                    className="rounded-full w-[40px] h-[40px] lg:grow-0"
                  />
                  <div>
                    <h3 className="font-bold text-darkGrayishBlue">
                      Michelle Appleton
                    </h3>
                    <p className="font-medium text-[13px] text-grayishBlue">
                      28 June 2020
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full bg-lightGrayishBlue h-8 w-8 z-10">
                  <button
                    onClick={handleClicked}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src="./icon-share.svg"
                      alt=""
                      className="h-[15px] w-[15px]"
                    />
                  </button>
                </div>
                {isClicked && (
                  <div className="absolute w-full left-0 bg-darkGrayishBlue flex items-center gap-4 px-8 py-8 lg:py-3 lg:bottom-12 lg:w-fit lg:rounded-lg lg:left-72 lg:z-20">
                    <p className="text-grayishBlue">SHARE</p>
                    <a href="#">
                      <img
                        src="./icon-facebook.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="./icon-twitter.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="./icon-pinterest.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
