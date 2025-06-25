"use client";

import { dispatchWorkflow } from "@/app/actions/github";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { getSanityStudioToken } from "@/lib/sanity-client-auth";
import {
  ExternalLink,
  FileText,
  FolderOpen,
  Info,
  Loader2,
  Rocket,
  Settings,
  Shield,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { validateSanityToken } from "./actions/sanity-auth";

export default function Home() {
  const [isDeploying, setIsDeploying] = useState(false);
  const [isBetaDeploy, setIsBetaDeploy] = useState(false);
  const [authStatus, setAuthStatus] = useState<{
    isAuthenticated: boolean;
    error?: string;
  } | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  // Check authentication status when component mounts
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    setIsCheckingAuth(true);
    try {
      const token = getSanityStudioToken();
      if (!token) {
        setAuthStatus({
          isAuthenticated: false,
          error: "No Sanity Studio token found. Please refresh and try again.",
        });
        return;
      }
      const authResult = await validateSanityToken(token);
      setAuthStatus({
        isAuthenticated: authResult.isValid,
        error: authResult.error,
      });
    } catch (error) {
      setAuthStatus({
        isAuthenticated: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleDeploy = async () => {
    // Check auth status before deploy
    if (!authStatus?.isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log into Sanity Studio first",
        variant: "destructive",
      });
      return;
    }

    // Get the Sanity Studio token
    const sanityToken = getSanityStudioToken();
    if (!sanityToken) {
      toast({
        title: "Authentication Error",
        description:
          "No Sanity Studio token found. Please refresh and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsDeploying(true);

    try {
      await dispatchWorkflow({ isBetaDeploy, sanityToken });
      toast({
        title: "Deployment Triggered",
        description: `Deploying to ${isBetaDeploy ? "Beta" : "Production"} environment. Please wait approximately 5 minutes for deployment to complete.`,
      });
      setIsDeploying(false);
    } catch (error: unknown) {
      setIsDeploying(false);

      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast({
        title: "Deployment Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const checkGitHubStatus = () => {
    window.open(
      `https://github.com/velocity-iiitdwd/iiitdwd/actions/`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50/30 dark:bg-neutral-950">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-2xl font-light tracking-wide text-neutral-900 dark:text-neutral-100 mb-2">
            IIIT Dharwad
          </h1>
          <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700 mx-auto mb-4"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light tracking-wide">
            Content Management System
          </p>
        </div>

        {/* Authentication Status */}
        <div className="max-w-md mx-auto mb-8">
          <Card className="border-0 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {isCheckingAuth ? (
                    <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
                  ) : authStatus?.isAuthenticated ? (
                    <Shield className="w-4 h-4 text-green-600" />
                  ) : (
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                  )}
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Sanity Studio
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      authStatus?.isAuthenticated ? "default" : "destructive"
                    }
                    className="text-xs"
                  >
                    {isCheckingAuth
                      ? "Checking..."
                      : authStatus?.isAuthenticated
                        ? "Authenticated"
                        : "Not Authenticated"}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={checkAuthStatus}
                    disabled={isCheckingAuth}
                    className="h-6 w-6 p-0"
                  >
                    <Info className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              {authStatus?.error && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  {authStatus.error}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Manage Content Card */}
          <Card className="group border-0 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 shadow-sm hover:shadow-md">
            <CardHeader className="text-center pb-4 pt-6">
              <div className="w-10 h-10 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <CardTitle className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Studio
              </CardTitle>
              <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
                Edit content through Sanity Studio
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full h-9 border border-neutral-200/80 dark:border-neutral-700/80 bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-all duration-200"
                  size="sm"
                  variant="outline"
                >
                  <Link href="/studio">
                    <Settings className="w-3.5 h-3.5 mr-2" />
                    Open Studio
                  </Link>
                </Button>
                <p className="text-[10px] text-center text-neutral-400 dark:text-neutral-600">
                  Content editing workspace
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Deploy Card */}
          <Card className="group border-0 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 shadow-sm hover:shadow-md">
            <CardHeader className="text-center pb-4 pt-6">
              <div className="w-10 h-10 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <Rocket className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <CardTitle className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Deploy
              </CardTitle>
              <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
                Deploy to production or beta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-0 pb-6">
              {/* Environment Toggle */}
              <div className="flex items-center justify-center space-x-3 p-2.5 bg-neutral-100/60 dark:bg-neutral-800/60 rounded-xl">
                <span
                  className={`text-xs transition-colors ${!isBetaDeploy ? "text-neutral-900 dark:text-neutral-100 font-medium" : "text-neutral-400 dark:text-neutral-600"}`}
                >
                  Prod
                </span>
                <div className="relative scale-90">
                  <Switch
                    checked={isBetaDeploy}
                    onCheckedChange={setIsBetaDeploy}
                    disabled={isDeploying}
                    className="data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-300 dark:data-[state=checked]:bg-neutral-100 dark:data-[state=unchecked]:bg-neutral-600 h-5 w-9"
                  />
                </div>
                <span
                  className={`text-xs transition-colors ${isBetaDeploy ? "text-neutral-900 dark:text-neutral-100 font-medium" : "text-neutral-400 dark:text-neutral-600"}`}
                >
                  Beta
                </span>
              </div>

              {/* Deploy Button */}
              <Button
                onClick={handleDeploy}
                disabled={isDeploying || !authStatus?.isAuthenticated}
                className="w-full h-9 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 text-white border-0 text-sm font-medium transition-all duration-200 disabled:opacity-50"
                size="sm"
              >
                {isDeploying ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />
                    Deploying
                  </>
                ) : (
                  <>
                    <Rocket className="w-3.5 h-3.5 mr-2" />
                    Deploy
                  </>
                )}
              </Button>

              {/* Authentication Warning */}
              {!authStatus?.isAuthenticated && (
                <p className="text-[10px] text-amber-600 dark:text-amber-400 text-center">
                  ⚠️ Studio authentication required
                </p>
              )}

              {/* GitHub Status Link */}
              <Button
                onClick={checkGitHubStatus}
                variant="ghost"
                size="sm"
                className="w-full h-7 text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 text-[10px]"
              >
                <Info className="w-3 h-3 mr-1.5" />
                View Deployment Status
                <ExternalLink className="w-2.5 h-2.5 ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* File Management Card */}
          <Card className="group border-0 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 shadow-sm hover:shadow-md">
            <CardHeader className="text-center pb-4 pt-6">
              <div className="w-10 h-10 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <FolderOpen className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <CardTitle className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Assets
              </CardTitle>
              <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
                Manage docs and images
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full h-9 border border-neutral-200/80 dark:border-neutral-700/80 bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-all duration-200"
                  size="sm"
                  variant="outline"
                >
                  <a
                    href="https://assets.iiitdwd.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FolderOpen className="w-3.5 h-3.5 mr-2" />
                    Open Assets
                    <ExternalLink className="w-2.5 h-2.5 ml-1.5" />
                  </a>
                </Button>
                <p className="text-[10px] text-center text-neutral-400 dark:text-neutral-600">
                  File management portal
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-xs text-neutral-400 dark:text-neutral-600 font-light tracking-wide">
            IIIT Dharwad
          </p>
        </div>
      </div>
    </div>
  );
}
