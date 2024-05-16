import React, {FC, PropsWithChildren} from 'react';
import {IPostInterface} from "../../interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post: IPostInterface
}

const Post: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};