import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Lightbulb, Search, Layers, Target } from 'lucide-react';

const CodingArchitecture = () => {
  const [expandedStage, setExpandedStage] = useState(null);
  const [selectedExample, setSelectedExample] = useState('community');

  const examples = {
    community: {
      raw: "I've been volunteering at the food bank for three years. At first, I just wanted to help. But now I realize it's become my community. These aren't 'clients' to me anymore—they're neighbors. Last week, Maria taught me how to make tamales. We laugh together. The system sees transactions; I see relationships.",
      
      descriptiveCodes: [
        { code: "Volunteer motivation", segment: "wanted to help" },
        { code: "Relationship evolution", segment: "At first...But now" },
        { code: "Reframing others", segment: "aren't 'clients'...they're neighbors" },
        { code: "Reciprocal exchange", segment: "Maria taught me" },
        { code: "Emotional connection", segment: "We laugh together" },
        { code: "Institutional vs lived reality", segment: "system sees...I see" }
      ],
      
      categories: {
        "Identity Transformation": ["Volunteer motivation", "Relationship evolution", "Emotional connection"],
        "Boundary Disruption": ["Reframing others", "Reciprocal exchange"],
        "Competing Logics": ["Institutional vs lived reality"]
      },
      
      themes: [
        {
          name: "From Transaction to Kinship: How Sustained Proximity Collapses Helper-Helped Boundaries",
          connects: ["Identity Transformation", "Boundary Disruption"],
          insight: "Service relationships transform into mutual recognition through repeated interaction"
        },
        {
          name: "The Accountability Paradox: What Gets Counted vs. What Counts",
          connects: ["Competing Logics", "Boundary Disruption"],
          insight: "Institutional metrics obscure the relational mechanisms that create impact"
        }
      ],
      
      theory: "Contributes to theories of care work and professionalization: challenges the service provider/recipient binary; demonstrates how alternative economies of exchange emerge within formal systems"
    }
  };

  const stages = [
    {
      id: 1,
      name: "RAW DATA",
      level: "Concrete Reality",
      description: "The participant's actual words in context",
      questions: ["What did they say?", "What happened?", "What's the literal content?"],
      work: "Reading deeply, listening carefully, staying open",
      pitfall: "Jumping to interpretation too quickly"
    },
    {
      id: 2,
      name: "FIRST-LEVEL CODES",
      level: "Descriptive Labels",
      description: "Names for what's present in the data",
      questions: ["What's happening here?", "What topics appear?", "What can I name?"],
      work: "Labeling, segmenting, identifying discrete elements",
      pitfall: "Being too literal or too abstract; inconsistent labels"
    },
    {
      id: 3,
      name: "CATEGORIES",
      level: "Patterns & Groupings",
      description: "Organizing codes by similarity and relationship",
      questions: ["What goes with what?", "Why do these cluster?", "What's the connection?"],
      work: "Comparing, contrasting, finding relationships, building hierarchy",
      pitfall: "Forcing patterns; overlooking contradictions"
    },
    {
      id: 4,
      name: "THEMES",
      level: "Interpretive Concepts",
      description: "The meaning that emerges from patterns",
      questions: ["So what?", "What does this tell us?", "What's the story?"],
      work: "Synthesizing, interpreting, making claims, seeing beyond data",
      pitfall: "Staying descriptive; not making an argument"
    },
    {
      id: 5,
      name: "THEORY",
      level: "Transferable Insights",
      description: "Generalizable understanding applicable beyond this case",
      questions: ["What can we learn?", "How does this connect to bigger ideas?", "What can we now explain?"],
      work: "Abstracting, connecting to literature, building explanations",
      pitfall: "Losing connection to data; overgeneralizing"
    }
  ];

  const currentExample = examples[selectedExample];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-slate-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">The Architecture of Qualitative Coding</h1>
        <p className="text-lg text-slate-600">Understanding the journey from data to theory through systematic abstraction</p>
      </div>

      {/* The Continuum */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="font-semibold text-slate-700">CONCRETE / PARTICULAR / REAL</span>
          </div>
          <div className="flex-1 mx-4 border-t-2 border-slate-300"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">ABSTRACT / GENERAL / THEORETICAL</span>
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Stage Cards */}
      <div className="space-y-4 mb-8">
        {stages.map((stage, idx) => (
          <div key={stage.id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4"
               style={{borderLeftColor: `hsl(${220 + idx * 20}, 70%, ${60 - idx * 5}%)`}}>
            <div 
              className="p-4 cursor-pointer hover:bg-slate-50"
              onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                       style={{backgroundColor: `hsl(${220 + idx * 20}, 70%, ${60 - idx * 5}%)`}}>
                    {stage.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{stage.name}</h3>
                    <p className="text-sm text-slate-500">{stage.level}</p>
                  </div>
                </div>
                {expandedStage === stage.id ? <ChevronDown /> : <ChevronRight />}
              </div>
            </div>
            
            {expandedStage === stage.id && (
              <div className="p-6 bg-slate-50 border-t">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Target size={16} /> What It Is
                    </h4>
                    <p className="text-slate-600">{stage.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Search size={16} /> Key Questions
                    </h4>
                    <ul className="text-slate-600 space-y-1">
                      {stage.questions.map((q, i) => (
                        <li key={i} className="text-sm">• {q}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Layers size={16} /> The Work
                    </h4>
                    <p className="text-slate-600 text-sm">{stage.work}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      ⚠️ Common Pitfall
                    </h4>
                    <p className="text-red-600 text-sm">{stage.pitfall}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Working Example */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" /> 
          Working Example: Watch the Transformation
        </h2>
        
        <div className="space-y-6">
          {/* Stage 1: Raw Data */}
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900 mb-2">1. RAW DATA</h3>
            <div className="bg-blue-50 p-4 rounded italic text-slate-700">
              "{currentExample.raw}"
            </div>
          </div>

          {/* Stage 2: Codes */}
          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-bold text-indigo-900 mb-2">2. FIRST-LEVEL CODES</h3>
            <div className="space-y-2">
              {currentExample.descriptiveCodes.map((item, idx) => (
                <div key={idx} className="bg-indigo-50 p-3 rounded">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-indigo-900">{item.code}</span>
                    <span className="text-sm text-indigo-600 italic">"{item.segment}"</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-3">
              → Notice: We've broken the whole into parts and named each part
            </p>
          </div>

          {/* Stage 3: Categories */}
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="font-bold text-purple-900 mb-2">3. CATEGORIES</h3>
            {Object.entries(currentExample.categories).map(([category, codes], idx) => (
              <div key={idx} className="bg-purple-50 p-4 rounded mb-3">
                <h4 className="font-bold text-purple-900 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {codes.map((code, i) => (
                    <span key={i} className="bg-purple-200 px-3 py-1 rounded-full text-sm text-purple-900">
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-sm text-slate-600 mt-3">
              → Notice: Related codes cluster together; patterns emerge
            </p>
          </div>

          {/* Stage 4: Themes */}
          <div className="border-l-4 border-violet-600 pl-4">
            <h3 className="font-bold text-violet-900 mb-2">4. THEMES</h3>
            {currentExample.themes.map((theme, idx) => (
              <div key={idx} className="bg-violet-50 p-4 rounded mb-3">
                <h4 className="font-bold text-violet-900 mb-2">{theme.name}</h4>
                <p className="text-sm text-violet-700 mb-2">
                  <span className="font-semibold">Connects:</span> {theme.connects.join(" + ")}
                </p>
                <p className="text-slate-700 italic">
                  → {theme.insight}
                </p>
              </div>
            ))}
            <p className="text-sm text-slate-600 mt-3">
              → Notice: We're now making claims about meaning, not just describing content
            </p>
          </div>

          {/* Stage 5: Theory */}
          <div className="border-l-4 border-fuchsia-600 pl-4">
            <h3 className="font-bold text-fuchsia-900 mb-2">5. THEORETICAL CONTRIBUTION</h3>
            <div className="bg-fuchsia-50 p-4 rounded">
              <p className="text-slate-700">{currentExample.theory}</p>
            </div>
            <p className="text-sm text-slate-600 mt-3">
              → Notice: We've moved beyond this one case to something generalizable
            </p>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Essential Principles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">1. Analytic Movement</h3>
            <p className="text-sm text-slate-600">You move UP (abstracting) and DOWN (checking against data) constantly. It's not a one-way journey.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">2. Data → Interpretation</h3>
            <p className="text-sm text-slate-600">Early stages stay close to data. Later stages require bold interpretation. Both are necessary.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">3. Multiple Cycles</h3>
            <p className="text-sm text-slate-600">You'll code the same data multiple times, each time seeing something new. This is normal and productive.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">4. Deliberate Reduction</h3>
            <p className="text-sm text-slate-600">From hundreds of data points to dozens of codes to a few categories to core themes. You're condensing meaning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingArchitecture;