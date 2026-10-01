export function Mark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M7 13h18c0 7-4 11-9 11s-9-4-9-11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M11 13c1-5 2.2-7 5-7s4 2 5 7" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
