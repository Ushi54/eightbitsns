// types/post.ts
export type Post = {
  id: string;
  user: { displayName: string; handle: string; iconUrl: string };
  createdAt: string;   // ISO8601（+09:00）
  text: string;        // \n を改行として使う
};

export function toRelativeTime(iso: string): string {
  const rtf = new Intl.RelativeTimeFormat("ja", { numeric: "auto" });
  const diffMs = new Date(iso).getTime() - Date.now();
  const min = Math.round(diffMs / 60000);
  if (Math.abs(min) < 60) return rtf.format(min, "minute");
  const hr = Math.round(min / 60);
  if (Math.abs(hr) < 24) return rtf.format(hr, "hour");
  const day = Math.round(hr / 24);
  return rtf.format(day, "day");
}
