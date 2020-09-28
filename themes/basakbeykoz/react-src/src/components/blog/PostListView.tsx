import React from 'react';
import { TimestampedSingular } from '../../features/wordpress/@types-wp';
import PostListCardView from './PostListCardView';
import "./_postList.scss";

interface OwnProps {
    postListItems: TimestampedSingular[],
    locale: string,
}

type Props = OwnProps

function PostListView(props: Props) {
    const { postListItems, locale, } = props;

    const postList = postListItems.map((single) => {
        return (
            <li key={single.data.slug}>
                <PostListCardView 
                    {...single.data}
                    locale={locale}
                />
            </li>
        )
    });

    return (
        <div className="PostList">
            <ol>
                {postList}
            </ol>
        </div>
    );
}

export default PostListView;