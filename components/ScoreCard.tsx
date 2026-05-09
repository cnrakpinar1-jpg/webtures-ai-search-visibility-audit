type Props = {
  label: string;
  value: string | number;
  description: string;
};

export function ScoreCard({ label, value, description }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
        {label}
      </p>
      <p className="mt-3 font-mono text-4xl font-semibold tabular-nums text-neutral-50">
        {value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}
