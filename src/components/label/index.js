import dynamic from "next/dynamic";

const Label = dynamic(() => import("./Label"), {ssr: false});

export default Label;
