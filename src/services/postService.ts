import {IRes} from "../types/resType";
import {IPostInterface} from "../interfaces/postInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/url";

const postService = {
    getAll:():IRes<IPostInterface[]> =>apiService.get(urls.posts)
}

export {
    postService
}