"use client";

import Link from "next/link";
import { Book, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";

export function Nav() {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <Link
            href="/"
            className="text-xl font-serif font-bold tracking-tight"
          >
            barely literate
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            about
          </Link>
          <Link
            href="/#voting"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            book voting
          </Link>
          <Link
            href="/#meetups"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            meetups
          </Link>
          <Link
            href="/#reviews"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            reviews
          </Link>
          <Link
            href="/#reviews"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            ita literary festival
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop Auth Buttons - hidden on mobile */}
          <div className="hidden md:block">
            {user ? (
              <Button asChild size="sm" variant="outline">
                <Link href="/profile">Profile</Link>
              </Button>
            ) : (
              <Button asChild size="sm">
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <div className="block md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - hidden on desktop */}
      {isMobileMenuOpen && (
        <div className="block md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                about
              </Link>
              <Link
                href="/#voting"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                book voting
              </Link>
              <Link
                href="/#meetups"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                meetups
              </Link>
              <Link
                href="/#reviews"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                reviews
              </Link>
              <Link
                href="/#ita"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ita literary festival
              </Link>
            </nav>
            <div className="pt-4 border-t">
              {user ? (
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </Button>
              ) : (
                <Button asChild size="sm" className="w-full">
                  <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
