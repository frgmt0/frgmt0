<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 540" width="880" height="540">

  <defs>
    <pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#1a1611" opacity="0.07"/>
    </pattern>
    <filter id="noise" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0"/>
    </filter>
  </defs>

  <rect width="880" height="540" fill="#f4ede0"/>
  <rect width="880" height="540" fill="url(#dotgrid)"/>
  <rect width="880" height="540" filter="url(#noise)" opacity="0.6"/>

  <!-- ── title ── -->
  <g transform="translate(60 60)">
    <text x="0" y="0"
          font-family="Space Grotesk, Inter, system-ui, sans-serif"
          font-size="48" font-weight="800"
          letter-spacing="-1.5"
          fill="#1a1611">year on claude</text>
    <text x="0" y="26"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="13"
          fill="#5c5147">24 active days / year ending 2026-06-15</text>
  </g>

  <g transform="translate(660 40) rotate(3)">
    <rect x="0" y="0" width="192" height="26" fill="#f2d76e" stroke="#1a1611" stroke-width="1.5"/>
    <rect x="2" y="2" width="192" height="26" fill="none" stroke="#1a1611" stroke-width="1.5" opacity="0.18"/>
    <text x="96" y="18"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="14" font-weight="700"
          letter-spacing="1.5"
          text-anchor="middle" fill="#1a1611">CLAUDE-RPC · V0.19.1</text>
  </g>

  <!-- ── hero hours card ── -->
  <g transform="translate(60 130)">
    <rect x="3" y="4" width="380" height="170" fill="#1a1611"/>
    <rect x="0" y="0" width="380" height="170" fill="#f4ede0" stroke="#1a1611" stroke-width="2"/>
    <text x="22" y="36"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="12" font-weight="700"
          letter-spacing="2.5"
          fill="#5c5147">TIME WITH CLAUDE</text>
    <text x="22" y="118"
          font-family="Space Grotesk, Inter, system-ui, sans-serif"
          font-size="82" font-weight="800"
          letter-spacing="-3"
          fill="#c2491e">37h</text>
    <text x="22" y="148"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="13"
          fill="#1a1611">24 days · 39 sessions · streak 10 (best 10)</text>
  </g>

  <!-- ── right-column stats (2x2 grid) ── -->

  <g transform="translate(470 130) rotate(-0.8)">
    <rect x="2" y="3" width="170" height="82" fill="#1a1611"/>
    <rect x="0" y="0" width="170" height="82" fill="#f4ede0" stroke="#1a1611" stroke-width="1.5"/>
    <text x="18" y="28"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11" font-weight="700"
          letter-spacing="2"
          fill="#5c5147">PROMPTS</text>
    <text x="18" y="58"
          font-family="Space Grotesk, Inter, system-ui, sans-serif"
          font-size="34" font-weight="800"
          fill="#1a1611">271</text>

  </g>

  <g transform="translate(650 130) rotate(0.6)">
    <rect x="2" y="3" width="170" height="82" fill="#1a1611"/>
    <rect x="0" y="0" width="170" height="82" fill="#f4ede0" stroke="#1a1611" stroke-width="1.5"/>
    <text x="18" y="28"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11" font-weight="700"
          letter-spacing="2"
          fill="#5c5147">TOKENS</text>
    <text x="18" y="58"
          font-family="Space Grotesk, Inter, system-ui, sans-serif"
          font-size="34" font-weight="800"
          fill="#1a1611">1.37B</text>

  </g>

  <g transform="translate(470 218) rotate(0.6)">
    <rect x="2" y="3" width="170" height="82" fill="#1a1611"/>
    <rect x="0" y="0" width="170" height="82" fill="#f4ede0" stroke="#1a1611" stroke-width="1.5"/>
    <text x="18" y="28"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11" font-weight="700"
          letter-spacing="2"
          fill="#5c5147">LINES</text>
    <text x="18" y="58"
          font-family="Space Grotesk, Inter, system-ui, sans-serif"
          font-size="34" font-weight="800"
          fill="#4a9462">+97.7k</text>
    <text x="18" y="74"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11"
          fill="#5c5147">112.8k added</text>
  </g>

  <g transform="translate(650 218) rotate(-0.5)">
    <rect x="2" y="3" width="170" height="82" fill="#1a1611"/>
    <rect x="0" y="0" width="170" height="82" fill="#f4ede0" stroke="#1a1611" stroke-width="1.5"/>
    <text x="18" y="28"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11" font-weight="700"
          letter-spacing="2"
          fill="#5c5147">COST</text>
    <text x="18" y="58"
          font-family="Space Grotesk, Inter, system-ui, sans-serif"
          font-size="34" font-weight="800"
          fill="#5865f2">$1.08k</text>
    <text x="18" y="74"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11"
          fill="#5c5147">≈ $44.92/day</text>
  </g>

  <!-- ── activity strip ── -->
  <g>
    <text x="60" y="328"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11" font-weight="700"
          letter-spacing="2.5"
          fill="#5c5147">DAILY ACTIVITY</text>
    <rect x="60" y="335" width="760" height="62" fill="#ebe2d2" stroke="#1a1611" stroke-width="1.5"/>
    <g><rect x="64" y="393.6826650526495" width="29.833333333333332" height="1.3173349473504903" fill="#c2491e" opacity="0.4602207021777193"/><rect x="95.33333333333333" y="386.8852747791619" width="29.833333333333332" height="8.114725220838118" fill="#c2491e" opacity="0.5129590749892613"/><rect x="126.66666666666666" y="390.05491218754435" width="29.833333333333332" height="4.945087812455632" fill="#c2491e" opacity="0.4883670606138799"/><rect x="158" y="389.99873497617955" width="29.833333333333332" height="5.0012650238204746" fill="#c2491e" opacity="0.48880291828826233"/><rect x="189.33333333333331" y="379.90657819149794" width="29.833333333333332" height="15.093421808502077" fill="#c2491e" opacity="0.5671041347211369"/><rect x="220.66666666666666" y="386.67120932120156" width="29.833333333333332" height="8.328790678798427" fill="#c2491e" opacity="0.5146199276803326"/><rect x="252" y="392.5221592433104" width="29.833333333333332" height="2.4778407566895737" fill="#c2491e" opacity="0.46922462656052255"/><rect x="283.3333333333333" y="381.11183852999153" width="29.833333333333332" height="13.888161470008448" fill="#c2491e" opacity="0.5577529769224794"/><rect x="314.66666666666663" y="362.19905934565486" width="29.833333333333332" height="32.80094065434515" fill="#c2491e" opacity="0.7044900568009538"/><rect x="346" y="371.1174858466527" width="29.833333333333332" height="23.88251415334729" fill="#c2491e" opacity="0.6352953684311428"/><rect x="377.3333333333333" y="375.1277939624859" width="29.833333333333332" height="19.872206037514086" fill="#c2491e" opacity="0.6041809089117472"/><rect x="408.66666666666663" y="389.5298166118995" width="29.833333333333332" height="5.470183388100534" fill="#c2491e" opacity="0.49244107801112486"/><rect x="440" y="378.1647132974126" width="29.833333333333332" height="16.835286702587386" fill="#c2491e" opacity="0.5806186037269712"/><rect x="471.3333333333333" y="372.2893594214607" width="29.833333333333332" height="22.710640578539305" fill="#c2491e" opacity="0.6262032458679774"/><rect x="502.66666666666663" y="378.1082092006823" width="29.833333333333332" height="16.89179079931768" fill="#c2491e" opacity="0.581056997580913"/><rect x="534" y="380.36681709555455" width="29.833333333333332" height="14.633182904445457" fill="#c2491e" opacity="0.563533315637939"/><rect x="565.3333333333333" y="337" width="29.833333333333332" height="58" fill="#c2491e" opacity="0.9"/><rect x="596.6666666666666" y="387.43151853040996" width="29.833333333333332" height="7.568481469590035" fill="#c2491e" opacity="0.508720976919233"/><rect x="628" y="368.5287603438365" width="29.833333333333332" height="26.471239656163487" fill="#c2491e" opacity="0.6553803076771305"/><rect x="659.3333333333333" y="391.60603031809916" width="29.833333333333332" height="3.3939696819008622" fill="#c2491e" opacity="0.4763325233940584"/><rect x="690.6666666666666" y="380.37390920044334" width="29.833333333333332" height="14.626090799556643" fill="#c2491e" opacity="0.5634782906862154"/><rect x="722" y="376.6274106499433" width="29.833333333333332" height="18.37258935005676" fill="#c2491e" opacity="0.5925459518538887"/><rect x="753.3333333333333" y="389.8481558863555" width="29.833333333333332" height="5.15184411364447" fill="#c2491e" opacity="0.4899712043300002"/><rect x="784.6666666666666" y="391.6403062099788" width="29.833333333333332" height="3.359693790021195" fill="#c2491e" opacity="0.47606658975016447"/></g>
  </g>

  <!-- ── footer stats row ── -->
  <g transform="translate(60 420)">
    <text x="0" y="0"
          font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="11" font-weight="700"
          letter-spacing="2.5"
          fill="#5c5147">HIGHLIGHTS</text>

    <g transform="translate(0 16)">
      <text font-family="JetBrains Mono, ui-monospace, monospace" font-size="13" fill="#1a1611">
        <tspan x="0"  dy="14" fill="#5c5147">top language</tspan><tspan dx="10" font-weight="700">Swift</tspan><tspan dx="6" fill="#8a7c6d">(602 edits)</tspan>
        <tspan x="0"  dy="20" fill="#5c5147">hotspot file</tspan><tspan dx="14" font-weight="700">typer_native.swift</tspan><tspan dx="6" fill="#8a7c6d">(× 245)</tspan>
        <tspan x="0"  dy="20" fill="#5c5147">peak day</tspan><tspan dx="36" font-weight="700">Sun</tspan><tspan dx="6" fill="#8a7c6d">(8.6h)</tspan>
        <tspan x="0"  dy="20" fill="#5c5147">peak hour</tspan><tspan dx="30" font-weight="700">23:00</tspan>
      </text>
    </g>
  </g>

  <!-- ── credits ── -->
  <g transform="translate(820 516)" text-anchor="end">
    <text font-family="JetBrains Mono, ui-monospace, monospace" font-size="10"
          fill="#8a7c6d">37.1h all-time · claude-rpc.vercel.app</text>
  </g>
