"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, Command, LayoutDashboard, FileText, 
  Settings, Users, Zap, X, ChevronRight,
  Shield, Globe, Key
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface CommandItem {
  id: string
  title: string
  category: string
  icon: any
  shortcut?: string
}

const COMMANDS: CommandItem[] = [
  { id: "/dashboard", title: "Process New CV", category: "Actions", icon: Zap, shortcut: "P" },
  { id: "/dashboard/templates", title: "Document Templates", category: "Navigation", icon: FileText, shortcut: "T" },
  { id: "/dashboard/identcheck", title: "Identcheck Scan", category: "Actions", icon: Shield, shortcut: "I" },
  { id: "/dashboard/settings", title: "API Configuration", category: "System", icon: Settings, shortcut: "S" },
  { id: "#", title: "Manage Keys", category: "System", icon: Key },
  { id: "#", title: "Change Language", category: "System", icon: Globe },
]

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [lang, setLang] = useState<"DE"|"EN">("DE")
  const pathname = usePathname()

  const toggleOpen = useCallback(() => setIsOpen(open => !open), [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleOpen()
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [toggleOpen])

  const filteredCommands = COMMANDS.filter(cmd => 
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="relative min-h-screen bg-[#0B1120] text-slate-200">
      {/* Sidebar (Desktop) */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 p-6 hidden lg:flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white tracking-tight">CV RECRUITER</span>
        </div>

        <nav className="flex-1 space-y-2">
          {COMMANDS.filter(c => c.category === "Navigation").map(item => {
            const isActive = pathname === item.id;
            return (
            <Link key={item.id} href={item.id} className={cn(
                "w-full flex items-center justify-between p-3 rounded-xl group transition-all",
                isActive ? "bg-blue-600/10 text-blue-400 relative" : "hover:bg-slate-800 text-slate-400"
              )}>
              {isActive && (
                <motion.div layoutId="nav-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full" />
              )}
              <div className={cn("flex items-center gap-3 transition-colors", isActive ? "" : "group-hover:text-blue-400")}>
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <ChevronRight className={cn("h-4 w-4 transition-opacity", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100")} />
            </Link>
          )})}
        </nav>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/20">
          <p className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">Quick Search</p>
          <button 
            onClick={toggleOpen}
            className="w-full flex items-center justify-between text-slate-500 hover:text-white transition-colors border border-slate-800 rounded-lg p-2 bg-slate-900/50"
          >
            <span className="text-xs">Search...</span>
            <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">⌘K</span>
          </button>
        </div>
      </aside>

      <main className="lg:pl-64 min-h-screen">
        <header className="h-16 border-b border-slate-800 px-8 flex items-center justify-between sticky top-0 bg-[#0B1120]/80 backdrop-blur-md z-40">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">
               <button 
                 onClick={() => setLang("DE")}
                 className={cn("px-3 py-1 text-xs font-medium rounded-md transition-colors", lang === "DE" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white")}
               >
                 DE
               </button>
               <button 
                 onClick={() => setLang("EN")}
                 className={cn("px-3 py-1 text-xs font-medium rounded-md transition-colors", lang === "EN" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white")}
               >
                 EN
               </button>
             </div>
             <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700" title="User Profile" />
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4 sm:p-6 md:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden"
            >
              <div className="flex items-center px-4 py-4 border-b border-slate-800">
                <Search className="h-5 w-5 text-slate-500" />
                <input 
                  autoFocus
                  placeholder="Search actions, candidates, help..."
                  className="w-full bg-transparent border-none outline-none px-4 text-white placeholder-slate-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={toggleOpen} className="p-1 hover:bg-slate-800 rounded">
                  <X className="h-4 w-4 text-slate-500" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                {filteredCommands.length > 0 ? (
                  Object.entries(
                    filteredCommands.reduce((acc, cmd) => {
                      if (!acc[cmd.category]) acc[cmd.category] = []
                      acc[cmd.category].push(cmd)
                      return acc
                    }, {} as Record<string, CommandItem[]>)
                  ).map(([category, items]) => (
                    <div key={category} className="mb-4 last:mb-0">
                      <h3 className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{category}</h3>
                      <div className="space-y-1">
                        {items.map(item => (
                          <Link 
                            key={item.id}
                            href={item.id === '#' ? '' : item.id}
                            onClick={() => { if(item.id !== '#') toggleOpen(); }}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-blue-600/10 hover:text-blue-400 group transition-all text-sm text-slate-300"
                          >
                            <div className="flex items-center gap-4">
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </div>
                            {item.shortcut && (
                              <span className="text-[10px] text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                                {item.shortcut}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center text-slate-500 space-y-2">
                    <Command className="h-8 w-8 mx-auto opacity-20" />
                    <p>No results for "{query}"</p>
                  </div>
                )}
              </div>

              <div className="px-4 py-3 bg-slate-950/50 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><span className="bg-slate-800 px-1 rounded">↵</span> Select</span>
                  <span className="flex items-center gap-1"><span className="bg-slate-800 px-1 rounded">↑↓</span> Navigate</span>
                </div>
                <div>Press <span className="text-slate-400 font-bold">Esc</span> to close</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
