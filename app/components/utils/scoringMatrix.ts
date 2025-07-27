import { ArchetypeConfig, ScoringMatrix } from "./types";

export const scoringMatrix: ScoringMatrix = {
  archetypes: [
    {
      name: 'architect',
      description:
        'You see the world as a system to be understood, optimized, and built. With a mind wired for logic and precision, you thrive where structure meets innovation — turning complexity into clarity, and ideas into engineered reality.',
      coreTags: ['builder', 'system', 'debugger'],
      secondaryTags: ['technical', 'logical', 'structured'],
      tertiaryTags: ['detail-oriented', 'methodical', 'analytical'],
      roles: [
        {
          title: 'Backend Developer',
          description: 'Builds and maintains server-side logic and infrastructure.',
          why: 'Your logical mind, precision, and love for structure make you perfect for building the powerful backbones of apps and software.',
        },
        {
          title: 'DevOps Engineer',
          description: 'Automates and streamlines development and operations workflows.',
          why: 'Your methodical nature and technical mindset make you ideal for bridging development and operations with clarity and control.',
        },
        {
          title: 'Systems Architect',
          description: 'Designs scalable, efficient system structures and integrations.',
          why: 'Your structured thinking and ability to turn complexity into clarity make you a natural at designing high-impact systems.',
        },
      ],
    },
    {
      name: 'pathfinder',
      description:
        'You’re a visionary with a plan — driven by purpose, fueled by strategy. You bring direction to chaos, momentum to ideas, and inspire others to move forward with clarity and confidence.',
      coreTags: ['a natural leader', 'has a visionary mindset', 'a strategic thinker'],
      secondaryTags: ['planner', 'communicator', 'coordinator'],
      tertiaryTags: ['organized', 'big-picture', 'facilitator'],
      roles: [
        {
          title: 'Product Manager',
          description: '📌 Owns the product vision, strategy, and roadmap while aligning user needs with business goals across teams.',
          why: 'Your strategic mindset, planning skills, and ability to align people toward a purpose make you a driving force behind any product.',
        },
        {
          title: 'Project Manager',
          description: 'Coordinates tasks, timelines, and resources to ensure successful execution of initiatives.',
          why: 'Your leadership and coordination strengths help teams stay focused, aligned, and on track — even when things get messy.',
        },
        {
          title: 'Team Lead',
          description: 'Oversees day-to-day team dynamics and provides guidance and support.',
          why: 'Your ability to see the big picture, communicate effectively, and guide others forward makes you a standout team builder.',
        },
      ],
    },
    {
      name: 'alchemist',
      description:
        'You thrive in the realm of imagination and emotion — turning ideas into experiences that move people. With a deep sense of intuition and a gift for visual storytelling, you create with flow, feeling, and fearless originality.',
      coreTags: ['a creative thinker', 'visually oriented', 'a designer at heart'],
      secondaryTags: ['aesthetic', 'intuitive', 'explorer'],
      tertiaryTags: ['imaginative', 'experiential', 'innovative'],
      roles: [
        {
          title: 'UI/UX Designer',
          description: 'Designs intuitive, attractive user experiences and interfaces.',
          why: 'Your visual instinct and empathy for users make you an exceptional translator of emotion and function into seamless design.',
        },
        {
          title: 'Creative Director',
          description: 'Shapes creative vision and brand storytelling across visual content.',
          why: 'Your originality, aesthetic sense, and fearless exploration help shape compelling brands and experiences that stick.',
        },
        {
          title: 'Frontend Developer',
          description: 'Builds visually engaging and interactive interfaces using web technologies.',
          why: 'Your love for design and interaction makes you great at crafting user interfaces that are both functional and expressive.',
        },
      ],
    },
    {
      name: 'decoder',
      description:
        'You see what others overlook — patterns, flaws, and hidden truths. With a sharp eye for detail and a commitment to integrity, you break down problems and build smarter solutions through thoughtful analysis and relentless curiosity.',
      coreTags: ['analytical by nature', 'a strong problem-solver', 'skilled at debugging'],
      secondaryTags: ['detail-oriented', 'risk-aware', 'validator'],
      tertiaryTags: ['observer', 'critical-thinker', 'tester'],
      roles: [
        {
          title: 'QA Engineer',
          description: 'Ensures software quality through rigorous testing and validation.',
          why: 'Your attention to detail and drive for accuracy make you a powerful quality gatekeeper — ensuring that nothing slips through the cracks.',
        },
        {
          title: 'Data Scientist',
          description: 'Analyzes data to uncover insights, trends, and predictions using statistical models and machine learning.',
          why: 'Your analytical mind and ability to extract meaning from data make you essential in guiding smart decisions.',
        },
        {
          title: 'Security Analyst',
          description: 'Monitors and protects systems from vulnerabilities and cyber threats.',
          why: 'Your risk-awareness, problem-solving skills, and vigilance make you a vital guardian of digital infrastructure.',
        },
      ],
    },
    {
      name: 'luminary',
      description:
        'You lead with empathy and speak with purpose. A thoughtful guide and natural communicator, you bring clarity to complexity and help others grow through connection, insight, and encouragement.',
      coreTags: ['empathetic', 'an effective communicator', 'a supportive mentor'],
      secondaryTags: ['teacher', 'explainer', 'storyteller'],
      tertiaryTags: ['supportive', 'collaborative', 'diplomat'],
      roles: [
        {
          title: 'UX Researcher',
          description: 'Explores user behavior through research to inform design decisions.',
          why: 'Your curiosity and deep empathy for users help uncover insights that drive meaningful product improvements.',
        },
        {
          title: 'Team Coach',
          description: 'Guides teams to perform better through communication, reflection, and conflict resolution.',
          why: 'Your supportiveness and people-first mindset empower others to grow and collaborate effectively.',
        },
        {
          title: 'Technical Writer',
          description: 'Creates clear, accessible documentation for technical tools and systems.',
          why: 'Your gift for communication and structure helps demystify complex topics and empower users through knowledge.',
        },
      ],
    },
  ],

  tagWeights: {},
};

// Initialize weights
scoringMatrix.archetypes.forEach((archetype: ArchetypeConfig) => {
  archetype.coreTags.forEach(tag => (scoringMatrix.tagWeights[tag] = 3));
  archetype.secondaryTags.forEach(tag => (scoringMatrix.tagWeights[tag] = 2));
  archetype.tertiaryTags.forEach(tag => (scoringMatrix.tagWeights[tag] = 1));
});
