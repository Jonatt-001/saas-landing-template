"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Headphones,
  Workflow,
  Bot,
  MessageSquare,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

export default function SupportAutomationPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12 md:px-6 overflow-x-hidden">
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-10"
      >
        {/* HEADER */}
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Support Automation
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Intelligent support pipelines that classify, route, answer, and resolve
            customer issues automatically. Reduce workload, boost response times,
            and deliver enterprise-grade support with Kaali • Space automation.
          </p>
        </header>

        {/* KEY CAPABILITIES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">AI Ticket Triage</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Classifies user messages, predicts urgency, and routes them to the
                right workflow or copilot automatically.
              </p>

              <div className="p-4 rounded-lg border bg-background text-sm text-primary">
                94% accuracy on classification
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Automated Workflows</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Build support workflows that trigger based on user actions, errors,
                keywords, or sentiment.
              </p>

              <div className="p-4 rounded-lg border bg-background text-sm text-blue-400">
                12 active workflows
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Instant Replies</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Let AI generate friendly, personalized responses for common
                questions in less than 1 second.
              </p>

              <div className="p-4 rounded-lg border bg-background text-sm text-green-400">
                Avg response time: 0.8s
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ADVANCED SYSTEMS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Knowledge Engine */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FileSearch className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Knowledge Engine</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Your documentation, policies, and product data converted into a
                dynamic real-time knowledge base powering automated answers.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li>• Auto-learns new updates</li>
                <li>• Improves with every resolved ticket</li>
                <li>• Reduces repeated questions by 47%</li>
              </ul>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Security & Compliance</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Support automation built with audit trails, encrypted logs, and
                enterprise-grade safety layers.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li>• Full audit logging</li>
                <li>• Secure ticket data handling</li>
                <li>• Smart redaction of sensitive fields</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* SUPPORT OPS PANEL */}
        <section className="grid grid-cols-1 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Support Ops Overview</h2>
              </div>

              <p className="text-muted-foreground text-sm max-w-xl">
                A unified view of support performance, ticket load, agent
                escalations, automated resolutions, and customer sentiment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Tickets Today</div>
                  <div className="text-primary mt-1">487</div>
                </div>

                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Automation Rate</div>
                  <div className="text-green-400 mt-1">62%</div>
                </div>

                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Avg Resolution Time</div>
                  <div className="text-blue-400 mt-1">13m</div>
                </div>
              </div>

              <Button
                size="sm"
                variant="default"
                className="mt-4"
                onClick={() => alert('Support Analytics (mock)')}
              >
                View Full Analytics
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* FOOTER */}
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            Support automation powered by Kaali • Space Intelligence.
          </div>

          <Button size="sm" variant="default">
            Configure Workflows
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}