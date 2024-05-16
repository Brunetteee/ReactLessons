import {IRes} from "../types/resType";
import {IUser} from "../interfaces/user";
import {apiService} from "./apiService";
import { urls} from "../constants/url";

const userService = {
    getAll:():IRes<IUser[]> =>apiService.get(urls.users )
}

export {
    userService
}