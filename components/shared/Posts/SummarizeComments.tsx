"use client";

import { Button } from "@/components/ui/button";
import { createQuiz } from "@/lib/actions/comments.actions";
import { Loader } from "lucide-react";
import React, { useState } from "react";

const SummarizeComments = ({ comments, post }: { comments: any, post: any }) => {
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <>
            {!summary && !loading && <Button variant={"outline"}
                onClick={async () => {
                    setLoading(true);
                    const response = await createQuiz(comments.map((comment: any) => comment.content), "criticism", post.content);
                    setSummary(response.data);
                    setLoading(false);
                }}
            >
                Summarize Comments
            </Button>}
            {loading && <Loader className="animate-spin mx-auto" />}
            {!loading && summary && <p>{summary}</p>}
        </>
    )
}

export default SummarizeComments;