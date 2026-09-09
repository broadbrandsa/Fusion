# Project Overview

## What this is

The marketing website for **Digital Fusion**, a prepaid AI assistant for South
Africa. A person buys a bundle the way they buy airtime, asks anything in their
own language, and sees what every answer cost the moment it lands. Claude and
Gemini both answer inside the product, chosen per question, spending one
balance.

This repository is the public website only. It is not the product. It is a
standalone Next.js app with no monorepo dependencies and no links to folders
outside this directory.

## What the site has to do

Sell a bundle to someone who has already hit the wall of a free AI tier and
will not sign a monthly subscription. That is a narrower job than explaining
what AI is, and the copy should stay narrow with it.

The competitive wedge, from the brand book: alternatives sell dollar
subscriptions from roughly R149 to R324 a month, on cards that take
international recurring billing. Digital Fusion sells R20, R50 and R120
bundles, prepaid, in rand. That gap is the argument.

## Target audience

Three groups, in the brand book's own order.

People who have hit the walls of the free tiers and will not sign a monthly
subscription: lumpy income, a card they keep away from recurring charges, or
one bad cancellation too many.

People in the Claude gap. Claude Pro costs about R324 a month, in dollars, on a
card that takes international recurring billing. R20 to R120, prepaid, in rand,
sits in a space no competitor occupies.

People reached through brands they already trust and pay, where a bundle rides
on a balance they already hold. Current distribution partners are Clicks
Connect, Absa and Digital Mobile.

## Brand

Everything visual in this repo traces to the **Digital Fusion Brand Book v1.1,
01 September 2026**, the steel identity. The single rule that shapes the whole
interface: the money is the only colour. Chrome is greyscale, content is
greyscale, and the single chromatic element is the credit figure.

Graphite is the dark theme and the brand's home ground, so the site opens on
graphite. Paper is the light theme.

Type is Archivo for headlines at 600 to 800, IBM Plex Sans for running text at
400 to 600, and IBM Plex Mono for money and figures with tabular numerals
always. 13px is the floor and nothing is set under it.

Voice is South African English, rand written as R2 495,00, answer first then
detail, no hype words, and money always plain.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4, CSS-first config in `src/app/globals.css` |
| Components | shadcn (radix base, `radix-nova` style, neutral base colour) |
| Icons | Lucide |
| Fonts | Archivo, IBM Plex Sans, IBM Plex Mono via `next/font/google` |
| Package manager | pnpm 10 |
| Hosting | Vercel |

## Deployment environment

| Environment | Branch | Address |
| --- | --- | --- |
| Production | `main` | digitalfusion.co.za, mirrored by digitalfusionai.com |
| Preview | every other branch and PR | Vercel preview URLs |
| Local | working tree | http://localhost:3000 |

Repository: https://github.com/broadbrandsa/Fusion

Print the .co.za address on anything South African. The .com exists so the name
is never a dead end, and it mirrors the App Store listing name.

## Owner

Mike Elmira, mikee@dsg.co.za, on the broadbrandsa GitHub account.
