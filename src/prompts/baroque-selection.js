// 바로크 4명 AI 선택 프롬프트 (분위기 우선 전략)

const baroquePrompt = `Analyze this photo and select the BEST Baroque master based on OVERALL MOOD.

You must choose ONE of these FOUR masters:

Artist 1: Caravaggio (1571-1610)
- Best mood: Dramatic, intense, dark, theatrical
- Best for: dark backgrounds with spotlight, single light source (candles/lamps/streetlights), half-shadowed faces, night scenes, strong contrasts, dramatic gestures
- Perfect conditions: Almost complete darkness with one beam of light, theatrical lighting, concert/stage lighting, tunnel entrance lighting
- Characteristics: tenebrism (extreme chiaroscuro), dramatic spotlight effect piercing through darkness, intense realism, theatrical staging
- Signature feeling: "Dramatic light piercing through darkness"
- Note: Requires strong contrast - NOT suitable for bright daylight or soft lighting

Artist 2: Rembrandt van Rijn (1606-1669)
- Best mood: Warm, intimate, emotional, introspective
- Best for: portraits, emotional expressions, gentle lighting, personal moments
- Characteristics: warm golden light, soft shadows, psychological depth, humanistic warmth, inner soul revelation
- Signature feeling: "Warm light revealing the soul"

Artist 3: Peter Paul Rubens (1577-1640)
- Best mood: Dynamic, energetic, abundant, celebratory
- Best for: movement, groups, full figures, active poses, rich compositions
- Characteristics: voluptuous forms, swirling dynamic compositions, rich vibrant colors, abundant life energy
- Signature feeling: "Overflowing vitality and movement"

Artist 4: Diego Velázquez (1599-1660)
- Best mood: Elegant, dignified, refined, realistic
- Best for: formal portraits, elegant poses, dignified subjects, courtly atmosphere
- Characteristics: restrained realism, elegant sophistication, atmospheric space, dignified composure
- Signature feeling: "Elegant truth captured with grace"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Dramatic/intense/dark contrast → Caravaggio
   - Warm/intimate/emotional → Rembrandt
   - Dynamic/energetic/abundant → Rubens
   - Elegant/dignified/refined → Velázquez

2. For COMPLEX photos:
   - Focus on the PRIMARY ATMOSPHERE
   - Example: Dark background + person → If dramatic: Caravaggio / If warm: Rembrandt
   - Example: Group in motion → Rubens
   - Example: Formal elegant portrait → Velázquez

3. LIGHTING HINTS:
   - Harsh dramatic contrast → Caravaggio
   - Soft warm glow → Rembrandt
   - Bright vibrant light → Rubens
   - Natural balanced light → Velázquez

4. SUBJECT TYPE HINTS (but mood is priority):
   - Intense dramatic moment → Caravaggio
   - Emotional portrait → Rembrandt
   - Active groups or movement → Rubens
   - Formal elegant pose → Velázquez

5. LANDSCAPE PHOTOS (special case):
   Baroque masters specialized in portraits, not pure landscapes.
   If photo is pure landscape (no people), select based on ATMOSPHERE:
   - Dramatic mountains/storms → Caravaggio (dramatic mood)
   - Peaceful warm scenes → Rembrandt (warm light)
   - Lush vibrant nature → Rubens (abundant vitality)
   - Elegant gardens → Velázquez (refined dignity)
   Note in your analysis that this is a landscape interpretation.

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and lighting",
  "selected_artist": "Caravaggio" or "Rembrandt" or "Rubens" or "Velázquez",
  "reason": "why this master's signature feeling matches the photo's mood",
  "prompt": "Baroque painting by [artist name] in [artist's style], portraying the SAME PERSON from the photo while capturing their distinctive facial features, with [artist's distinctive techniques]"
}

Keep it concise and accurate.`;

export default baroquePrompt;
