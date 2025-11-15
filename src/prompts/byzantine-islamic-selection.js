// 비잔틴·이슬람 5개 스타일 AI 선택 프롬프트 (분위기 우선 전략)

const byzantineIslamicPrompt = `Analyze this photo and select the BEST Byzantine-Islamic art style based on OVERALL MOOD.

You must choose ONE of these FIVE styles:

Style 1: Byzantine Icon (비잔틴 성상화, 4-15th century)
- Best mood: Sacred, eternal, frontal, spiritual
- Best for: frontal portraits, face-centered, direct gaze, spiritual subjects
- Characteristics: gold background, large expressive eyes, flat frontal composition, divine presence
- Signature feeling: "Sacred window to heaven"

Style 2: Byzantine Mosaic (비잔틴 모자이크, 5-14th century)
- Best mood: Majestic, glorious, monumental, celestial
- Best for: groups, landscapes with architecture, grand scenes, ceremonial compositions
- Characteristics: golden glass tessera, light-reflecting shimmer, monumental scale, heavenly grandeur
- Signature feeling: "Glorious golden radiance of heaven"

Style 3: Persian Miniature (페르시아 세밀화, 13-17th century)
- Best mood: Epic, narrative, heroic, courtly
- Best for: people in action, dramatic scenes, battles, court life, storytelling moments
- Characteristics: intricate details, rich colors, decorative borders, narrative compositions, Persian epic style
- Signature feeling: "Epic tales told in exquisite detail"

Style 4: Mughal Miniature (무굴 세밀화, 16-18th century)
- Best mood: Natural, peaceful, paradise-like, observational
- Best for: flowers, birds, animals, gardens, nature close-ups, botanical subjects
- Characteristics: naturalistic observation, delicate details, symmetrical gardens, paradise imagery, life celebration
- Signature feeling: "Earthly paradise of natural beauty"

Style 5: Islamic Geometric (이슬람 기하학 문양, 8th century onward)
- Best mood: Abstract, mathematical, infinite, ordered
- Best for: patterns, symmetrical compositions, architectural subjects, decorative scenes
- Characteristics: geometric patterns, perfect symmetry, infinite tessellation, arabesque motifs, mathematical beauty
- Signature feeling: "Divine infinity in geometric order"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Sacred/spiritual/frontal gaze → Byzantine Icon
   - Majestic/grand/monumental → Byzantine Mosaic
   - Epic/narrative/dramatic → Persian Miniature
   - Natural/peaceful/botanical → Mughal Miniature
   - Abstract/patterned/geometric → Islamic Geometric

2. For COMPLEX photos:
   - Focus on the PRIMARY ATMOSPHERE
   - Example: Portrait with religious feeling → Byzantine Icon
   - Example: Group in palace → If narrative: Persian / If majestic: Byzantine Mosaic
   - Example: Flowers in garden → Mughal Miniature
   - Example: Building with patterns → Islamic Geometric

3. SUBJECT TYPE HINTS (but mood is priority):
   - Single frontal portrait → consider Byzantine Icon
   - Grand scene with multiple elements → consider Byzantine Mosaic
   - People in dramatic action → consider Persian Miniature
   - Natural subjects (flowers/birds/animals) → consider Mughal Miniature
   - Symmetrical/patterned composition → consider Islamic Geometric

4. CULTURAL DISTINCTION:
   - Byzantine (1-2): Christian religious, gold-focused, Western influence
   - Persian (3): Islamic Persian, narrative epic, court culture
   - Mughal (4): Islamic Indian, nature-focused, garden paradise
   - Islamic Geometric (5): Pan-Islamic, abstract, architectural

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Byzantine Icon" or "Byzantine Mosaic" or "Persian Miniature" or "Mughal Miniature" or "Islamic Geometric",
  "selected_style": "byzantine_icon" or "byzantine_mosaic" or "persian_miniature" or "mughal_miniature" or "islamic_geometric",
  "reason": "why this style's signature feeling matches the photo's mood",
  "prompt": "[Style name], [distinctive characteristics emphasizing the mood], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition"
}

Keep it concise and accurate.`;

export default byzantineIslamicPrompt;
