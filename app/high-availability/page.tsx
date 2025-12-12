"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Activity,
  Server,
  ShieldAlert,
  Clock,
  BarChart,
  CloudLightning,
  Network,
  Lock,
} from "lucide-react";

export default function HighAvailabilityPage() {
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
            High Availability
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Enterprise-grade resilience engineered for uninterrupted automation,
            zero-downtime operations, and mission-critical workflows across
            Kaali • Space.
          </p>
        </header>

        {/* CORE ARCHITECTURE */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Redundant Clusters</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Multi-zone automated failover ensures your AI workflows continue
                running securely even during regional outages.
              </p>

              <div className="p-4 rounded-lg border bg-background text-sm text-primary">
                4-Cluster Live Architecture
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CloudLightning className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Auto-Scaling Engine</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Load spikes are absorbed automatically. Your automation pipelines
                scale instantly to meet demand.
              </p>

              <div className="p-4 rounded-lg border bg-background text-sm text-blue-400">
                Peak load: 14.2k requests/sec
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Continuous Monitoring</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Real-time health checks, anomaly detection, and automated rollback
                keep infrastructure stable.
              </p>

              <div className="p-4 rounded-lg border bg-background text-sm text-green-400">
                Uptime: 99.982%
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* RESILIENCE SYSTEMS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fault Tolerance */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Fault Tolerance</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Intelligent routing and smart rerun logic eliminate single points
                of failure inside copilot workflows.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li>• Multi-path execution</li>
                <li>• Automatic recovery protocols</li>
                <li>• Adaptive degradation protection</li>
              </ul>
            </CardContent>
          </Card>

          {/* Security Hardening */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Security Hardening</h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Layered security models protect mission-critical operations against
                intrusion, tampering, or traffic flooding.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li>• Encrypted runtime memory</li>
                <li>• Rate-limited event streams</li>
                <li>• Predictive threat modeling</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* OPS ANALYTICS */}
        <section>
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <BarChart className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-lg">Operational Insights</h2>
              </div>

              <p className="text-muted-foreground text-sm max-w-xl">
                Performance insights powered by Kaali • Space's intelligence layer
                help teams maintain system reliability at scale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Latency (95th)</div>
                  <div className="text-primary mt-1">82ms</div>
                </div>

                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">Incident Count (30 days)</div>
                  <div className="text-yellow-400 mt-1">2</div>
                </div>

                <div className="p-4 rounded border bg-background text-sm">
                  <div className="font-medium">System Capacity</div>
                  <div className="text-green-400 mt-1">89% free</div>
                </div>
              </div>

              <Button
                size="sm"
                variant="default"
                className="mt-4"
                onClick={() => alert("Advanced uptime reports (mock)")}
              >
                View Availability Reports
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
            High Availability systems powered by Kaali • Space Infrastructure.
          </div>

          <Button size="sm" variant="default">
            Monitor Systems
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}