"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  PlayIcon,
  StopIcon,
  GearIcon,
  CopyIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

import { Sparkle } from "lucide-react";

import Link from "next/link";

/**
 * AI Copilot Command Center
 */

type CommandEntry = {
  id: string;
  input: string;
  output: string;
  status: "queued" | "running" | "done" | "failed";
  time: string;
  persona?: string;
};

export default function CopilotPage() {
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState("General Copilot");

  const [history, setHistory] = useState<CommandEntry[]>(() => {
    return [
      {
        id: cryptoRandomId(),
        input:
          "Summarize the latest growth metrics and suggest 3 things to improve conversion.",
        output:
          "1) Improve onboarding flow (reduce steps). 2) A/B test pricing page CTA. 3) Route high-intent users to live chat. (Mocked result)",
        status: "done",
        time: new Date().toLocaleTimeString(),
        persona: "Insights Copilot",
      },
      {
        id: cryptoRandomId(),
        input:
          "Create a short response for a billing question using a friendly tone.",
        output:
          "Hi — thanks for reaching out. I see an issue with your billing; let's sort it out. Can you confirm the last 4 digits of the card on file? (Mocked)",
        status: "done",
        time: new Date().toLocaleTimeString(),
        persona: "Support Copilot",
      },
    ];
  });

  const [running, setRunning] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function runCommand() {
    if (!input.trim()) return;

    const entry: CommandEntry = {
      id: cryptoRandomId(),
      input: input.trim(),
      output: "Processing...",
      status: "queued",
      time: new Date().toLocaleTimeString(),
      persona,
    };

    setHistory((s) => [entry, ...s]);
    setInput("");
    setSelectedId(entry.id);
    setRunning(true);

    const processTime = 900 + Math.floor(Math.random() * 1600);

    setTimeout(() => {
      const ok = Math.random() > 0.06;

      setHistory((h) =>
        h.map((item) =>
          item.id === entry.id
            ? {
                ...item,
                output: ok
                  ? generateMockOutput(entry.input, entry.persona)
                  : "Error: model timeout. Try again or pick a different persona.",
                status: ok ? "done" : "failed",
              }
            : item
        )
      );

      setRunning(false);
    }, processTime);
  }

  function stopRunning() {
    if (!selectedId) return;

    setHistory((h) =>
      h.map((item) =>
        item.id === selectedId
          ? {
              ...item,
              status: "failed",
              output: "Execution stopped by user.",
            }
          : item
      )
    );

    setRunning(false);
    setSelectedId(null);
  }

  function clearHistory() {
    setHistory([]);
  }

  function copyOutput(text: string) {
    navigator.clipboard?.writeText(text).catch(() => {});
  }

  function selectPersona(p: string) {
    setPersona(p);
  }

  return (
    <main
      className="w-full max-w-7xl mx-auto px-4 py-12 md:px-6 overflow-x-hidden" // MOBILE FIX 1
    >
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8 max-w-full overflow-x-hidden" // MOBILE FIX 2
      >
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              AI Copilot Command Center
            </h1>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Run commands, preview responses, and simulate automation workflows.
              Designed for fast, auditable AI ops.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Sparkle className="h-4 w-4" />
                    Simulate
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Run in simulation mode</TooltipContent>
              </Tooltip>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <GearIcon /> Settings
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Copilot Settings</DialogTitle>
                    <DialogDescription>
                      Configure persona, verbosity, logging.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Default Persona</div>
                        <div className="text-sm text-muted-foreground">
                          Choose startup copilot behaviour
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => selectPersona("General Copilot")}>
                          General
                        </Button>
                        <Button size="sm" onClick={() => selectPersona("Support Copilot")}>
                          Support
                        </Button>
                        <Button size="sm" onClick={() => selectPersona("Insights Copilot")}>
                          Insights
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="text-sm text-muted-foreground">
                      Logs are kept locally; backend sync optional.
                    </div>
                  </div>

                  <DialogFooter>
                    <Button asChild>
                      <Link href="/copilot">Close</Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TooltipProvider>

            <Button
              variant="default"
              size="sm"
              onClick={() => {
                const template =
                  input.trim() || history[0]?.input || "Sample command";
                alert(`Saved template: ${truncate(template, 80)}`);
              }}
            >
              <PlusIcon /> Save Template
            </Button>
          </div>
        </header>

        {/* Workspace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full overflow-x-hidden"> {/* MOBILE FIX 2 */}
          {/* Input panel */}
          <section className="md:col-span-2">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">
                      Command
                    </label>

                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      rows={5}
                      placeholder="Ask the copilot to summarize, rewrite, triage, or generate automation..."
                      className="w-full p-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground resize-y"
                    />

                    <div className="mt-3 flex items-center justify-between">
                      {/* Persona selector */}
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-muted-foreground mr-2">
                          Persona:
                        </label>

                        <select
                          value={persona}
                          onChange={(e) => selectPersona(e.target.value)}
                          className="bg-card border border-border rounded px-3 py-1 text-sm"
                        >
                          <option>General Copilot</option>
                          <option>Support Copilot</option>
                          <option>Insights Copilot</option>
                          <option>DevOps Copilot</option>
                        </select>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setInput(
                              "Draft a concise privacy-friendly explanation of data usage for customers."
                            );
                            inputRef.current?.focus();
                          }}
                        >
                          Example
                        </Button>

                        <Button
                          variant="default"
                          size="sm"
                          onClick={runCommand}
                          disabled={running && selectedId !== null}
                          className="flex items-center gap-2"
                        >
                          <PlayIcon />
                          Run
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          disabled={!running}
                          onClick={stopRunning}
                        >
                          <StopIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Live simulation preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0.9 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-4 rounded-lg border border-border bg-background"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium">Simulation Preview</div>
                      <div className="text-xs text-muted-foreground">
                        Mocked local run
                      </div>
                    </div>

                    <pre className="text-sm bg-transparent whitespace-pre-wrap max-h-36 overflow-auto text-muted-foreground">{`> persona: ${persona}
> last command: ${history[0]?.input ?? "— none —"}`}</pre>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-4 rounded-lg border border-border bg-background"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium">Integrations</div>
                      <div className="text-xs text-muted-foreground">Simulated</div>
                    </div>

                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• CRM: HubSpot (mock)</li>
                      <li>• Tickets: Zendesk (mock)</li>
                      <li>• Messaging: Slack (mock)</li>
                      <li>• Data Warehouse: BigQuery (mock)</li>
                    </ul>
                  </motion.div>
                </div>
              </CardContent>

              <CardFooter className="p-4 flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Running: {running ? "Yes" : "No"}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => history[0] && copyOutput(history[0].output)}
                  >
                    <CopyIcon /> Copy Last
                  </Button>

                  <Button variant="outline" size="sm" onClick={clearHistory}>
                    Clear
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </section>

          {/* Right panel: Execution History */}
          <aside className="md:col-span-1 w-full max-w-full overflow-x-hidden"> {/* MOBILE FIX 3 */}
            <div className="sticky top-24 md:static"> {/* MOBILE FIX 3 */}
              <Card className="bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-medium">Execution History</div>
                    <div className="text-xs text-muted-foreground">
                      {history.length} items
                    </div>
                  </div>

                  <div className="space-y-3">
                    {history.length === 0 && (
                      <div className="text-sm text-muted-foreground">
                        No executions yet. Run a command to begin.
                      </div>
                    )}

                    {history.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        className={`p-3 rounded border ${
                          selectedId === item.id
                            ? "border-primary"
                            : "border-border"
                        } bg-background`}
                        onClick={() => {
                          setSelectedId(item.id);
                          setHistory((h) => [
                            item,
                            ...h.filter((x) => x.id !== item.id),
                          ]);
                        }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-sm font-semibold">
                              {truncate(item.input, 60)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.persona} • {item.time}
                            </div>
                          </div>

                          <div className="text-xs">
                            <StatusBadge status={item.status} />
                          </div>
                        </div>

                        {selectedId === item.id && (
                          <>
                            <Separator className="my-3" />
                            <pre className="text-sm text-muted-foreground whitespace-pre-wrap max-h-44 overflow-auto">
                              {item.output}
                            </pre>

                            <div className="mt-3 flex items-center justify-between gap-2">
                              <div className="text-xs text-muted-foreground">
                                Result actions
                              </div>

                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => copyOutput(item.output)}
                                >
                                  <CopyIcon />
                                </Button>

                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setInput(item.input);
                                    inputRef.current?.focus();
                                  }}
                                >
                                  Run Again
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-muted-foreground">
                      Audit logs are local in demo
                    </div>
                    <Button size="sm" onClick={() => alert("Download logs (mock)")}>
                      <CopyIcon /> Export
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-4 text-xs text-muted-foreground">
                Tip: Use concise prompts and choose the correct persona.
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            Built on Kaali • Space — simulated environment.
          </div>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" variant="ghost">
              <Link href="/">Return Home</Link>
            </Button>

            <Button
              size="sm"
              variant="default"
              onClick={() => alert("Deploy workflow (mock)")}
            >
              <PlayIcon /> Deploy
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

/* ------------------------------
   Helpers
------------------------------ */

function cryptoRandomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return Math.random().toString(36).slice(2, 10);
}

