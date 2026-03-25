"use client"

import { useState } from "react"
import { extractCV } from "@/lib/api"
import { useUpload, useExtraction, useBatchProgress } from "@/hooks/useExtraction"
import { FileQueue } from "@/components/file-queue"
import { ConfidenceField } from "@/components/confidence-field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertTriangle, FileText, UploadCloud, Save, Loader2, UserCheck } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandidatesView } from "@/components/candidates-view"

export default function DashboardPage() {
  const [provider, setProvider] = useState("kimi")
  const [jobProfile, setJobProfile] = useState("schweisser")
  const [extractionComplete, setExtractionComplete] = useState(false)
  
  const upload = useUpload()
  const [activeJobIds, setActiveJobIds] = useState<string[]>([])
  const isBatchMode = activeJobIds.length > 1

  // Single file tracking
  const { data: singleJobStatus } = useExtraction(activeJobIds.length === 1 ? activeJobIds[0] : undefined)
  // Batch tracking
  const { progress: batchStatus } = useBatchProgress(isBatchMode ? activeJobIds : [])

  // Unified alias for the render logic below
  const jobStatus = isBatchMode ? null : singleJobStatus

  const handleFiles = async (files: File[]) => {
    try {
      const uploaded = await upload.mutateAsync(files)
      if (uploaded && uploaded.length > 0) {
        // Kick off extraction for all uploaded files
        const jobIds = await Promise.all(
          uploaded.map(async (u) => {
            const { job_id } = await extractCV(u.file_id)
            return job_id
          })
        )
        setActiveJobIds(jobIds)
        setExtractionComplete(true)
      }
    } catch (err) {
      console.error("Upload failed", err)
    }
  }

  return (
    <Tabs defaultValue="process" className="flex flex-col h-full gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Zentraler Workspace für das Bewerbermanagement.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Save className="h-4 w-4" />
              Entwurf speichern
            </Button>
            <Button className="gap-2" onClick={() => setExtractionComplete(false)}>
              <UploadCloud className="h-4 w-4" />
              Neuer Lebenslauf
            </Button>
          </div>
        </div>

        <TabsList className="w-fit">
          <TabsTrigger value="process" className="flex gap-2"><FileText className="w-4 h-4"/> Lebensläufe Extrahieren</TabsTrigger>
          <TabsTrigger value="candidates" className="flex gap-2"><UserCheck className="w-4 h-4"/> Kandidaten Pool</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="flex-1 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[calc(100vh-220px)] pb-8">
          {/* Left Panel: Configuration */}
          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuration</CardTitle>
                <CardDescription>Einstellungen für die AI-Extraktion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>AI Provider</Label>
                  <Select value={provider} onValueChange={setProvider}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle Provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kimi">Kimi K2</SelectItem>
                      <SelectItem value="openai">OpenAI (GPT-4o)</SelectItem>
                      <SelectItem value="anthropic">Anthropic (Claude 3.5)</SelectItem>
                      <SelectItem value="ollama">Ollama (Lokal)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Job Profile</Label>
                  <Select value={jobProfile} onValueChange={setJobProfile}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle Profil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="schweisser">Schweißer</SelectItem>
                      <SelectItem value="elektriker">Elektriker</SelectItem>
                      <SelectItem value="anlagenmechaniker">Anlagenmechaniker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {provider === "ollama" && (
                  <div className="mt-4 p-3 bg-muted rounded-md flex items-start gap-3 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">🇩🇪 DSGVO-Konform</p>
                      <p className="text-muted-foreground">Ollama läuft 100% lokal. Keine Daten verlassen den Server.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Template</CardTitle>
                <CardDescription>Ziel-Dokument für den Export</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-3 border rounded-md bg-card">
                  <FileText className="h-8 w-8 text-blue-500" />
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-medium truncate">CD_GmbH_Template_V2.docx</p>
                    <p className="text-xs text-muted-foreground">Standard-Vorlage</p>
                  </div>
                  <Button size="sm" variant="ghost">Ändern</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel: Processing / Results */}
          <div className="md:col-span-9 h-[800px] flex flex-col">
            {!extractionComplete ? (
              <Card className="flex-1 overflow-hidden flex flex-col">
                <CardHeader>
                  <CardTitle>Upload & Processing</CardTitle>
                  <CardDescription>Ziehe Lebensläufe (PDF/DOCX) hierher.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-0 overflow-hidden relative">
                   <div className="absolute inset-x-6 top-0 bottom-6">
                    <FileQueue onFilesSelected={handleFiles} />
                   </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* PDF Viewer Mockup */}
                <Card className="h-full flex flex-col">
                  <CardHeader className="py-4 border-b">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm font-medium">Original Dokument</CardTitle>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">resume_khasanov.pdf</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-0 bg-zinc-100 dark:bg-zinc-900 overflow-y-auto">
                    {/* Placeholder for react-pdf */}
                    <div className="p-8 h-full flex items-center justify-center">
                       <div className="w-full max-w-[400px] bg-white dark:bg-zinc-800 shadow-lg aspect-[1/1.4] p-8 space-y-4">
                         <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded" />
                         <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded" />
                         <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700 my-4" />
                         <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded" />
                         <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-700 rounded" />
                         <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded" />
                       </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Extraction Results */}
                <Card className="h-full flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col h-full w-full"
                    >
                  <CardHeader className="bg-muted/20 border-b pb-4 shrink-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Extraktions-Ergebnisse</CardTitle>
                      {jobStatus?.status === 'completed' && jobStatus.result && (
                        <div className="flex gap-2">
                           <Button variant="outline" size="sm">
                             Als JSON speichern
                           </Button>
                           <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm">
                             Word generieren
                           </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* BATCH PROGRESS VIEW */}
                    {isBatchMode && batchStatus && batchStatus.status !== 'completed' && (
                      <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                        <div className="space-y-2 w-3/4">
                          <p className="text-sm font-medium">
                            Batch-Verarbeitung: {batchStatus.completed + batchStatus.failed} von {batchStatus.total_files} abgeschlossen
                          </p>
                          {batchStatus.current_file && (
                            <p className="text-xs text-muted-foreground">{batchStatus.current_file}</p>
                          )}
                          <Progress value={batchStatus.progress} className="h-2" />
                        </div>
                      </div>
                    )}

                    {isBatchMode && batchStatus?.status === 'completed' && (
                      <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                        <CheckCircle2 className="h-12 w-12 text-green-500" />
                        <p className="font-medium text-lg">Batch-Verarbeitung erfolgreich!</p>
                        <p className="text-muted-foreground mb-4">
                          {batchStatus.completed} Lebensläufe verarbeitet, {batchStatus.failed} fehlgeschlagen.
                        </p>
                        <Button variant="default" onClick={() => window.location.href = '/dashboard/candidates'}>Kandidaten ansehen</Button>
                      </div>
                    )}

                    {/* SINGLE FILE VIEW */}
                    {!isBatchMode && jobStatus?.status === 'processing' && (
                      <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                        <div className="space-y-2 w-3/4">
                          <p className="text-sm font-medium">{jobStatus.current_step || "Dokument wird verarbeitet..."}</p>
                          <Progress value={jobStatus.progress} className="h-2" />
                        </div>
                      </div>
                    )}
                    
                    {!isBatchMode && jobStatus?.status === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500">
                        <div className="flex items-center gap-2 font-semibold mb-1">
                          <AlertTriangle className="h-4 w-4" />
                          Fehler bei der Extraktion
                        </div>
                        <p className="text-sm">{jobStatus.error_message || "Ein unbekannter Fehler ist aufgetreten."}</p>
                      </div>
                    )}

                    {!isBatchMode && jobStatus?.status === 'completed' && jobStatus.result && (() => {
                      const data = jobStatus.result.cv_data
                      const getConf = (field: string) => jobStatus.result.confidence_scores?.find((s: any) => s.field === field)?.confidence || 0
                      
                      return (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <ConfidenceField
                            label="Vollständiger Name"
                            value={data.full_name || ""} 
                            confidence={getConf("full_name")}
                            fieldName="full_name"
                            onChange={() => {}}
                            onValidate={() => {}}
                          />
                          <ConfidenceField
                            label="Nationalität"
                            value={data.staatsangehoerigkeit || ""} 
                            confidence={getConf("staatsangehoerigkeit")}
                            fieldName="staatsangehoerigkeit"
                            onChange={() => {}}
                            onValidate={() => {}}
                          />
                        </div>
                          <ConfidenceField
                            label="Adresse"
                            value={data.address || ""}
                            confidence={getConf("address")}
                            fieldName="adresse"
                            onChange={() => {}}
                            onValidate={() => {}}
                          />
                          <ConfidenceField
                            label="Berufsbezeichnung"
                            value={data.berufsbezeichnung || ""}
                            confidence={getConf("berufsbezeichnung")}
                            fieldName="berufe"
                            onChange={() => {}}
                            onValidate={() => {}}
                          />
                          <ConfidenceField
                            label="Führerschein"
                            value={data.fuhrerschein || ""}
                            confidence={getConf("fuhrerschein")}
                            fieldName="fuehrerschein"
                            onChange={() => {}}
                            onValidate={() => {}}
                          />
                          
                          <div className="pt-4 mt-6 border-t flex justify-end gap-3">
                             <Button variant="outline">Verwerfen</Button>
                             <Button>Profil Speichern & Exportieren</Button>
                          </div>
                      </div>
                      )
                    })()}
                  </CardContent>
              </motion.div>
                  </AnimatePresence>
                </Card>
              </div>
            )}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="candidates" className="h-full mt-0">
         <CandidatesView />
      </TabsContent>
    </Tabs>
  )
}
