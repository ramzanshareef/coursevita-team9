// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import React from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const SortComments = ({ postId }: { postId: string }) => {
//   const params = useSearchParams();
//   const defaultValue = params.get("orderBy") || "all";
//   const router = useRouter();
//   const handleChange = (e: any) => {
//     console.log(e);
//     router.push(`/post/${postId}/?orderBy=` + e || defaultValue, {
//       scroll: false,
//     });
//   };
//   return (
//     <div>
//       <Select onValueChange={handleChange}>
//         <SelectTrigger className="w-10 bg-white focus-visible:ring-0 focus-visible:ring-offset-0"></SelectTrigger>
//         <SelectContent className="bg-white px-2" defaultValue={defaultValue}>
//           <h3 className="text-lg py-1 font-semibold">Sort comments:</h3>
//           <SelectItem value="all" className="hover:bg-gray-300 cursor-pointer">
//             <p className="text-base font-medium">All</p>
//             <p className="text-sm text-gray-600">
//               Most upvoted and relevant comments will be first
//             </p>
//           </SelectItem>
//           <SelectItem
//             value="appreciation"
//             className="hover:bg-gray-300 cursor-pointer"
//           >
//             <p className="text-base font-medium">Appreciation</p>
//             <p className="text-sm text-gray-600">
//               Most recent comments will be first
//             </p>
//           </SelectItem>
//           <SelectItem
//             value="suggestion"
//             className="hover:bg-gray-300 cursor-pointer"
//           >
//             <p className="text-base font-medium">Suggestion</p>
//             <p className="text-sm text-gray-600">
//               The oldest comments will be first
//             </p>
//           </SelectItem>
//           <SelectItem
//             value="question"
//             className="hover:bg-gray-300 cursor-pointer"
//           >
//             <p className="text-base font-medium">Question</p>
//             <p className="text-sm text-gray-600">
//               The oldest comments will be first
//             </p>
//           </SelectItem>
//           <SelectItem
//             value="criticism"
//             className="hover:bg-gray-300 cursor-pointer"
//           >
//             <p className="text-base font-medium">Criticism</p>
//             <p className="text-sm text-gray-600">
//               The oldest comments will be first
//             </p>
//           </SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default SortComments;

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortComments = ({ postId }: { postId: string }) => {
  const params = useSearchParams();
  const defaultValue = params.get("category") || "all";
  const router = useRouter();

  const handleChange = (value: string) => {
    router.push(`/post/${postId}/?category=${value}`, { scroll: false });
  };

  return (
    <div>
      <Select onValueChange={handleChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-40 bg-white focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue placeholder="Sort by type" />
        </SelectTrigger>
        <SelectContent className="bg-white px-2">
          <h3 className="text-lg py-1 font-semibold">Filter comments by type:</h3>
          <SelectItem value="all" className="hover:bg-gray-300 cursor-pointer">
            <p className="text-base font-medium">All</p>
          </SelectItem>
          <SelectItem
            value="appreciation"
            className="hover:bg-gray-300 cursor-pointer"
          >
            <p className="text-base font-medium">Appreciation</p>
          </SelectItem>
          <SelectItem
            value="suggestion"
            className="hover:bg-gray-300 cursor-pointer"
          >
            <p className="text-base font-medium">Suggestion</p>
          </SelectItem>
          <SelectItem
            value="question"
            className="hover:bg-gray-300 cursor-pointer"
          >
            <p className="text-base font-medium">Question</p>
          </SelectItem>
          <SelectItem
            value="criticism"
            className="hover:bg-gray-300 cursor-pointer"
          >
            <p className="text-base font-medium">Criticism</p>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortComments;
