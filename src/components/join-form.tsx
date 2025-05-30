"use client";

import type React from "react";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function JoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-xl font-bold">
          Welcome to the barely literate society!
        </h3>
        <p className="text-muted-foreground">
          thank you for joining our community. we've sent a confirmation email
          with details about upcoming events.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          return to form
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">first name</Label>
          <Input id="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">last name</Label>
          <Input id="last-name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">email</Label>
        <Input id="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reading-preference">reading preferences</Label>
        <Select>
          <SelectTrigger id="reading-preference">
            <SelectValue placeholder="Select your preferences" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fiction">fiction</SelectItem>
            <SelectItem value="non-fiction">non-fiction</SelectItem>
            <SelectItem value="classics">classics</SelectItem>
            <SelectItem value="mystery">mystery & thriller</SelectItem>
            <SelectItem value="scifi">science fiction & fantasy</SelectItem>
            <SelectItem value="all">all genres</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="meetup-preference">meetup Preference</Label>
        <Select>
          <SelectTrigger id="meetup-preference">
            <SelectValue placeholder="Select your preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in-person">in-person only</SelectItem>
            <SelectItem value="virtual">virtual Only</SelectItem>
            <SelectItem value="both">both in-person & virtual</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="about">tell us about yourself</Label>
        <Textarea
          id="about"
          placeholder="what kind of books do you enjoy? what are you hoping to get out of the barely literate book society?"
          className="min-h-[100px]"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 rounded border-gray-300"
          required
        />
        <Label htmlFor="terms" className="text-sm font-normal">
          i agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit" className="w-full">
        join the society
      </Button>
    </form>
  );
}
