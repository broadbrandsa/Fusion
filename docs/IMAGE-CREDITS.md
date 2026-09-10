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
| `photos/cooking-together.jpg` | Jimmy Dean | my1mDMraGf0 |
| `photos/phone-in-hand.jpg` | Jonas Leupe | o0A5BpHxziU |

### Where each one is used

| File | Section | Why |
| --- | --- | --- |
| `project-renovation.jpg` | Problem | A renovation is the burst, stated in a picture |
| `project-flatpack.jpg` | Problem | The second burst. A project with a deadline and a manual |
| `phone-at-dusk.jpg` | Built for here | An ordinary person on an ordinary phone, unglamorous. Tonally the closest fit to graphite in the whole set |
| `cooking-together.jpg` | Full strength, shared chats | Two people working something out together, which is what a shared chat is |
| `kitchen-cooking.jpg` | Full strength, lists | The list has a purpose beyond the list |
| `phone-in-hand.jpg` | Not used yet | Held back. Its lighting is a hot pink and orange wash that fights graphite, steel and lime all at once. Usable if it is graded down hard, and better replaced |

## Held back

`docs/images-not-used/microsoft-copilot-Zcp8xN9DnjM-unsplash.jpg` is deliberately
outside `public/`, so it cannot deploy.

It is a Microsoft Copilot campaign photograph, and the laptop in frame carries
the Windows 11 logo. Putting a competitor's AI marketing asset, with their
product visible in it, on a site whose whole argument is against subscription
AI would be an unforced error. It is kept rather than deleted in case it is
wanted for something internal.

## Two photographs still needed

The problem section's burst tabs went from three to five on 10 September 2026,
and the two new ones have no photograph. Each renders a dashed "Photo needed"
placeholder carrying its brief, so neither can ship unnoticed. 16:9, and they
sit under a glass information card at the bottom right, so keep that corner
uncluttered.

| Tab | Brief |
| --- | --- |
| Studying | A student working through notes at a kitchen table or a library desk, phone beside the books. Mid-term, not a graduation photo |
| A side hustle | Someone running a small business from home or a market stall, doing the admin on a phone. Real trade, not a stock-photo boardroom |

Both were chosen because studying and small-business admin are the two
commonest things people bring to an assistant after writing, and both are
properly bursty: a term ends, a business gets off the ground.

**One thing to watch when these arrive.** The glass card over the bottom right
runs at 0.90 opacity, which was set against the brightest photograph in the
current set. A brighter one would need that checked again. The maths is in
`docs/DESIGN-AUDIT.md`.

## The gap worth naming

None of this photography was shot in South Africa. The kitchens, the interiors
and the people all read as North American or European.

That matters most in one specific place. The built-for-here section claims the
product was made for South Africa rather than adapted for it, and illustrating
that claim with an American kitchen quietly contradicts it. The current set
works as placeholder, and a local shoot, or at minimum locally shot stock,
would do more for that section than any copy change.

Brief for anything new: real hands and real phones in real South African
places. A taxi rank, a kitchen table, a spaza counter, a building site. Entry
level Android rather than the latest iPhone, since the product is built to run
on a 2017 handset. Calm and undecorated, per the brand book. No glossy stock
optimism.
