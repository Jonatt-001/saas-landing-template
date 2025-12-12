"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from "@/components/theme-switcher";
import {
  ChevronDownIcon,
  FaceIcon,
  GlobeIcon,
  OpenInNewWindowIcon,
  PersonIcon,
  TimerIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* MOBILE MENU BUTTON */}
          <div className="flex sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
              </motion.div>
            </Button>
          </div>

          {/* MOBILE TITLE */}
          <div className="flex sm:hidden">
            <Link href="/" className="font-light tracking-tighter text-lg">
              Kaali • Space
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="font-light tracking-tighter text-2xl">
              Kaali • Space
            </Link>

            <Button asChild variant="ghost" size="sm">
              <Link href="#pricing">Pricing</Link>
            </Button>

            <Button asChild variant="ghost" size="sm">
              <Link href="#testimonials">Testimonials</Link>
            </Button>

            {/* SOLUTIONS DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Solutions
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              {/* FULL UPDATED DROPDOWN CONTENT — NO REMOVALS */}
              <DropdownMenuContent className="w-80">

                {/* AI COPILOT COMMAND CENTER */}
                <DropdownMenuItem asChild>
                  <Link href="/copilot" className="flex items-start">
                    <OpenInNewWindowIcon className="mr-2 h-4 w-4" />
                    <div>
                      <div className="font-semibold">AI Copilot Command Center</div>
                      <div className="text-sm text-muted-foreground">
                        Run commands, simulate workflows, and manage AI operations.
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                {/* AI COPILOTS */}
                <DropdownMenuItem asChild>
                  <Link href="/copilot" className="flex items-start">
                    <OpenInNewWindowIcon className="mr-2 h-4 w-4" />
                    <div>
                      <div className="font-semibold">AI Copilots</div>
                      <div className="text-sm text-muted-foreground">
                        Intelligent assistants for sales, support, workflows, and
                        operations across Kaali • Space products.
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                {/* DATA INTELLIGENCE */}
                <DropdownMenuItem asChild>
                  <Link href="/data-intelligence" className="flex items-start">
                    <PersonIcon className="mr-2 h-4 w-4" />
                    <div>
                      <div className="font-semibold">Data Intelligence</div>
                      <div className="text-sm text-muted-foreground">
                        Real-time analytics, monitoring, and insights to power
                        automation and decision-making.
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                {/* SUPPORT AUTOMATION */}
                <DropdownMenuItem asChild>
                  <Link href="/support-automation" className="flex items-start">
                    <GlobeIcon className="mr-2 h-4 w-4" />
                    <div>
                      <div className="font-semibold">Support Automation</div>
                      <div className="text-sm text-muted-foreground">
                        Automated support workflows with enterprise-grade triage.
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                {/* HIGH AVAILABILITY */}
                <DropdownMenuItem asChild>
                  <Link href="/high-availability" className="flex items-start">
                    <TimerIcon className="mr-2 h-4 w-4" />
                    <div>
                      <div className="font-semibold">High Availability</div>
                      <div className="text-sm text-muted-foreground">
                        Tools engineered for performance, uptime, and scalability.
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                {/* DEDICATED SUPPORT */}
                <DropdownMenuItem asChild>
                  <Link href="/dedicated-support" className="flex items-start">
                    <FaceIcon className="mr-2 h-4 w-4" />
                    <div>
                      <div className="font-semibold">Dedicated Support</div>
                      <div className="text-sm text-muted-foreground">
                        Expert technical guidance and success enablement.
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* RIGHT SIDE ITEMS */}
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:flex" size="sm">
              <Link href="https://x.com/gonzalochale" target="_blank">
                Connect on{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 1200 1227"
                  className="ml-1"
                >
                  <path
                    fill="currentColor"
                    d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026Z"
                  />
                </svg>
              </Link>
            </Button>

            <ThemeSwitcher />
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sm:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1"
              >

                {/* MOBILE ITEMS */}
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* CONNECT MOBILE */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-2 mt-2"
                >
                  <Link
                    href="https://x.com/gonzalochale"
                    target="_blank"
                    className="flex items-center px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connect on X
                  </Link>
                </motion.div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}