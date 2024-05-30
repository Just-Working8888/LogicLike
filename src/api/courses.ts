
import { CancelToken } from "axios";
import { ICourse } from "../types/ICourse";
import { instance } from ".";

const getCourses = (sourceToken?: CancelToken) =>
    instance.get<ICourse[]>(`courses.json`, { cancelToken: sourceToken });



const endpoints = {
    getCourses,
};
export default endpoints;
