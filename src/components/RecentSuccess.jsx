import React from "react";
import { FaChartLine } from "react-icons/fa";
import Iterator from "./Iterator";
import SuccessItem from "./SuccessItem";
import Title from "./Title";

const RecentSuccess = ({ data }) => {
	return (
		<div className="my-4">
			<Title text="Recent success" icon={FaChartLine} />
			<ul className="flex w-full overflow-x-scroll">
				<Iterator
					data={data}
					renderAs={({ el, i }) => (
						<SuccessItem data={el} index={i} key={i}></SuccessItem>
					)}
				></Iterator>
			</ul>
		</div>
	);
};

export default RecentSuccess;
