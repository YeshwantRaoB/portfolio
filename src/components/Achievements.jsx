import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img7 from '../assets/images/7.JPG';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.JPG';
import img12 from '../assets/images/12.JPG';
import img13 from '../assets/images/13.JPG';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import img20 from '../assets/images/20.jpg';

const achievements = [
	{
		title: '2nd Place – Paper Presentation',
		description:
			'Awarded 2nd place for presenting a paper on "Trends in Computer Science and Engineering" at the 4th ISTE State Level Student Convention for Polytechnics, 2024.',
		images: [ img7, img8 ],
	},
	{
		title: 'Student Council Leader',
		description:
			'Elected as Class Representative and Student Council Member for both 1st and 2nd year of Diploma – recognized for leadership and coordination skills.',
		images: [ img9, img10 ],
	},
	{
		title: 'President & Student of the Year',
		description:
			'Served as Student Body President and was honored as "Student of the Year" during high school (2022–23) for academic excellence and co-curricular impact.',
		images: [ img11, img12 ],
	},
	{
		title: 'Excellence in Public Speaking & Interactive Presentations',
		description:
			'Delivered impactful speeches and confidently presented project ideas at academic events and exhibitions. Showcased strong communication skills by engaging audiences and simplifying complex concepts with clarity.',
		images: [
			img13, img15, img17,img14, img18, img19, img20
		],
	},
];

function AchievementCard({ item }) {
	const [imgIdx, setImgIdx] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

	const prevImg = (e) => {
		e.stopPropagation();
		setDirection(-1);
		setImgIdx((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
	};
	const nextImg = (e) => {
		e.stopPropagation();
		setDirection(1);
		setImgIdx((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
	};

	const openModal = (e) => {
		e.stopPropagation();
		setShowModal(true);
	};
	const closeModal = () => setShowModal(false);

	const imgVariants = {
		enter: (dir) => ({
			x: dir > 0 ? 60 : -60,
			scale: 0.98,
			opacity: 0,
			position: 'absolute',
		}),
		center: {
			x: 0,
			scale: 1,
			opacity: 1,
			position: 'relative',
			transition: {
				x: { type: 'spring', stiffness: 400, damping: 40 },
				opacity: { duration: 0.25 },
				scale: { duration: 0.25 }
			}
		},
		exit: (dir) => ({
			x: dir > 0 ? -60 : 60,
			scale: 0.98,
			opacity: 0,
			position: 'absolute',
			transition: {
				x: { type: 'spring', stiffness: 400, damping: 40 },
				opacity: { duration: 0.2 },
				scale: { duration: 0.2 }
			}
		}),
	};

	return (
		<motion.div
			className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div data-aos="fade-up" className="relative overflow-hidden h-60">
				<AnimatePresence custom={direction} initial={false} mode="wait">
					<motion.img
						key={item.images[imgIdx]}
						src={item.images[imgIdx]}
						alt={item.title}
						className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
						custom={direction}
						variants={imgVariants}
						initial="enter"
						animate="center"
						exit="exit"
					/>
				</AnimatePresence>
				{/* Fullscreen button */}
				<button
					onClick={openModal}
					className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
					title="View fullscreen"
				>
					<span role="img" aria-label="fullscreen">
						⛶
					</span>
				</button>
				{item.images.length > 1 && (
					<>
						<button
							onClick={prevImg}
							className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
						>
							◀
						</button>
						<button
							onClick={nextImg}
							className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
						>
							▶
						</button>
						<span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 bg-opacity-60 text-white text-xs px-2 py-1 rounded">
							{imgIdx + 1} / {item.images.length}
						</span>
					</>
				)}
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
					{item.title}
				</h3>
				<p className="text-gray-700 dark:text-gray-300">
					{item.description}
				</p>
			</div>
			{/* Modal for fullscreen image */}
			{showModal && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
					onClick={closeModal}
				>
					<div
						className="relative"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={item.images[imgIdx]}
							alt={item.title}
							className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
						/>
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700"
							title="Close"
						>
							<span role="img" aria-label="close">
								✖
							</span>
						</button>
					</div>
				</div>
			)}
		</motion.div>
	);
}

export default function Achievements() {
	return (
		<section
			id="achievements"
			className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
		>
			<div className="max-w-6xl mx-auto">
				<motion.h2
					className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Achievements
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-10">
					{achievements.map((item, index) => (
						<AchievementCard key={index} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}
