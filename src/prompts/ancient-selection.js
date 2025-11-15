// 고대 그리스-로마 4개 스타일 AI 선택 프롬프트 (분위기 우선 전략)

const ancientPrompt = `Analyze this photo and select the BEST Ancient Greco-Roman art style based on OVERALL MOOD.

You must choose ONE of these FOUR styles:

Style 1: Greek Vase Painting (그리스 항아리화, BC 800-300)
- Best mood: Mythological, heroic, classical, profile-oriented
- Best for: profile views, animals, mythological scenes, silhouettes, side-facing subjects
- Characteristics: black or red figure style, clear outlines, flat two-dimensional, narrative scenes
- Signature feeling: "Heroic mythology captured in timeless profile"

Style 2: Pompeii Fresco (폼페이 프레스코, BC 100 - AD 79)
- Best mood: Lively, intimate, everyday, dramatic
- Best for: portraits, people in action, indoor scenes, dramatic moments, facial expressions
- Characteristics: soft naturalistic colors (reds/ochres/greens), three-dimensional depth, lively expressions
- Signature feeling: "Vivid everyday life frozen in time"

Style 3: Pompeii Garden Painting (폼페이 정원화, BC 1st century)
- Best mood: Peaceful, natural, idyllic, pastoral
- Best for: landscapes, nature, plants, flowers, birds, gardens, outdoor scenes
- Characteristics: lush greenery, birds and fruits, panoramic nature, peaceful garden atmosphere
- Signature feeling: "Serene nature and garden paradise"

Style 4: Roman Mosaic (로마 모자이크, BC 200 - AD 400)
- Best mood: Formal, monumental, decorative, eternal
- Best for: group photos, formal compositions, ceremonial scenes, decorative patterns
- Characteristics: small tile (tessera) texture, decorative borders, formal balanced composition, permanent grandeur
- Signature feeling: "Eternal grandeur in stone"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Mythological/heroic/profile → Greek Vase
   - Lively/dramatic/intimate → Pompeii Fresco
   - Peaceful/natural/pastoral → Pompeii Garden
   - Formal/monumental/ceremonial → Roman Mosaic

2. For COMPLEX photos:
   - Focus on the OVERALL ATMOSPHERE
   - Example: Person in garden → If peaceful nature dominates: Pompeii Garden
   - Example: Group in formal pose → If ceremonial feeling dominates: Roman Mosaic
   - Example: Dramatic facial expression → If lively emotion dominates: Pompeii Fresco

3. SUBJECT TYPE HINTS (but mood is priority):
   - Side profile or animal → consider Greek Vase
   - Face-forward portrait → consider Pompeii Fresco or Roman Mosaic
   - Nature/plants dominant → consider Pompeii Garden
   - Multiple people formally arranged → consider Roman Mosaic

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Greek Vase Painting" or "Pompeii Fresco" or "Pompeii Garden Painting" or "Roman Mosaic",
  "selected_style": "greek_vase" or "pompeii_fresco" or "pompeii_garden" or "roman_mosaic",
  "reason": "why this style's signature feeling matches the photo's mood",
  "prompt": "Ancient [style name], [distinctive characteristics emphasizing the mood], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition"
}

Keep it concise and accurate.`;

export default ancientPrompt;
