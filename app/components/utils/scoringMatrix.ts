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
          description:
            'Works on server-side logic, databases, and APIs. Focuses on performance, security, and scalability — the engine behind web and app functionality.',
        },
        {
          title: 'DevOps Engineer',
          description:
            'Bridges the gap between development and operations. Ensures code can be deployed smoothly and reliably using automation, CI/CD, monitoring, and infrastructure management.',
        },
        {
          title: 'Systems Architect',
          description:
            'Designs complex software or network systems. Makes high-level decisions about structure, technologies, and integration to ensure long-term scalability and performance.',
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
          description:
            'Owns the product lifecycle, from strategy and vision to execution. Aligns business goals with user needs and works cross-functionally to deliver value.',
        },
        {
          title: 'Project Manager',
          description:
            'Ensures teams deliver on time, on scope, and within budget. Plans, tracks, coordinates, and mitigates risks to keep projects running smoothly.',
        },
        {
          title: 'Team Lead',
          description:
            'Leads a technical or functional team. Combines leadership with domain expertise to align team goals, mentor members, and drive execution.',
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
          description:
            'Designs intuitive interfaces and user flows. Focuses on aesthetics, usability, and emotional resonance to deliver compelling user experiences.',
        },
        {
          title: 'Creative Director',
          description:
            'Leads the creative vision of a brand or product. Oversees visual design, storytelling, and brand identity, ensuring consistent and impactful output.',
        },
        {
          title: 'Frontend Developer',
          description:
            'Builds the user-facing parts of websites and apps. Blends design with code (HTML, CSS, JavaScript) to create interactive, visually appealing interfaces.',
        },
      ],
    },
    {
      name: 'decoder',
      description:
        'You see what others overlook — patterns, flaws, and hidden truths. With a sharp eye for detail and a commitment to integrity, you break down problems and build smarter solutions through thoughtful analysis and relentless curiosity.',
        coreTags: ['analytical by nature', 'a strong problem-solver', 'skilled at debugging'],        secondaryTags: ['detail-oriented', 'risk-aware', 'validator'],
      tertiaryTags: ['observer', 'critical-thinker', 'tester'],
      roles: [
        {
          title: 'QA Engineer',
          description:
            'Tests software to find bugs, ensure functionality, and maintain standards. Crafts test cases and automates testing processes for continuous quality.',
        },
        {
          title: 'Data Scientist',
          description:
            'Analyzes data to uncover insights, trends, and predictions. Uses statistical models and machine learning to guide decisions and optimize systems.',
        },
        {
          title: 'Security Analyst',
          description:
            'Protects systems from cyber threats. Monitors, detects, and responds to security incidents, often working on risk assessment and vulnerability management.',
        },
      ],
    },
    {
      name: 'luminary',
      description:
        'You lead with empathy and speak with purpose. A thoughtful guide and natural communicator, you bring clarity to complexity and help others grow through connection, insight, and encouragement.',
        coreTags: ['empathetic', 'an effective communicator', 'a supportive mentor'],        secondaryTags: ['teacher', 'explainer', 'storyteller'],
      tertiaryTags: ['supportive', 'collaborative', 'diplomat'],
      roles: [
        {
          title: 'UX Researcher',
          description:
            'Investigates how users think, feel, and behave. Uses interviews, testing, and data to inform design and improve user experiences.',
        },
        {
          title: 'Team Coach',
          description:
            'Helps teams grow, collaborate, and perform effectively. Focuses on interpersonal dynamics, conflict resolution, and professional development.',
        },
        {
          title: 'Technical Writer',
          description:
            'Translates complex technical concepts into clear, user-friendly documentation. Empowers others through instruction, guides, and reference materials.',
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

