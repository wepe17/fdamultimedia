/* Tweaks panel for FDA Multimedia site */
const { useEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3B82F6",
  "heroMode": "photo",
  "cursorMode": "on",
  "waFloat": "on",
  "cornerStyle": "rounded",
  "animIntensity": "high",
  "sectionRhythm": "alternating"
}/*EDITMODE-END*/;

function FDATweaks() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  // Apply live styles based on tweaks
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--accent', t.accent);
    // derive accent variants (simple mix)
    r.setProperty('--accent-hi', lighten(t.accent, 0.18));
    r.setProperty('--accent-lo', darken(t.accent, 0.22));

    // corner style
    const map = { rounded: [18,28,40], soft: [12,18,26], sharp: [4,8,12], pill: [24,36,48] };
    const [sm, md, lg] = map[t.cornerStyle] || map.rounded;
    r.setProperty('--radius-sm', sm+'px');
    r.setProperty('--radius', md+'px');
    r.setProperty('--radius-lg', lg+'px');

    // cursor
    document.body.style.cursor = t.cursorMode === 'on' ? 'none' : 'auto';
    const mf = document.getElementById('mouseFollower');
    const md_ = document.getElementById('mouseDot');
    if (mf) mf.style.display = t.cursorMode === 'on' ? '' : 'none';
    if (md_) md_.style.display = t.cursorMode === 'on' ? '' : 'none';

    // WA float
    const wa = document.querySelector('.wa-float');
    if (wa) wa.style.display = t.waFloat === 'on' ? '' : 'none';

    // hero mode
    const heroImg = document.getElementById('heroImg');
    const heroMedia = document.querySelector('.hero-media');
    if (heroImg && heroMedia) {
      if (t.heroMode === 'photo') {
        heroImg.style.display = '';
        heroMedia.style.background = '';
      } else if (t.heroMode === 'gradient') {
        heroImg.style.display = 'none';
        heroMedia.style.background = 'radial-gradient(ellipse 60% 80% at 30% 40%, rgba(59,130,246,.35), transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(59,130,246,.15), transparent 60%), #0A1420';
      } else if (t.heroMode === 'darker') {
        heroImg.style.display = '';
        heroImg.style.filter = 'saturate(0.7) contrast(1.2) brightness(0.55)';
      }
      if (t.heroMode !== 'darker') heroImg.style.filter = '';
    }

    // animation intensity
    const dur = t.animIntensity === 'high' ? 1 : t.animIntensity === 'medium' ? 0.7 : 0.4;
    r.setProperty('--anim-scale', dur);

    // section rhythm
    if (t.sectionRhythm === 'lighter') {
      document.querySelectorAll('.equip, .process').forEach(s => s.style.background = 'var(--slate-100)');
      document.querySelectorAll('.equip *, .process *').forEach(s => { if (s.classList.contains('section-title')) s.style.color = 'var(--ink)'; });
    }
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand accent">
        <TweakColor
          label="Primary color"
          value={t.accent}
          onChange={v => setTweak('accent', v)}
          options={['#3B82F6', '#2563EB', '#0EA5E9', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899']}
        />
      </TweakSection>

      <TweakSection title="Hero style">
        <TweakSelect
          label="Background"
          value={t.heroMode}
          onChange={v => setTweak('heroMode', v)}
          options={[
            { value: 'photo',    label: 'Cinematic photo (default)' },
            { value: 'darker',   label: 'Photo · very dark grade' },
            { value: 'gradient', label: 'Pure gradient (no photo)' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Visual system">
        <TweakRadio
          label="Corner style"
          value={t.cornerStyle}
          onChange={v => setTweak('cornerStyle', v)}
          options={[
            { value: 'sharp',   label: 'Sharp' },
            { value: 'soft',    label: 'Soft' },
            { value: 'rounded', label: 'Rounded' },
          ]}
        />
        <TweakRadio
          label="Section rhythm"
          value={t.sectionRhythm}
          onChange={v => setTweak('sectionRhythm', v)}
          options={[
            { value: 'alternating', label: 'Dark/Light' },
            { value: 'lighter',     label: 'Mostly light' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Interactions">
        <TweakToggle
          label="Custom cursor"
          value={t.cursorMode === 'on'}
          onChange={v => setTweak('cursorMode', v ? 'on' : 'off')}
        />
        <TweakToggle
          label="Floating WhatsApp button"
          value={t.waFloat === 'on'}
          onChange={v => setTweak('waFloat', v ? 'on' : 'off')}
        />
        <TweakRadio
          label="Animation intensity"
          value={t.animIntensity}
          onChange={v => setTweak('animIntensity', v)}
          options={[
            { value: 'low',    label: 'Subtle' },
            { value: 'medium', label: 'Medium' },
            { value: 'high',   label: 'High' },
          ]}
        />
      </TweakSection>

      <TweakSuggestionBar suggestions={[
        "Try a warmer accent — swap #3B82F6 for a bronze or gold to feel more luxury-hotel.",
        "Make the hero even more DJI: switch heroMode to 'darker' and cursorMode off for calmer feel.",
        "Add a testimonial video slot below the reviews slider.",
        "Rework Services grid as a horizontal scroll snap carousel."
      ]} />
    </TweaksPanel>
  );
}

/* ── color helpers ── */
function hexToRgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');const n=parseInt(h,16);return [n>>16&255,n>>8&255,n&255];}
function rgbToHex(r,g,b){return '#'+[r,g,b].map(x=>Math.max(0,Math.min(255,Math.round(x))).toString(16).padStart(2,'0')).join('');}
function lighten(hex,amt){const [r,g,b]=hexToRgb(hex);return rgbToHex(r+(255-r)*amt,g+(255-g)*amt,b+(255-b)*amt);}
function darken(hex,amt){const [r,g,b]=hexToRgb(hex);return rgbToHex(r*(1-amt),g*(1-amt),b*(1-amt));}

ReactDOM.createRoot(document.getElementById('tweaksRoot')).render(<FDATweaks/>);
