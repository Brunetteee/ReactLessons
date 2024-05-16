import React, {useEffect, useState} from 'react';
import {IPostInterface} from "../../interfaces/postInterface";
import {postService} from "../../services/postService";
import {Post} from "./post";

const Posts = () => {
    const [posts, setPosts] = useState<IPostInterface[]>([])

    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post =><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};