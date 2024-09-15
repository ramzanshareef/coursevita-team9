// import { IPostPopulated, SearchParamProps } from "@/types";
// import React from "react";
// import SortComments from "./SortComments";
// import AddComment from "./AddComment";
// import { auth } from "@clerk/nextjs";
// import { getUser } from "@/lib/actions/user.actions";
// import ViewComments from "./ViewComments";
// import SubscribeComments from "./SubscribeComments";

// const Comments = async ({
//   post,
//   currentUser,
//   searchParams,
// }: {
//   post: IPostPopulated;
//   currentUser: string;
//   searchParams: any;
// }) => {
//   const { userId } = auth();
//   let curUser = null;
//   if (userId) {
//       curUser = await getUser(userId);
//     }
//   const subscribed = post.notifyUsersOnComment.includes(curUser?._id!);
//   if (searchParams.orderBy === "latest") {
//     post.comments.sort((a, b) => {
//       return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//     });
//   } else if (searchParams.orderBy === "oldest") {
//     post.comments.sort((a, b) => {
//       return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
//     });
//   } else {
//     post.comments.sort(
//       (a, b) =>
//         b?.upvotes?.length! -
//         b?.downvotes?.length! -
//         (a?.upvotes?.length! - a?.downvotes?.length!)
//     );
//   }
//   return (
//     <div>
//       <div className="flex justify-between flex-wrap gap-y-5 items-center mt-3 gap-2">
//         <div className="flex items-center gap-2">
//           <p className="capitalize text-2xl font-semibold">
//             {searchParams.orderBy || "All"} comments
//           </p>{" "}
//           <SortComments postId={post?._id?.toString()!} />
//         </div>
//         <SubscribeComments subscribed={ subscribed } currentUser={curUser} post={post} />
//       </div>
//       {curUser && <AddComment post={post} currentUser={curUser} />}
//       {post.comments.length > 0 ? (
//         <ViewComments
//           comments={post.comments}
//           post={post}
//           currentUser={curUser}
//         />
//       ) : (
//         <>
//           <p className="text-lg text-center text-gray-600 font-semibold mt-4">
//             No comments yet
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Comments;
import { IPostPopulated } from "@/types";
import React from "react";
import SortComments from "./SortComments";
import AddComment from "./AddComment";
import { auth } from "@clerk/nextjs";
import { getUser } from "@/lib/actions/user.actions";
import ViewComments from "./ViewComments";
import SubscribeComments from "./SubscribeComments";
import { Textarea } from "@/components/ui/textarea";
import SummarizeComments from "./SummarizeComments";

const Comments = async ({
    post,
    currentUser,
    searchParams,
}: {
    post: IPostPopulated;
    currentUser: string;
    searchParams: any;
}) => {
    const { userId } = auth();
    let curUser = null;
    if (userId) {
        curUser = await getUser(userId);
    }
    const subscribed = post.notifyUsersOnComment.includes(curUser?._id!);
    if (searchParams.orderBy === "latest") {
        post.comments.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    } else if (searchParams.orderBy === "oldest") {
        post.comments.sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
    } else {
        post.comments.sort(
            (a, b) =>
                b?.upvotes?.length! -
                b?.downvotes?.length! -
                (a?.upvotes?.length! - a?.downvotes?.length!)
        );
    }
    return (
        <div>
            {post.author._id === curUser._id && <div className="flex flex-col justify-center">
                <h3>Summary</h3>
                <div className="flex gap-4 items-start mt-2">
                    <div className="flex flex-col flex-1 gap-3 bg-gray-300 rounded-md p-2">
                        <SummarizeComments comments={post.comments} post={post} />
                    </div>
                </div>
            </div>}
            <div className="flex justify-between flex-wrap gap-y-5 items-center mt-3 gap-2">
                <div className="flex items-center gap-2">
                    <p className="capitalize text-2xl font-semibold">
                        {searchParams.orderBy || "Top"} comments
                    </p>{" "}
                    <SortComments postId={post?._id?.toString()!} />
                </div>
                <SubscribeComments subscribed={subscribed} currentUser={curUser} post={post} />
            </div>
            {curUser && <AddComment post={post} currentUser={curUser} />}
            {post.comments.length > 0 ? (
                <ViewComments
                    comments={post.comments}
                    post={post}
                    currentUser={curUser}
                />
            ) : (
                <>
                    <p className="text-lg text-center text-gray-600 font-semibold mt-4">
                        No comments yet
                    </p>
                </>
            )}
        </div>
    );
};

export default Comments;
