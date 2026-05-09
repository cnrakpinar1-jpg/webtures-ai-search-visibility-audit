import type { AuditItem } from "@/data/auditData";

type Props = {
  items: AuditItem[];
};

const headers = [
  "Platform",
  "Query",
  "Mentioned",
  "Position",
  "Context Clarity",
  "GEO Relevance",
  "Source Quality",
  "Notes",
];

const platformBadge: Record<AuditItem["platform"], string> = {
  ChatGPT: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Gemini: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  Perplexity: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  Google: "border-amber-500/30 bg-amber-500/10 text-amber-300",
};

function ScoreCell({ value }: { value: number }) {
  return (
    <span className="font-mono tabular-nums text-neutral-200">
      {value}
      <span className="text-neutral-500"> / 10</span>
    </span>
  );
}

export function AuditTable({ items }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-neutral-400">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="whitespace-nowrap px-4 py-3 font-medium"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-neutral-300">
            {items.map((item) => (
              <tr key={item.id} className="even:bg-white/[0.015]">
                <td className="whitespace-nowrap px-4 py-3 align-top">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${platformBadge[item.platform]}`}
                  >
                    {item.platform}
                  </span>
                  <span
                    className={`mt-1.5 block text-[10px] font-medium uppercase tracking-wider ${
                      item.collectionMethod === "manual"
                        ? "text-emerald-300/80"
                        : "text-neutral-500"
                    }`}
                  >
                    {item.collectionMethod === "manual"
                      ? "Manual"
                      : "Placeholder"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-neutral-100">{item.query}</span>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${item.brandMentioned ? "bg-emerald-400" : "bg-neutral-600"}`}
                      aria-hidden
                    />
                    {item.brandMentioned ? "Yes" : "No"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 font-mono tabular-nums">
                  {item.brandPosition !== null ? `#${item.brandPosition}` : "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <ScoreCell value={item.contextClarity} />
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <ScoreCell value={item.geoRelevance} />
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <ScoreCell value={item.sourceQuality} />
                </td>
                <td className="px-4 py-3 align-top">
                  <details className="group max-w-md">
                    <summary
                      className="cursor-pointer list-none [&::-webkit-details-marker]:hidden [&::marker]:hidden"
                      title={item.notes}
                    >
                      <p className="line-clamp-2 text-sm text-neutral-300 group-open:hidden">
                        {item.notes}
                      </p>
                      <span className="mt-2 inline-block text-xs text-orange-300 hover:text-orange-200">
                        <span className="group-open:hidden">
                          Read full note
                        </span>
                        <span className="hidden group-open:inline">
                          Hide note
                        </span>
                      </span>
                    </summary>
                    <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs leading-relaxed text-neutral-300">
                      {item.notes}
                    </div>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
