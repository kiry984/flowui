"use client";
import { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [intent, setIntent] = useState("");
  const [previewComponent, setPreviewComponent] = useState("dashboard");

  const handleGenerate = () => {
    // Simple simulation: mutate preview based on intent keywords
    if (intent.toLowerCase().includes("delay") || intent.toLowerCase().includes("logistics")) {
      setPreviewComponent("logistics");
    } else {
      setPreviewComponent("dashboard");
    }
  };

  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">
      <div className="h-14 border-b border-zinc-800 flex items-center px-6 justify-between">
        <h1 className="text-2xl font-semibold">FlowUI</h1>
        <div className="text-zinc-400 text-sm">Runtime Generative UI Studio</div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left: Intent */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-medium mb-4">Intent</h2>
            <Textarea 
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-sm resize-none"
              placeholder="dynamic logistics dashboard that mutates on delays..."
            />
            <Button onClick={handleGenerate} className="mt-4 w-full">Generate Adaptive UI</Button>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Center: Live Preview */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-medium mb-4">Live Preview</h2>
            <Card className="flex-1 bg-zinc-900 border-zinc-700 flex items-center justify-center p-8">
              {previewComponent === "logistics" ? (
                <div className="text-center">
                  <div className="text-emerald-400 text-6xl mb-4">🚚</div>
                  <p className="text-xl">Logistics Dashboard</p>
                  <p className="text-sm text-zinc-400 mt-2">Route mutated due to 47-min delay</p>
                </div>
              ) : (
                <div className="text-center text-zinc-400">
                  <p>Your adaptive component appears here</p>
                  <p className="text-xs mt-8">Try typing “logistics delay” above</p>
                </div>
              )}
            </Card>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Right: Rules */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-medium mb-4">Rules Engine</h2>
            <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-xs space-y-4">
              <div className="p-3 bg-zinc-800 rounded-xl">When delay &gt; 30min → collapse sidebar</div>
              <div className="p-3 bg-zinc-800 rounded-xl">When no data → show fallback empty state</div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}