"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function UserButton() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (isPending) {
    return <div className="text-sm">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => router.push("/auth/signin")}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => router.push("/auth/signup")}
          className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">
        {session.user?.name || session.user?.email}
      </span>
      <button
        type="button"
        onClick={handleSignOut}
        className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Sign Out
      </button>
    </div>
  );
}