function truncate(text: string, n = 80): string {
  if (!text) return "";
  return text.length > n ? text.slice(0, n - 1) + "…" : text;
}

function generateMockOutput(input: string, persona = "General Copilot"): string {
  if (persona.includes("Support")) {
    return `Friendly support reply:\n\nThanks for reaching out. I looked into this and recommend checking the billing account details. If you'd like, I can escalate this to a specialist. (Mocked)`;
  }

  if (persona.includes("Insights")) {
    return `Quick insights:\n- Conversion dropped 3% WoW\n- High dropoff at onboarding step 2\n- Recommended: A/B test onboarding CTA\n(Mocked analytic summary)`;
  }

  if (persona.includes("DevOps")) {
    return `Deployment quick-check:\n- Build passed\n- No incidents\n- Scale DB pool in heavy hours\n(Mocked ops summary)`;
  }

  const short = input.length > 240 ? input.slice(0, 220) + "…" : input;
  return `Response (${persona}):\n\n${short}\n\n— Mocked response.`;
}

function StatusBadge({
  status,
}: {
  status: CommandEntry["status"];
}) {
  const map = {
    queued: {
      label: "queued",
      color: "bg-yellow-600/10 text-yellow-400 border-yellow-600/20",
    },
    running: {
      label: "running",
      color: "bg-sky-600/10 text-sky-400 border-sky-600/20",
    },
    done: {
      label: "done",
      color: "bg-green-600/10 text-green-400 border-green-600/20",
    },
    failed: {
      label: "failed",
      color: "bg-red-600/10 text-red-400 border-red-600/20",
    },
  } as const;

  const c = map[status];

  return (
    <span
      className={`px-2 py-0.5 text-xs rounded-md border ${c.color} font-medium`}
    >
      {c.label}
    </span>
  );
}