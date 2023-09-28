import React from "react";
import ChangePassBox from "./ChangePassBox";
import ProfileBox from "./ProfileBox";
const ChangePass_Page = () => {  
  //password change
  return (
    <>
    <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <header className="bg-white border-b border-black text-center text-black">
        <h1 className="text-2xl py-4">Your Header Text</h1>
      </header>
      <div className="flex flex-wrap w-full  justify-center lg: space-x-20">
        <div className="lg:w-3/10 sm:w-full mb-4 ">
          <ProfileBox />
        </div>
        <div className="w-7/10 sm:w-full ">
          <ChangePassBox/>
        </div>
      </div>
    </>
  );
};
export default ChangePass_Page;
