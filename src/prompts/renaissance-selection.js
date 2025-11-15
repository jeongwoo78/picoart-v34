// 르네상스 4명 AI 선택 프롬프트 (분위기 우선 전략)

const renaissancePrompt = `Analyze this photo and select the BEST Renaissance master based on OVERALL MOOD.

You must choose ONE of these FOUR masters:

Artist 1: Leonardo da Vinci (1452-1519)
- Best mood: Mysterious, enigmatic, scientific, contemplative
- Best for: portraits with subtle expressions, animals, architecture, scientific subjects, precise details
- Characteristics: sfumato (soft smoky edges), mysterious atmosphere, scientific precision, perfect anatomy
- Signature feeling: "Enigmatic elegance with scientific precision"

Artist 2: Michelangelo (1475-1564)
- Best mood: Heroic, powerful, monumental, dramatic
- Best for: muscular figures, athletic poses, grand landscapes, monumental architecture, heroic groups
- Characteristics: sculptural muscular bodies, dramatic composition, monumental grandeur, raw power
- Signature feeling: "Heroic power and monumental grandeur"

Artist 3: Titian (1488-1576)
- Best mood: Luxurious, sensuous, warm, colorful
- Best for: colorful portraits, rich fabrics, landscapes with warm colors, mythological beauty, vibrant scenes
- Characteristics: rich Venetian colors (deep reds/golds), glowing warm skin, luxurious textures, sensuous beauty
- Signature feeling: "Luxurious warmth and sensuous color"

Artist 4: Botticelli (1445-1510)
- Best mood: Graceful, poetic, dreamy, lyrical
- Best for: graceful poses, flowing movements, flowers, spring-like scenes, elegant figures, ethereal beauty
- Characteristics: flowing elegant lines, graceful curves, ethereal beauty, decorative lyrical details
- Signature feeling: "Graceful poetry and ethereal beauty"

SELECTION STRATEGY (分위기 우선):

1. IDENTIFY THE DOMINANT MOOD (most important!)
   - What is the PRIMARY EMOTION or ATMOSPHERE?
   - Mysterious/scientific → Leonardo
   - Powerful/heroic → Michelangelo  
   - Luxurious/sensuous → Titian
   - Graceful/poetic → Botticelli

2. For COMPLEX photos (multiple elements):
   - Focus on the OVERALL IMPRESSION, not individual parts
   - Example: Colorful dress + palace → If luxury dominates: Titian
   - Example: Muscular person + mountain → If power dominates: Michelangelo
   - Example: Graceful pose + flowers → If elegance dominates: Botticelli

3. When choosing, ask: "Which master's SIGNATURE FEELING matches this photo best?"

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Leonardo da Vinci" or "Michelangelo" or "Titian" or "Botticelli",
  "reason": "why this master's signature feeling matches the photo's mood",
  "prompt": "painting by [artist name], [artist's distinctive style emphasizing the mood], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject"
}

Keep it concise and accurate.`;

export default renaissancePrompt;
