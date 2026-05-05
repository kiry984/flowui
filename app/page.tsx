import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">
      {/* Top bar */}
      <div className="h-14 border-b border-zinc-800 flex items-center px-6 justify-between">
        <h1 className="text-2xl font-semibold">FlowUI</h1>
        <div className="text-zinc-400 text-sm">Runtime Generative UI Studio</div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left: Intent */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-medium mb-4">Intent</h2>
            <textarea 
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-sm resize-none focus:outline-none"
              placeholder="Describe your adaptive interface... e.g. dynamic logistics dashboard that mutates on delays"
            />
            <button className="mt-4 bg-white text-black px-6 py-3 rounded-2xl font-medium">Generate Adaptive UI</button>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Center: Live Preview */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-medium mb-4">Live Preview</h2>
            <Card className="flex-1 bg-zinc-900 border-zinc-700 flex items-center justify-center">
              <div className="text-center text-zinc-400">
                <p className="text-sm">Your adaptive component will appear here</p>
                <p className="text-xs mt-2">Context changes will mutate it in real-time</p>
              </div>
            </Card>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Right: Rules */}
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="h-full p-6 flex flex-col">
            <h2 className="text-lg font-medium mb-4">Rules Engine</h2>
            <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-xs text-zinc-400">
              State transitions and fallback rules will live here
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}