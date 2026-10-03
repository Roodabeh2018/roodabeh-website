/* =====================================================================
   ROODABEH SEIF, PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change text.
   - To add a case study: copy one object inside `projects`, give it a
     new unique `slug`, and fill it in. The page is generated for you at
     roodabehseif.com/#/work/<slug>
   - Evidence `status` values: "validated", "estimated", "programme",
     "planned", "hypothesis". They show as small labels next to numbers
     so recruiters can see what kind of evidence each figure is.
     A decision's `basis` uses the same values to show how strong the
     evidence behind that decision is.
   - Visuals: images live in the main folder, next to index.html. Leave `file: ""` to show a
     placeholder with your note.
   - Optional `strategy` block on a project adds the "Product strategy &
     execution" section (principles, MVP scope, decision log,
     requirements, evolution log, AI boundary, what I owned). Every part
     of it is optional.
   - Lines marked  // CHECK  are things to confirm before going live.
   - draft: true hides a project from the live site (it still opens at
     its own address, so you can preview it).
   - chapters: an ordered list of content blocks for a case study
     (quote, prose, chips, list, columns, journey, feature, decisions,
     requirement, ai, ia, gallery).

   SOURCES used: Notion "AI Product Manager" portfolio, Notion "AI UX
   Research" portfolio, Framer case studies (Bo App, NEBULA), and facts
   you gave me directly.
   ===================================================================== */

