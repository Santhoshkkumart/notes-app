import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="glass-panel mx-auto max-w-2xl p-6">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="rounded-full border border-amber-300/30 bg-amber-400/10 p-3 text-amber-200">
          <ZapIcon className="size-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">Rate limit reached</h3>
          <p className="mt-1 text-sm text-zinc-400">
            Too many requests in a short time. Please wait a few seconds and retry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
