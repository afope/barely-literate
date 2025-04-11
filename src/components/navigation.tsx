"use client";

import { useAuth } from "@/contexts/auth-context";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Link } from "lucide-react";

export function Navigation() {
  const { user } = useAuth();

  return (
    <nav>
      {/* Your existing navigation items */}
      <nav className="hidden md:flex gap-6">
        <Link
          href="#about"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          about
        </Link>
        <Link
          href="#voting"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          book voting
        </Link>
        <Link
          href="#meetups"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          meetups
        </Link>
        <Link
          href="#reviews"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          reviews
        </Link>
      </nav>
      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.email}</span>
          <SignOutButton />
        </div>
      ) : (
        <Link href="/login">Sign In</Link>
      )}
    </nav>
  );
}
