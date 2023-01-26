import square from "./square.js";
import { getTriangleArea } from "./index.js";

const solution = (n) => getTriangleArea(n, square(n) / 2);

console.log(solution(5));

export default solution;