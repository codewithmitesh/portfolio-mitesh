import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AchievementsCard = ({ title }) => {
    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-tertiary  lg:p-4 p-1 rounded-2xl w-full max-w-[360px] mx-auto mb-8"
        >
            <h3 className="flex text-white font-normal lg:text-[18px] text-[14px]  text-center">{title}</h3>
        </motion.div>
    );
};


AchievementsCard.propTypes = {
    title: PropTypes.string.isRequired,
};

const AchievementsSection = () => {
    const achievements = [
        { title: "🏆 Won the Smart India Hackathon 2022🥇 Software Edition organized by Government of India." },
        { title: "🏆 Grand Finalist Smart India Hackathon 2023🥈 Software Edition organized by Government of India." },

        { title: "💪 Solved 700+ programming problems on Leetcode (500+) and GeeksforGeeks (250+)." },
        {
            title: `🥇2nd Runnerup in CodeBytes National Level Pair Programming Contest organized by Codechef-Chapter MITAOE.`
        },
        {
            title: `🏅Secured 6th Rank in CodeBytes National Level Coding Contest organized by Codechef-Chapter MITAOE.`
        },
        { title: "💪 Secured Global Rank 2938/12K in Leetcode Weekly Contest 336 and Global Rank 3246/19K in Weekly Contest 319." },
        { title: "😎 Authored and Published multiple Blog posts on various technologies, sharing valuable tips for development." },
        { title: "✅ Open Source Contribution - Responsively App [FIX] – Resolve illegal character error in ramraf [#858]. " },
        { title: "✅ Open Source Contribution - Responsively App [Issue] – Post install script is not working in windows [#859]" },
        { title: "✅ Open Source Contribution - Responsively App [Issue] – [FEAT] – Shortcut for inspect element [#873]" },
        { title: "📄 AWS Certified Cloud Practitioner" }

    ];

    return (
        <div className=" lg:m-6 lg:p-20 p-5 m-2 flex justify-center items-center bg-primary">
            <div className="text-center">
                <h2 className="lg:text-5xl text-3xl font-bold text-white mb-6">Achievements🏆</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {achievements.map((achievement, index) => (
                        <AchievementsCard key={`achievement-${index}`} {...achievement} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AchievementsSection;
