import { Metadata } from "next";
import { UserProfile } from "@/components/auth/user-profile";
import { ProtectedRoute } from "@/components/auth/protected-route";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your profile information",
};

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="container max-w-2xl py-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground">
              Manage your account settings and profile information.
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    </ProtectedRoute>
  );
}
