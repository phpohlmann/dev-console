export function StatusBar() {
  return (
    <div className="h-6 bg-primary text-primary-foreground flex items-center px-3 text-[11px] justify-between">
      <div className="flex items-center gap-4">
        <span>Main*</span>
        <span>0 warnings</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Next.js 16</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
