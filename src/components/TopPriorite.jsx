import React from "react";
import Countdown from "react-countdown";
import countDownRender from "./countDownRender";
import {FaHourglassHalf} from "react-icons/fa"
import Title from "./Title";

const TopPriorite = ({
	title,
	timeToFinish,
	startValue,
	done,
	onSetFinished,
}) => {
	const wordsInTitle = title.split(" ").length;
	const duration = wordsInTitle * 2;
	return (
		<>
			{!done && (
                <div>
                    <Title text="One shoot" icon={FaHourglassHalf} />
                    <div className="w-full flex items-center  overflow-hidden">
                        <Countdown
                            className="text-2xl py-2"
                            date={timeToFinish}
                            renderer={(props) =>
                                countDownRender(props, onSetFinished, startValue)
                            }
                        ></Countdown>
                        <div className="overflow-hidden rounded-full p-1 border-yellow-400 border-8">
                            <div className="rounded-full overflow-hidden">
                                <h2
                                    className="text-7xl whitespace-nowrap w-max animate-slide"
                                    style={{ animationDuration: `${duration}s` }}
                                >
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
			)}
		</>
	);
};

export default TopPriorite;
