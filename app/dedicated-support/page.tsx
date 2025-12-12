"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Headphones,
  UserCheck,
  MessageSquare,
  Clock3,
  ShieldCheck,
  PhoneCall,
  Inbox,
  Workflow,
} from "lucide-react";

export default function DedicatedSupportPage() {
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
            Dedicated Support
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Enterprise-grade assistance designed to help your team resolve issues
            faster, optimize AI workflows, and keep operations running at peak
            efficiency.
          </p>
        </header>

        {/* SUPPORT TIERS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Priority Assistance</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Direct access to support channels with guaranteed response time
                and issue-based routing.
              </p>

              <ul className="text-sm text-muted-foreground space-y-2 mt-3">
                <li>• 1-hour response SLA</li>
                <li>• Priority ticket handling</li>
                <li>• Scheduled support calls</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tier 2 */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Customer Success Partner</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                A dedicated specialist aligned with your workflow goals and long-term
                automation objectives.
              </p>

              <ul className="text-sm text-muted-foreground space-y-2 mt-3">
                <li>• Monthly workflow reviews</li>
                <li>• Optimization recommendations</li>
                <li>• Persona & AI tuning guidance</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tier 3 */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Enterprise Protection</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Compliance, auditing, and performance guards designed for highly
                regulated or mission-critical environments.
              </p>

              <ul className="text-sm text-muted-foreground space-y-2 mt-3">
                <li>• Compliance-ready logging</li>
                <li>• Dedicated escalation managers</li>
                <li>• Uptime + SLA enforcement</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* CONTACT CHANNELS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Messaging */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Messaging Support</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Chat directly with specialists and receive guided resolutions for
                AI workflow challenges.
              </p>

              <div className="text-sm mt-3">
                <span className="font-medium text-primary">Avg reply time:</span>{" "}
                7 minutes
              </div>

              <Button
                size="sm"
                variant="default"
                className="mt-4"
                onClick={() => alert("Opening support chat (mock)")}
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>

          {/* Phone & escalation */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Escalation Hotline</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                For urgent cases requiring direct intervention or real-time
                troubleshooting by Kaali specialists.
              </p>

              <div className="text-sm mt-3">
                <span className="font-medium text-primary">Emergency SLA:</span>{" "}
                under 15 minutes
              </div>

              <Button
                size="sm"
                variant="outline"
                className="mt-4"
                onClick={() => alert("Calling hotline (mock)")}
              >
                Call Hotline
              </Button>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* SUPPORT WORKFLOW SYSTEM */}
        <section>
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Resolution Workflow Engine</h2>
              </div>

              <p className="text-muted-foreground text-sm max-w-xl">
                Every support request runs through Kaali • Space’s AI-enhanced triage
                engine to ensure fast, accurate, and consistent resolution paths.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Auto-Routing</div>
                  <div className="text-primary mt-1">
                    Posts requests to the correct specialist instantly.
                  </div>
                </div>

                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Event Logging</div>
                  <div className="text-yellow-400 mt-1">
                    Full audit trail for every issue.
                  </div>
                </div>

                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">AI Suggestions</div>
                  <div className="text-green-400 mt-1">
                    Workflow fixes & recommendations generated live.
                  </div>
                </div>
              </div>

              <Button
                size="sm"
                variant="default"
                className="mt-4"
                onClick={() => alert("Opening workflow triage (mock)")}
              >
                Open Triage Console
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
            Powered by Kaali • Space Support Systems.
          </div>

          <Button size="sm" variant="default">
            Contact Support
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}