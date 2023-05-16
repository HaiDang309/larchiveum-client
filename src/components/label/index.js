import dynamic from "next/dynamic";

const Label = dynamic(() => import("./Label"));

export default Label;
