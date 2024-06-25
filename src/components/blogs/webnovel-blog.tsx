import { IconX } from "@tabler/icons-react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";

function WebNovelBlog() {
  return (
    <div className="max-w-3xl rounded-lg p-4 hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground sm:p-6">
      <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
        Sunday May 12, 2024
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 sm:mt-2 sm:text-2xl">
        Web novels you <span className="font-bold">MUST</span> read!
      </h2>
      <p className="line-clamp-2 text-sm leading-5 sm:text-base sm:leading-6">
        Web novels offer an incredible range of genres and styles, often delving
        into themes and plots that traditional publishing houses might shy away
        from. The creative freedom enjoyed by web novel authors allows them to
        experiment with unconventional narratives and character arcs, resulting
        in fresh, innovative stories that push the boundaries of traditional
        genres.
      </p>
      <Drawer>
        <DrawerTrigger>
          <Button variant="link" className="test-xs p-0 sm:p-2 sm:text-sm">
            Read More
          </Button>
        </DrawerTrigger>
        <DrawerContent className="top-0 mt-0">
          <div className="mx-auto flex w-full max-w-3xl items-center p-2">
            <div className="mx-auto h-2 w-[100px] rounded-full bg-muted" />
            <DrawerClose className="mr-3">
              <IconX stroke={1} />
            </DrawerClose>
          </div>
          <div className="mx-auto h-full max-w-3xl">
            <ScrollArea className="h-5/6 p-4">
              <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
                Sunday May 12, 2024
              </blockquote>
              <h1 className="mt-4 scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Web novels you <span className="font-bold">MUST</span> read!
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Web novels offer an incredible range of genres and styles, often
                delving into themes and plots that traditional publishing houses
                might shy away from. The creative freedom enjoyed by web novel
                authors allows them to experiment with unconventional narratives
                and character arcs, resulting in fresh, innovative stories that
                push the boundaries of traditional genres.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Typically released in serialized formats, web novels often have
                new chapters appearing daily or every couple of days. Many web
                novel platforms also facilitate direct interaction between
                readers and authors through comments or forums that can
                influence the direction of the story.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Web novels hail from various countries, providing readers with
                insights into different cultures and perspectives. Popular
                genres like Japanese light novels, Chinese xianxia, and Korean
                webtoons offer a rich tapestry of global storytelling, adding
                depth and diversity to the reading experience.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Easily accessible online, most web novels are free or available
                at a low cost. This affordability allows readers to discover new
                stories without a significant financial investment.
                Additionally, web novels often have dedicated fan communities
                that discuss plot theories and create fan art.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Since web novels bypass traditional publishing filters, readers
                can uncover hidden gems that might otherwise be overlooked. Some
                of these stories gain massive popularity and even transition
                into other media, such as manga, anime, or traditional
                publishing.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                With that said, the stories I am going to suggest are either web
                novels or were later published as books due to their immense
                popularity. Without further ado, here are some of my favorite
                novels, presented in no particular order:
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                <a
                  href="https://www.goodreads.com/book/show/57065516-the-perfect-run"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Perfect Run
                </a>
              </h2>
              <p className="test-sm text-muted-foreground">
                by Maxime J. Durand (Void Herald)
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The story has many super villains, a few superheroes and a
                vividly imagined world teeming with secrets waiting to be
                discovered. Remarkably, it's the only story that I believe has
                an undeniably perfect ending.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                From Volume 1:
              </p>
              <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
                Ryan 'Quicksave' Romano is an eccentric adventurer with a unique
                power: he can create a save-point in time and redo his life
                whenever he dies. In a chaotic era where potions can grant
                world-dominating powers and dangers lurk at every corner, Ryan
                sees only different routes. From hero to villain, he must try
                them all. Only then will he achieve his perfect ending... no
                matter how many loops it takes.
              </blockquote>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                And from Volume 3:
              </p>
              <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
                Ryan Romano has done it. He has gathered intel on all the
                villains threatening New Rome, listed all the people he wants to
                protect, and identified the places he needs to blow up and the
                cars he needs to steal. Now, all that's left is to go back in
                time one final time, execute the perfect sequence of events,
                save everyone, get the girl, and defeat the ultimate enemy. It's
                time for the Perfect Run.
              </blockquote>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                These descriptions provide a glimpse into Ryan's character and
                the overall type of story. But don't mistake it for a typical
                hero-villain narrative. Uncle Ben's "with great power comes
                great responsibility" quote doesn’t apply here. Most individuals
                who gain superpowers in this world pursue their own agendas, and
                Ryan is no different. He just wants to make his life exciting.
                Join him by delving into his antics, uncovering the secrets
                behind superpowers, and witnessing his quest to achieve the
                perfect run.
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                <a
                  href="https://www.goodreads.com/series/192821-cradle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cradle
                </a>
              </h2>
              <p className="test-sm text-muted-foreground">by Will Wight</p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Inspired by the Chinese 'Xianxia' genre, which involves mortals
                "cultivating" to achieve immortality, this novel will make you
                fall in love with the genre.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Cradle follows Lindon, a young kid despised by his family, clan,
                and culture for having no aptitude for the spiritual arts, for
                being unsouled. Then fate intervenes: Lindon witnesses a vision
                of the future where his home is annihilated. Determined to save
                his family and clan, he decides to leave the Sacred Valley to
                seek power elsewhere. A good decision by Lindon as he meets the
                young prodigy Yerin and the mysterious mentor Eithan, who claims
                to be the best janitor in the world. Lindon’s journey takes him
                from being a powerless child in a world of monstrosities to
                punching a hole in the sky. By the end, Lindon can only say:
                'Apologies, you are too weak!' to any martial artist who dares
                challenge him.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The world-building is top-notch, presenting our characters with
                numerous challenges to overcome within a gripping story. A word
                of caution: Books 1, 2, and 3 have a slow start, but after that,
                it's pure high-octane fun. I still get goosebumps thinking about
                Book 10: "Reaper" and the final Book 12: "Dreadgod."
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Cradle also imparts a lot of wisdom. Here are some memorable
                lines:
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  When a traveler cannot find a path, sometimes he must make his
                  own.
                </li>
                <li>
                  Fate is not the future. What is destined to occur, does not
                  always occur.
                </li>
                <li>Only storms turn fish into dragons...</li>
                <li>
                  The very idea beggared his imagination, but that only meant
                  his imagination was too limited.
                </li>
                <li>
                  Fate is not fair, but it is just. Hard work is never in
                  vain…even when it does not achieve what you wished.
                </li>
              </ul>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                <a
                  href="https://www.goodreads.com/book/show/59661342-mother-of-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mother of Learning
                </a>
              </h2>
              <p className="test-sm text-muted-foreground">
                by Domagoj Kurmaic (nobody103)
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Magical studies and a fascinating lore, what more do you need?
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                This novel holds a special place in my heart due to its central
                motto: "Repetition is the mother of learning." It's a story I've
                read and reread multiple times because it resonates with me.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The main character, Zorian, is below average in a world where
                magic is everything and those who wield it are supreme. By sheer
                luck, Zorian gets stuck in a time loop. Who made the time loop?
                What caused it? Zorian doesn't know, but he’s smart enough to
                realize this is his chance to become an exceptional magician
                despite his low talents. So, he goes onto have an authority over
                magic. Step-by-step. Repition-by-repition.{" "}
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                What I deeply appreciate is that no matter what happens, Zorian
                learns, adapts and overcomes.
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                <a
                  href="https://www.goodreads.com/series/309211-dungeon-crawler-carl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dungeon Crawler Carl
                </a>
              </h2>
              <p className="test-sm text-muted-foreground">by Matt Dinniman</p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Abosolute, unhinged madness!
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Dungeon Crawler Carl is a litRPG book series that takes readers
                on a wild, mind-bending ride. The initial concept is a bit
                outlandish: one day, every building, car, and structure with a
                roof on Earth suddenly disappears into the ground. Two-thirds of
                humanity perishes in the opening chapter. The reason? Aliens.
                The survivors are given a chance to participate in a dungeon
                crawl to reclaim Earth (though the game is rigged in the aliens'
                favor). An enormous 18-level dungeon full of monsters and
                dangers is generated beneath the Earth's surface. Why all this?
                It turns out that this dungeon crawl is the most popular TV
                reality show in the galaxy. In this game, it's not about your
                strength or dexterity—it's about your followers, your views.
                It's about building an audience, killing with style in the most
                grusome way. You can't just survive here. You have to survive
                big! They call it Dungeon Crawler World. But for Carl, it's
                anything but a game. Follow Carl as he plans to bring down the
                entire syndicate of aliens with his creativity.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The story is presented as comedic and cartoon-like, but beneath
                the humor, the situations are often horrific and deeply sad in
                an existential way. This book has made me think about the
                characters that make up a story and not treat them merely as
                entertainment, like those aliens do. It has taught me to respect
                a book and all the characters within it.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                As a side not, the author has signed with the Hollywood talent
                agency WME. So, fingers crossed 🤞, we might get a live-action
                series adaptation of the novel!
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                <a
                  href="https://www.goodreads.com/book/show/55880798-reverend-insanity-vol-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reverand Insanity
                </a>
              </h2>
              <p className="test-sm text-muted-foreground">by Gu Zhen Ren</p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                A Controversial Masterpiece
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Let me start by saying: this is a Chinese novel, and it is not
                for everyone. The novel became so famous and controversial that
                it got banned in China after some other jealous author
                complained to the government about its "anti-Chinese government"
                outlook and the questionable morality of the main character. As
                a result, the novel is incomplete, and we may never see its
                ending.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The main character, Fang Yuan, will stop at nothing to achieve
                Eternal life. The horrors he inflicts on himself and others in
                pursuit of his goal are indescribable. I have never disliked a
                character as much as him, but I must grudgingly admit that I
                also admire his relentless perseverance.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The world-building in Reverend Insanity is exceptionally
                detailed, with a plethora of characters. As Fang Yuan likes to
                say-"In this world, everyone is a main character, but also a
                side character"; you could pick any character from the story and
                write a separate tale about them. The downside is that the web
                novel is extremely long.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The cultivation system is well-defined but also peculiar. It
                revolves around Gus (insects) that contain fragments of the
                world's laws. This flexible magic system is highly variable. Gus
                are difficult to obtain, evolve, and create. Every Gu has a
                weakness that can be countered, so there is no absolute or most
                powerful Gu in this world. Sometimes, Gus represent abstract
                concepts—like Wisdom, Love, Space—rather than something tangible
                and specific.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                New readers should not start their journey into Chinese novels
                with Reverend Insanity. It sets the bar too high for any other
                Chinese web novel to even come close.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Let me finish this blog by one of Fang Yuan's quotes:
              </p>
              <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
                The path of life is treacherous, filled with trials and
                challenges. Only those with unwavering determination and
                resilience can overcome its obstacles, in the pursuit of one's
                goals, sacrifices are inevitable. Sometimes, the choices we make
                define our path in life, for better or for worse. Life is a
                journey of self-discovery. Through hardships and experiences, we
                learn, evolve, and ultimately shape our destinies.
              </blockquote>
            </ScrollArea>
          </div>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default WebNovelBlog;
