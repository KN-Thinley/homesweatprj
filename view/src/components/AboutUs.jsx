import Navbar from "./Navbar";
import Footer from "./Footer";
import grouphoto from "../assests/GroupPhotos/TheGroup_11zon.png";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="aboutus flex justify-center pt-32">
          <div className="about-us-box inline-block p-16">
            <h1 className="text-7xl text-center text-white">ABOUT</h1>
            <h1 className="text-7xl text-center text-white">US</h1>
          </div>
        </div>
        <div className="ourstory pt-32">
          <h1 className="font-sans text-white text-7xl text-center py-8">
            Our Story
          </h1>
          <div className="flex flex-col items-center">
            <div className="photoframe p-3">
              <div className="photo p-2">
                <img src={grouphoto} className="grouphoto" alt="groupphoto" />
              </div>
            </div>
          </div>
          <div className="passage-container flex justify-center pt-8">
            <div className="passage text-white text-center pt-4">
              <p className="p text-2xl font-sans text-gray-500">
                Our story began with a simple desire to make fitness accessible
                to everyone, regardless of their location or financial
                situation. We believed that no one should be held back from
                achieving their fitness goals simply because they could not
                afford a gym membership or did not have access to a fitness
                center.
              </p>
              <p className="p text-2xl font-sans text-gray-500 pt-4">
                Our mission remains the same: to help people live healthier,
                happier lives by making fitness accessible and achievable.
                Whether you are a beginner or an experienced athlete, we are
                here to support and guide you on your fitness journey.
              </p>
            </div>
          </div>
        </div>
        <div className="ourValues pt-32">
          <h1 className="font-sans text-white text-7xl text-center py-8">
            Our Values
          </h1>
          <div className="grid grid-cols-2 gap-52 px-40 py-8">
            <div className="valuefirst ">
              <h1 className="text-white text-start font-sans text-4xl pb-8">
                Accessibility
              </h1>
              <p className="text-start font-sans text-xl  text-gray-500">
                We believe that fitness should be accessible to everyone,
                regardless of their location or financial situation. We strive
                to create resources that are affordable and available to anyone
                who wants to live a healthier, more active lifestyle.
              </p>
            </div>
            <div className="valuesecond">
              <h1 className=" text-start font-sans text-4xl pb-8">
                Inclusivity
              </h1>
              <p className=" text-gray-500 text-start font-sans text-xl">
                We are committed to creating a welcoming and supportive
                community where everyone feels valued and included, regardless
                of their race, gender, sexuality, or ability.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-52 px-40 py-8">
            <div className="valuefirst ">
              <h1 className=" text-start font-sans text-4xl pb-8">Quality</h1>
              <p className=" text-gray-500 text-start font-sans text-xl">
                We understand that our customers come to us with unique needs
                and goals, which is why we prioritize offering a diverse range
                of high-quality products and services. From state-of-the-art
                fitness equipment and innovative workout programs to
                personalized training sessions with experienced and
                knowledgeable trainers, we strive to provide our customers with
                everything they need to succeed.
              </p>
            </div>
            <div className="valuesecond">
              <h1 className=" text-start font-sans text-4xl pb-8">
                Innovation
              </h1>
              <p className=" text-gray-500 text-start font-sans text-xl">
                We are committed to constantly pushing the boundaries of what is
                possible in the fitness industry. We invest in the latest
                technology, equipment, and research to develop innovative
                products and services that can help our customers achieve their
                fitness goals more effectively and efficiently. Innovation is at
                the heart of everything we do. We are constantly seeking out new
                ideas and approaches to improve our products and services,
                whether it is through developing new workout programs or
                incorporating cutting-edge technology into our equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
