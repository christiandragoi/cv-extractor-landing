"use client"

// components/command-palette.tsx
import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { useRouter } from "next/navigation"
import { 
  FileText, 
  ScanLine, 
  FileOutput, 
  Settings, 
  Search 
} from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 max-w-2xl overflow-hidden">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input 
              placeholder="Befehl suchen..." 
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty>Keine Ergebnisse gefunden.</Command.Empty>
            
            <Command.Group heading="Werkzeuge">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/extractor"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>CV Extractor</span>
                <span className="ml-auto text-xs text-gray-400">Strg+1</span>
              </Command.Item>
              
              <Command.Item
                onSelect={() => runCommand(() => router.push("/identcheck"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <ScanLine className="h-4 w-4" />
                <span>Identcheck</span>
                <span className="ml-auto text-xs text-gray-400">Strg+2</span>
              </Command.Item>
              
              <Command.Item
                onSelect={() => runCommand(() => router.push("/generator"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <FileOutput className="h-4 w-4" />
                <span>Lebenslauf Generator</span>
                <span className="ml-auto text-xs text-gray-400">Strg+3</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Aktionen">
              <Command.Item
                onSelect={() => runCommand(() => document.getElementById("file-upload")?.click())}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <span>Neue Datei verarbeiten</span>
              </Command.Item>
              
              <Command.Item
                onSelect={() => runCommand(() => router.push("/settings"))}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <Settings className="h-4 w-4" />
                <span>Einstellungen</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
          
          <div className="border-t px-2 py-1.5 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex gap-2">
              <span>↑↓ Navigation</span>
              <span>↵ Auswählen</span>
            </div>
            <div>ESC Schließen</div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
