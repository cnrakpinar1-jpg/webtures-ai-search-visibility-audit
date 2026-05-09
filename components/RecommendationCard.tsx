type Props = {
  title: string;
  description: string;
  impact: string;
};

export function RecommendationCard({ title, description, impact }: Props) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-base font-semibold text-neutral-100">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
      <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          Impact
        </span>
        <span className="text-sm text-neutral-200">{impact}</span>
      </div>
    </div>
  );
}
