import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Users,
  Star,
  ArrowRight,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookVotingCard } from "@/components/book-voting-card";
import { ReviewCard } from "@/components/review-card";
import { JoinForm } from "@/components/join-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-serif font-bold tracking-tight">
              barely literare
            </span>
          </div>
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
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="#join">join the society</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-muted py-24 md:py-32">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center "></div>
          <div className="container relative grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              {/* <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                x Join our literary community
              </div> */}
              <h1 className="text-[#fff000] font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                discover, discuss, and delight in books together
              </h1>
              {/* <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ITA Book Club brings book lovers together to explore new worlds,
                share perspectives, and build lasting connections through the
                joy of reading.
              </p> */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#join">
                    join now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#voting">this month's books</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-square max-w-md rounded-full bg-primary/10 p-4 md:p-8">
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5"></div> */}
              {/* <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Stack of books with a cup of coffee"
                className="relative z-10 rounded-full object-cover"
                priority
              /> */}
              {/* <div className="absolute -right-4 -top-4 rounded-full bg-background p-3 shadow-lg">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
              </div> */}
              {/* <div className="absolute -bottom-4 -left-4 rounded-full bg-background p-3 shadow-lg">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                why join the 'barely literate' society?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                our community offers more than just reading—it's about
                connection, discovery, and growth.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/50 backdrop-blur transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    curated selections
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    discover books you might never find on your own, carefully
                    selected for quality and diversity.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    vibrant community
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    connect with fellow book lovers who share your passion for
                    literature and thoughtful discussion.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur transition-all hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    regular meetups
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    engage in lively in-person and virtual discussions that
                    deepen your understanding and appreciation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Book Voting Section */}
        <section id="voting" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                vote for next month's book
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                help shape our reading journey by voting for your favorite from
                our curated selection.
              </p>
            </div>
            <Tabs defaultValue="fiction" className="mt-12">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="fiction">fiction</TabsTrigger>
                  <TabsTrigger value="non-fiction">non-fiction</TabsTrigger>
                  <TabsTrigger value="classics">classics</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="fiction" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <BookVotingCard
                    title="chronicles from the land of the happiest people on earth"
                    author="wole soyinka"
                    description="Between life and death there is a library, and within that library, the shelves go on forever."
                    votes={42}
                    coverUrl="/images/chronicles.jpg"
                  />
                  <BookVotingCard
                    title="sula"
                    author="tony morrison"
                    description="A celebration of books and the connections that transcend time and space."
                    votes={38}
                    coverUrl="/images/sula.jpg"
                  />
                  <BookVotingCard
                    title="ghana must go"
                    author="taiye selasi"
                    description="A novel of art, time travel, love, and plague."
                    votes={27}
                    coverUrl="/images/ghana must go.jpg"
                  />
                </div>
              </TabsContent>
              <TabsContent value="non-fiction" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <BookVotingCard
                    title="wayward lives, beautiful experiments"
                    author="sadiya hartman"
                    description="Tiny Changes, Remarkable Results: An Easy & Proven Way to Build Good Habits & Break Bad Ones."
                    votes={35}
                    coverUrl="/images/wayward.jpg?height=300&width=200"
                  />
                  <BookVotingCard
                    title="all about love"
                    author="bell hooks"
                    description="The New Science of a Lost Art - exploring how we breathe and how to do it better."
                    votes={29}
                    coverUrl="/images/love.jpg?height=300&width=200"
                  />
                  <BookVotingCard
                    title="naomi osaka"
                    author="ben rothenberg"
                    description="Time Management for Mortals - making the most of our radically finite lives."
                    votes={31}
                    coverUrl="/images/naomi.jpeg?height=300&width=200"
                  />
                </div>
              </TabsContent>
              <TabsContent value="classics" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <BookVotingCard
                    title="things fall apart"
                    author="chinua achebe"
                    description="A story of racial injustice and moral growth in the American South."
                    votes={41}
                    coverUrl="/images/fall.jpg"
                  />
                  <BookVotingCard
                    title="one hundred years of solitude"
                    author="gabriel garcía márquez"
                    description="The multi-generational story of the Buendía family in the fictional town of Macondo."
                    votes={37}
                    coverUrl="/images/solitude.jpg"
                  />
                  <BookVotingCard
                    title="pride and prejudice"
                    author="jane austen"
                    description="A classic tale of love, reputation, and societal expectations."
                    votes={45}
                    coverUrl="/images/pp.jpg"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Meetups Section */}
        <section id="meetups" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                join our meetups
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                connect with fellow readers in person or virtually to discuss
                our monthly selections.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/meeting.jpg"
                    width={800}
                    height={400}
                    alt="People discussing books at a cafe"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      last sunday of every month
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold">
                    in-person discussions
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    join us at MILIKI for lively discussions over coffee and
                    pastries. Our in-person meetups are the perfect way to
                    connect with local book lovers.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      view schedule
                    </Button>
                    <Button size="sm">RSVP Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/online.jpg"
                    width={800}
                    height={400}
                    alt="Virtual book club meeting"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      every wednesday at 7pm
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold">
                    virtual book talks
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    can&apos;t make it in person? join our virtual discussions
                    from anywhere in the world. our online meetups are
                    interactive and welcoming to all.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      view schedule
                    </Button>
                    <Button size="sm">join online</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                member reviews
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                see what our community is saying about our recent book
                selections.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ReviewCard
                bookTitle="the famished road"
                bookAuthor="ben okri"
                reviewerName="mofe ojo"
                rating={5}
                review="A breathtaking retelling that brings ancient mythology to vivid life. The prose is lyrical and the emotional impact is profound."
                avatarUrl="/images/mofe.jpg"
                bookCoverUrl="/images/the-famished-road.jpg"
              />
              <ReviewCard
                bookTitle="what happened miss simone"
                bookAuthor="alan light"
                reviewerName="tide ojo"
                rating={4}
                review="A thought-provoking exploration of what it means to be human, told through the eyes of an artificial friend. Ishiguro's subtle storytelling is masterful."
                avatarUrl="/images/tide.jpg"
                bookCoverUrl="/images/simone.jpg"
              />
              <ReviewCard
                bookTitle="the palmwine drinkard"
                bookAuthor="amos tutuola"
                reviewerName="tani ojo"
                rating={5}
                review="An incredible memoir about the transformative power of education. Our discussion about this book was one of the most engaging we've had."
                avatarUrl="/images/tani.jpg"
                bookCoverUrl="/images/drinkard.png"
              />
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="mt-4">
                view all reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                  become a member
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  join our community of book lovers and enjoy exclusive
                  benefits:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>vote on our monthly book selections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>attend in-person and virtual meetups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>share your reviews and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>receive discounts at partner bookstores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>access our digital library and resources</span>
                  </li>
                </ul>
                <div className="relative mt-8 overflow-hidden rounded-xl bg-muted p-8">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10"></div>
                  <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/10"></div>
                  <div className="relative">
                    <blockquote className="font-serif text-lg italic">
                      &quot;joining the barely literate society has been one of
                      the best decisions I&apos;ve made. I&apos;ve discovered
                      amazing books and made wonderful friends who share my
                      passion for reading.&quot;
                    </blockquote>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src="/images/mofe.jpg"
                          width={100}
                          height={100}
                          alt="Member avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">jessica regina</p>
                        <p className="text-sm text-muted-foreground">
                          member since 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl border bg-background p-6 shadow-sm md:p-8">
                <div className="absolute -right-3 -top-3 h-12 w-12 rounded-full bg-primary"></div>
                <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-full bg-primary"></div>
                <div className="relative">
                  <h3 className="font-serif text-2xl font-bold">
                    join the barely literate society
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    fill out the form below to become a member. it&apos;s free
                    to join!
                  </p>
                  <JoinForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-xl font-serif font-bold tracking-tight">
                  barely literate society
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                a community of book lovers dedicated to exploring literature
                together.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold">quick links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#voting"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    book voting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#meetups"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    meetups
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold">resources</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    reading lists
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    discussion guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    book recommendations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    author interviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold">stay connected</h4>
              <p className="mt-4 text-sm text-muted-foreground">
                subscribe to our newsletter for updates on new books, events,
                and more.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  required
                />
                <Button type="submit" size="sm">
                  subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} barely literate society. all rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
