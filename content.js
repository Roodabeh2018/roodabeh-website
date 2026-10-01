/* =====================================================================
   ROODABEH SEIF — PORTFOLIO CONTENT
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
    sub: "UX research & HCI background · PhD researcher in Human-Centered AI and Digital Wellbeing",
    tagline:
      "I move from complex human evidence to product requirements, prioritisation, responsible AI boundaries and defensible product decisions.",
    focus: ["0→1 AI products", "GenAI use-case scoping", "AI evals & guardrails", "Human-in-the-loop", "Research-to-requirements"],
    photo: "roodabeh-profile.jpg",
    email: "roodabeh.seif@gmail.com",
    linkedin: "https://linkedin.com/in/roodabeh-seif",
    orcid: "https://orcid.org/0009-0008-6459-9637",
    location: "Germany · Open to relocation",
    cv: "" // e.g. "Roodabeh_Seif_CV.pdf" — leave empty to hide the CV button
  },

  /* Home-page "Approach" section — wording from your Notion AI PM portfolio */
  approach: {
    title: "How I decide what gets built — and where AI belongs",
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
      { title: "Evaluate before release", text: "Accuracy, usefulness, unsupported claims, privacy and failure behaviour are product requirements — not afterthoughts." }
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
      "I work AI-natively: I built Retune's functional MVP myself through AI-assisted prototyping, and prototyped my NEBULA concept the same way. That makes me careful about where AI belongs. Deterministic logic calculates the facts; GenAI explains them — and sometimes the most useful AI feature is the one you decide not to build.",
    education: [
      "PhD candidate, Human-Computer Interaction — University of Siegen (2026–present)",
      "M.Sc. Human-Computer Interaction — University of Siegen (2019–2022)",
      "M.Sc. Mechatronics Engineering — Azad University, Qazvin (2011–2014)",
      "B.Sc. Computer Science — Payame-Noor University (2005–2010)",
      "Microsoft AI Product Manager Professional Certificate (Coursera) — in progress",
      "DCitizens Summer School (EU Horizon Twinning) — participatory design & design justice, Lisbon (2024)"
    ],
    languages: "English C2 · German B2 · Persian native"
  },

  skills: [
    { title: "Product", items: ["Product Strategy", "Discovery", "MVP Scoping", "PRD-style Requirements", "User Stories & Acceptance Criteria", "Prioritisation", "Roadmapping", "Agile / Scrum", "Stakeholder Alignment"] },
    { title: "AI Product", items: ["GenAI / LLM Use-case Scoping", "AI Evals", "Guardrails", "Human-in-the-Loop", "Deterministic vs. GenAI Architecture", "Prompt Evaluation", "Privacy by Design", "Explainability"] },
    { title: "UX Research", items: ["Semi-structured Interviews", "Participatory Co-design", "Think-aloud Usability Testing", "Thematic / Grounded Theory Analysis", "Trauma-informed Research", "Mixed Methods", "MAXQDA"] },
    { title: "Tools", items: ["Jira", "Confluence", "Notion", "Miro", "Figma", "Lovable", "ChatGPT", "Adobe CC"] },
    { title: "Technical", items: ["Python", "HTML / CSS", "MATLAB", "C++", "Linux", "Docker"] },
    { title: "Facilitation", items: ["Workshops", "University Lecturing", "Training Design", "Train-the-Trainer"] }
  ],

  /* ------------------------------------------------------------------
     CASE STUDIES — shown in this order on the home page
     track: "product" (Product & AI) and/or "research" (UX Research) —
     used by the filter buttons on the home page.
     ------------------------------------------------------------------ */
  projects: [
    /* ================================================================
       RETUNE
       ================================================================ */
    {
      slug: "retune",
      track: ["product", "research"],
      title: "Retune",
      subtitle: "A 0→1 routine companion for life under stress — return over perfection, facts before GenAI.",
      type: "0→1 AI Product · Behaviour Design · Wellbeing",
      context: "Independent, self-funded product",
      role: "AI Product Manager · UX Researcher & Product Designer",
      timeline: "Ongoing",
      methods: ["Observation", "Survey", "Follow-up interviews", "Usability testing", "4-week pilot"],
      status: "Functional MVP · validation cycle completed · AI reflection evaluated offline, not yet in the product",
      cardOutcome: "A functional MVP I built myself: 86% onboarding success and 78% privacy comprehension in usability testing, validated through a 4-week pilot.",
      cover: "retune-cover.webp",
      glance: {
        challenge:
          "Habit apps assume life is stable. For people living through crisis, illness or migration, streaks and leaderboards turn one missed day into giving up entirely.",
        contribution:
          "I own problem framing, principles, MVP scope, requirements and AI boundaries — and built the functional MVP myself through AI-assisted prototyping, with no separate developer or designer.",
        outcome:
          "A validated Persian (RTL), mobile-first MVP: 86% onboarding success, 78% correct privacy comprehension, and an AI reflection evaluated offline before any release."
      },
      problem: [
        "Stay consistent when you can. Adapt when you need to. Return when you fall away.",
        "Retune is for young Persian speakers — starting with students and migrants in Germany — whose routines are disrupted by illness, psychological strain, crisis or instability.",
        "Existing tools reward uninterrupted repetition. The critical moment for these users isn't the missed day — it's whether they come back."
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
          intro: "The smallest set of capabilities needed to test the core value proposition — and an explicit list of what stays out.",
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

        decisionIntro: "Each decision records its evidence and how strong that evidence is. Several rest on starting hypotheses — they are labelled as such.",
        decisionShow: 3,
        decisionLog: [
          { title: "No streaks, leaderboards or ranking", basis: "hypothesis",
            situation: "Routine tools typically reward unbroken chains and comparison.",
            evidence: "Starting hypothesis from lived experience and two routine communities: illness, crisis and strain make uninterrupted routines unrealistic.",
            decision: "Removed streaks, leaderboards and ranking. Returning after inactive days shows neutral, supportive language.",
            why: "The product optimises for returning, not for maintaining a perfect chain." },
          { title: "Per-activity privacy, three sharing states", basis: "validated",
            situation: "Group members shared routines to encourage each other — but not every routine felt safe to share.",
            evidence: "Starting hypothesis (social support vs. privacy); in usability testing 78% of participants correctly understood the per-activity privacy controls.",
            decision: "Visibility is set per activity: share by name, share completion anonymously, or keep private.",
            why: "People can take part socially without exposing every routine." },
          { title: "Deterministic reporting",
            situation: "Reports show time, percentages, active days and trends — facts users need to trust.",
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
          { title: "Done / Not today — \"Partially done\" removed", basis: "hypothesis",
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

        requirementsIntro: "Requirements extend into data handling and access control — product decisions, not just screens.",
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
            learned: "Records were fragmented, and a checkmark didn't capture effort — hard actions looked the same as easy ones.",
            changed: "Became two starting hypotheses (effort and fragmentation) — not findings." },
          { stage: "WhatsApp / Telegram routine groups", status: "hypothesis",
            uncertainty: "Does social accountability help — and when does it feel intrusive?",
            tested: "Participation in two Persian-speaking routine communities sharing exercise, meditation, reading and more.",
            learned: "Support was useful but lived apart from tracking; some routines felt safe to share, others sensitive; planning ahead could create resistance.",
            changed: "Per-activity privacy and post-action logging entered the MVP concept." },
          { stage: "Functional mobile MVP",
            uncertainty: "Can tracking, privacy, support and reporting live in one low-pressure product?",
            tested: "A Persian RTL MVP built through AI-assisted prototyping; directional feedback from three early reviewers.",
            learned: "\"Partially done\" was ambiguous — its meaning varied too much between activities.",
            changed: "Removed \"Partially done\"; the two-state Done / Not today model now needs user validation." },
          { stage: "User research — survey & interviews", status: "validated",
            uncertainty: "How do people experience interruption and return, and when does accountability feel supportive vs. intrusive?",
            tested: "Survey with 62 respondents and 8 follow-up interviews on interruption, return, social support and privacy needs.",
            learned: "",
            changed: "Set the focus of the usability study: onboarding, privacy comprehension, returning after interruption, supportive reactions and reports." },
          { stage: "Usability iterations", status: "validated",
            uncertainty: "Do people understand privacy states, reactions, reports and returning after inactivity?",
            tested: "7 mobile think-aloud tests — e.g. deactivate without deleting history, share by name or anonymously, join by invitation, read a monthly report, return after inactive days.",
            learned: "86% onboarding success; 78% correctly understood the per-activity privacy controls.",
            changed: "" },
          { stage: "4-week pilot", status: "validated",
            uncertainty: "Does the product logic hold up in everyday use?",
            tested: "A 4-week field pilot with 18 people.",
            learned: "Short-term field evidence from everyday use — not proof of long-term behaviour change or wellbeing effects.",
            changed: "" }
        ],

        ai: {
          title: "Responsible AI / AI product boundary",
          intro: "The AI feature is intentionally narrow: an opt-in weekly reflection based only on facts the product has already verified. It was evaluated offline across 60 test cases and is not yet part of the live product.",
          status: "planned",
          deterministic: {
            label: "Deterministic product layer", role: "Calculates the facts — built",
            items: ["Exact metrics: time and percentages", "Activity counts and active days", "Trends", "Historical data"]
          },
          generative: {
            label: "Generative AI layer", role: "Explains verified facts — opt-in, evaluated offline",
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
            { metric: "Numeric accuracy", target: "Target 100% agreement with verified metrics — 98% achieved offline (60 test cases)", status: "validated" },
            { metric: "Invented metrics", target: "0 — none across 60 test cases", status: "validated" },
            { metric: "Diagnosis / treatment advice", target: "0", status: "planned" },
            { metric: "Unsupported causal claims", target: "0 — those found were identified and corrected before pilot use", status: "validated" },
            { metric: "Privacy violations", target: "0", status: "planned" },
            { metric: "Usefulness & clarity", target: "Prompt comparison, manual review, then user testing", status: "planned" }
          ],
          note: "Measured offline in a constrained test setup — this shows consistency and fabrication risk, not user benefit or clinical value. The remaining criteria are release targets. Next: compare 2–3 prompt variants on the same verified weekly report before any live-model decision."
        },

        ownedIntro: "Solo product work — no separate developer or designer.",
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
        "A working MVP with Today, Activities, Together (private groups), Reports and Settings — post-action logging, editable activities, weekly/monthly reports and mood, energy and sleep reflections.",
        "The findings support usability and comprehension claims for this study context — not claims that Retune improves wellbeing, productivity or long-term routines.",
        "Next: prompt-variant comparison on verified weekly data, then a decision on integrating the AI reflection into the live product."
      ],
      demonstrates: ["0→1 strategy and MVP definition", "Prioritisation — saying no", "Requirements into data and access logic", "Deterministic vs. GenAI architecture", "AI guardrails and evaluation before release"],
      visuals: [
        { file: "retune-evolution.webp", caption: "Two fragmented practices — personal tracking and group accountability — converged into one MVP." },
        { file: "retune-principles-to-mvp.webp", caption: "Principles translated into product decisions." },
        { file: "retune-privacy-model.webp", caption: "Privacy is selected per activity: by name, anonymous completion, or private." }
      ],
      screens: [
        { file: "retune-today.webp", caption: "Today — welcome back, no streak repair" },
        { file: "retune-activities.webp", caption: "Activities — important, never ranked" },
        { file: "retune-reports.webp", caption: "Reports — deterministic weekly data" },
        { file: "retune-report-detail.webp", caption: "Report detail — activity and wellbeing context" }
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
      track: ["product", "research"],
      title: "Ghesse Khaneh",
      altTitle: "قصه‌خونه",
      subtitle: "Hybrid storytelling for life-skills learning.",
      lede: "A facilitator-centered platform for designing and running storytelling-based learning experiences with children and parents.",
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
      cardOutcome: "A facilitator platform that structures the session before, during and after — while stories, play and conversation stay between people.",
      cover: "gk-home.webp",
      glance: {
        challenge:
          "Facilitators juggle stories, objectives, questions, activities, role-play, materials, timing, observations and parent follow-up — knowledge scattered across documents, notes and personal experience.",
        contribution:
          "Product concept, user and stakeholder needs, experience and information architecture, facilitator workflow and session journey, feature prioritisation, interaction and UI design, prototyping and evaluation planning.",
        outcome:
          "A bilingual (Persian / English) responsive web-app prototype that supports the facilitator before, during and after each session — without turning the child's experience into screen time."
      },
      problemLead: true,
      problem: [
        "How might we support facilitators in planning and delivering structured, engaging learning experiences — without turning the child's experience into another screen-based educational product?",
        "Ghesse Khaneh is not a story-reading app for children. Its main users are facilitators who run structured life-skills sessions through storytelling, guided discussion, role-play, games, creative activities, reflection, observation and parent follow-up. The child is the beneficiary of the experience, not the primary digital user.",
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
              { title: "Observe", text: "Capture meaningful observations — without diagnosing or scoring the child." },
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
              image: "gk-session-builder.webp", caption: "A structured way to turn learning objectives into a complete facilitated session — with a live outline and the mocked facilitator assistant." },
            { type: "feature", label: "Before", title: "Story, activity & role-play library",
              text: "Reusable content, so preparation doesn't start from zero and quality doesn't depend on one person's memory.",
              points: ["Stories by age, topic, skill, emotional theme and duration", "Games — cognitive, physical and creative", "Role-play scenarios", "Templates"],
              image: "gk-library.webp", caption: "Reusable content organised by age, theme, skill and emotion." },
            { type: "feature", label: "During", title: "Facilitator mode",
              text: "A simplified interface for running the live session. It shows only what the facilitator needs right now, reducing cognitive load while their attention stays on the children.",
              points: ["Current stage", "Facilitator instructions", "Question or activity", "Materials and timing", "Next / previous controls", "Quick observation notes"],
              // CHECK: no Facilitator mode screenshot yet — add  image: "gk-facilitator-mode.webp"  when you have one
            },
            { type: "feature", label: "After", title: "Observation & reflection",
              text: "Qualitative documentation helps facilitators learn from each session — without scoring or diagnosing children.",
              points: ["What worked", "Where children disengaged", "Meaningful comments", "Difficult moments", "Topics worth revisiting", "Ideas for the next session"],
              image: "gk-reflections.webp", caption: "Five guided questions after each session; the assistant's suggested summary is a mock that does not replace professional judgement." },
            { type: "feature", label: "After", title: "Parent take-home",
              text: "The learning continues at home through one simple, offline parent–child moment.",
              points: ["One conversation prompt", "One offline activity", "Brief guidance for the parent"],
              image: "gk-parent-takehome.webp", caption: "A printable, shareable card designed to work away from screens. \"A child may always choose whether to respond. This activity is not a test or assessment.\"" },
            { type: "feature", label: "Across sessions", title: "Programs",
              text: "Several sessions form a learning program, so a group's learning builds over time — followed without points, rankings or competition.",
              points: ["Example: Understanding Emotions", "1 · Recognising feelings", "2 · Naming feelings", "3 · Expressing feelings", "4 · Navigating strong feelings"],
              image: "gk-programs.webp", caption: "Programs — connected sessions per group, with what comes next." }
          ] },

        { label: "Hybrid experience", title: "Designing beyond the screen.",
          intro: "The product deliberately connects digital and physical interaction. The digital layer carries the structure so the human layer can carry the learning.",
          blocks: [
            { type: "columns", connector: "supports",
              cols: [
                { label: "Digital layer — the facilitator", accent: true, items: ["Preparation", "Structure", "Guidance", "Documentation", "Follow-up"] },
                { label: "Human & offline layer — the session", items: ["Storytelling", "Discussion", "Games", "Role-play", "Drawing and making", "Parent–child interaction"] }
              ] }
          ] },

        { label: "AI assistant — concept", title: "AI stays behind the facilitator.",
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
              note: "Planned measures — nothing has been measured yet." },
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
            // CHECK: MVP tiers come from your Notion page — confirm where Programs and Parent take-home sit
            { type: "columns", cols: [
              { label: "First MVP", accent: true, items: ["Session builder", "Approved story / activity library", "Lightweight facilitator mode", "Reflection"], why: "The repeatable preparation and reflection work — enough to test whether the method can travel to new facilitators." },
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
              items: ["Informed, revocable consent", "Pre / post assessment", "Session feedback", "Facilitator observations", "Parent feedback", "Usability testing", "Anonymised research data — no individual scores or child comparisons"] },
            { type: "gallery", images: [{ file: "gk-research.webp", caption: "Research & evaluation — a structural preview with sample data. It makes no claims about validated instruments or outcomes." }] }
          ] }
      ],
      evidence: [],
      outcome: [],
      reflection:
        "Digitisation does not always mean moving the experience onto a screen. The strongest product decision was to keep human interaction at the centre and use technology to support the person facilitating it — the interface organises complexity in the background so the facilitator can focus on what is happening in front of them.",
      demonstrates: ["Designing complex facilitator workflows", "Translating educational methodology into product architecture", "Hybrid digital / offline experiences", "Responsible AI product thinking", "Designing for children without making them the digital users", "Balancing structure with facilitator flexibility", "UX for sensitive interpersonal contexts", "Product thinking beyond individual screens"],
      visuals: [],
      links: []
    },

    /* ================================================================
       DARA — workplace wellbeing
       Source: your 17 screenshots only. Everything below describes what the
       product shows. Fields marked CHECK need your input.
       draft: true hides it from the live site until you confirm them.
       ================================================================ */
    {
      slug: "dara",
      draft: true, // CHECK: set to false once role, context and timeline are filled in
      track: ["product"],
      title: "DARA",
      subtitle: "Workplace wellbeing that helps people and teams — without turning wellbeing into surveillance.",
      type: "Product Design · Workplace Wellbeing · Privacy by Design",
      role: "",      // CHECK: your role
      context: "",   // CHECK: context (personal concept? for whom?)
      timeline: "",  // CHECK: when
      status: "Functional browser demo",
      cardOutcome: "A two-sided wellbeing product: private tools for employees, and team insight for managers built only on aggregated, anonymised patterns.",
      cover: "dara-home.webp",
      glance: {
        challenge:
          "Wellbeing tools at work face a trust problem: employees won't share honestly if a manager might see it, yet managers need signals they can act on. The product had to serve both sides without exposing anyone.",
        contribution:
          "", // CHECK: what you did
        outcome:
          "A functional browser demo with an employee view — check-in, conversation coach, reflection and a personal journey — and a manager view built only on aggregated, anonymised team patterns."
      },
      problem: [
        "DARA supports four dimensions of working life — Energy, Connection, Focus and Growth — through short daily check-ins, tools for difficult conversations and appreciation, reflective coaching and small team experiments.",
        "The core tension is trust. Employees need a genuinely private space; managers need to know when a team is struggling. DARA resolves this by separating the two completely: individuals see their own data, managers see only team-level patterns, and below five responses they see nothing at all.",
        "DARA is explicitly not a medical, therapy or crisis service — a boundary stated on every page."
      ],
      chapters: [
        { label: "Design principle", title: "Managers see patterns, not people.",
          blocks: [
            { type: "columns", connector: "aggregated · anonymised · n ≥ 5",
              cols: [
                { label: "Employee view — private", accent: true, items: ["Home — today's check-in, suggested action, gentle insight", "Check-in — daily, plus a weekly team pulse", "Connect — difficult-conversation coach, appreciation", "Coach — reflect with DARA, weekly reflection", "My Journey — actions and private badges", "Profile — goal, reminders, what DARA stores"] },
                { label: "Manager view — team level only", items: ["Overview — team energy, workload, belonging, clarity", "Team Pulse — weekly averages and comment themes", "Team Actions — small experiments", "Insights — six weeks of team patterns", "Privacy"] }
              ] }
          ] },

        { label: "Employee experience", title: "Private tools that earn honest input.",
          blocks: [
            { type: "feature", label: "Onboarding", title: "Four screens, one promise",
              text: "Onboarding introduces the four dimensions, states the privacy model up front and asks for one gentle goal — which can be changed at any time.",
              points: ["Energy, Connection, Focus and Growth", "\"Progress comes from meaningful actions you choose — not from time spent in the app\"", "Private by default — managers only see aggregated, anonymised team patterns", "Choose a gentle goal"],
              screens: [
                { file: "dara-onboarding-1.webp", caption: "Welcome" },
                { file: "dara-onboarding-2.webp", caption: "Four dimensions" },
                { file: "dara-onboarding-3.webp", caption: "Private by default" },
                { file: "dara-onboarding-4.webp", caption: "Choose a gentle goal" }
              ] },
            { type: "feature", label: "Daily", title: "A 30-second check-in",
              text: "Energy, stress and focus in three taps, an optional main influence and a private note. A separate weekly pulse feeds only anonymised team averages.",
              points: ["Energy, stress, focus", "Optional influence: workload, relationships, meetings, clarity, personal", "Private note", "Weekly team pulse — team averages only"],
              image: "dara-checkin.webp", caption: "Daily check-in — private to the employee." },
            { type: "feature", label: "Relationships", title: "Difficult conversations and appreciation",
              text: "A four-step coach helps prepare a difficult conversation, starting with describing what happened \"the way a camera would record it\" — separating facts from interpretation. A second tool turns something a colleague did into specific recognition.",
              points: ["Four structured preparation steps", "Facts before interpretation", "Specific appreciation"],
              image: "dara-connect.webp", caption: "Connect — Difficult Conversation Coach, step 1 of 4." },
            { type: "feature", label: "Reflection", title: "Reflect with DARA",
              text: "A private space to think out loud. DARA mostly asks questions rather than giving answers, separates facts from interpretations and never labels people.",
              points: ["Reflective questions, no diagnosis", "No judgement of colleagues", "Never shared with the manager", "Clear signposting to emergency services and occupational health"],
              image: "dara-coach.webp", caption: "Coach — reflective questions with explicit limits." },
            { type: "feature", label: "Progress", title: "A personal journey, not a score",
              text: "Progress comes from meaningful actions the employee chose to take. There are no rankings, no comparisons and no penalties for quiet weeks — comeback milestones replace broken streaks.",
              points: ["Attention across the four dimensions", "Badges private to the employee", "\"Back on Track\" rewards returning after a quiet period", "Team achievements reflect collective participation only"],
              image: "dara-journey.webp", caption: "My Journey — badges are never visible to managers or colleagues." },
            { type: "feature", label: "Transparency", title: "What DARA stores — in plain language",
              text: "The profile shows exactly what is stored and who can see it, alongside reminders that are \"gentle by design — nothing is escalated to anyone\".",
              points: ["Check-ins, reflections and coaching — private to the account", "Weekly pulse — stored only as a team average", "Hidden entirely when fewer than five people respond"],
              image: "dara-profile.webp", caption: "Profile — the data model explained to the person it concerns." }
          ] },

        { label: "Manager experience", title: "Team insight without individual exposure.",
          blocks: [
            { type: "feature", label: "Overview", title: "Four team signals and one suggested action",
              text: "Managers see team energy, workload, belonging and clarity on a 1–5 scale, overall participation that is never broken down per person, and one suggested action based on aggregated patterns.",
              points: ["Participation shown only as a team total", "Groups under five responses stay hidden", "Suggested action explained in plain language"],
              image: "dara-manager-overview.webp", caption: "Team overview — the anonymity threshold in action for a four-person sub-team." },
            { type: "feature", label: "Insights", title: "Interpretations, not conclusions",
              text: "Six weeks of team trends, each with a short plain-language reading — framed as what a pattern may mean, never as a conclusion about individuals.",
              image: "dara-insights.webp", caption: "Insights — aggregated team-level data only." },
            { type: "feature", label: "Team actions", title: "Small experiments, not programmes",
              text: "Each action is short, visible and easy to evaluate: why it may help, how to run it, and a follow-up question that the next weekly pulse answers.",
              points: ["Priority reset, meeting cleanup, appreciation ritual, focus block, team check-in, role clarity", "Each has a built-in follow-up question", "Never targeted at a named individual"],
              image: "dara-team-actions.webp", caption: "Team actions — each experiment closes the loop at the next pulse." },
            { type: "feature", label: "Team pulse", title: "Comments become themes, never quotes",
              text: "Open comments are summarised into themes and never linked to a person. Weekly averages appear only when at least five people have responded.",
              image: "dara-team-pulse.webp", caption: "Team pulse — weekly averages and comment themes." }
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
      demonstrates: ["Privacy by design for sensitive workplace data", "A two-sided product: individual value and team insight", "Anti-surveillance analytics — aggregation and anonymity thresholds", "Non-competitive engagement design", "Scoping a coaching feature with explicit limits"],
      visuals: [],
      links: []
    },

    /* ================================================================
       NEBULA
       ================================================================ */
    {
      slug: "nebula",
      track: ["product", "research"],
      title: "NEBULA",
      subtitle: "Explainable AI assistance for evaluating misinformation — without replacing human judgement.",
      type: "Responsible AI · Explainability · UX Research",
      context: "BMBF-funded research consortium",
      role: "UX Researcher · University of Siegen research team",
      timeline: "May 2023 – Dec 2025",
      methods: ["Focus group", "Interviews", "Ethnography", "Workshops", "Requirements synthesis"],
      status: "Findings published — Springer book chapter (2026)",
      cardOutcome: "Research on trust translated into explainable, contestable, multilingual AI requirements — plus my own concept prototype.",
      cover: "nebula-research-to-requirements.webp",
      glance: {
        challenge:
          "An AI tool can flag misinformation, but a verdict alone doesn't help people who have good reasons to distrust institutions and technology.",
        contribution:
          "I conducted user research with vulnerable groups and translated findings into responsible-AI requirements. I did not own the AI architecture, model development or product roadmap — those belonged to the wider consortium.",
        outcome:
          "Requirements for explainable, contestable, multilingual and human-controlled AI — published as a Springer chapter, and made tangible in my own concept prototype."
      },
      problem: [
        "Misinformation is not a simple true-or-false problem. Participants evaluated information across messaging apps, social media, video platforms, official websites, search results, friends, relatives and comment sections.",
        "Verification required time, language ability, contextual knowledge, connectivity and digital confidence — exactly what the most exposed users often lack.",
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
        { value: "3", label: "Municipalities — youth workshops", note: "Wilnsdorf, Kreuztal, Hilchenbach", status: "validated" },
        { value: "~70", label: "Development points entered in Jira", note: "Consortium-level, not my individual delivery", status: "programme" },
        { value: "~90%", label: "Technical detection accuracy", note: "Consortium-level, not my output", status: "programme" }
      ],
      outcome: [
        "The research contributed to a responsible interaction model where AI-supported assessment stays explainable, contestable, multilingual and connected to trusted social infrastructure — supporting informed human judgement rather than promising automated truth.",
        "The wider consortium reflected these directions in a smartphone app, browser plugin and web application: multilingual interfaces, simple-language options, indicator-based hints, explanation views, established fact-checking services and institutional transparency.",
        "I independently built an interaction prototype from the documented requirements — URL, text and image input with visible privacy limits, progressive explanation of uncertainty, claim-level assessment and inspectable evidence. It is not the consortium's official interface or a deployed detection system.",
        "Published as 'User-Centred AI for Combating Misinformation with Vulnerable Groups' (Springer VS, 2026, second author)."
      ],
      reflection:
        "Trust in AI cannot be designed as a confidence score alone. It depends on whether people can inspect evidence, understand uncertainty, question the system and keep meaningful control over the final decision.",
      demonstrates: ["Researching trust in AI with hard-to-reach groups", "Translating evidence into responsible-AI requirements", "Prototyping a concept from requirements", "Working inside a multi-partner consortium"],
      visuals: [
        { file: "nebula-research-to-requirements.webp", caption: "How evidence shaped the requirements — and the value each one protects." },
        { file: "nebula-research-ecosystem.webp", caption: "From situated experience to responsible-AI requirements." },
        { file: "nebula-prototype-explainability.webp", caption: "My concept prototype — evidence stays inspectable, contestable and shareable." },
        { file: "nebula-prototype-safeguards.webp", caption: "My concept prototype — responsible-AI principles made visible in the interface." }
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
      track: ["research", "product"],
      title: "Surveillance Beyond Borders",
      subtitle: "Digital safety under transnational repression — from 37 interviews to prioritised product opportunities.",
      type: "UX Research · Trust & Safety · Product Discovery",
      context: "Research stream within CrossComITS · University of Siegen",
      role: "Lead UX Researcher & first author · Prototype owner & designer",
      timeline: "2024–2025",
      methods: ["Semi-structured interviews", "Grounded Theory-informed thematic analysis", "Trauma-informed research"],
      status: "Manuscript prepared for academic review · Prototype built",
      cardOutcome: "37 interviews distilled into five dynamics, a framework and prioritised safety concepts.",
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
        "The goal was to understand how people actually live with this risk — and what tools could support them without adding to their burden."
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
      track: ["research"],
      title: "Bo App",
      subtitle: "Co-designing an accessible cognitive-training experience — and brain-sensor onboarding — with older adults.",
      type: "UX Research · Co-design · Digital Health",
      context: "eVITA (Dec 2021 – May 2023) · University of Siegen",
      role: "UX Researcher & Designer",
      timeline: "~8–10 weeks",
      methods: ["Interviews", "Participatory co-design", "Observation", "Think-aloud usability testing"],
      status: "Published — OzCHI 2024 Late-Breaking Work (proceedings Sept 2025)",
      cardOutcome: "Independent sensor setup went from 1 of 4 to 3 of 3 users after the onboarding redesign.",
      cover: "bo-app-screens.webp",
      glance: {
        challenge:
          "Bo App pairs a cognitive-training app with an fNIRS brain-sensing headband for non-medical training. Older adults struggled to set the sensor up without help.",
        contribution:
          "End to end: I planned and ran the research, facilitated co-design, prioritised usability problems, translated evidence into requirements, and designed, tested and retested the prototypes.",
        outcome:
          "After redesign, all three retest participants completed sensor setup independently, with no navigation issues. Published at OzCHI 2024."
      },
      problem: [
        "Older adults needed to use a mobile cognitive-training app and a brain-sensing device independently at home — making hardware setup, navigation and abstract brain-activity feedback understandable for users with varying digital confidence.",
        "Central question: how might we make unfamiliar brain-sensing technology feel understandable, manageable and motivating without making the experience clinical or stressful?",
        "Participants were active adults aged 60+ without dementia or MCI. Bo App was explored as a non-medical training and feedback concept, not a treatment.",
        "In the first usability round, 3 of 4 testers needed assistance and 2 of 4 hit navigation or setup problems. Only 1 of 4 could set up the sensor alone."
      ],
      approach: [
        { title: "01 Discover", text: "Literature review, interviews and benchmarking." },
        { title: "02 Co-design", text: "7 older adults aged 60–80 across 12 co-design sessions and 4 iterative rounds — roughly 22 hours." },
        { title: "03 Test & iterate", text: "Think-aloud testing with the mobile prototype and sensor, then revised onboarding, navigation and feedback, followed by retesting." }
      ],
      insights: [
        { title: "Hardware onboarding is part of the product", text: "Most failures happened before training started — while wearing and connecting unfamiliar hardware." },
        { title: "Visual feedback makes brain activity understandable", text: "A growing plant/tree metaphor made abstract brain feedback more relatable." },
        { title: "Feedback preferences differ", text: "Some valued performance feedback; one participant found frequent feedback potentially stressful." },
        { title: "Progress cues support motivation", text: "A sense of progress helped keep people engaged." },
        { title: "Simplicity helps focus", text: "Minimal interfaces helped participants concentrate on essential information." }
      ],
      decisions: [
        { title: "Step-by-step visual onboarding", situation: "Only 1 of 4 initial testers could set up the sensor independently.", evidence: "Participants struggled to connect and wear unfamiliar hardware, with unclear sequencing.", decision: "Step-by-step visual sensor onboarding with a clarified order of actions.", why: "Reducing ambiguity at each step targets the exact point where users failed." },
        { title: "Persistent Back action", situation: "2 of 4 testers ran into navigation or setup issues.", evidence: "Insufficient navigation support created uncertainty.", decision: "An always-visible Back action and a simpler hierarchy.", why: "People explore more confidently when they know they can recover." },
        { title: "Growing-tree & garden metaphors", situation: "Abstract biofeedback was hard to interpret.", evidence: "The tree metaphor made feedback relatable; the monthly garden concept came directly from participant feedback.", decision: "A growing tree for real-time feedback and a nurturing garden for monthly feedback.", why: "Familiar metaphors turn unfamiliar data into something people understand." },
        { title: "Customisable feedback", situation: "One feedback model didn't suit everyone.", evidence: "One participant found frequent performance feedback potentially stressful.", decision: "Feedback became customisable rather than one fixed model.", why: "Motivation without pressure." }
      ],
      evidence: [
        { value: "1/4 → 3/3", label: "Independent sensor setup", note: "4 initial testers → 3 retest participants", status: "validated" },
        { value: "0", label: "Navigation issues in the final retest", note: "3 retest participants", status: "validated" },
        { value: "8 of 10", label: "High-priority issues addressed", note: "10 documented", status: "validated" },
        { value: "7", label: "Co-design participants (60–80)", note: "12 sessions, 4 rounds, ~22 h", status: "validated" }
      ],
      outcome: [
        "Sensor onboarding and navigation were redesigned; 8 of 10 high-priority usability issues were addressed.",
        "Participant feedback shaped real-time, daily, monthly and competitive feedback concepts, and informed the final interactive prototype and implementation coordination.",
        "Published as a Late-Breaking Work at OzCHI 2024 (proceedings published September 2025). Counts come from project evaluation notes and researcher-confirmed task records; not every count appears in the paper."
      ],
      reflection:
        "Accessibility for older adults is not simply a matter of increasing font sizes. It means reducing uncertainty, supporting confidence and translating unfamiliar technology into understandable actions.",
      demonstrates: ["Co-design with older adults", "Turning usability findings into prioritised design changes", "Honest, small-sample evidence reporting"],
      visuals: [
        { file: "bo-app-screens.webp", caption: "Bo App — welcome, onboarding, feedback and brain FAQ screens." },
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
      track: ["research"],
      title: "CrossComITS & Smartphone Café",
      subtitle: "Human-centered cybersecurity learning with migrants, refugees, older adults and young people.",
      type: "UX Research · Cybersecurity · Digital Inclusion",
      context: "BMBF-funded research consortium",
      role: "University of Siegen representative & coordinator · UX Researcher",
      timeline: "May 2023 – Dec 2025",
      methods: ["Interviews", "Surveys", "Workshops", "Usability tests", "Participatory learning sessions"],
      status: "Published — ACM PDC 2026 & Springer chapter (first author)",
      cardOutcome: "Field research turned into a board game, metaphor cards and OER platform requirements.",
      cover: "crosscomits-overview.webp",
      glance: {
        challenge:
          "Cybersecurity advice is often correct but unusable for people with different languages, backgrounds and levels of digital literacy.",
        contribution:
          "I coordinated Siegen's research activities, ran user research and translated findings into learning formats and platform requirements across consortium partners.",
        outcome:
          "A board game, metaphor flashcards, OER platform requirements — and two 2026 publications."
      },
      problem: [
        "The project had to reach very different groups — migrants, refugees, older adults and young people — without watering down the security content.",
        "Research insights also had to shape a digital OER platform, not stay in reports."
      ],
      approach: [
        { title: "Field research", text: "Interviews, surveys and workshops on everyday security questions and misconceptions." },
        { title: "Smartphone Café", text: "Participatory digital-security learning sessions with older adults." },
        { title: "Usability testing", text: "Learning materials and platform concepts tested iteratively with target users." }
      ],
      insights: [
        { title: "People beat interfaces", text: "In the Smartphone Café, low-pressure human support and peer learning handled security uncertainty in ways interface simplification alone could not." },
        { title: "Security needs everyday language", text: "Abstract terminology was a barrier; recognisable situations and metaphors opened discussion." }
      ],
      decisions: [
        { title: "Metaphor plus explanation — decided by A/B test", situation: "Abstract security concepts were hard to explain to very different groups.", evidence: "A/B test of flashcards: direct text explanations vs. visual metaphors. Metaphors made concepts tangible, but metaphor-only cards weren't equally clear for every participant.", decision: "Combine an accessible visual metaphor with a short descriptive explanation; revise metaphors where cultural interpretation differed.", why: "An experiment, not preference, decided the format." },
        { title: "Tangible learning tools", situation: "Technical explanations alone didn't land.", decision: "Metaphor flashcards and a short collaborative board game.", why: "Tangible activities make abstract concepts discussable in a group." },
        { title: "Research → platform requirements", situation: "Findings risked staying as research outputs.", decision: "Translated them into user stories and usability requirements for the OER platform.", why: "Connects field research directly to what gets built." }
      ],
      evidence: [
        { value: "3", label: "User groups — older adults, migrants & refugees, youth", note: "One programme, three distinct product contexts" },
        { value: "2", label: "Learning products delivered", note: "Cybersecurity board game · metaphor flashcards" },
        { value: "~200", label: "Total project participants", note: "Programme-level, not my personal sample", status: "programme" },
        { value: "~25%", label: "Engagement increase", note: "My own estimate — not a controlled measurement", status: "estimated" },
        { value: "~40%", label: "Task-success increase", note: "My own estimate — not a controlled measurement", status: "estimated" }
      ],
      outcome: [
        "'Mediating Digital Security' — ACM Participatory Design Conference 2026 (co-author).",
        "'Building Bridges, Not Barriers' — Springer VS, 2026 (first author)."
      ],
      demonstrates: ["Coordinating research across a consortium", "Inclusive, participatory methods", "Turning research into requirements"],
      visuals: [
        { file: "crosscomits-learning-artifacts.webp", caption: "Tangible materials turned security into a shared activity." },
        { file: "crosscomits-findings.webp", caption: "Four principles across three different communities." },
        { file: "crosscomits-oer.webp", caption: "A social OER infrastructure for security mediators." },
        { file: "smartphone-cafe-evidence.webp", caption: "Smartphone Café — translating field evidence into design direction." },
        { file: "smartphone-cafe-setting.webp", caption: "Smartphone Café — research embedded in a familiar community setting." }
      ],
      links: [
        { label: "PDC 2026 paper (PDF)", url: "Mediating_Digital_Security_PDC2026.pdf" },
        { label: "Official project ↗", url: "https://crosscomits.de/" }
      ]
    }
  ],

  experience: [
    { when: "2026 – present", title: "PhD Candidate, Human-Computer Interaction", org: "University of Siegen", text: "Participatory digital design for migrant mental wellbeing." },
    { when: "Oct 2021 – Dec 2025", title: "Research Associate — UX Research & Product", org: "University of Siegen (Wissenschaftliche Mitarbeiterin) — Information Systems & New Media", text: "Research-to-product work in EU- and BMBF/BMFTR-funded, multi-partner consortium projects.",
      points: [
        "CrossComITS (BMBF/BMFTR, 2023–2025): independently represented the University of Siegen in the consortium; led discovery and UX research for two learning products — a cybersecurity board game and metaphor flashcards — in Scrum-based delivery with consortium partners.",
        "Ran an A/B test of flashcard formats (text vs. visual metaphor); the result became the product decision: metaphor plus a short explanation.",
        "Translated interviews, fieldwork, workshops and usability tests into requirements for a social OER learning platform; coordinated testing cycles with student assistants and partners.",
        "eVITA (EU–Japan, 2021–2023): designed Bo App and improved the existing ABC App in the brain-sensor workstream — requirements, prototypes and implementation changes; independent sensor setup rose from 1/4 to 3/3.",
        "NEBULA (BMBF, 2023–2025): turned research with vulnerable groups into responsible-AI requirements — explainability, multilingual access and human control."
      ] },
    { when: "Jan – Aug 2021", title: "Digital Integration & Cybersecurity Intern", org: "Operatis, Germany", text: "Cybersecurity data workflows and integration (Linux, Windows Server, Bash, JSON-to-RDF, Docker) and vendor evaluation." },
    { when: "2014 – 2016", title: "Lecturer & Digital Competency Trainer, Computer Science", org: "Islamic Azad University — Tehran West & Karaj branches, Iran", text: "Taught undergraduate courses in data structures, computer networks, Photoshop and technical English, and ran digital-competency workshops for 200+ students a year." }
  ],

  publications: [
    { year: "2026", venue: "ACM PDC 2026", title: "Mediating Digital Security: Participatory Learning with Older Adults in Smartphone Café Sessions", note: "Second author", pdf: "Mediating_Digital_Security_PDC2026.pdf", doi: "https://doi.org/10.1145/3796624.3796644" },
    { year: "2026", venue: "Springer VS — Book chapter", title: "Building Bridges, Not Barriers", note: "First author · pp. 151–180 · full text on request", pdf: "", doi: "https://doi.org/10.1007/978-3-658-52212-4_7" },
    { year: "2026", venue: "Springer VS — Book chapter", title: "User-Centred AI for Combating Misinformation with Vulnerable Groups", note: "Second author · pp. 227–252 · full text on request", pdf: "", doi: "https://doi.org/10.1007/978-3-658-52212-4_10" },
    { year: "2025", venue: "OzCHI 2024 — proceedings published Sept 2025", title: "Prototyping and Evaluating Bo App: A Brain Measurement Device as a Feedback Tool for Cognitive Training", note: "Late-Breaking Work", pdf: "Bo_App_OzCHI2023.pdf", doi: "https://doi.org/10.1145/3726986.3727033" },
    { year: "2015", venue: "IJISA", title: "Mobile Robot Path Planning by RRT* in Dynamic Environments", note: "First author", pdf: "Mobile_Robot_Path_Planning.pdf", doi: "" },
    { year: "Thesis", venue: "Master's thesis · M.Sc. HCI, University of Siegen", title: "How Older Adults Use Measures of Brain Activity in Real Life: A Design Case Study", note: "", pdf: "Master_Thesis_Roodabeh_Seif.pdf", doi: "" },
    { year: "Review", venue: "Manuscript", title: "Surveillance Beyond Borders — digital safety under transnational repression", note: "First author · prepared for academic review", pdf: "", doi: "" }
  ],

  teaching: [
    { when: "2025 – present", title: "Meditation Instructor", org: "Online — Persian-speaking community", text: "Online meditation sessions supporting mindfulness and emotional wellbeing, drawing on 13+ years of personal practice." },
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