window.SITE = {
  person: {
    name: "Roodabeh Seif",
    roles: ["AI Product Manager"],
    sub: "with a UX research and HCI background",
    tagline:
      "I move from complex human evidence to product requirements, prioritisation, responsible AI boundaries and defensible product decisions.",
    focus: ["0→1 AI products", "GenAI use-case scoping", "AI evals & guardrails", "Human-in-the-loop", "Research-to-requirements"],
    photo: "roodabeh-profile.jpg",
    email: "roodabeh.seif@gmail.com",
    linkedin: "https://linkedin.com/in/roodabeh-seif",
    orcid: "https://orcid.org/0009-0008-6459-9637",
    location: "Berlin, Germany",
    // Short proof points shown under the hero statement
    proof: [
      "4+ years leading research-to-product work in EU- and BMBF/BMFTR-funded consortium projects",
      "Project coordinator in a six-partner consortium (CrossComITS)",
      "Led the student assistant team and mentored master's students",
      "5 publications (ACM, Springer, IJISA)",
      "Taught and trained 200+ students a year"
    ],
    cv: ""
  },

  /* Home-page "Approach" section, wording from your Notion AI PM portfolio */
  approach: {
    title: "How I decide what gets built: and where AI belongs",
    intro:
      "My product lens runs from evidence to release. In sensitive contexts, AI is never the default solution: the product problem comes first.",
    lens: [
      { title: "Evidence", text: "Research with real users, often in trust-sensitive settings." },
      { title: "Decision", text: "Logged as situation, evidence, decision and why." },
      { title: "Requirement", text: "User stories with testable acceptance criteria." },
      { title: "Evaluation", text: "Quality and safety criteria defined before any model." },
      { title: "Release", text: "Deterministic product first, GenAI second." }
    ],
    principles: [
      { title: "AI only where it adds value", text: "I do not treat AI as the default solution. The product problem comes first." },
      { title: "Facts first, GenAI second", text: "Deterministic systems calculate verified facts; GenAI interprets or explains only where it adds useful flexibility." },
      { title: "Human control by design", text: "In sensitive contexts, users or trained humans keep final decision authority." },
      { title: "Evaluate before release", text: "Accuracy, usefulness, unsupported claims, privacy and failure behaviour are product requirements, not afterthoughts." }
    ]
  },

  about: {
    lead:
      "I'm an AI Product Manager with a background in UX research and HCI. I turn ambiguous user and business problems into clear product scope, buildable requirements, measurable AI quality criteria and responsible release decisions.",
    journey: [
      { title: "Engineering", desc: "Algorithms, robotics, intelligent systems" },
      { title: "UX Research", desc: "The people behind the technology" },
      { title: "Product", desc: "People, tech and business together" },
      { title: "Today", desc: "AI products people can trust" }
    ],
    body:
      "Whether it's cognitive training for older adults, digital safety for people living under surveillance, or a routine companion for life under stress, I keep returning to one question: how do we build technology people don't just use, but trust?",
    whyAI:
      "I work AI-natively: I built Retune's functional MVP myself through AI-assisted prototyping, and prototyped my NEBULA concept the same way. That makes me careful about where AI belongs. Deterministic logic calculates the facts; GenAI explains them, and sometimes the most useful AI feature is the one you decide not to build.",
    education: [
      "PhD candidate, Human-Computer Interaction, University of Siegen (2026–present)",
      "M.Sc. Human-Computer Interaction, University of Siegen (2019–2022)",
      "M.Sc. Mechatronics Engineering, Azad University, Qazvin (2011–2014). Research: mobile robot path planning with RRT* in MATLAB, published in IJISA 2015",
      "B.Sc. Computer Science, Payame-Noor University (2005–2010)",
      "Microsoft AI Product Manager Professional Certificate (Coursera), in progress",
      "AI Consulting & Integration Bootcamp, Ironhack (Oct–Dec 2026, ongoing)",
      "Enterprise Product Management Fundamentals (certificate)",
      "Foundations of User Experience (UX) Design (certificate)",
      "DCitizens Summer School (EU Horizon Twinning), participatory design & design justice, Lisbon (2024)"
    ],
    languages: "English C2 · German B2 · Persian native"
  },

  skills: [
    { title: "Product", items: ["Product Strategy", "Discovery", "MVP Scoping", "PRD-style Requirements", "User Stories & Acceptance Criteria", "Backlog Prioritisation (Kanban, GitHub)", "Roadmapping", "Decision Logs", "Personas & Journey Mapping", "Agile / Scrum", "Stakeholder Alignment"] },
    { title: "AI Product", items: ["GenAI / LLM Use-case Scoping", "AI Evals", "Guardrails", "Human-in-the-Loop", "Deterministic vs. GenAI Architecture", "Prompt Evaluation", "Privacy by Design", "Explainability"] },
    { title: "UX Research", items: ["Semi-structured Interviews", "Participatory Co-design", "Think-aloud Usability Testing", "Thematic / Grounded Theory Analysis", "Trauma-informed Research", "Mixed Methods", "MAXQDA"] },
    { title: "Tools", items: ["Jira", "Confluence", "Notion", "Miro", "Figma", "Lovable", "ChatGPT", "GitHub", "MAXQDA", "Adobe CC", "Adobe XD"] },
    { title: "Technical", items: ["Python", "Unity", "HTML / CSS", "MATLAB", "C++", "Linux", "Docker"] },
    { title: "Facilitation", items: ["Workshops", "University Lecturing", "Training Design", "Train-the-Trainer", "Student Mentoring"] }
  ],

  /* ------------------------------------------------------------------
     CASE STUDIES, shown in this order on the home page
     track: "product" (Product & AI) and/or "research" (UX Research) -
     used by the filter buttons on the home page.
     ------------------------------------------------------------------ */
  projects: [
    /* ================================================================
       RETUNE
       ================================================================ */
    {
      slug: "retune",
      cardImage: "cover-retune.webp",
      track: ["product", "research"],
      title: "Retune",
      subtitle: "A 0→1 routine companion for life under stress · return over perfection, facts before GenAI.",
      type: "0→1 AI Product · Behaviour Design · Wellbeing",
      context: "Independent, self-funded product",
      role: "AI Product Manager · UX Researcher & Product Designer",
      timeline: "Ongoing",
      methods: ["Observation", "Survey", "Follow-up interviews", "Usability testing", "4-week pilot"],
      status: "Functional MVP · validation cycle completed · AI reflection evaluated offline, not yet in the product",
      cardOutcome: "A functional MVP I built myself: 86% onboarding success and 78% privacy comprehension in usability testing, validated through a 4-week pilot.",
      cardDecision: "Validate a deterministic MVP first; add GenAI only where research shows an unmet need.",
      cover: "retune-cover.webp",
      glance: {
        challenge:
          "Habit apps assume life is stable. For people living through crisis, illness or migration, streaks and leaderboards turn one missed day into giving up entirely.",
        contribution:
          "I own problem framing, principles, MVP scope, requirements and AI boundaries, and built the functional MVP myself through AI-assisted prototyping, with no separate developer or designer.",
        outcome:
          "A validated Persian (RTL), mobile-first MVP: 86% onboarding success, 78% correct privacy comprehension, and an AI reflection evaluated offline before any release."
      },
      problem: [
        "Stay consistent when you can. Adapt when you need to. Return when you fall away.",
        "Retune is for young Persian speakers, starting with students and migrants in Germany, whose routines are disrupted by illness, psychological strain, crisis or instability.",
        "Existing tools reward uninterrupted repetition. The critical moment for these users isn't the missed day, it's whether they come back."
      ],
      evolution: ["Paper planner", "Spreadsheets", "Google Forms", "WhatsApp / Telegram routine groups", "Mobile MVP"],
      approach: [
        { title: "Observation", text: "Observed two active WhatsApp/Telegram routine groups to see how people support each other in practice." },
        { title: "Survey & interviews", text: "Survey with 62 respondents, followed by 8 in-depth interviews." },
        { title: "Usability & pilot", text: "7 usability tests and a 4-week pilot with 18 people." }
      ],
      insights: [
        { title: "Return matters more than streaks", text: "The product has to make coming back feel easy, not like failure." },
        { title: "Support must feel safe", text: "People value encouragement from others but want control over what's visible." },
        { title: "Low pressure is the product", text: "Anything that ranks or shames works against the people Retune is for." }
      ],
      strategy: {
        title: "From principles to a scoped MVP, logged decisions and a hard AI boundary.",

        principles: [
          { title: "Return over perfection", text: "Interruptions are normal. Restarting should be easy, never framed as failure.", effect: "No streak repair; neutral welcome-back language; history kept intact." },
          { title: "Privacy by activity", text: "Users choose what is visible per activity instead of all-or-nothing sharing.", effect: "Three sharing states per activity; group views never show sensitive details." },
          { title: "Support without pressure", text: "Social accountability stays supportive. Leaderboards, streak-loss and shame mechanics stay out.", effect: "Private invitation groups; predefined supportive reactions that are never ranked." },
          { title: "Adaptation, not binary success", text: "A hard day is information, not a failure state.", effect: "Done / Not today instead of a red failure state." }
        ],

        scope: {
          intro: "The smallest set of capabilities needed to test the core value proposition, and an explicit list of what stays out.",
          included: [
            "Daily post-action logging (Done / Not today)",
            "Sleep, mood and energy context",
            "Editable activities",
            "Persistent history",
            "Private, invitation-only groups",
            "Per-activity visibility",
            "Supportive reactions",
            "Deterministic weekly & monthly reports",
            "Persian right-to-left interface"
          ],
          excluded: [
            "Streak pressure",
            "Public leaderboards",
            "Ranking",
            "Shame-based mechanics",
            "Diagnosis or treatment advice",
            "Autonomous psychological interpretation of wellbeing data",
            "GenAI features before the product logic is validated"
          ],
          why: "Every exclusion protects a principle. GenAI is sequenced after the deterministic layer so its output can later be evaluated against reliable source metrics."
        },

        decisionIntro: "Each decision records its evidence and how strong that evidence is. Several rest on starting hypotheses, they are labelled as such.",
        decisionShow: 3,
        decisionLog: [
          { title: "No streaks, leaderboards or ranking", basis: "hypothesis",
            situation: "Routine tools typically reward unbroken chains and comparison.",
            evidence: "Starting hypothesis from lived experience and two routine communities: illness, crisis and strain make uninterrupted routines unrealistic.",
            decision: "Removed streaks, leaderboards and ranking. Returning after inactive days shows neutral, supportive language.",
            why: "The product optimises for returning, not for maintaining a perfect chain." },
          { title: "Per-activity privacy, three sharing states", basis: "validated",
            situation: "Group members shared routines to encourage each other, but not every routine felt safe to share.",
            evidence: "Starting hypothesis (social support vs. privacy); in usability testing 78% of participants correctly understood the per-activity privacy controls.",
            decision: "Visibility is set per activity: share by name, share completion anonymously, or keep private.",
            why: "People can take part socially without exposing every routine." },
          { title: "Deterministic reporting",
            situation: "Reports show time, percentages, active days and trends, facts users need to trust.",
            evidence: "Correctness must not vary between runs; language models cannot be relied on to calculate.",
            decision: "All metrics are calculated by deterministic logic, outside any LLM.",
            why: "Exact, reproducible facts become the reference any future AI output is evaluated against." },
          { title: "Validate the product before adding GenAI",
            situation: "An AI reflection feature was an obvious early idea.",
            evidence: "No validated interpretation or reflection need yet.",
            decision: "Validate the deterministic MVP first; add GenAI only if research reveals an unmet interpretation or reflection need.",
            why: "Avoids building AI features before the product logic is proven." },
          { title: "Private, invitation-only groups instead of public comparison", basis: "hypothesis",
            situation: "Accountability happened in open messaging groups, separate from personal tracking.",
            evidence: "Observed in two WhatsApp/Telegram routine communities: support was useful but fragmented.",
            decision: "Groups are private, not searchable, and joined by invitation code.",
            why: "Supportive accountability in a controlled space, without public comparison." },
          { title: "Supportive reactions, never ranked",
            situation: "Encouragement mattered, but counts can quietly become competition.",
            evidence: "Product principle (support without pressure); sending and interpreting a reaction was a usability-test task.",
            decision: "Predefined supportive reactions; reaction counts are never used for ranking.",
            why: "Social presence without comparison." },
          { title: "Edit activities, preserve history",
            situation: "Real routines change, and editing risks corrupting past records.",
            evidence: "Design rationale; creating and customising an activity were usability-test tasks.",
            decision: "Activities can be added, edited, reordered, restored and marked important while history stays intact.",
            why: "The routine model adapts to the user without rewriting the past." },
          { title: "Deactivate without deleting",
            situation: "People stop some routines, temporarily or for good.",
            evidence: "Design rationale; \"deactivate a default activity without deleting its history\" was a usability-test task.",
            decision: "Deactivation hides an activity going forward but keeps its historical data and reports.",
            why: "Past effort stays visible and reports stay historically accurate." },
          { title: "Done / Not today · \"Partially done\" removed", basis: "hypothesis",
            situation: "A red failure state framed hard days as failure.",
            evidence: "\"Partially done\" was dropped because its meaning varied considerably between activities.",
            decision: "Two neutral states, Done / Not today, with no streak repair.",
            why: "Clear, non-judgemental logging. The two-state model still needs user validation." },
          { title: "Log after the action, not before", basis: "hypothesis",
            situation: "Planning routines in advance can feel like an obligation.",
            evidence: "Starting hypothesis: advance planning can create resistance.",
            decision: "Quick post-action logging.",
            why: "Logging feels less compulsory and fits real days." }
        ],

        requirementsIntro: "Requirements extend into data handling and access control, product decisions, not just screens.",
        requirements: [
          { area: "Historical data",
            requirement: "A user can deactivate an activity without deleting its historical data.",
            reason: "Past effort should remain visible and reports must remain historically accurate.",
            acceptance: "Historical entries and reports remain available after deactivation." },
          { area: "Privacy & visibility",
            requirement: "Visibility is configurable per activity: by name, anonymous completion, or private.",
            reason: "Users can participate in a group without sharing every routine.",
            acceptance: "Private activities are excluded from shared group views; the chosen state persists until the user changes it." },
          { area: "Data minimisation",
            requirement: "The social layer never exposes duration, notes, medication, supplements, weight, sleep, mood, energy, therapy, nutrition or symptoms.",
            reason: "Minimise sensitive-data disclosure while still allowing social participation.",
            acceptance: "Group views show only what the activity's sharing state allows." },
          { area: "Activity status",
            requirement: "Activities are logged after the action as Done or Not today.",
            reason: "Avoid failure framing and streak repair.",
            acceptance: "No red failure state; missed days are never labelled as failure." },
          { area: "Return after interruption",
            requirement: "Returning after inactive days shows neutral, supportive language.",
            reason: "Restart without failure framing.",
            acceptance: "No broken-streak warning; historical data remains available; users are never ranked." },
          { area: "Groups & permissions",
            requirement: "Groups are private, not searchable, and joined only by invitation code.",
            reason: "Supportive accountability in a controlled environment.",
            acceptance: "A group cannot be found without its code; reaction counts are not used for ranking." },
          { area: "Reporting",
            requirement: "Time, percentages, active days and trends are calculated deterministically, outside the LLM.",
            reason: "Facts must be exact and reproducible.",
            acceptance: "Report values are identical for identical data." },
          { area: "AI reflection (planned)",
            requirement: "An optional weekly AI reflection uses only metrics calculated by the deterministic backend.",
            reason: "The model must not invent facts or make health claims.",
            acceptance: "No invented numbers, diagnosis, treatment advice or causal claims; users can opt in or out; violating outputs are not release-ready." }
        ],

        evolutionIntro: "The product evolved through evidence, not a single design pass. Early stages produced hypotheses, not findings.",
        evolutionChain: ["Paper routine", "Spreadsheets", "Google Forms", "WhatsApp / Telegram groups", "Mobile MVP", "User research", "Usability iterations", "Pilot"],
        evolution: [
          { stage: "Paper planner, spreadsheets & Google Forms", status: "hypothesis",
            uncertainty: "Could small routines be sustained through private self-tracking alone?",
            tested: "Personal tracking across a paper planner, Excel and Google Forms.",
            learned: "Records were fragmented, and a checkmark didn't capture effort, hard actions looked the same as easy ones.",
            changed: "Became two starting hypotheses (effort and fragmentation), not findings." },
          { stage: "WhatsApp / Telegram routine groups", status: "hypothesis",
            uncertainty: "Does social accountability help: and when does it feel intrusive?",
            tested: "Participation in two Persian-speaking routine communities sharing exercise, meditation, reading and more.",
            learned: "Support was useful but lived apart from tracking; some routines felt safe to share, others sensitive; planning ahead could create resistance.",
            changed: "Per-activity privacy and post-action logging entered the MVP concept." },
          { stage: "Functional mobile MVP",
            uncertainty: "Can tracking, privacy, support and reporting live in one low-pressure product?",
            tested: "A Persian RTL MVP built through AI-assisted prototyping; directional feedback from three early reviewers.",
            learned: "\"Partially done\" was ambiguous, its meaning varied too much between activities.",
            changed: "Removed \"Partially done\"; the two-state Done / Not today model now needs user validation." },
          { stage: "User research: survey & interviews", status: "validated",
            uncertainty: "How do people experience interruption and return, and when does accountability feel supportive vs. intrusive?",
            tested: "Survey with 62 respondents and 8 follow-up interviews on interruption, return, social support and privacy needs.",
            learned: "",
            changed: "Set the focus of the usability study: onboarding, privacy comprehension, returning after interruption, supportive reactions and reports." },
          { stage: "Usability iterations", status: "validated",
            uncertainty: "Do people understand privacy states, reactions, reports and returning after inactivity?",
            tested: "7 mobile think-aloud tests, e.g. deactivate without deleting history, share by name or anonymously, join by invitation, read a monthly report, return after inactive days.",
            learned: "86% onboarding success; 78% correctly understood the per-activity privacy controls.",
            changed: "" },
          { stage: "4-week pilot", status: "validated",
            uncertainty: "Does the product logic hold up in everyday use?",
            tested: "A 4-week field pilot with 18 people.",
            learned: "Short-term field evidence from everyday use, not proof of long-term behaviour change or wellbeing effects.",
            changed: "" }
        ],

        ai: {
          title: "Responsible AI / AI product boundary",
          intro: "The AI feature is intentionally narrow: an opt-in weekly reflection based only on facts the product has already verified. It was evaluated offline across 60 test cases and is not yet part of the live product.",
          status: "planned",
          deterministic: {
            label: "Deterministic product layer", role: "Calculates the facts: built",
            items: ["Exact metrics: time and percentages", "Activity counts and active days", "Trends", "Historical data"]
          },
          generative: {
            label: "Generative AI layer", role: "Explains verified facts: opt-in, evaluated offline",
            items: ["Summarise verified weekly metrics", "Plain-language reflection", "Careful description of visible patterns"]
          },
          rule: "Deterministic logic calculates the facts; GenAI explains them.",
          prohibited: [
            "No diagnosis",
            "No treatment advice",
            "No calculating authoritative product metrics",
            "No invented numbers or missing information",
            "No unsupported causal claims",
            "No overriding user control"
          ],
          human: [
            "Opt-in, and can be ignored or disabled",
            "The model receives only verified metrics",
            "Outputs that violate guardrails are not release-ready",
            "Manual review before any live-model decision"
          ],
          evals: [
            { metric: "Numeric accuracy", target: "Target 100% agreement with verified metrics, 98% achieved offline (60 test cases)", status: "validated" },
            { metric: "Invented metrics", target: "0, none across 60 test cases", status: "validated" },
            { metric: "Diagnosis / treatment advice", target: "0", status: "planned" },
            { metric: "Unsupported causal claims", target: "0, those found were identified and corrected before pilot use", status: "validated" },
            { metric: "Privacy violations", target: "0", status: "planned" },
            { metric: "Usefulness & clarity", target: "Prompt comparison, manual review, then user testing", status: "planned" }
          ],
          note: "Measured offline in a constrained test setup · this shows consistency and fabrication risk, not user benefit or clinical value. The remaining criteria are release targets. Next: compare 2–3 prompt variants on the same verified weekly report before any live-model decision."
        },

        ownedIntro: "Solo product work: no separate developer or designer.",
        owned: [
          { item: "Problem framing", detail: "Turned tensions observed in two routine communities into testable starting hypotheses." },
          { item: "Principles & MVP scope", detail: "Product principles, the MVP capability set and an explicit exclusion list." },
          { item: "Requirements", detail: "PRD-style requirements, user stories with acceptance criteria, access-control and data-handling logic." },
          { item: "AI-assisted build", detail: "Built the functional MVP myself through AI-assisted prototyping (Lovable)." },
          { item: "AI boundaries & evaluation plan", detail: "Deterministic/GenAI split, prohibited behaviour and release criteria defined before any model integration." },
          { item: "Research & validation", detail: "Designed and ran the survey, follow-up interviews, usability testing and the 4-week pilot." },
          { item: "Evidence-based iteration", detail: "Changes such as removing \"Partially done\", tracked in a Product Evidence & Evolution Log." }
        ]
      },
      evidence: [
        { value: "86%", label: "Onboarding success", note: "Usability evaluation", status: "validated" },
        { value: "78%", label: "Correct understanding of per-activity privacy", note: "Usability evaluation", status: "validated" },
        { value: "18", label: "Pilot participants", note: "4-week field pilot", status: "validated" },
        { value: "62", label: "Survey respondents", note: "+ 8 follow-up interviews", status: "validated" },
        { value: "7", label: "Usability tests", note: "Mobile think-aloud", status: "validated" },
        { value: "0", label: "Fabricated metrics in AI reflection", note: "Offline evaluation, 60 test cases", status: "validated" }
      ],
      outcome: [
        "A working MVP with Today, Activities, Together (private groups), Reports and Settings, post-action logging, editable activities, weekly/monthly reports and mood, energy and sleep reflections.",
        "The findings support usability and comprehension claims for this study context, not claims that Retune improves wellbeing, productivity or long-term routines.",
        "Next: prompt-variant comparison on verified weekly data, then a decision on integrating the AI reflection into the live product."
      ],
      demonstrates: ["0→1 strategy and MVP definition", "Prioritisation: saying no", "Requirements into data and access logic", "Deterministic vs. GenAI architecture", "AI guardrails and evaluation before release"],
      visuals: [
        { file: "retune-evolution.webp", caption: "Two fragmented practices: personal tracking and group accountability, converged into one MVP." },
        { file: "retune-principles-to-mvp.webp", caption: "Principles translated into product decisions." },
        { file: "retune-privacy-model.webp", caption: "Privacy is selected per activity: by name, anonymous completion, or private." }
      ],
      screens: [
        { file: "retune-today.webp", caption: "Today: welcome back, no streak repair" },
        { file: "retune-activities.webp", caption: "Activities: important, never ranked" },
        { file: "retune-reports.webp", caption: "Reports: deterministic weekly data" },
        { file: "retune-report-detail.webp", caption: "Report detail: activity and wellbeing context" }
      ],
      links: []
    },

    /* ================================================================
       GHESSE KHANEH  (قصه‌خونه)
       Source: your Ghesse Khaneh brief + Notion "AI Product Manager" page.
       Screenshots: replace each image "" with the file name once uploaded.
       ================================================================ */
    {
      slug: "ghesse-khaneh",
      cardImage: "cover-ghesse-khaneh.webp",
      track: ["product", "research"],
      title: "Ghesse Khaneh",
      altTitle: "قصه‌خونه",
      subtitle: "Hybrid interactive storytelling for life-skills learning.",
      lede: "A facilitator-centered platform for designing and running interactive-storytelling learning experiences with children and parents.",
      type: "Product Design · UX Research · Hybrid Experience",
      role: "Product Designer / UX Researcher",
      context: "Independent, self-funded project",
      status: "Bilingual prototype (Persian / English) · AI assistant mocked as a concept",
      meta: [
        { label: "Role", value: "Product Designer / UX Researcher" },
        { label: "Focus", value: "Product strategy, UX, interaction design, hybrid experience" },
        { label: "Users", value: "Facilitators, children, parents" },
        { label: "Platform", value: "Responsive web app" },
        { label: "Status", value: "Bilingual prototype (Persian / English) · AI assistant mocked as a concept" }
      ],
      cardOutcome: "A facilitator platform that structures the session before, during and after, while stories, play and conversation stay between people.",
      cardDecision: "AI supports preparation and reflection only; live sessions stay human-led.",
      cover: "gk-home.webp",
      glance: {
        challenge:
          "Facilitators juggle stories, objectives, questions, activities, role-play, materials, timing, observations and parent follow-up, knowledge scattered across documents, notes and personal experience.",
        contribution:
          "Product concept, user and stakeholder needs, experience and information architecture, facilitator workflow and session journey, feature prioritisation, interaction and UI design, prototyping and evaluation planning.",
        outcome:
          "A bilingual (Persian / English) responsive web-app prototype that supports the facilitator before, during and after each session, without turning the child's experience into screen time."
      },
      problemLead: true,
      problem: [
        "How might we support facilitators in planning and delivering structured, engaging learning experiences, without turning the child's experience into another screen-based educational product?",
        "Ghesse Khaneh is not a story-reading app for children. Its main users are facilitators who run structured life-skills sessions through interactive storytelling, guided discussion, role-play, games, creative activities, reflection, observation and parent follow-up. The child is the beneficiary of the experience, not the primary digital user.",
        "Running one session means coordinating story selection, learning objectives, age appropriateness, questions, activities, role-play, materials, time, observations, parent follow-up and the next session. Without a structured system, that knowledge stays scattered and hard to pass on to new facilitators.",
        "The product had to support the facilitator while keeping the human relationship at the centre of the experience."
      ],
      chapters: [
        { label: "Design principle", title: "Technology supports the facilitator. It does not replace the human interaction.",
          blocks: [
            { type: "prose", paragraphs: [
              "Instead of designing another children's learning app, the product puts the digital interface in the hands of the facilitator. The facilitator uses the system to structure and support the session; the child experiences the session itself."
            ] },
            { type: "chips", label: "What the child experiences", items: ["Stories", "Conversations", "Games", "Role-play", "Creative activities", "Shared reflection"] }
          ] },

        { label: "Core experience", title: "One session, designed as a learning journey.",
          intro: "Each stage builds on the one before. The product supports the facilitator through all eight.",
          blocks: [
            { type: "journey", steps: [
              { title: "Prepare", text: "Set age group, objectives, duration, materials and session structure." },
              { title: "Story", text: "Introduce the topic through an age-appropriate story." },
              { title: "Discuss", text: "Use open-ended prompts to encourage conversation." },
              { title: "Practice", text: "Explore the concept through games or role-play." },
              { title: "Create", text: "Let children express ideas through drawing, making or storytelling." },
              { title: "Reflect", text: "Discuss what happened and what the child noticed." },
              { title: "Observe", text: "Capture meaningful observations: without diagnosing or scoring the child." },
              { title: "Plan next session", text: "Use previous observations to decide what should happen next." }
            ] }
          ] },

        { label: "The product", title: "Support before, during and after the session.",
          blocks: [
            { type: "feature", label: "Before", title: "Facilitator dashboard",
              text: "A central workspace for upcoming sessions, groups, resources and follow-up.",
              points: ["Upcoming and recent sessions", "Groups", "Saved activities", "Follow-up notes", "Quick access to key actions"],
              image: "gk-home.webp", caption: "A central workspace for upcoming sessions, groups, resources and follow-up. Sample data." },
            { type: "feature", label: "Before", title: "Session builder",
              text: "Turns a learning objective into a complete facilitated session. The session is built as a learning journey, not a collection of disconnected activities.",
              points: ["Age, group size, topic and objective", "Duration and story", "Discussion questions", "Activity, role-play and creative task", "Materials and reflection prompts", "Parent follow-up"],
              image: "gk-session-builder.webp", caption: "A structured way to turn learning objectives into a complete facilitated session, with a live outline and the mocked facilitator assistant." },
            { type: "feature", label: "Before", title: "Story, activity & role-play library",
              text: "Reusable content, so preparation doesn't start from zero and quality doesn't depend on one person's memory.",
              points: ["Stories by age, topic, skill, emotional theme and duration", "Games: cognitive, physical and creative", "Role-play scenarios", "Templates"],
              image: "gk-library.webp", caption: "Reusable content organised by age, theme, skill and emotion." },
            { type: "feature", label: "During", title: "Facilitator mode",
              text: "A simplified interface for running the live session. It shows only what the facilitator needs right now, reducing cognitive load while their attention stays on the children.",
              points: ["Current stage", "Facilitator instructions", "Question or activity", "Materials and timing", "Next / previous controls", "Quick observation notes"],
              // CHECK: no Facilitator mode screenshot yet, add  image: "gk-facilitator-mode.webp"  when you have one
            },
            { type: "feature", label: "After", title: "Observation & reflection",
              text: "Qualitative documentation helps facilitators learn from each session, without scoring or diagnosing children.",
              points: ["What worked", "Where children disengaged", "Meaningful comments", "Difficult moments", "Topics worth revisiting", "Ideas for the next session"],
              image: "gk-reflections.webp", caption: "Five guided questions after each session; the assistant's suggested summary is a mock that does not replace professional judgement." },
            { type: "feature", label: "After", title: "Parent take-home",
              text: "The learning continues at home through one simple, offline parent–child moment.",
              points: ["One conversation prompt", "One offline activity", "Brief guidance for the parent"],
              image: "gk-parent-takehome.webp", caption: "A printable, shareable card designed to work away from screens. \"A child may always choose whether to respond. This activity is not a test or assessment.\"" },
            { type: "feature", label: "Across sessions", title: "Programs",
              text: "Several sessions form a learning program, so a group's learning builds over time, followed without points, rankings or competition.",
              points: ["Example: Understanding Emotions", "1 · Recognising feelings", "2 · Naming feelings", "3 · Expressing feelings", "4 · Navigating strong feelings"],
              image: "gk-programs.webp", caption: "Programs: connected sessions per group, with what comes next." }
          ] },

        { label: "Hybrid experience", title: "Designing beyond the screen.",
          intro: "The product deliberately connects digital and physical interaction. The digital layer carries the structure so the human layer can carry the learning.",
          blocks: [
            { type: "columns", connector: "supports",
              cols: [
                { label: "Digital layer · the facilitator", accent: true, items: ["Preparation", "Structure", "Guidance", "Documentation", "Follow-up"] },
                { label: "Human & offline layer · the session", items: ["Storytelling", "Discussion", "Games", "Role-play", "Drawing and making", "Parent–child interaction"] }
              ] }
          ] },

        { label: "AI assistant · concept", title: "AI stays behind the facilitator.",
          intro: "The AI assistant is a concept, not a built feature. Its role was defined before any model work.",
          blocks: [
            { type: "ai",
              rule: "AI → Facilitator → Child. Never AI → Child.",
              may: { label: "AI may help the facilitator with", items: ["Age-appropriate discussion prompts", "Activity and role-play ideas", "Session checklists", "Summaries of facilitator notes", "Suggestions for future sessions"] },
              mustNot: { label: "AI does not", items: ["Interact directly with children", "Diagnose children", "Provide therapy", "Replace facilitator judgement"] },
              human: ["Facilitators review, edit or reject every AI output", "Nothing reaches a live session without facilitator review", "Suggestions draw only on approved content and methodology", "Unsafe or unsupported output counts as an evaluation failure"],
              moreLabel: "Human control & planned evaluation",
              evalsHead: ["Measure", "What it tells us"], evalsCount: "planned measures",
              evals: [
                { metric: "Preparation time", target: "Whether AI support actually saves facilitator effort", status: "planned" },
                { metric: "Usefulness", target: "Whether suggestions are worth using", status: "planned" },
                { metric: "Edit / reject rate", target: "How often facilitators override AI suggestions", status: "planned" },
                { metric: "Methodology consistency", target: "Whether sessions stay true to the method", status: "planned" },
                { metric: "Safety violations", target: "Any unsafe or unsupported suggestion is a failure", status: "planned" }
              ],
              note: "Planned measures · nothing has been measured yet." },
            { type: "requirement", area: "AI-supported preparation",
              requirement: "As a facilitator, I want AI-assisted suggestions based on approved methodology and content, so I can prepare sessions faster while keeping final control.",
              reason: "Speed up preparation without moving judgement away from trained facilitators.",
              acceptance: "Suggestions use only approved content; every suggestion can be reviewed, edited, rejected or ignored; nothing reaches a live session without facilitator review." }
          ] },

        { label: "Safety & ethical design", title: "Designing responsibly for children.",
          blocks: [
            { type: "columns", cols: [
              { label: "Never", style: "cross", items: ["Psychological diagnosis", "Ranking children", "Leaderboards", "Streak pressure", "Rewards for revealing private feelings"] },
              { label: "Always", style: "check", accent: true, items: ["Minimal collection of child data", "Facilitator judgement stays central", "Parental consent where needed", "AI is assistive, not authoritative"] }
            ] }
          ] },

        { label: "Key product decisions", title: "The decisions that shaped the product.",
          blocks: [
            { type: "decisions", items: [
              { title: "Make the facilitator the primary digital user", decision: "The facilitator, not the child, uses the product.", why: "The meaningful learning experience should happen between people, not between a child and a screen." },
              { title: "Structure sessions as journeys", decision: "Sessions are built as connected stages rather than isolated activities.", why: "Story, conversation, practice, creation and reflection reinforce one another." },
              { title: "Keep AI behind the facilitator", decision: "AI supports preparation and reflection only.", why: "AI can help preparation while avoiding direct influence over children." },
              { title: "Avoid performance gamification", decision: "No points, rankings or streaks.", why: "Emotional learning and parent–child interaction should not become competitions or streak-based behaviour." },
              { title: "Observe, don't score", decision: "Facilitators capture qualitative observations instead of scoring children.", why: "Observations help plan future sessions without turning the product into a diagnostic tool." }
            ] },
            // CHECK: MVP tiers come from your Notion page, confirm where Programs and Parent take-home sit
            { type: "columns", cols: [
              { label: "First MVP", accent: true, items: ["Session builder", "Approved story / activity library", "Lightweight facilitator mode", "Reflection"], why: "The repeatable preparation and reflection work, enough to test whether the method can travel to new facilitators." },
              { label: "Later", items: ["Facilitator onboarding", "Cross-session learning", "Branch-level quality support", "More advanced analytics or automation"], why: "Kept out until the core workflow is validated with current facilitators." },
              { label: "Not now", style: "cross", items: ["Direct child–AI interaction", "Diagnosis", "Treatment advice", "Autonomous psychological interpretation"], why: "Sensitive interpretation and final decisions stay with trained facilitators." }
            ] }
          ] },

        { label: "Information architecture", title: "A simple structure for a complex workflow.",
          blocks: [
            { type: "ia", root: "Ghesse Khaneh", nodes: [
              { label: "Home" },
              { label: "Session builder" },
              { label: "Library", children: ["Stories", "Activities", "Role-play", "Templates"] },
              { label: "Programs" },
              { label: "Reflections" },
              { label: "Parent take-home" },
              { label: "Research / evaluation" },
              { label: "Settings" }
            ] }
          ] },

        { label: "Research & evaluation", title: "Built to be evaluated.",
          intro: "The system was designed to support structured evaluation. No results are reported here because none have been measured yet. The first step is reconstructing real sessions with current facilitators to test the assumptions behind the MVP.",
          blocks: [
            { type: "list", style: "check", card: true, label: "Planned evaluation components", status: "planned",
              items: ["Informed, revocable consent", "Pre / post assessment", "Session feedback", "Facilitator observations", "Parent feedback", "Usability testing", "Anonymised research data: no individual scores or child comparisons"] },
            { type: "gallery", images: [{ file: "gk-research.webp", caption: "Research & evaluation: a structural preview with sample data. It makes no claims about validated instruments or outcomes." }] }
          ] }
      ],
      evidence: [],
      outcome: [],
      reflection:
        "Digitisation does not always mean moving the experience onto a screen. The strongest product decision was to keep human interaction at the centre and use technology to support the person facilitating it, the interface organises complexity in the background so the facilitator can focus on what is happening in front of them.",
      demonstrates: ["Designing complex facilitator workflows", "Translating educational methodology into product architecture", "Hybrid digital / offline experiences", "Responsible AI product thinking", "Designing for children without making them the digital users", "Balancing structure with facilitator flexibility", "UX for sensitive interpersonal contexts", "Product thinking beyond individual screens"],
      visuals: [],
      links: []
    },

    /* ================================================================
       DARA, workplace wellbeing
       Source: your 17 screenshots only. Everything below describes what the
       product shows. Fields marked CHECK need your input.
       draft: true hides it from the live site until you confirm them.
       ================================================================ */
    {
      slug: "dara",
      cardImage: "cover-dara.webp",
      track: ["product"],
      title: "DARA",
      subtitle: "Workplace wellbeing that helps people and teams · without turning wellbeing into surveillance.",
      type: "Product Design · Workplace Wellbeing · Privacy by Design · AI-assisted build",
      role: "Product Designer & Product Owner: self-initiated, solo",
      context: "Independent concept project · built with AI-assisted prototyping (Lovable)",
      timeline: "2026 · concept to working demo in one day",
      status: "Functional browser demo · concept stage, not yet user-tested",
      cardOutcome: "A two-sided wellbeing product: private tools for employees, and team insight for managers built only on aggregated, anonymised patterns.",
      cardDecision: "Team insight only from five or more responses; individual data is never visible to managers.",
      cover: "dara-home.webp",
      glance: {
        challenge:
          "Wellbeing tools at work face a trust problem: employees won't share honestly if a manager might see it, yet managers need signals they can act on. The product had to serve both sides without exposing anyone.",
        contribution:
          "My own idea, owned end to end: problem framing, privacy model, feature set, UX and interaction design, and I built the working demo myself through AI-assisted prototyping in Lovable.",
        outcome:
          "A functional browser demo with an employee view, check-in, conversation coach, reflection and a personal journey, and a manager view built only on aggregated, anonymised team patterns."
      },
      problem: [
        "DARA supports four dimensions of working life, Energy, Connection, Focus and Growth, through short daily check-ins, tools for difficult conversations and appreciation, reflective coaching and small team experiments.",
        "The core tension is trust. Employees need a genuinely private space; managers need to know when a team is struggling. DARA resolves this by separating the two completely: individuals see their own data, managers see only team-level patterns, and below five responses they see nothing at all.",
        "DARA is explicitly not a medical, therapy or crisis service, a boundary stated on every page."
      ],
      chapters: [
        { label: "Design principle", title: "Managers see patterns, not people.",
          blocks: [
            { type: "columns", connector: "aggregated · anonymised · n ≥ 5",
              cols: [
                { label: "Employee view · private", accent: true, items: ["Home: today's check-in, suggested action, gentle insight", "Check-in: daily, plus a weekly team pulse", "Connect: difficult-conversation coach, appreciation", "Coach: reflect with DARA, weekly reflection", "My Journey: actions and private badges", "Profile: goal, reminders, what DARA stores"] },
                { label: "Manager view · team level only", items: ["Overview: team energy, workload, belonging, clarity", "Team Pulse: weekly averages and comment themes", "Team Actions: small experiments", "Insights: six weeks of team patterns", "Privacy"] }
              ] }
          ] },

        { label: "Employee experience", title: "Private tools that earn honest input.",
          blocks: [
            { type: "feature", label: "Onboarding", title: "Four screens, one promise",
              text: "Onboarding introduces the four dimensions, states the privacy model up front and asks for one gentle goal, which can be changed at any time.",
              points: ["Energy, Connection, Focus and Growth", "\"Progress comes from meaningful actions you choose, not from time spent in the app\"", "Private by default: managers only see aggregated, anonymised team patterns", "Choose a gentle goal"],
              screens: [
                { file: "dara-onboarding-1.webp", caption: "Welcome" },
                { file: "dara-onboarding-2.webp", caption: "Four dimensions" },
                { file: "dara-onboarding-3.webp", caption: "Private by default" },
                { file: "dara-onboarding-4.webp", caption: "Choose a gentle goal" }
              ] },
            { type: "feature", label: "Daily", title: "A 30-second check-in",
              text: "Energy, stress and focus in three taps, an optional main influence and a private note. A separate weekly pulse feeds only anonymised team averages.",
              points: ["Energy, stress, focus", "Optional influence: workload, relationships, meetings, clarity, personal", "Private note", "Weekly team pulse: team averages only"],
              image: "dara-checkin.webp", caption: "Daily check-in: private to the employee." },
            { type: "feature", label: "Relationships", title: "Difficult conversations and appreciation",
              text: "A four-step coach helps prepare a difficult conversation, starting with describing what happened \"the way a camera would record it\", separating facts from interpretation. A second tool turns something a colleague did into specific recognition.",
              points: ["Four structured preparation steps", "Facts before interpretation", "Specific appreciation"],
              image: "dara-connect.webp", caption: "Connect: Difficult Conversation Coach, step 1 of 4." },
            { type: "feature", label: "Reflection", title: "Reflect with DARA",
              text: "A private space to think out loud. DARA mostly asks questions rather than giving answers, separates facts from interpretations and never labels people.",
              points: ["Reflective questions, no diagnosis", "No judgement of colleagues", "Never shared with the manager", "Clear signposting to emergency services and occupational health"],
              image: "dara-coach.webp", caption: "Coach: reflective questions with explicit limits." },
            { type: "feature", label: "Progress", title: "A personal journey, not a score",
              text: "Progress comes from meaningful actions the employee chose to take. There are no rankings, no comparisons and no penalties for quiet weeks, comeback milestones replace broken streaks.",
              points: ["Attention across the four dimensions", "Badges private to the employee", "\"Back on Track\" rewards returning after a quiet period", "Team achievements reflect collective participation only"],
              image: "dara-journey.webp", caption: "My Journey: badges are never visible to managers or colleagues." },
            { type: "feature", label: "Transparency", title: "What DARA stores · in plain language",
              text: "The profile shows exactly what is stored and who can see it, alongside reminders that are \"gentle by design, nothing is escalated to anyone\".",
              points: ["Check-ins, reflections and coaching, private to the account", "Weekly pulse: stored only as a team average", "Hidden entirely when fewer than five people respond"],
              image: "dara-profile.webp", caption: "Profile: the data model explained to the person it concerns." }
          ] },

        { label: "Manager experience", title: "Team insight without individual exposure.",
          blocks: [
            { type: "feature", label: "Overview", title: "Four team signals and one suggested action",
              text: "Managers see team energy, workload, belonging and clarity on a 1–5 scale, overall participation that is never broken down per person, and one suggested action based on aggregated patterns.",
              points: ["Participation shown only as a team total", "Groups under five responses stay hidden", "Suggested action explained in plain language"],
              image: "dara-manager-overview.webp", caption: "Team overview: the anonymity threshold in action for a four-person sub-team." },
            { type: "feature", label: "Insights", title: "Interpretations, not conclusions",
              text: "Six weeks of team trends, each with a short plain-language reading, framed as what a pattern may mean, never as a conclusion about individuals.",
              image: "dara-insights.webp", caption: "Insights: aggregated team-level data only." },
            { type: "feature", label: "Team actions", title: "Small experiments, not programmes",
              text: "Each action is short, visible and easy to evaluate: why it may help, how to run it, and a follow-up question that the next weekly pulse answers.",
              points: ["Priority reset, meeting cleanup, appreciation ritual, focus block, team check-in, role clarity", "Each has a built-in follow-up question", "Never targeted at a named individual"],
              image: "dara-team-actions.webp", caption: "Team actions: each experiment closes the loop at the next pulse." },
            { type: "feature", label: "Team pulse", title: "Comments become themes, never quotes",
              text: "Open comments are summarised into themes and never linked to a person. Weekly averages appear only when at least five people have responded.",
              image: "dara-team-pulse.webp", caption: "Team pulse: weekly averages and comment themes." }
          ] },

        { label: "Key product decisions", title: "Privacy and pressure, designed out.",
          blocks: [
            { type: "decisions", items: [
              { title: "Private by default", decision: "Individual check-ins, notes, badges and coaching are never visible to managers.", why: "Honest input depends on people trusting that it stays theirs." },
              { title: "Anonymity threshold of five", decision: "Team results appear only once at least five people have responded; participation is never shown per person.", why: "Small groups make averages identifiable." },
              { title: "Comments become themes", decision: "Open comments are summarised into themes and never linked to a person.", why: "Managers get the signal without the source." },
              { title: "Progress from actions, not time in app", decision: "No rankings, comparisons or penalties for quiet weeks; comeback milestones replace streaks.", why: "Engagement pressure would work against wellbeing itself." },
              { title: "Small experiments with a feedback loop", decision: "Team actions are short and paired with a follow-up pulse question.", why: "Teams can see whether a change helped, instead of committing to large programmes." },
              { title: "Clear scope", decision: "Every page states that DARA is not a medical, therapy or crisis service, and the coach points to emergency services and occupational health.", why: "A wellbeing product must be honest about what it cannot do." }
            ] }
          ] }
      ],
      evidence: [],
      outcome: [],
      demonstrates: ["Taking a product from idea to working demo on my own, with AI-assisted prototyping", "Privacy by design for sensitive workplace data", "A two-sided product: individual value and team insight", "Anti-surveillance analytics: aggregation and anonymity thresholds", "Non-competitive engagement design", "Scoping a coaching feature with explicit limits"],
      visuals: [],
      links: []
    },

    /* ================================================================
       NEBULA
       ================================================================ */
    {
      slug: "nebula",
      cardImage: "cover-nebula.webp",
      track: ["product", "research"],
      title: "NEBULA",
      subtitle: "Explainable AI assistance for evaluating misinformation · without replacing human judgement.",
      type: "Responsible AI · Explainability · UX Research",
      context: "BMBF-funded research consortium · paid position, University of Siegen",
      role: "UX Researcher · University of Siegen research team",
      timeline: "May 2023 – Dec 2025",
      methods: ["Focus group", "Interviews", "Ethnography", "Workshops", "Requirements synthesis"],
      status: "Findings published · Springer book chapter (2026)",
      cardOutcome: "Research on trust translated into explainable, contestable, multilingual AI requirements, plus my own concept prototype.",
      cardDecision: "Every AI assessment shows its evidence and sources, and users can inspect and disagree with it.",
      cover: "nebula-research-to-requirements.webp",
      glance: {
        challenge:
          "An AI tool can flag misinformation, but a verdict alone doesn't help people who have good reasons to distrust institutions and technology.",
        contribution:
          "I conducted user research with vulnerable groups and translated findings into responsible-AI requirements. I did not own the AI architecture, model development or product roadmap, those belonged to the wider consortium.",
        outcome:
          "Requirements for explainable, contestable, multilingual and human-controlled AI, published as a Springer chapter, and made tangible in my own concept prototype."
      },
      problem: [
        "Misinformation is not a simple true-or-false problem. Participants evaluated information across messaging apps, social media, video platforms, official websites, search results, friends, relatives and comment sections.",
        "Verification required time, language ability, contextual knowledge, connectivity and digital confidence, exactly what the most exposed users often lack.",
        "Central question: how can AI help people evaluate questionable information while preserving agency, context, privacy and trust?"
      ],
      approach: [
        { title: "Migrants & refugees", text: "A focus group with seven Ukrainian refugee women, two in-depth interviews and two informal one-to-one conversations." },
        { title: "Older adults", text: "Six months of ethnographic observation in Smartphone Cafés, with group interviews and themed workshops." },
        { title: "Youth & community groups", text: "Participatory fake-news workshops in Wilnsdorf, Kreuztal and Hilchenbach." }
      ],
      insights: [
        { title: "Verification is distributed", text: "People compare multiple sources and consult others rather than trusting one channel." },
        { title: "Trust is social and contextual", text: "Trusted acquaintances, mediators and community organisations can matter more than an automated result." },
        { title: "Users want explanations, not commands", text: "People want reasons, sources, uncertainty and the ability to question results." },
        { title: "Visual misinformation is hard to verify", text: "Images, screenshots and videos need accessible multimodal verification support." },
        { title: "Vulnerability is contextual", text: "Migration experience, digital literacy, institutional distrust and surveillance concerns shape how people read AI outputs." },
        { title: "Learning happens through relationships", text: "Confidence develops through patient guidance, repetition and non-judgemental support." }
      ],
      decisions: [
        { title: "Evidence over verdicts", situation: "A bare 'fake / not fake' label gave users no reason to trust it.", evidence: "Users compare several sources and want reasons, sources and uncertainty.", decision: "Requirement: show evidence and established fact-checking sources behind each assessment.", why: "Protects agency and explainability." },
        { title: "Contestable by design", situation: "Users distrusted outputs they couldn't question.", evidence: "People want the ability to inspect and disagree with results.", decision: "Requirement: support inspection of evidence and disagreement with the system.", why: "Trust depends on being able to question the system." },
        { title: "Multilingual & plain language", situation: "Language and literacy limited access to verification.", evidence: "Observed across refugee, older-adult and youth settings.", decision: "Requirement: multilingual interfaces and simple-language options.", why: "Without them, the people who most need the tool can't use it." },
        { title: "Connected to trusted people", situation: "People check information through trusted others, not tools alone.", evidence: "Trust is social; mediators and community organisations matter.", decision: "Requirement: support sharing and discussing results with trusted others.", why: "Fits the tool into how trust already works." }
      ],
      evidence: [
        { value: "7", label: "Focus-group participants", note: "My own research", status: "validated" },
        { value: "6 mo.", label: "Ethnography with older adults", note: "Smartphone Cafés", status: "validated" },
        { value: "3", label: "Municipalities · youth workshops", note: "Wilnsdorf, Kreuztal, Hilchenbach", status: "validated" },
        { value: "~70", label: "Development points entered in Jira", note: "Consortium-level, not my individual delivery", status: "programme" },
        { value: "~90%", label: "Technical detection accuracy", note: "Consortium-level, not my output", status: "programme" }
      ],
      outcome: [
        "The research contributed to a responsible interaction model where AI-supported assessment stays explainable, contestable, multilingual and connected to trusted social infrastructure, supporting informed human judgement rather than promising automated truth.",
        "The wider consortium reflected these directions in a smartphone app, browser plugin and web application: multilingual interfaces, simple-language options, indicator-based hints, explanation views, established fact-checking services and institutional transparency.",
        "I independently built an interaction prototype from the documented requirements, URL, text and image input with visible privacy limits, progressive explanation of uncertainty, claim-level assessment and inspectable evidence. It is not the consortium's official interface or a deployed detection system.",
        "Published as 'User-Centred AI for Combating Misinformation with Vulnerable Groups' (Springer VS, 2026, second author)."
      ],
      reflection:
        "Trust in AI cannot be designed as a confidence score alone. It depends on whether people can inspect evidence, understand uncertainty, question the system and keep meaningful control over the final decision.",
      demonstrates: ["Researching trust in AI with hard-to-reach groups", "Translating evidence into responsible-AI requirements", "Prototyping a concept from requirements", "Working inside a multi-partner consortium"],
      visuals: [
        { file: "nebula-research-to-requirements.webp", caption: "How evidence shaped the requirements, and the value each one protects." },
        { file: "nebula-research-ecosystem.webp", caption: "From situated experience to responsible-AI requirements." },
        { file: "nebula-prototype-explainability.webp", caption: "My concept prototype: evidence stays inspectable, contestable and shareable." },
        { file: "nebula-prototype-safeguards.webp", caption: "My concept prototype: responsible-AI principles made visible in the interface." }
      ],
      links: [
        { label: "Springer chapter (DOI) ↗", url: "https://doi.org/10.1007/978-3-658-52212-4_10" },
        { label: "Official project ↗", url: "https://peasec.de/projects/nebula/" }
      ]
    },

    /* ================================================================
       SURVEILLANCE BEYOND BORDERS
       ================================================================ */
    {
      slug: "surveillance-beyond-borders",
      cardImage: "cover-surveillance.webp",
      track: ["research", "product"],
      title: "Surveillance Beyond Borders",
      subtitle: "Digital safety under transnational repression · from 37 interviews to prioritised product opportunities.",
      type: "UX Research · Trust & Safety · Product Discovery",
      context: "Research stream within CrossComITS · University of Siegen",
      role: "Lead UX Researcher & first author · Prototype owner & designer",
      timeline: "2024–2025",
      methods: ["Semi-structured interviews", "Grounded Theory-informed thematic analysis", "Trauma-informed research"],
      status: "Manuscript prepared for academic review · Prototype built",
      cardOutcome: "37 interviews distilled into five dynamics, a framework and prioritised safety concepts.",
      cardDecision: "An AI posting coach that gives decision support, never a 'safe to post' verdict.",
      cover: "sbb-five-dynamics.webp",
      glance: {
        challenge:
          "People who leave authoritarian contexts often stay under digital surveillance. Their online lives are shaped by fear long after they have physically left.",
        contribution:
          "I led the research end to end as first author, and owned and designed a prototype application grounded directly in the findings.",
        outcome:
          "Five empirical dynamics, an 'Ecology of Digital Survival' framework, and a built prototype covering five safety concepts."
      },
      privacyNote:
        "To protect participants, this public version anonymises countries, state actors, platforms and identifying context.",
      problem: [
        "Most digital-safety guidance assumes a threat that stops at the border. For migrants from authoritarian contexts, surveillance, intimidation and mistrust follow them online.",
        "The goal was to understand how people actually live with this risk, and what tools could support them without adding to their burden."
      ],
      approach: [
        { title: "Phase I", text: "23 interviews with migrants from a range of authoritarian contexts." },
        { title: "Phase II", text: "14 in-depth interviews with members of one diaspora community." },
        { title: "Analysis", text: "Grounded Theory-informed thematic analysis, with trauma-informed practices throughout." }
      ],
      insights: [
        { title: "Self-censorship", text: "Most participants deliberately limited what they said online." },
        { title: "Engineered mistrust", text: "Fear of informants eroded trust within the community itself." },
        { title: "Constant vigilance", text: "Surveillance anxiety was persistent, not occasional." },
        { title: "Fragmented digital identities", text: "People split themselves across accounts and platforms to manage risk." },
        { title: "Weakened solidarity", text: "Collective action and mutual support became harder to sustain." },
        { title: "An ecology of digital survival", text: "Together these form four interconnected conditions: ambient fear, habituated insecurity, adaptive paralysis and psychological exile." }
      ],
      decisions: [
        { title: "Identity Splitter", situation: "Participants already fragmented their identities manually to manage risk.", decision: "Support separate, deliberate identities instead of forcing one profile.", why: "Build on an existing coping strategy rather than asking people to change behaviour." },
        { title: "Trust Circles", situation: "Engineered mistrust weakened support within the community.", decision: "Let people define small, trusted groups for sharing.", why: "Rebuild safe connection without requiring public exposure." },
        { title: "Metadata Minimizer", situation: "Constant vigilance about what content might reveal.", decision: "Help people reduce identifying metadata before sharing.", why: "Lower real risk and the mental load of checking everything manually." },
        { title: "Neutral Nudges & Risk-Adaptive Posting Coach", situation: "Self-censorship was widespread, but risk differs per post and per person.", decision: "Offer calm, context-aware prompts rather than alarms or blanket rules. The AI coach gives decision support, never a 'safe to post' verdict.", why: "Support judgement without amplifying fear or creating false confidence." }
      ],
      evidence: [
        { value: "37", label: "Interviews across two phases", note: "23 (Phase I) + 14 (Phase II)", status: "validated" },
        { value: "12/14", label: "Deliberate self-censorship", note: "Phase II", status: "validated" },
        { value: "12/14", label: "Persistent surveillance anxiety", note: "Phase II", status: "validated" },
        { value: "13/14", label: "Chose platforms deliberately by risk", note: "Phase II", status: "validated" },
        { value: "9/14", label: "Community mistrust", note: "Phase II", status: "validated" },
        { value: "≥3/14", label: "Direct intimidation linked to online expression", note: "Phase II", status: "validated" }
      ],
      outcome: [
        "A working prototype covering all five concepts: Identity Splitter, Trust Circles, Metadata Minimizer, Neutral Nudges and a Risk-Adaptive Posting Coach.",
        "For any AI in this context, false positives and false negatives are first-class product risks: the user stays the final decision-maker, and outputs must explain themselves and communicate uncertainty.",
        "A first-author manuscript prepared for academic review."
      ],
      demonstrates: ["Leading sensitive, trauma-informed research", "Theory-building from qualitative data", "Trust-and-safety product thinking", "Owning the path from research to a prototype"],
      visuals: [
        { file: "sbb-five-dynamics.webp", caption: "Five core dynamics of transnational digital surveillance." },
        { file: "sbb-ecology.webp", caption: "The Ecology of Digital Survival framework." },
        { file: "sbb-phase2-evidence.webp", caption: "Phase II evidence snapshot (n = 14)." },
        { file: "sbb-research-process.webp", caption: "Research process across both phases." }
      ],
      links: []
    },

    /* ================================================================
       BO APP
       ================================================================ */
    {
      slug: "bo-app",
      cardImage: "cover-bo-app.webp",
      track: ["research"],
      title: "Bo App",
      subtitle: "Co-designing an accessible cognitive-training experience, and brain-sensor onboarding, with older adults.",
      type: "UX Research · Co-design · Digital Health",
      context: "eVITA (EU–Japan, Dec 2021 – May 2023) · NeU fNIRS brain-sensor workstream · paid position, University of Siegen",
      role: "UX Researcher & Designer",
      timeline: "~8–10 weeks",
      methods: ["Interviews", "Participatory co-design", "Observation", "Think-aloud usability testing"],
      status: "Published · OzCHI 2024 Late-Breaking Work (proceedings Sept 2025)",
      cardOutcome: "Independent sensor setup rose from 25% to 100% after the onboarding redesign (1 of 4 users → 3 of 3 in retest).",
      cardDecision: "Step-by-step visual sensor onboarding with an always-visible Back action.",
      cover: "bo-app-screens.webp",
      glance: {
        challenge:
          "Bo App pairs a cognitive-training app with an fNIRS brain-sensing headband for non-medical training. Older adults struggled to set the sensor up without help.",
        contribution:
          "End to end: I planned and ran the research, facilitated co-design, prioritised usability problems, translated evidence into requirements, and designed, tested and retested the prototypes.",
        outcome:
          "After redesign, independent sensor setup rose from 25% to 100% (1 of 4 → 3 of 3 in retest), with zero navigation issues. Published at OzCHI 2024."
      },
      problem: [
        "Older adults needed to use a mobile cognitive-training app and a brain-sensing device independently at home, making hardware setup, navigation and abstract brain-activity feedback understandable for users with varying digital confidence.",
        "Central question: how might we make unfamiliar brain-sensing technology feel understandable, manageable and motivating without making the experience clinical or stressful?",
        "Participants were active adults aged 60+ without dementia or MCI. Bo App was explored as a non-medical training and feedback concept, not a treatment.",
        "In the first usability round, 75% of testers needed assistance (3 of 4) and 50% hit navigation or setup problems (2 of 4). Only 25% could set up the sensor alone (1 of 4)."
      ],
      approach: [
        { title: "01 Discover", text: "Literature review, interviews and benchmarking." },
        { title: "02 Co-design", text: "7 older adults aged 60–80 across 12 co-design sessions and 4 iterative rounds, roughly 22 hours." },
        { title: "03 Test & iterate", text: "Interactive prototypes in Figma and Adobe XD. Think-aloud testing with the mobile prototype and the NeU fNIRS brain activity sensor, then revised onboarding, navigation and feedback, followed by retesting." }
      ],
      insights: [
        { title: "Hardware onboarding is part of the product", text: "Most failures happened before training started, while wearing and connecting unfamiliar hardware." },
        { title: "Visual feedback makes brain activity understandable", text: "A growing plant/tree metaphor made abstract brain feedback more relatable." },
        { title: "Feedback preferences differ", text: "Some valued performance feedback; one participant found frequent feedback potentially stressful." },
        { title: "Progress cues support motivation", text: "A sense of progress helped keep people engaged." },
        { title: "Simplicity helps focus", text: "Minimal interfaces helped participants concentrate on essential information." }
      ],
      decisions: [
        { title: "Step-by-step visual onboarding", situation: "Only 25% of initial testers could set up the sensor independently (1 of 4).", evidence: "Participants struggled to connect and wear unfamiliar hardware, with unclear sequencing.", decision: "Step-by-step visual sensor onboarding with a clarified order of actions.", why: "Reducing ambiguity at each step targets the exact point where users failed." },
        { title: "Persistent Back action", situation: "50% of testers ran into navigation or setup issues (2 of 4).", evidence: "Insufficient navigation support created uncertainty.", decision: "An always-visible Back action and a simpler hierarchy.", why: "People explore more confidently when they know they can recover." },
        { title: "Growing-tree & garden metaphors", situation: "Abstract biofeedback was hard to interpret.", evidence: "The tree metaphor made feedback relatable; the monthly garden concept came directly from participant feedback.", decision: "A growing tree for real-time feedback and a nurturing garden for monthly feedback.", why: "Familiar metaphors turn unfamiliar data into something people understand." },
        { title: "Customisable feedback", situation: "One feedback model didn't suit everyone.", evidence: "One participant found frequent performance feedback potentially stressful.", decision: "Feedback became customisable rather than one fixed model.", why: "Motivation without pressure." }
      ],
      evidence: [
        { value: "25% → 100%", label: "Independent sensor setup", note: "1 of 4 initial testers → 3 of 3 in retest", status: "validated" },
        { value: "75% → 0%", label: "Users needing assistance", note: "3 of 4 initial testers → 0 of 3 in retest", status: "validated" },
        { value: "0", label: "Navigation issues in the final retest", note: "3 retest participants", status: "validated" },
        { value: "80%", label: "High-priority issues resolved", note: "8 of 10 documented issues", status: "validated" },
        { value: "7", label: "Co-design participants (60–80)", note: "12 sessions, 4 rounds, ~22 h", status: "validated" }
      ],
      outcome: [
        "Sensor onboarding and navigation were redesigned; 80% of high-priority usability issues were resolved (8 of 10).",
        "Participant feedback shaped real-time, daily, monthly and competitive feedback concepts, and informed the final interactive prototype and implementation coordination.",
        "Published as a Late-Breaking Work at OzCHI 2024 (proceedings published September 2025). Counts come from project evaluation notes and researcher-confirmed task records; not every count appears in the paper."
      ],
      reflection:
        "Accessibility for older adults is not simply a matter of increasing font sizes. It means reducing uncertainty, supporting confidence and translating unfamiliar technology into understandable actions.",
      demonstrates: ["Co-design with older adults", "Turning usability findings into prioritised design changes", "Honest, small-sample evidence reporting"],
      visuals: [
        { file: "bo-app-screens.webp", caption: "Bo App: welcome, onboarding, feedback and brain FAQ screens." },
        { file: "", caption: "Before / after onboarding", note: "Export the early and redesigned prototype screenshots from your Framer page" },
        { file: "", caption: "Research process diagram", note: "Discover → co-design → test → iterate, with participant counts" }
      ],
      links: [
        { label: "Peer-reviewed publication (DOI) ↗", url: "https://doi.org/10.1145/3726986.3727033" },
        { label: "Read the OzCHI paper (PDF)", url: "Bo_App_OzCHI2023.pdf" },
        { label: "eVITA project ↗", url: "https://www.experienceandinteraction.com/evita" }
      ]
    },

    /* ================================================================
       CROSSCOMITS & SMARTPHONE CAFÉ
       ================================================================ */
    {
      slug: "crosscomits",
      cardImage: "cover-crosscomits.webp",
      track: ["research"],
      title: "CrossComITS & Smartphone Café",
      subtitle: "Human-centered cybersecurity learning with migrants, refugees, older adults and young people.",
      type: "UX Research · Cybersecurity · Digital Inclusion",
      context: "BMBF-funded research consortium · paid position, University of Siegen",
      role: "Project coordinator, leading the University of Siegen team and the partner team · UX Researcher",
      timeline: "May 2023 – Dec 2025",
      methods: ["Interviews", "Surveys", "Workshops", "A/B testing", "Usability tests", "Participatory learning sessions", "Scrum-based agile delivery", "Kanban backlog in GitHub", "Personas", "Journey mapping", "User stories & acceptance criteria"],
      status: "Published · ACM PDC 2026 & Springer chapter (first author)",
      cardOutcome: "Field research turned into a board game, metaphor cards and OER platform requirements.",
      cardDecision: "An A/B test of flashcard formats decided the product: visual metaphor plus a short explanation.",
      cover: "crosscomits-overview.webp",
      glance: {
        challenge:
          "Cybersecurity advice is often correct but unusable for people with different languages, backgrounds and levels of digital literacy.",
        contribution:
          "I coordinated the project, leading both the University of Siegen team and the partner team. I ran user research, translated findings into learning formats and platform requirements, and prioritised the backlog on a Kanban board in GitHub, working in Scrum-based agile iterations.",
        outcome:
          "A board game, metaphor flashcards, OER platform requirements, and two 2026 publications."
      },
      problem: [
        "The project had to reach very different groups, migrants, refugees, older adults and young people, without watering down the security content.",
        "Research insights also had to shape a digital OER platform, not stay in reports."
      ],
      approach: [
        { title: "Field research", text: "Interviews, surveys and workshops on everyday security questions and misconceptions." },
        { title: "Smartphone Café", text: "Participatory digital-security learning sessions with older adults." },
        { title: "Usability testing", text: "Learning materials and platform concepts tested iteratively with target users." },
        { title: "Scrum-based delivery", text: "Led the team in agile iterations: user needs → requirement → increment → usability testing → stakeholder feedback → prioritisation → next iteration." },
        { title: "Backlog prioritisation", text: "Prioritised the backlog for both teams on a Kanban board in GitHub, so research findings became ordered, visible work." },
        { title: "Personas & journey maps", text: "Condensed the field research into personas and journey maps for the three user groups, then into PRD-style requirements with user stories and acceptance criteria." },
        { title: "Roadmap & decision logs", text: "Kept the roadmap and a decision log so priorities and trade-offs stayed visible across partners." },
        { title: "Team leadership", text: "Led the student assistant team for the University of Siegen part of the project." }
      ],
      insights: [
        { title: "People beat interfaces", text: "In the Smartphone Café, low-pressure human support and peer learning handled security uncertainty in ways interface simplification alone could not." },
        { title: "Security needs everyday language", text: "Abstract terminology was a barrier; recognisable situations and metaphors opened discussion." }
      ],
      decisions: [
        { title: "Metaphor plus explanation · decided by A/B test", situation: "Abstract security concepts were hard to explain to very different groups.", evidence: "A/B test of flashcards: direct text explanations vs. visual metaphors. Metaphors made concepts tangible, but metaphor-only cards weren't equally clear for every participant.", decision: "Combine an accessible visual metaphor with a short descriptive explanation; revise metaphors where cultural interpretation differed.", why: "An experiment, not preference, decided the format." },
        { title: "Tangible learning tools", situation: "Technical explanations alone didn't land.", decision: "Metaphor flashcards and a short collaborative board game.", why: "Tangible activities make abstract concepts discussable in a group." },
        { title: "Research → platform requirements", situation: "Findings risked staying as research outputs.", decision: "Translated them into user stories and usability requirements for the OER platform.", why: "Connects field research directly to what gets built." }
      ],
      evidence: [
        { value: "3", label: "User groups · older adults, migrants & refugees, youth", note: "One programme, three distinct product contexts" },
        { value: "2", label: "Learning products delivered", note: "Cybersecurity board game · metaphor flashcards" },
        { value: "~200", label: "Total project participants", note: "Programme-level, not my personal sample", status: "programme" },
        { value: "~25%", label: "Engagement increase", note: "My own estimate · not a controlled measurement", status: "estimated" },
        { value: "~40%", label: "Task-success increase", note: "My own estimate · not a controlled measurement", status: "estimated" }
      ],
      outcome: [
        "'Mediating Digital Security', ACM Participatory Design Conference 2026 (co-author).",
        "'Building Bridges, Not Barriers', Springer VS, 2026 (first author)."
      ],
      demonstrates: ["Coordinating research across a consortium", "Inclusive, participatory methods", "Turning research into requirements"],
      visuals: [
        { file: "crosscomits-learning-artifacts.webp", caption: "Tangible materials turned security into a shared activity." },
        { file: "crosscomits-findings.webp", caption: "Four principles across three different communities." },
        { file: "crosscomits-oer.webp", caption: "A social OER infrastructure for security mediators." },
        { file: "smartphone-cafe-evidence.webp", caption: "Smartphone Café: translating field evidence into design direction." },
        { file: "smartphone-cafe-setting.webp", caption: "Smartphone Café: research embedded in a familiar community setting." }
      ],
      links: [
        { label: "PDC 2026 paper (PDF)", url: "Mediating_Digital_Security_PDC2026.pdf" },
        { label: "Official project ↗", url: "https://crosscomits.de/" }
      ]
    }
  ],

  /* Partner strip under the hero (logos). Logo images are stored at the
     bottom of this file in LOGOS, the name here must match a name there.
     Remove an item to hide it; an item without a matching logo shows as text. */
  /* Homepage order: these case studies show first; every other published
     project appears below under "More work". Use the project slugs. */
  featured: ["crosscomits", "retune", "nebula", "bo-app"],

  partners: {
    label: "Projects, partners and funders I've worked with",
    items: [
      { name: "e-VITA", url: "https://www.e-vita.coach" },
      { name: "CrossComITS", url: "https://crosscomits.de" },
      { name: "University of Siegen", url: "https://www.uni-siegen.de" },
      { name: "EU Horizon 2020", url: "https://www.e-vita.coach" },
      { name: "BMFTR", url: "https://www.bmftr.bund.de" },
      { name: "Tohoku University", url: "https://www.tohoku.ac.jp/en/" },
      { name: "AIST Japan", url: "https://www.aist.go.jp/index_en.html" },
      { name: "AP-HP Paris", url: "https://www.aphp.fr" },
      { name: "Hochschule Bonn-Rhein-Sieg", url: "https://www.h-brs.de" },
      { name: "KatHO NRW", url: "https://katho-nrw.de" },
      { name: "JLU Gießen", url: "https://www.uni-giessen.de" },
      { name: "NanoGiants", url: "https://www.nanogiants.de" },
      { name: "Caritas", url: "https://www.caritasnet.de" }
    ]
  },

  testimonials: [
    { quote: "Roodabeh took on the project leadership in CrossComITS. She substantially shaped the project's content, actively co-designed the UX, evaluated the solutions together with users and co-authored scientific publications. She also contributed to third-party funding acquisition and grant proposals. What impressed me most was her ability to capture the needs of very different user groups precisely, which let her build practical, well-fitted solutions that worked not only on paper but convinced in real use.",
      name: "Dr. Konstantin Aal", role: "Senior Researcher, University of Siegen", relation: "Managed Roodabeh directly · translated from German" }, // CHECK: ask Konstantin to approve the translation
    { quote: "I had the pleasure of working with Roodabeh in the BMFTR-funded CrossComITS project, where we developed and conducted workshops with older adults on cybersecurity-related topics. She approached both the research process and the participants with great care, openness and respect.",
      name: "Daniela Thomas", role: "Research Associate: CrossComITS partner organisation", relation: "Worked together across partner organisations" },
    { quote: "Roodabeh is quick to learn, reliable in every sense, deeply skilled in UX research and design, and an excellent collaborator. I highly recommend her to any team looking for someone who can drive user-centered innovation while also uplifting the people around her.",
      name: "Hina Firdaus", role: "Human-AI Collaboration & Research Infrastructure", relation: "Studied together" }
  ],

  experience: [
    { when: "2026 – present", title: "PhD Candidate, Human-Computer Interaction", org: "University of Siegen", text: "Participatory digital design for migrant mental wellbeing." },
    { when: "Oct 2021 – Dec 2025", title: "Research Associate · UX Research & Product", org: "University of Siegen (Wissenschaftliche Mitarbeiterin) · Information Systems & New Media", text: "Research-to-product work in EU- and BMBF/BMFTR-funded, multi-partner consortium projects.",
      points: [
        "CrossComITS (BMBF/BMFTR, 2023–2025): project coordinator in a six-partner consortium, leading the University of Siegen team and the partner team in Scrum-based delivery.",
        "Led the student assistant team for the University of Siegen part of the project and coordinated testing cycles with student assistants and partners.",
        "Maintained the roadmap and decision logs and prioritised the backlog on a Kanban board in GitHub.",
        "Translated interviews, fieldwork, workshops and usability tests into personas, journey maps and PRD-style requirements with user stories and acceptance criteria for a social OER learning platform.",
        "Delivered two learning products, a cybersecurity board game and metaphor flashcards. Ran an A/B test of flashcard formats (text vs. visual metaphor); the result became the product decision: metaphor plus a short explanation.",
        "Co-authored two publications and contributed to grant proposals.",
        "eVITA (EU–Japan, 2021–2023), brain-sensor workstream: improved the existing ABC App in Unity, a cognitive-training app driven by the NeU fNIRS brain activity sensor (requirements, prototypes and implementation changes).",
        "eVITA: designed Bo App for the same NeU sensor through interviews and real-time co-design with older adults, online and in person, with prototypes in Figma and Adobe XD. Multilingual design for German, French, Italian and Japanese users. Participants could set up and use the sensor with Bo App alone: independent setup rose from 25% to 100% (1 of 4 users in the first test, 3 of 3 in the retest).",
        "NEBULA (BMBF, 2023–2025): turned research with vulnerable groups into responsible-AI requirements: explainability, multilingual access and human control.",
        "Mentored students in their master's theses and study projects."
      ] },
    { when: "Dec 2020 – Jul 2021", title: "Business & Data Analyst Intern, Cybersecurity", org: "Operatis Business Technology Consulting, Germany", text: "Analysed business processes and turned operational needs into requirements and workflows; supported evaluation, testing and rollout of IT and business software; prepared and validated data for integration and migration (knowledge graph, JSON-to-RDF, Linux, Bash, Docker); researched vendors and coordinated between clients, consultants and technical stakeholders." },
    { when: "Oct 2015 – Dec 2017", title: "Lecturer & Digital Competency Trainer, Computer Science", org: "Islamic Azad University · Tehran West & Karaj branches, Iran", text: "Taught undergraduate courses in data structures, computer networks, Photoshop and technical English, and ran digital-competency workshops for 200+ students a year." }
  ],

  publications: [
    { year: "2026", venue: "ACM PDC 2026", title: "Mediating Digital Security: Participatory Learning with Older Adults in Smartphone Café Sessions", note: "Second author", pdf: "Mediating_Digital_Security_PDC2026.pdf", doi: "https://doi.org/10.1145/3796624.3796644" },
    { year: "2026", venue: "Springer VS · Book chapter", title: "Building Bridges, Not Barriers", note: "First author · pp. 151–180 · full text on request", pdf: "", doi: "https://doi.org/10.1007/978-3-658-52212-4_7" },
    { year: "2026", venue: "Springer VS · Book chapter", title: "User-Centred AI for Combating Misinformation with Vulnerable Groups", note: "Second author · pp. 227–252 · full text on request", pdf: "", doi: "https://doi.org/10.1007/978-3-658-52212-4_10" },
    { year: "2025", venue: "OzCHI 2024 · proceedings published Sept 2025", title: "Prototyping and Evaluating Bo App: A Brain Measurement Device as a Feedback Tool for Cognitive Training", note: "Late-Breaking Work", pdf: "Bo_App_OzCHI2023.pdf", doi: "https://doi.org/10.1145/3726986.3727033" },
    { year: "2015", venue: "IJISA", title: "Mobile Robot Path Planning by RRT* in Dynamic Environments", note: "First author", pdf: "Mobile_Robot_Path_Planning.pdf", doi: "" },
    { year: "Thesis", venue: "Master's thesis · M.Sc. HCI, University of Siegen", title: "How Older Adults Use Measures of Brain Activity in Real Life: A Design Case Study", note: "", pdf: "Master_Thesis_Roodabeh_Seif.pdf", doi: "" },
    { year: "Review", venue: "Manuscript", title: "Surveillance Beyond Borders · digital safety under transnational repression", note: "First author · prepared for academic review", pdf: "", doi: "" }
  ],

  teaching: [
    { when: "2025 – present", title: "Meditation Instructor", org: "Online · Persian-speaking community", text: "Online meditation sessions supporting mindfulness and emotional wellbeing, drawing on 13+ years of personal practice." },
    { when: "2022", title: "Private Tutor", org: "Germany", text: "Mathematics and English for primary-school students from different learning needs and cultural backgrounds." }
  ],

  beyond: [
    { icon: "🎵", name: "Flute", note: "Music as precision and patience." },
    { icon: "🎨", name: "Watercolor", note: "Learning to see light, colour and space differently." },
    { icon: "📷", name: "Photography & Film", note: "Telling stories through visual media." },
    { icon: "🏔️", name: "Hiking", note: "A counterbalance to screen-heavy work." },
    { icon: "🧘", name: "Meditation", note: "13+ years of practice." },
    { icon: "🍳", name: "Cooking", note: "Experimenting with ingredients and process." }
  ]
};

/* =====================================================================
   LOGOS, image data for the partner strip. Generated; no need to edit.
   ===================================================================== */
(function () {
  const LOGOS = {
    "e-VITA": "data:image/webp;base64,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",
    "University of Siegen": "data:image/webp;base64,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",
    "EU Horizon 2020": "data:image/webp;base64,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",
    "Tohoku University": "data:image/webp;base64,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",
    "AIST Japan": "data:image/webp;base64,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",
    "AP-HP Paris": "data:image/webp;base64,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",
    "Caritas": "data:image/webp;base64,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",
    "CrossComITS": "data:image/webp;base64,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",
    "BMFTR": "data:image/webp;base64,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",
    "Hochschule Bonn-Rhein-Sieg": "data:image/webp;base64,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",
    "KatHO NRW": "data:image/webp;base64,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",
    "NanoGiants": "data:image/webp;base64,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",
    "JLU Gießen": "data:image/webp;base64,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"
  };
  ((window.SITE.partners || {}).items || []).forEach(p => { if (!p.logo && LOGOS[p.name]) p.logo = LOGOS[p.name]; });
})();
