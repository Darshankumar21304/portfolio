
"use client";

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { ABOUT_SECTION_PROPS, SITE_TITLE } from '@/lib/constants';
import { cn } from '@/lib/utils';

const TYPING_SPEED = 50; // Milliseconds per character for main titles/bio
const ROLE_TYPING_SPEED = 100; // Speed for typing each role
const ROLE_PAUSE_DURATION = 2000; // Pause after a role is typed before erasing
const ROLE_ERASE_SPEED = 50; // Speed for erasing a role
const INTER_ELEMENT_DELAY = 300; // Milliseconds delay between typing different elements (title, subtitle)

const AboutSection = () => {
  const { title, subtitle, icon: SectionIcon, imageUrl, imageHint, bioParagraphs, roles } = ABOUT_SECTION_PROPS;

  const [typedTitle, setTypedTitle] = useState('');
  const [typedSubtitle, setTypedSubtitle] = useState('');
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isTypingRole, setIsTypingRole] = useState(true);
  const [isRoleFullyTyped, setIsRoleFullyTyped] = useState(false);

  const [isTitleTyping, setIsTitleTyping] = useState(true);
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);
  const [startRoleTyping, setStartRoleTyping] = useState(false);

  const bioContent = useMemo(() => bioParagraphs[0] || '', [bioParagraphs]);

  // Effect for typing the main section title
  useEffect(() => {
    if (isTitleTyping && typedTitle.length < title.length) {
      const timeoutId = setTimeout(() => {
        setTypedTitle(title.substring(0, typedTitle.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeoutId);
    } else if (typedTitle.length === title.length && isTitleTyping) {
      setIsTitleTyping(false);
      setTimeout(() => setIsSubtitleTyping(true), INTER_ELEMENT_DELAY);
    }
  }, [typedTitle, title, isTitleTyping]);

  // Effect for typing the subtitle
  useEffect(() => {
    if (isSubtitleTyping && typedSubtitle.length < subtitle.length) {
      const timeoutId = setTimeout(() => {
        setTypedSubtitle(subtitle.substring(0, typedSubtitle.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeoutId);
    } else if (typedSubtitle.length === subtitle.length && isSubtitleTyping) {
      setIsSubtitleTyping(false);
      setTimeout(() => setStartRoleTyping(true), INTER_ELEMENT_DELAY); 
    }
  }, [typedSubtitle, subtitle, isSubtitleTyping]);

  // Effect for typing and cycling roles
  useEffect(() => {
    if (!startRoleTyping || !roles || roles.length === 0) return;

    let timeoutId: NodeJS.Timeout;

    if (isTypingRole) {
      if (typedRole.length < roles[currentRoleIndex].length) {
        timeoutId = setTimeout(() => {
          setTypedRole(roles[currentRoleIndex].substring(0, typedRole.length + 1));
        }, ROLE_TYPING_SPEED);
      } else {
        // Role fully typed
        setIsRoleFullyTyped(true);
        timeoutId = setTimeout(() => {
          setIsTypingRole(false); // Start erasing
        }, ROLE_PAUSE_DURATION);
      }
    } else { // Erasing role
      if (typedRole.length > 0) {
        timeoutId = setTimeout(() => {
          setTypedRole(typedRole.substring(0, typedRole.length - 1));
        }, ROLE_ERASE_SPEED);
      } else {
        // Role fully erased
        setIsRoleFullyTyped(false);
        setIsTypingRole(true);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [typedRole, currentRoleIndex, roles, isTypingRole, startRoleTyping]);


  const codeLineCount = 17; 

  return (
    <section id="about" className="py-20 bg-[#1A1A2E] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10"> {/* Added pb-10 for spacing if needed */}
        <div className="text-center mb-16">
          {SectionIcon && <SectionIcon className="h-16 w-16 text-accent mx-auto mb-6 animation-fade-in" />}
          <h1 className={cn(
            "font-headline text-5xl md:text-6xl font-bold text-accent mb-5 min-h-[72px] md:min-h-[90px]",
            isTitleTyping && 'typing-active'
          )}>
            {typedTitle}
          </h1>
          <p className={cn(
            "text-xl text-primary-foreground/90 max-w-3xl mx-auto min-h-[56px]",
            isSubtitleTyping && 'typing-active'
          )}>
            {typedSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start animation-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-transform duration-300">
            <Image
              src={imageUrl}
              alt={SITE_TITLE}
              layout="fill"
              objectFit="cover"
              data-ai-hint={imageHint}
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
          </div>
          
          <div className="lg:col-span-3 rounded-lg shadow-2xl overflow-hidden">
            {/* Editor Header */}
            <div className="bg-slate-800 p-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <div className="text-sm text-slate-400 font-code">File: aboutMe.js</div>
            </div>

            {/* Editor Body */}
            <div className="bg-[#1E1E2F] text-slate-300 p-4 sm:p-6 font-code text-sm md:text-base flex">
              {/* Line Numbers */}
              <div className="pr-4 text-right text-slate-500 select-none">
                {Array.from({ length: codeLineCount }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              {/* Code Content */}
              <pre className="whitespace-pre-wrap overflow-x-auto">
                <div><span className="text-green-400">// File: aboutMe.js</span></div>
                <div><span className="text-green-400">// Captain's Log: {SITE_TITLE}</span></div>
                <div> </div>
                <div><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">developerProfile</span> = {'{'}</div>
                <div>  <span className="text-[#82aaff]">name</span>: <span className="text-[#ecc48d]">"{SITE_TITLE}"</span>,</div>
                <div>  <span className="text-[#82aaff]">roles</span>: [</div>
                <div>    <span className={cn("text-[#ecc48d]", startRoleTyping && (isTypingRole || isRoleFullyTyped) && 'typing-active')}>"{typedRole}"</span></div>
                <div>  ],</div>
                <div>  <span className="text-[#82aaff]">bio</span>: <span className="text-[#ecc48d]">{`\`${bioContent.replace(/\n/g, '\\n')}\``}</span>,</div>
                <div>  <span className="text-[#82aaff]">contact</span>: {'{'}</div>
                <div>    <span className="text-green-400">// email: "darshan.k@example.com",</span></div>
                <div>    <span className="text-green-400">// portfolio: "https://yourportfolio.dev"</span></div>
                <div>  {'}'}</div>
                <div>{'}'};</div>
                <div> </div>
                <div><span className="text-green-400">// Status: Actively coding the next wave of innovation! 🌊</span></div>
                <div><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">developerProfile</span>;</div>
              </pre>
            </div>
          </div>
        </div>
      </div>
      {/* WavyDivider removed from here */}
    </section>
  );
};

export default AboutSection;
