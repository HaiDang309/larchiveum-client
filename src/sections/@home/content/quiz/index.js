import dynamic from "next/dynamic";

const QuizManagement = dynamic(() => import("./Management"));

export { QuizManagement };
