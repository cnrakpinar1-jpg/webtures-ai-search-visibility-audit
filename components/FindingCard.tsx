type Severity = "low" | "medium" | "high" | "opportunity";

type Props = {
  title: string;
  description: string;
  severity: Severity;
};

const severityStyles: Record<Severity, { label: string; classes: string }> = {
  low: {
    label: "Low",
    classes: "border-slate-500/30 bg-slate-500/10 text-slate-300",
  },
  medium: {
    label: "Medium",
    classes: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
  high: {
    label: "High",
    classes: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  },
  opportunity: {
    label: "Opportunity",
    classes: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  },
};

export function FindingCard({ title, description, severity }: Props) {
  const style = severityStyles[severity];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-neutral-100">{title}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${style.classes}`}
        >
          {style.label}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}
