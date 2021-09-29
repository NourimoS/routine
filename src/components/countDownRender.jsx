import React from "react";
import RoundedButton from "./RoundedButton";

const countDownRender = (
	{ hours, minutes, seconds, total, completed },
	onSetDone,
	startValue
) => {
	return (
		<div className="me-4">
			<RoundedButton
				onClick={onSetDone}
				bgColor="bg-white text-gray-700"
				borderColor="border-red-400"
			>
				{completed?(<b>Set Done</b>):(
				<h3 className="text-xl">
					{[hours,minutes,seconds].map((v)=>String(v).padStart(2,'0')).join(":")}
                    
				</h3>
				)}
			</RoundedButton>
		</div>
	);
};

export default countDownRender;
