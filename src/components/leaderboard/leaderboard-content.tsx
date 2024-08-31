"use client";

import { useState } from "react";
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { ErrorDisplay } from "@/components/error-display";
import { CountdownTimer } from "@/components/leaderboard/countdown-timer";
import { LeaderboardPagination } from "@/components/leaderboard/leaderboard-pagination";
import { useLeaderboardData } from "@/hooks/use-leaderboard-data";
import { columns } from "@/components/leaderboard/leaderboard-columns";
import { LeaderboardSkeleton } from "@/components/leaderboard/leaderboard-skeleton";

export default function LeaderboardContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

    const { leaderboard, isLoading, error, nextUpdateIn, updateInterval, totalPages } = useLeaderboardData(currentPage, perPage);

    if (isLoading) return <LeaderboardSkeleton />;
    if (error) return <ErrorDisplay message={error} />;

    return (
        <>
            {nextUpdateIn !== null && updateInterval !== null && (
                <CountdownTimer initialSeconds={nextUpdateIn} totalSeconds={updateInterval} />
            )}
            <LeaderboardTable data={leaderboard} columns={columns} />
            <LeaderboardPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}