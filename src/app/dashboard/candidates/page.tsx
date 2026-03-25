"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCandidates } from "@/lib/api";
import { LayoutShell } from "@/components/layout-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, FileText, UserCheck, FileCheck, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CandidatesPage() {
  const { data: candidates, isLoading, error } = useQuery({
    queryKey: ['candidates'],
    queryFn: fetchCandidates
  });

  return (
    <LayoutShell>
      <div className="flex flex-col h-full space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">👥 Kandidaten</h1>
          <p className="text-muted-foreground mt-2">
            Verwalte extrahierte Lebensläufe, Identitätsprüfungen und KI-generierte Dokumente.
          </p>
        </div>

        <Card className="flex-1 overflow-hidden flex flex-col border-border/50 shadow-sm">
          <CardHeader className="bg-muted/20 border-b pb-4">
            <CardTitle className="text-lg flex justify-between items-center">
              <span>Bewerber-Pool</span>
              <span className="text-sm font-normal text-muted-foreground px-3 py-1 rounded-full bg-muted/50 border">
                {candidates?.length || 0} Kandidaten
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                <p className="text-muted-foreground animate-pulse">Lade Kandidaten...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-64 text-red-500 space-y-2 bg-red-50/50">
                <p className="font-semibold">Fehler beim Laden der Kandidaten</p>
                <p className="text-sm text-red-500/80 bg-white p-2 rounded border border-red-100">{String(error)}</p>
              </div>
            ) : candidates?.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-5 px-4">
                <div className="p-6 bg-muted/30 rounded-full border border-dashed border-muted-foreground/30">
                  <User className="h-12 w-12 text-muted-foreground/60" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl tracking-tight">Völlige Leere!</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">Dein Bewerber-Pool ist noch leer. Lade Lebensläufe im Dashboard hoch, um hier magische Ergebnisse zu sehen.</p>
                </div>
                <Button onClick={() => window.location.href='/dashboard'}>Jetzt Lebensläufe extrahieren</Button>
              </div>
            ) : (
              <div className="min-w-[800px] w-full">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/30 sticky top-0 border-b shadow-sm backdrop-blur-md">
                    <tr>
                      <th className="px-6 py-4 font-semibold tracking-wider">Kandidat</th>
                      <th className="px-6 py-4 font-semibold tracking-wider">Zuletzt aktualisiert</th>
                      <th className="px-6 py-4 font-semibold tracking-wider text-center">Profil-Datenbank</th>
                      <th className="px-6 py-4 font-semibold tracking-wider text-right">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {candidates.map((cand: any) => (
                      <tr 
                        key={cand.folder} 
                        className="group hover:bg-muted/10 transition-colors bg-card"
                      >
                        <td className="px-6 py-4 font-medium text-base text-foreground/90">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-800">
                              {cand.name.charAt(0).toUpperCase()}
                            </div>
                            {cand.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground tabular-nums">
                          {new Date(cand.last_modified).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })} Uhr
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            {cand.has_cv ? (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0" title="CV Extracted">
                                <FileText className="h-3.5 w-3.5" />
                                <span className="text-xs font-semibold">CV-Daten</span>
                              </div>
                            ) : null}
                            {cand.has_populated ? (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0" title="Populated Word Document">
                                <FileCheck className="h-3.5 w-3.5" />
                                <span className="text-xs font-semibold">Word-Doc</span>
                              </div>
                            ) : null}
                            {cand.has_identcheck ? (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0" title="Identcheck Saved">
                                <UserCheck className="h-3.5 w-3.5" />
                                <span className="text-xs font-semibold">Identcheck</span>
                              </div>
                            ) : null}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            Profil öffnen <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </LayoutShell>
  );
}
