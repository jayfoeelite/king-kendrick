import React from 'react';
import { Instagram, Mail, Trophy, User, School, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation with white background */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#b17d05]/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img 
            src="https://res.cloudinary.com/dr25ekobh/image/upload/v1734998210/kkLogo_iu4fsf.png"
            alt="King Kendrick Logo"
            className="h-12 w-auto"
          />
          <div className="flex gap-6">
            <a href="#profile" className="text-black hover:text-[#b17d05] transition">Profile</a>
            <a href="#highlights" className="text-black hover:text-[#b17d05] transition">Media</a>
            <a href="#news" className="text-black hover:text-[#b17d05] transition">News</a>
            <a href="#contact" className="text-black hover:text-[#b17d05] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center text-center px-4 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">King Kendrick</h1>
          <p className="text-xl md:text-2xl text-[#b17d05] mb-8">Rising Basketball Star</p>
          <div className="flex justify-center gap-4">
            <a href="#highlights" className="bg-[#b17d05] text-white px-8 py-3 rounded-full hover:bg-[#8e6404] transition">
              Watch Highlights
            </a>
            <a href="#contact" className="border-2 border-[#b17d05] text-[#b17d05] px-8 py-3 rounded-full hover:bg-[#b17d05] hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Player Profile section */}
      <section id="profile" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Player Profile</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-xl">
                <User className="text-[#b17d05]" size={24} />
                <span>Position: Point Guard</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <Trophy className="text-[#b17d05]" size={24} />
                <span>Height: 6'0"</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <School className="text-[#b17d05]" size={24} />
                <span>Class of 2027</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <Brain className="text-[#b17d05]" size={24} />
                <span>School: Caldwell Academy</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-[#b17d05]">Key Attributes</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Elite ambidextrous ball handler</li>
                  <li>Exceptional court vision</li>
                  <li>Strong finisher with both hands</li>
                  <li>High basketball IQ</li>
                </ul>
              </div>
              <div className="mt-4">
                <a 
                  href="https://247sports.com/Player/king-kendrick-46142578/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b17d05] hover:underline"
                >
                  View Full Prospect Profile →
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dr25ekobh/image/upload/v1734999168/GfWr16KWsAEnHRV_jhndae.jpg"
                alt="Basketball Action Shot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="highlights" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Media Coverage</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#b17d05]">Featured Interview</h3>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/w-SLhLYzvVc"
                  title="Rising Star King Kendrick farewell to Ohio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#b17d05]">Game Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QKD_a1mnA_w"
                    title="King Kendrick Additional Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/MHIi5kY3JU4"
                    title="King Kendrick Latest Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9XZzJEH7WU8"
                    title="King Kendrick x Northland Vikings Sophomore Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/lkSyfcKgJ8c"
                    title="15 YEARS OLD KING KENDRICK DROPPING 35PTS AT PRO AM IN TORONTO"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/e5ZHQ3joCv0"
                    title="King Kendrick Freshman Season Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/1TS03TdzcLs"
                    title="Additional King Kendrick Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest News</h2>
          <div className="space-y-8">
            <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#b17d05]">King Kendrick is a Clear X-Factor</h3>
              <p className="text-lg mb-6">
                Coming from Ohio, Kendrick enters North Carolina with a lot of buzz surrounding his name. Upon our first viewing, all the praising comments made sense. It doesn't take more than a few seconds to recognize his tight handle, sharp vision, and impressive feel for the game.
              </p>
              <p className="text-lg mb-6">
                Kendrick dictates the action with tremendous pace and poise, breaking down defenses and knowing the right play before it even materializes. He's quick and crafty enough to touch the paint at a constant rate, where he's able to finish or set up others to score.
              </p>
              <p className="text-lg mb-6">
                Kendrick knocks down jumpers at a reliable clip and mirrors opposing guards as a defender at the point of attack. Since reclassifying, he should easily be among the top players in North Carolina's Class of 2027.
              </p>
              <div className="text-sm text-gray-400 mb-4">October 9, 2024</div>
              <a 
                href="https://www.phenomhoopreport.com/open-gym-takeaways-from-caldwell-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b17d05] hover:underline"
              >
                Read Full Article →
              </a>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#b17d05]">Introducing: Columbus Northland's ambidextrous 2026 star King Kendrick</h3>
              <p className="text-lg mb-6">
                College coaches are taking note of Columbus Northland 2026 guard King Kendrick, who can hit jump shots with both hands. Kendrick is considered one of Ohio's top five prospects in the 2026 class.
              </p>
              <p className="text-lg mb-6">
                Explosive, ambidextrous and diminutive – those are just three of the words that can be used to describe Columbus Northland's dynamic 2026 point guard King Kendrick.
              </p>
              <div className="text-sm text-gray-400 mb-4">June 12, 2023</div>
              <a 
                href="https://247sports.com/college/ohio-state/LongFormArticle/Columbus-Northland-2026-guard-King-Kendrick-has-rare-skill-to-hit-jump-shots-with-both-hands-211481187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b17d05] hover:underline"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Management & Contact</h2>
          <div className="bg-black p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#b17d05]">Management</h3>
                <p className="mb-4">Overtime Sports Management Group</p>
                <p className="mb-4">Agent: Waukeen McCoy Esq</p>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="text-[#b17d05]" size={20} />
                  <a href="mailto:kingkendrick@teamosmgwest.com" className="hover:text-[#b17d05] transition">
                    kingkendrick@teamosmgwest.com
                  </a>
                </div>
                <a href="https://teamosmg.com" target="_blank" rel="noopener noreferrer" className="text-[#b17d05] hover:underline">
                  teamosmg.com
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#b17d05]">Social Media</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://www.instagram.com/_iamkingggg/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#b17d05] transition">
                    <Instagram size={20} />
                    <span>@_iamkingggg</span>
                  </a>
                  <a href="https://x.com/_iamkingg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#b17d05] transition">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                    <span>@_iamkingg</span>
                  </a>
                  <a href="https://www.tiktok.com/@_kingkendrick" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#b17d05] transition">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                    <span>@_kingkendrick</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 px-4 border-t border-[#b17d05]/20">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} King Kendrick. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;