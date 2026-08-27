export function ModelComplexity() {
  const deliveryColor = "var(--ink)";
  const billingColor = "var(--accent)";
  const fontFamily = "var(--font-mono-face), ui-monospace, monospace";

  // Delivery cycle: 7 days MON–SUN, dashed extension to MON (next week)
  // Positions: x = 30 + i * 95 for i = 0..6 (MON–SUN), dashed to x=680
  const deliveryDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dxStart = 30;
  const dxStep = 95;
  const dxSun = dxStart + 6 * dxStep;   // 600
  const dxMon2 = 680;
  const dBracketRight = 640;             // midpoint between SUN and MON_next
  const dBracketCenter = (dxStart + dBracketRight) / 2; // 335

  // Billing cycle: 10 days MON–WED (next week)
  // Positions: x = 20 + i * 73 for i = 0..9
  const billingDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const bxStart = 20;
  const bxStep = 73;
  const bxWed1 = bxStart + 2 * bxStep;  // 166 — billing start
  const bxWed2 = bxStart + 9 * bxStep;  // 677 — billing end
  const bBracketCenter = (bxWed1 + bxWed2) / 2; // ~421

  return (
    <div>
      <p className="text-[10px] text-ink/75 font-bold uppercase tracking-widest mb-8">
        Model complexity
      </p>

      {/* ── Delivery cycle ──────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "color-mix(in oklch, var(--ink) 8%, transparent)" }}
          >
            {/* Truck icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke={deliveryColor} strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" />
              <path d="M16 8h4l3 4v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: deliveryColor }}>Delivery cycle</p>
            <p className="text-xs text-ink/75">Weekly › Sunday or Monday</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 720 175"
            className="w-full min-w-[480px]"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontFamily }}
          >
            {/* Day labels */}
            {deliveryDays.map((day, i) => (
              <text
                key={day}
                x={dxStart + i * dxStep}
                y={18}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill={deliveryColor}
                opacity="0.75"
                letterSpacing="0.5"
              >
                {day}
              </text>
            ))}

            {/* Horizontal line — solid */}
            <line x1={dxStart} y1="48" x2={dxSun} y2="48"
              stroke={deliveryColor} strokeWidth="1.2" opacity="0.2" />
            {/* Dashed extension to MON_next */}
            <line x1={dxSun} y1="48" x2={dxMon2} y2="48"
              stroke={deliveryColor} strokeWidth="1.2" opacity="0.4"
              strokeDasharray="4 3" />

            {/* Regular dots: TUE–SAT (i=1..5) */}
            {[1, 2, 3, 4, 5].map((i) => (
              <circle key={i} cx={dxStart + i * dxStep} cy="48"
                r="3.5" fill={deliveryColor} opacity="0.2" />
            ))}

            {/* Highlighted dot: MON (week start) */}
            <circle cx={dxStart} cy="48" r="5.5"
              fill="white" stroke={deliveryColor} strokeWidth="1.5" />

            {/* Highlighted dot: SUN delivery */}
            <circle cx={dxSun} cy="48" r="5.5"
              fill="white" stroke={deliveryColor} strokeWidth="1.5" />

            {/* Highlighted dot: MON_next delivery (dashed) */}
            <circle cx={dxMon2} cy="48" r="5.5"
              fill="white" stroke={deliveryColor} strokeWidth="1.5" opacity="0.7" />

            {/* Stem: MON → label */}
            <line x1={dxStart} y1="54" x2={dxStart} y2="78"
              stroke={deliveryColor} strokeWidth="1.2" />
            <circle cx={dxStart} cy="81" r="4"
              fill="white" stroke={deliveryColor} strokeWidth="1.2" />
            <text x={dxStart} y="98" textAnchor="middle"
              fontSize="8" fontWeight="700" fill={deliveryColor} letterSpacing="0.5">
              WEEK START
            </text>
            <text x={dxStart} y="111" textAnchor="middle"
              fontSize="9" fill={deliveryColor} opacity="0.82">
              Monday
            </text>

            {/* Stem: SUN → label */}
            <line x1={dxSun} y1="54" x2={dxSun} y2="78"
              stroke={deliveryColor} strokeWidth="1.2" />
            <circle cx={dxSun} cy="81" r="4"
              fill="white" stroke={deliveryColor} strokeWidth="1.2" />
            <text x={dxSun} y="98" textAnchor="middle"
              fontSize="8" fontWeight="700" fill={deliveryColor} letterSpacing="0.5">
              DELIVERY
            </text>
            <text x={dxSun} y="111" textAnchor="middle"
              fontSize="9" fill={deliveryColor} opacity="0.82">
              Sunday
            </text>

            {/* "or" between the two delivery options */}
            <text x="640" y="105" textAnchor="middle"
              fontSize="9" fill={deliveryColor} opacity="0.75">
              or
            </text>

            {/* Stem: MON_next → label */}
            <line x1={dxMon2} y1="54" x2={dxMon2} y2="78"
              stroke={deliveryColor} strokeWidth="1.2" opacity="0.7" />
            <circle cx={dxMon2} cy="81" r="4"
              fill="white" stroke={deliveryColor} strokeWidth="1.2" opacity="0.7" />
            <text x={dxMon2} y="98" textAnchor="middle"
              fontSize="8" fontWeight="700" fill={deliveryColor} letterSpacing="0.5" opacity="0.7">
              DELIVERY
            </text>
            <text x={dxMon2} y="111" textAnchor="middle"
              fontSize="9" fill={deliveryColor} opacity="0.75">
              Monday
            </text>

            {/* Bracket */}
            <line x1={dxStart} y1="125" x2={dxStart} y2="133"
              stroke={deliveryColor} strokeWidth="1.2" />
            <line x1={dxStart} y1="133" x2={dBracketRight} y2="133"
              stroke={deliveryColor} strokeWidth="1.2" />
            <line x1={dBracketRight} y1="125" x2={dBracketRight} y2="133"
              stroke={deliveryColor} strokeWidth="1.2" />
            <line x1={dBracketCenter} y1="128" x2={dBracketCenter} y2="133"
              stroke={deliveryColor} strokeWidth="1.2" />

            <text x={dBracketCenter} y="148" textAnchor="middle"
              fontSize="8.5" fontWeight="700" fill={deliveryColor} letterSpacing="0.5">
              1 WEEK DELIVERY CYCLE
            </text>
            <text x={dBracketCenter} y="163" textAnchor="middle"
              fontSize="9" fill={deliveryColor} opacity="0.82">
              Weekly › Sunday or Monday
            </text>
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-line my-6" />

      {/* ── Billing cycle ───────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "color-mix(in oklch, var(--accent) 12%, transparent)" }}
          >
            {/* Invoice icon */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke={billingColor} strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: billingColor }}>Billing cycle</p>
            <p className="text-xs text-ink/75">Wednesday 9am › Wednesday 9am</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 720 175"
            className="w-full min-w-[480px]"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontFamily }}
          >
            {/* Day labels */}
            {billingDays.map((day, i) => (
              <text
                key={i}
                x={bxStart + i * bxStep}
                y={18}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="var(--ink)"
                opacity="0.75"
                letterSpacing="0.5"
              >
                {day}
              </text>
            ))}

            {/* Horizontal line */}
            <line x1={bxStart} y1="48" x2={bxWed2} y2="48"
              stroke={billingColor} strokeWidth="1.2" opacity="0.2" />

            {/* Regular dots (all except WED start i=2 and WED end i=9) */}
            {[0, 1, 3, 4, 5, 6, 7, 8].map((i) => (
              <circle key={i} cx={bxStart + i * bxStep} cy="48"
                r="3.5" fill={billingColor} opacity="0.2" />
            ))}

            {/* Highlighted dot: WED billing start */}
            <circle cx={bxWed1} cy="48" r="5.5"
              fill="white" stroke={billingColor} strokeWidth="1.5" />

            {/* Highlighted dot: WED billing end */}
            <circle cx={bxWed2} cy="48" r="5.5"
              fill="white" stroke={billingColor} strokeWidth="1.5" />

            {/* Stem: WED start → label */}
            <line x1={bxWed1} y1="54" x2={bxWed1} y2="78"
              stroke={billingColor} strokeWidth="1.2" />
            <circle cx={bxWed1} cy="81" r="4"
              fill="white" stroke={billingColor} strokeWidth="1.2" />
            <text x={bxWed1} y="98" textAnchor="middle"
              fontSize="8" fontWeight="700" fill={billingColor} letterSpacing="0.5">
              BILLING START
            </text>
            <text x={bxWed1} y="111" textAnchor="middle"
              fontSize="9" fill={billingColor} opacity="0.82">
              Wednesday 9am
            </text>

            {/* Stem: WED end → label */}
            <line x1={bxWed2} y1="54" x2={bxWed2} y2="78"
              stroke={billingColor} strokeWidth="1.2" />
            <circle cx={bxWed2} cy="81" r="4"
              fill="white" stroke={billingColor} strokeWidth="1.2" />
            <text x={bxWed2} y="98" textAnchor="middle"
              fontSize="8" fontWeight="700" fill={billingColor} letterSpacing="0.5">
              BILLING END
            </text>
            <text x={bxWed2} y="111" textAnchor="middle"
              fontSize="9" fill={billingColor} opacity="0.82">
              Wednesday 9am
            </text>

            {/* Bracket */}
            <line x1={bxWed1} y1="125" x2={bxWed1} y2="133"
              stroke={billingColor} strokeWidth="1.2" />
            <line x1={bxWed1} y1="133" x2={bxWed2} y2="133"
              stroke={billingColor} strokeWidth="1.2" />
            <line x1={bxWed2} y1="125" x2={bxWed2} y2="133"
              stroke={billingColor} strokeWidth="1.2" />
            <line x1={bBracketCenter} y1="128" x2={bBracketCenter} y2="133"
              stroke={billingColor} strokeWidth="1.2" />

            <text x={bBracketCenter} y="148" textAnchor="middle"
              fontSize="8.5" fontWeight="700" fill={billingColor} letterSpacing="0.5">
              1 WEEK BILLING CYCLE
            </text>
            <text x={bBracketCenter} y="163" textAnchor="middle"
              fontSize="9" fill={billingColor} opacity="0.82">
              Wednesday 9am › Wednesday 9am
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
