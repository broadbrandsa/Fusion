# Image credits

## App captures

`public/images/app/*` are screenshots of the Digital Fusion app, taken
09 September 2026 on an iPhone at 1206 x 2622. Ours, no attribution needed.

Missing, and worth capturing: an answer landing with its cost beside it, and a
big job quoting before it runs. Those are the two strongest proofs the site has
and both are currently recreated in markup rather than photographed. See
`src/components/blocks/app-screens.tsx`.

## Photography

All from Unsplash, supplied 09 September 2026. Resized to 2400px on the long
edge and re-encoded at JPEG 80, which took the set from 26MB to 5MB. Originals
were not kept, so re-download from Unsplash if a larger master is ever needed.

The Unsplash licence does not require attribution, but crediting the
photographer is good practice and costs nothing.

| File | Photographer | Unsplash ID |
| --- | --- | --- |
| `photos/project-renovation.jpg` | Annie Gray | WEWTGkPUVT0 |
| `photos/project-flatpack.jpg` | Oppo Find X5 Pro | gphz4u1ZKto |
| `photos/phone-at-dusk.jpg` | Rui Silvestre | uYdZFJsjJUs |
| `photos/kitchen-cooking.jpg` | Jason Briscoe | 7MAjXGUmaPw |
| `photos/friends-tea.jpg` | Toa Heftiba | l_ExpFwwOEg |
| `photos/phone-in-hand.jpg` | Jonas Leupe | o0A5BpHxziU |
| `photos/study-at-window.jpg` | Microsoft Copilot | Zcp8xN9DnjM |
| `photos/side-hustle-maker.jpg` | Toa Heftiba | qtkeIDsgrLg |
| `photos/cafe-phone.jpg` | Nel Ranoko | iaHFmpXVltw |

### Where each one is used

| File | Section | Why |
| --- | --- | --- |
| `project-renovation.jpg` | Problem | A renovation is the burst, stated in a picture |
| `project-flatpack.jpg` | Problem | The second burst. A project with a deadline and a manual |
| `phone-at-dusk.jpg` | Hero | An ordinary person on an ordinary phone, unglamorous. Tonally the closest fit to graphite in the whole set |
| `friends-tea.jpg` | Full strength, shared chats | Fills the card behind the type. Four people round one table is what a shared chat looks like |
| `kitchen-cooking.jpg` | Full strength, lists | Fills the card behind the type and the list, rather than sitting inside it |
| `phone-in-hand.jpg` | Problem, job hunting tab | Hands on a phone at a desk. Its pink and orange lighting is graded down like the rest |
| `study-at-window.jpg` | Problem, studying tab | Someone at a desk speaking into their phone. **Cropped and mirrored, see below** |
| `side-hustle-maker.jpg` | Problem, side hustle tab | A maker painting pottery at a home workbench. Real trade, which is what the brief asked for |
| `cafe-phone.jpg` | Bundles band | A young man laughing at his phone in a café. The first frame in the set that reads local. **Cropped, see below** |

## The Copilot photograph is cropped, deliberately

`study-at-window.jpg` comes from the Microsoft Copilot campaign shoot, and the
original frame has a laptop in it carrying the Windows 11 logo. Shipping a
competitor's AI marketing asset, with their product mark visible, on a site
whose whole argument is against subscription AI would be an unforced error.

So the frame is cropped to the left 51.5%, which puts the laptop and its
badge entirely out of shot. What is left is a person at a desk by a window
speaking into their phone, with a notebook open, which is a better picture of
studying than the original anyway.

It is also mirrored, so the subject sits on the left and is not buried under
the information card that floats over the bottom right. Mirroring moved the
window into that corner, which pushed its 99th-percentile luminance from
0.930 to 0.965 and made it the tightest pairing in the set at 4.80:1. That
still clears AA, so the glass stayed at 0.90, but it is now the photograph
that sets the limit rather than the renovation.

**If this image is ever re-cropped or replaced with the full frame, check for
that logo first.** The uncropped original is not in the repository.

## Scrims over photographic cards

Two cards in Full strength use a photograph as their background with the type
running the full height, so the scrim has to hold contrast everywhere rather
than just at the top. Each is set from that photograph's 99th-percentile
luminance rather than from a house default.

| Card | Photograph | p99 | Scrim, top to bottom | Body text |
| --- | --- | --- | --- | --- |
| Lists | `kitchen-cooking.jpg` | 0.889 | 0.93 to 0.90 | 5.02:1 |
| Ask together | `friends-tea.jpg` | 0.695 | 0.90 to 0.86 | 4.75:1 |

`BentoCard` takes the pair as a `scrim` prop. Measure any new photograph
before swapping it in: at 0.72, the kitchen frame leaves body text at 2.40:1.

## The cafe photograph is cropped too

`cafe-phone.jpg` is 3400 x 1642 taken from y 300 of the original 5184 x 3456,
then resized to 2400 wide. That window was chosen by measurement, not by eye.

The band it sits in runs type across the middle of the frame, and the original
has the subject dead centre with a sunlit window behind him. Twelve candidate
crops were scored on the p99.5 luminance of the rectangle the type actually
occupies. This one is the only crop that puts him at 70% across, clear of the
type, while keeping his face in shot, and it drops the scrim the band needs
from 0.76 to 0.52 because the type lands on the dark window rather than the
sunlit patches. Anything reframed here has to be re-measured.

## The gap worth naming

Almost none of this photography reads as South African. The kitchens, the
interiors and the people mostly read as North American or European.

`cafe-phone.jpg`, added 10 September 2026, is the first exception, and it is
why it carries the bundles band. Do not over-read that: the location is not
stated on the source and nobody here has confirmed it, so it is not a claim
the site makes anywhere in copy.

The rest of the set still works as placeholder only. A local shoot, or at
minimum locally shot stock, would do more for the built-for-here argument than
any copy change.

Brief for anything new: real hands and real phones in real South African
places. A taxi rank, a kitchen table, a spaza counter, a building site. Entry
level Android rather than the latest iPhone, since the product is built to run
on a 2017 handset. Calm and undecorated, per the brand book. No glossy stock
optimism.
