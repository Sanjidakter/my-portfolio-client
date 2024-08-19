import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.pexels.com/photos/7651559/pexels-photo-7651559.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">My Portfolio!</h1>
            <p className="py-6">
              Know my day to day task here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur vel, numquam ipsa necessitatibus laborum dignissimos neque architecto quaerat explicabo voluptates assumenda maxime pariatur magnam dicta vitae quos itaque inventore?
            </p>
            <button href="/blog" className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
