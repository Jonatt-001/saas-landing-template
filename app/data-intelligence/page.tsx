"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  BarChart2,
  Activity,
  Radar,
  LineChart,
  Cpu,
  Database,
} from "lucide-react";

export default function DataIntelligencePage() {
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
            Data Intelligence
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Real-time analytics, operational insights, and predictive signals
            powering automation across Kaali • Space. Monitor performance,
            identify anomalies, and drive intelligent decision-making.
          </p>
        </header>

        {/* METRICS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Engagement Metrics</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Live user activity, conversion trends, and behavioral insights
                updated every 60 seconds.
              </p>

              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-primary">+12.4%</div>
                <div className="text-xs text-muted-foreground">Week over week</div>
              </div>
            </CardContent>
          </Card>

          {/* Metric 2 */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Operational Health</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Error rates, latency analysis, and service stability with
                anomaly detection.
              </p>

              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-green-400">99.98% Uptime</div>
                <div className="text-xs text-muted-foreground">Last 24 hours</div>
              </div>
            </CardContent>
          </Card>

          {/* Metric 3 */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Radar className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Prediction Engine</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Machine learning forecasts for churn, revenue, demand surges,
                and automation triggers.
              </p>

              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-blue-400">High accuracy</div>
                <div className="text-xs text-muted-foreground">Model v3.2</div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* DEEP INSIGHTS + SYSTEM FEEDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Insight Feed */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <LineChart className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Insight Stream</h2>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Spike detected: onboarding step-2 dropoff increased 8%</li>
                <li>• Predictive model flags churn risk segment “Beta-42”</li>
                <li>• Conversion lift opportunity: shorten pricing page flow</li>
                <li>• AI workflow load expected to peak at 3 PM UTC</li>
              </ul>
            </CardContent>
          </Card>

          {/* System Signals */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">System Signals</h2>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• CPU load nominal — automation pipeline stable</li>
                <li>• Queue depth low — real-time responses optimal</li>
                <li>• No anomalies detected across microservices</li>
                <li>• Data warehouse sync latency: 42 ms</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* DATA WAREHOUSE / EXPORT */}
        <section className="grid grid-cols-1 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Data Warehouse</h2>
              </div>

              <p className="text-muted-foreground text-sm max-w-xl">
                Centralized storage powering analytics, insights, and automation
                triggers across Kaali • Space. Export, sync, or integrate with
                your external BI systems.
              </p>

              <div className="flex items-center gap-3 mt-4">
                <Button size="sm" variant="default">
                  Export Dataset
                </Button>

                <Button size="sm" variant="outline">
                  Sync External BI
                </Button>
              </div>
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
            Powered by Kaali • Space Intelligence Engine.
          </div>

          <Button size="sm" variant="default">
            View API
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}