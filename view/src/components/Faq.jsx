import Footer from "./Footer";
import Navbar from "./Navbar";
import "./accordion";

const Faq = () => {
  return (
    <>
      <Navbar />

      <div className="faq-container">
        <div className="content">
          <div className="aboutus flex justify-center pt-32">
            <div className="about-us-box inline-block p-16">
              <h1 className="text-7xl text-center text-white">FAQ</h1>
            </div>
          </div>
        </div>
        <h1 className="font-sans text-5xl text-white font-bold text-center pb-32 pt-20">
          Frequently Asked Questions
        </h1>
        <div className="faq flex justify-center">
          <div className="faq-lists grid grid-cols-2">
            <div className="col-1">
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      What kind of workouts do you offer?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      How often should I do the workouts?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      Are the workouts suitable for beginners?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      Can i access the workouts on any device?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      Can I download the workouts to watch offline?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      Do I need any equipments to do your workouts?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        While some of our workouts require minimal equipment
                        such as resistance bands or dumbbells, most of our
                        workouts are designed to be done with just your body
                        weight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      Can I customize my workout plan based on my fitness goals?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="bg-black rounded-xl">
                  <div className="accordion-header">
                    <span className="pink font-sans font-bold">
                      Aret there any nutritional resources included in the
                      system?
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4">
                      <p className="font-sans text-white">
                        We offer a variety of workouts that you can do at home
                        with little or no equipment, including cardio, strength
                        training, HIIT, yoga, and Pilates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
