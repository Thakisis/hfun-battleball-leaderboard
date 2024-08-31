import { PageHeader } from "@/components/page-header";
import { LeaderboardSkeleton } from "@/components/leaderboard/leaderboard-skeleton";
import dynamic from "next/dynamic";

const LeaderboardContent = dynamic(
    () => import("@/components/leaderboard/leaderboard-content"),
    {
        loading: () => <LeaderboardSkeleton />,
    }
);

export default function LeaderboardPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <PageHeader />
            <main className="flex-grow flex justify-center p-4">
                <div className="container mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                    <LeaderboardContent />
                </div>
            </main>
        </div>
    );
}
