import React from "react";
import Conditioning from "../assets/images/conditioning.JPG";
import Pilates from "../assets/images/pilates.JPG";
import WaterFitness from "../assets/images/waterfitness.JPG";
import Meditation from "../assets/images/meditation.JPG";
import NutritionHealth from "../assets/images/nutritionhealth.JPG";

function CourseList() {
    return (
        <div>
            <div className="about d-flex h-100 m-3 p-4">
                <div className="p-3 text-left">
                    <h2 className="mb-4">Conditioning and Flexibility</h2>
                    <h3>
                    This course provides knowledge, skill, and application of methods to maintain and improve the body's overall aerobic fitness and flexibility. 
                    Various cardiovascular activities, circuit training and static and dynamic stretching will be used. 
                    Programs such as high intensity training, TRX and other current exercise trends may be incorporated.
                    </h3>
                </div>
                <img
                    className="about-img img-fluid img-thumbnail rounded float-left"
                    src={Conditioning}
                    alt="Two people doing conditioning"
                />
            </div>

            <div className="about d-flex h-100 m-3 p-4">
                <div className="p-3 text-left">
                    <h2 className="mb-4">Pilates</h2>
                    <h3>
                    Pilates is a form of exercise which concentrates on strengthening the body with an emphasis on core strength. 
                    This helps to improve general fitness and overall well-being. 
                    Similar to Yoga, Pilates concentrates on posture, balance and flexibility.
                    </h3>
                </div>
                <img
                    className="about-img img-fluid img-thumbnail rounded float-left"
                    src={Pilates}
                    alt="Two people doing conditioning"
                />
            </div>

            <div className="about d-flex h-100 m-3 p-4">
                <div className="p-3 text-left">
                    <h2 className="mb-4">Water Fitness</h2>
                    <h3>
                    The pool is great for exercise because the water offers resistance while reducing the impact of land-based exercises. 
                    Our water fitness classes use a variety of exercises and equipment. 
                    Activities may include dance, calisthenics, walking, and kicking, and typically intensity and impact can be varied on an individual basis. 
                    </h3>
                </div>
                <img
                    className="about-img img-fluid img-thumbnail rounded float-left"
                    src={WaterFitness}
                    alt="Group of people doing exercise in the swimming pool"
                />
            </div>

            <div className="about d-flex h-100 m-3 p-4">
                <div className="p-3 text-left">
                    <h2 className="mb-4">Meditation and Spirituality</h2>
                    <h3>
                    Your mind as consciousness creates your reality, you can do some very powerful and amazing things.
                    This course is designed to take you on a journey of mind-body mastery starting with the basics of mindfulness and meditation, 
                    and then advancing to working with your subconscious mind to facilitate healing.
                    </h3>
                </div>
                <img
                    className="about-img img-fluid img-thumbnail rounded float-left"
                    src={Meditation}
                    alt="Two people doing conditioning"
                />
            </div>

            <div className="about d-flex h-100 m-3 p-4">
                <div className="p-3 text-left">
                    <h2 className="mb-4">Nutrition and Health</h2>
                    <h3>
                    You will learn about the composition of macro- and micronutrients, their role in the body, and their impact on our health. 
                    You will get a sound understanding of energy homeostasis and the regulation of bodyweight. 
                    Also, you will learn strategies to improve nutritional status, and combat overnutrition and undernutrition based on scientific knowledge. 
                    </h3>
                </div>
                <img
                    className="about-img img-fluid img-thumbnail rounded float-left"
                    src={NutritionHealth}
                    alt="Health food"
                />
            </div>
        </div>
    );
}

export default CourseList;
