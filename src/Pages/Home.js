import React from "react";
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Home = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 1 }}
		>
			<Hero />
			<Featured theme={theme} />
			<Footer />
		</motion.div>
	);
};

export default Home;
