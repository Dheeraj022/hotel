# Brightspark Leisure Services --- Next.js + Supabase Website Specification

## 1. Project Overview

Build a modern, responsive travel-agency website for **Brightspark
Leisure Services Private Limited** based closely on the supplied
reference design.

The website should preserve the reference image's overall visual
language:

-   Premium travel-agency appearance
-   Navy blue + white primary palette
-   Orange CTA accents
-   Clean card-based layouts
-   Strong destination imagery
-   Rounded borders and subtle shadows
-   Compact, information-rich homepage
-   Clear enquiry/lead-generation CTAs
-   Mobile-first responsive behavior
-   Professional typography and generous whitespace
-   Trust indicators throughout the page

### Required technology stack

-   **Next.js** --- App Router, TypeScript
-   **Supabase** --- PostgreSQL database, optional Auth, Storage
-   **Tailwind CSS** --- all primary styling
-   **Lucide React** or another lightweight icon library
-   Responsive image handling with `next/image`
-   Form validation with Zod + React Hook Form
-   Server Actions or Route Handlers for enquiry submissions
-   SEO metadata using Next.js Metadata API

Do not build the page as one giant component. Use reusable sections and
data-driven components.

------------------------------------------------------------------------

# 2. Visual Direction

## Primary colors

Use CSS variables/Tailwind theme tokens so the design can be changed
centrally.

Suggested palette:

-   Primary Navy: `#062B67`
-   Deep Navy: `#031D47`
-   Secondary Blue: `#0B4DA2`
-   Accent Orange: `#F58220`
-   Accent Green: `#16844A`
-   White: `#FFFFFF`
-   Page Background: `#F7F9FC`
-   Card Border: `#DDE5F0`
-   Primary Text: `#10213D`
-   Secondary Text: `#59677D`

The exact shades may be refined during implementation to match the
reference.

## Typography

Use a modern sans-serif such as:

-   Inter
-   Manrope
-   Plus Jakarta Sans

Recommended hierarchy:

-   Hero heading: bold, large, responsive
-   Section headings: navy, uppercase or title case
-   Card headings: medium/bold
-   Supporting copy: muted dark gray
-   Buttons: semibold, compact, high contrast

------------------------------------------------------------------------

# 3. Overall Page Structure

The homepage should follow this order:

1.  GST/trust top strip
2.  Main navigation
3.  Hero section
4.  Trust/value proposition strip
5.  About Us section
6.  Our Services
7.  Popular Destinations
8.  Holiday Packages
9.  Hotels & Resorts
10. Cruise Experiences
11. Why Choose Brightspark
12. Client Testimonials
13. Travel enquiry form
14. Trusted Partners
15. Full-width CTA banner
16. Footer
17. Legal/disclaimer strip

------------------------------------------------------------------------

# 4. Header

## 4.1 Top Trust Bar

The reference contains a slim navy bar.

Left:

**GST REGISTERED TRAVEL AGENCY**

Right:

-   Call Us: `+91 98765 43210`
-   WhatsApp Us

Requirements:

-   Navy background
-   White text
-   Small shield/check icon
-   Phone icon
-   WhatsApp icon
-   Desktop: left/right alignment
-   Mobile: allow horizontal compression or stack into a compact row

The phone and WhatsApp buttons should be clickable.

Example:

-   `tel:+919876543210`
-   WhatsApp deep link with a prefilled enquiry message

------------------------------------------------------------------------

# 5. Main Navigation

## Logo area

Display:

**BRIGHTSPARK**\
LEISURE SERVICES PRIVATE LIMITED\
Your Trusted Travel Partner

Use the supplied company logo if available. If no separate logo asset
exists, create a clean placeholder/logo lockup rather than inventing a
complicated logo.

## Navigation links

-   Home
-   Holiday Packages
-   Services
-   Destinations
-   Hotels & Resorts
-   Cruises
-   About Us
-   Contact Us

Right-side CTA:

**ENQUIRE NOW**

### Responsive navigation

Desktop:

-   Horizontal navigation
-   CTA on right

Tablet/mobile:

-   Logo on left
-   Hamburger menu
-   Slide-down/mobile menu
-   Enquire button inside mobile menu

------------------------------------------------------------------------

# 6. Hero Section

The hero is the most visually important area.

## Background

Use a high-quality tropical travel destination image resembling the
supplied reference:

-   Turquoise ocean
-   Overwater villas
-   Palm trees
-   Couple/travellers walking toward the water

Use `next/image` with a responsive hero image.

Add a subtle overlay where required to keep text readable.

## Left content

Small/eyebrow content:

**TRAVEL MORE, WORRY LESS**

Main message:

**TRAVEL MORE,\
WORRY LESS**

Supporting text:

**Your trusted travel partner for unforgettable journeys across the
globe.**

Trust highlights:

-   Wide Selection of Packages
-   24/7 Travel Support
-   GST Registered Travel Agency

Primary button:

**ENQUIRE NOW**

Secondary button:

**WhatsApp Us**

## Right enquiry widget

Create a floating white card titled:

**PLAN YOUR NEXT TRIP**

Fields:

-   Where do you want to go?
-   Check-in
-   Check-out
-   Travellers

Travellers default:

**2 Adults**

CTA:

**SEND ENQUIRY**

### Behavior

Submitting this form should create a record in Supabase.

Do not expose Supabase service-role credentials in client code.

------------------------------------------------------------------------

# 7. Trust Strip

Immediately below the hero, create a navy horizontal strip containing
five trust indicators:

1.  GST Registered Travel Agency
2.  Transparent Pricing
3.  No Hidden Charges
4.  Secure & Reliable Assistance
5.  24/7 Customer Support
6.  100% Customer Satisfaction

On mobile, turn this into a horizontal scroll or a two-column grid.

------------------------------------------------------------------------

# 8. About Us

Create a two-column section.

## Left

Eyebrow:

**ABOUT US**

Heading:

**ABOUT BRIGHTSPARK LEISURE SERVICES**

Copy:

Brightspark Leisure Services Private Limited is a registered travel
agency and tour operator based in New Delhi. Provide customized holiday
packages, flight bookings, hotel reservations, visa assistance, travel
insurance and corporate travel solutions with enhanced service and
value.

CTA:

**KNOW MORE ABOUT US**

## Right information card

Display company information:

-   Incorporated: October 14, 2016
-   Registered Address: Khasra No. 382, Second Floor, 100 Foota Road,
    Village Ghitorni, New Delhi, 110030
-   Directors: Nazneen Hashmi and Saba Hashmi
-   Status: Active

Use small icons beside each item.

------------------------------------------------------------------------

# 9. Services Section

Section heading:

**OUR SERVICES**

Create a responsive card grid.

Services visible in the reference:

### Holiday Packages

Domestic & International tour options

### Flight Booking

Best deals on domestic & international air tickets

### Hotel Booking

Wide range of hotels & resorts worldwide

### Cruise Booking

Luxury cruises for memorable holidays

### Visa Assistance

Tourist & Business visa assistance

### Travel Insurance

Comprehensive travel insurance

### Corporate Travel

Tailored solutions for businesses

### MICE Services

Meetings, Incentives, Conferences & Exhibitions

### Document Attestation

Documents legalization & attestation

Each card should contain:

-   Icon
-   Service title
-   Short description
-   Hover state
-   Optional route/details link

Add:

**VIEW ALL SERVICES**

------------------------------------------------------------------------

# 10. Popular Destinations

Heading:

**POPULAR DESTINATIONS**

Create tabs:

-   Domestic Destinations
-   International Destinations

## Destination cards

Reference examples:

-   Goa --- Beaches & Nightlife
-   Manali --- Snow & Mountains
-   Kerala --- Backwaters & Nature
-   Rajasthan --- Royal Heritage
-   Dubai --- Luxury & Adventure
-   Bali --- Island of Gods
-   Singapore --- Beaches & Culture
-   Switzerland --- Alps & Nature

Each card:

-   Image
-   Destination name
-   Short category
-   Hover overlay
-   Clickable destination route

Example route:

`/destinations/goa`

Use data-driven rendering.

------------------------------------------------------------------------

# 11. Holiday Packages

Heading:

**HOLIDAY PACKAGES**

Create cards for:

-   Honeymoon Packages
-   Family Packages
-   Adventure Packages
-   Weekend Getaways
-   Group Packages
-   Pilgrimage Packages

Each card should contain:

-   Destination image
-   Package category
-   Short description
-   `VIEW PACKAGES` button

Routes can follow:

`/packages/honeymoon`

`/packages/family`

etc.

------------------------------------------------------------------------

# 12. Hotels & Resorts

Create a section with category tabs/icons:

-   Luxury Hotels
-   Budget Hotels
-   Resorts & Villas
-   Boutique Stays

Hotel cards shown in reference:

-   The Leela Palace --- Luxury Hotel
-   Radisson Blu --- City Center
-   Taj Exotica Resort --- Goa
-   The St. Regis --- Mumbai

The exact inventory should ultimately come from Supabase rather than
hardcoded JSX.

------------------------------------------------------------------------

# 13. Cruise Experiences

Create a parallel section beside Hotels & Resorts on desktop.

Categories:

-   Ocean Cruises
-   River Cruises
-   Family Cruises
-   Honeymoon Cruises

Example cards:

-   Royal Caribbean --- Ocean Cruise
-   Cordelia Cruises --- India Cruise
-   Norwegian Cruise --- Premium Cruise
-   Celebrity Cruises --- Premium Cruise

CTA:

**EXPLORE CRUISES**

------------------------------------------------------------------------

# 14. Why Choose Brightspark

Create six benefit items:

1.  Experienced Travel Consultants
2.  Personalized Travel Plans
3.  Competitive Pricing
4.  Safe & Reliable Assistance
5.  24/7 Customer Support
6.  One Stop Travel Solutions

Use simple line icons.

This section should be visually lightweight with lots of whitespace.

------------------------------------------------------------------------

# 15. Testimonials

Create a testimonial panel titled:

**WHAT OUR CLIENTS SAY**

Each testimonial includes:

-   Quote icon
-   Customer testimonial
-   Customer name
-   5-star rating

Reference-style examples:

> Excellent service and support throughout our trip. Highly recommended.

> Very professional and well organized travel experience.

> Best travel agency for customized packages and visa assistance.

Testimonials should be stored in Supabase and displayed dynamically.

------------------------------------------------------------------------

# 16. Main Travel Enquiry Form

Create a large two-column section.

## Left visual panel

Heading:

**READY TO PLAN YOUR NEXT JOURNEY?**

Copy:

**Fill out the form and our travel experts will get in touch with you.**

Add travel-themed luggage/accessory imagery.

## Right form

Fields:

-   Full Name\*
-   Mobile Number\*
-   Email Address\*
-   Destination\*
-   Travel Date
-   Number of Travellers\*
-   Type of Trip\*
-   Budget (Optional)
-   Your Requirements / Message

CTA:

**SUBMIT ENQUIRY**

### Validation

Required:

-   Full name
-   Mobile number
-   Destination
-   Number of travellers

Validate email when provided.

Show:

-   Loading state
-   Success state
-   Error state
-   Inline field errors

On success:

**Thank you! Our travel expert will contact you shortly.**

------------------------------------------------------------------------

# 17. Supabase Database

Use Supabase PostgreSQL.

## `enquiries`

Suggested schema:

``` sql
create table enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  mobile_number text not null,
  email text,
  destination text not null,
  travel_date date,
  travellers integer not null,
  trip_type text,
  budget numeric,
  message text,
  source text default 'website',
  status text default 'new',
  created_at timestamptz default now()
);
```

Recommended status values:

-   new
-   contacted
-   qualified
-   converted
-   closed

## `destinations`

``` sql
create table destinations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  region text,
  short_description text,
  image_url text,
  featured boolean default false,
  active boolean default true,
  created_at timestamptz default now()
);
```

## `packages`

``` sql
create table packages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  destination text,
  short_description text,
  description text,
  image_url text,
  price_from numeric,
  duration text,
  featured boolean default false,
  active boolean default true,
  created_at timestamptz default now()
);
```

## `services`

``` sql
create table services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text,
  description text,
  icon text,
  active boolean default true,
  created_at timestamptz default now()
);
```

## `testimonials`

``` sql
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  testimonial text not null,
  rating integer default 5,
  active boolean default true,
  created_at timestamptz default now()
);
```

## `partners`

``` sql
create table partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  website_url text,
  active boolean default true,
  sort_order integer default 0
);
```

------------------------------------------------------------------------

# 18. Supabase Storage

Create buckets for:

-   `destination-images`
-   `package-images`
-   `hotel-images`
-   `cruise-images`
-   `service-images`
-   `partner-logos`
-   `site-assets`

Use public read access for approved website assets.

For admin uploads, use authenticated policies.

------------------------------------------------------------------------

# 19. Trusted Partners

Create a horizontal partner-logo section.

Reference logos:

-   IndiGo
-   Air India
-   Vistara
-   Emirates
-   MakeMyTrip
-   Yatra
-   Goibibo

Do not use logos without appropriate permission/licensing in production.
Use supplied/licensed assets.

Desktop:

-   Single horizontal row

Mobile:

-   Horizontal scroll or wrapped grid

------------------------------------------------------------------------

# 20. CTA Banner

Full-width scenic mountain/travel background.

Heading:

**LET US PLAN YOUR PERFECT HOLIDAY**

Copy:

**Tell us your travel requirements and we will create the best
experience for you.**

Buttons:

-   GET A FREE TRAVEL QUOTE
-   ENQUIRE NOW

Use dark overlay for readability.

------------------------------------------------------------------------

# 21. Footer

Dark navy footer divided into four columns.

## Column 1 --- Brand

Brightspark logo and:

**Your trusted travel partner for holidays, flights, hotels, tours and
more.**

Social icons:

-   Facebook
-   Instagram
-   LinkedIn
-   WhatsApp

## Column 2 --- Quick Links

-   Home
-   About Us
-   Holiday Packages
-   Destinations
-   Hotels & Resorts
-   Cruises
-   Contact Us

## Column 3 --- Our Services

-   Holiday Packages
-   Flight Booking
-   Hotel Booking
-   Cruise Booking
-   Visa Assistance
-   Travel Insurance
-   Corporate Travel
-   MICE Services
-   Document Attestation

## Column 4 --- Contact Us

Address:

Khasra No. 382, Second Floor,\
100 Foota Road, Village Ghitorni,\
New Delhi, 110030

Phone:

+91 98765 43210

Email:

info@brightsparkleisure.com

Hours:

Mon - Sun: 9:00 AM - 8:00 PM

WhatsApp Us

------------------------------------------------------------------------

# 22. Legal Footer

Create a light footer strip containing:

-   Disclaimer
-   Privacy Policy
-   Terms & Conditions
-   Cancellation Policy
-   Refund Policy

Also display:

**GSTIN: 07AAGCB1234L1ZE**

Disclaimer copy should explain that prices, amenities and other details
may vary based on travel partners, availability and package conditions
and will be confirmed at enquiry/booking.

------------------------------------------------------------------------

# 23. Next.js Architecture

Use the App Router.

Recommended structure:

``` text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── destinations/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── packages/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── hotels/
│   └── page.tsx
├── cruises/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── terms/
│   └── page.tsx
└── api/
    └── enquiries/
        └── route.ts

components/
├── layout/
│   ├── TopBar.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MobileMenu.tsx
├── home/
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── DestinationsSection.tsx
│   ├── PackagesSection.tsx
│   ├── HotelsSection.tsx
│   ├── CruisesSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── EnquirySection.tsx
│   ├── Partners.tsx
│   └── CTASection.tsx
├── forms/
│   ├── HeroEnquiryForm.tsx
│   └── TravelEnquiryForm.tsx
├── cards/
│   ├── DestinationCard.tsx
│   ├── PackageCard.tsx
│   ├── HotelCard.tsx
│   ├── CruiseCard.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
└── ui/
    ├── Button.tsx
    ├── SectionHeading.tsx
    ├── Container.tsx
    └── Input.tsx

lib/
├── supabase/
│   ├── client.ts
│   ├── server.ts
│   └── admin.ts
├── validations/
│   └── enquiry.ts
└── utils.ts

types/
└── database.ts

public/
├── images/
├── icons/
└── logos/
```

------------------------------------------------------------------------

# 24. Component Rules

Every homepage section should be independently reusable.

Avoid:

``` tsx
export default function Home() {
  return (
    <div>
      {/* hundreds of lines */}
    </div>
  )
}
```

Prefer:

``` tsx
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <PackagesSection />
      <HotelsSection />
      <CruisesSection />
      <WhyChooseUs />
      <Testimonials />
      <EnquirySection />
      <Partners />
      <CTASection />
    </>
  )
}
```

------------------------------------------------------------------------

# 25. Data-Driven UI

Do not duplicate cards manually.

Example:

``` ts
const services = [
  {
    title: "Holiday Packages",
    description: "Domestic & international tour options",
    icon: "plane",
    href: "/services/holiday-packages",
  },
  // ...
];
```

Render with `.map()`.

For dynamic production data, replace static arrays with Supabase
queries.

------------------------------------------------------------------------

# 26. Supabase Client Setup

Use separate clients for:

### Browser

`lib/supabase/client.ts`

Use the public Supabase URL and anonymous key.

### Server

`lib/supabase/server.ts`

Use server-side Supabase client for server components and server
actions.

### Admin

`lib/supabase/admin.ts`

Only use the service-role key on the server.

Never expose:

``` text
SUPABASE_SERVICE_ROLE_KEY
```

to browser/client bundles.

Environment variables:

``` env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

------------------------------------------------------------------------

# 27. Enquiry Submission Flow

Recommended flow:

``` text
User
  ↓
Travel Enquiry Form
  ↓
React Hook Form
  ↓
Zod validation
  ↓
Next.js Server Action / Route Handler
  ↓
Supabase
  ↓
enquiries table
  ↓
Success response
  ↓
Thank-you UI
```

The API should:

1.  Validate input
2.  Sanitize input
3.  Insert into Supabase
4.  Return a safe response
5.  Never expose database credentials

------------------------------------------------------------------------

# 28. Security

Implement:

-   Supabase Row Level Security
-   Server-side validation
-   Rate limiting for enquiry submissions
-   Honeypot field or CAPTCHA if required
-   Input sanitization
-   No service-role key on client
-   Restricted storage upload policies
-   Secure HTTP headers
-   Protection against spam submissions

Example RLS concept:

-   Public users can insert enquiries
-   Public users cannot read enquiries
-   Admin/authenticated users can manage enquiries

------------------------------------------------------------------------

# 29. SEO

Every major route should have proper metadata.

Homepage:

**Title:**\
Brightspark Leisure Services \| Travel More, Worry Less

**Description:**\
Plan unforgettable holidays, flights, hotels, cruises, visa assistance
and customized travel experiences with Brightspark Leisure Services.

Implement:

-   Metadata API
-   Open Graph tags
-   Twitter/X card metadata
-   Canonical URLs
-   `sitemap.ts`
-   `robots.ts`
-   Schema.org structured data

Recommended structured data:

-   TravelAgency
-   Organization
-   WebSite
-   BreadcrumbList
-   TouristDestination where applicable

------------------------------------------------------------------------

# 30. Performance

Use:

-   `next/image`
-   Responsive image sizes
-   WebP/AVIF where appropriate
-   Lazy loading below the fold
-   Server Components by default
-   Client Components only when interaction is needed
-   Minimal JavaScript
-   Avoid huge background images when a responsive image can be used
-   Optimize font loading

Target:

-   Excellent Core Web Vitals
-   Fast mobile loading
-   Lighthouse performance score of 90+ where practical

------------------------------------------------------------------------

# 31. Responsive Design

## Desktop

Reference composition should be closely followed.

Use:

-   Max content width around 1200--1280px
-   Multi-column card grids
-   Side-by-side sections
-   Full-width banners

## Tablet

-   Reduce card columns
-   Maintain readable spacing
-   Collapse navigation if required

## Mobile

-   Single-column content
-   Hamburger menu
-   Horizontal destination/package carousels where useful
-   Full-width CTA buttons
-   Compact cards
-   Stacked enquiry form
-   No overflowing text
-   Touch-friendly controls

Breakpoints:

``` text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

------------------------------------------------------------------------

# 32. Tailwind Styling Guidelines

Prefer Tailwind utility classes.

Example:

``` tsx
<section className="bg-white py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

Create reusable class patterns for:

-   Container
-   Section spacing
-   Primary button
-   Secondary button
-   Card
-   Section heading
-   Form field

Do not create excessive custom CSS when Tailwind can handle the
requirement.

------------------------------------------------------------------------

# 33. Buttons

Primary:

-   Navy background or orange depending on section
-   White text
-   Rounded corners
-   Semibold
-   Subtle hover animation

Examples:

`ENQUIRE NOW`

`SEND ENQUIRY`

`GET A FREE TRAVEL QUOTE`

Secondary:

-   White/transparent background
-   Navy border
-   Navy text

WhatsApp CTA:

-   Green visual treatment
-   WhatsApp icon

Add accessible focus states.

------------------------------------------------------------------------

# 34. Animation

Keep animation subtle and premium.

Use:

-   Fade-in on section entry
-   Slight card hover lift
-   Image zoom on card hover
-   Button hover transitions
-   Mobile menu slide/fade

Avoid excessive animations.

Respect:

``` css
prefers-reduced-motion
```

------------------------------------------------------------------------

# 35. Accessibility

Implement:

-   Semantic HTML
-   Correct heading hierarchy
-   Alt text for all meaningful images
-   Keyboard-accessible navigation
-   Visible focus states
-   Accessible form labels
-   ARIA labels for icon-only buttons
-   Sufficient color contrast
-   Proper button/link semantics

------------------------------------------------------------------------

# 36. Image Requirements

The supplied reference relies heavily on travel imagery.

Create an image inventory such as:

``` text
hero-maldives.webp
destination-goa.webp
destination-manali.webp
destination-kerala.webp
destination-rajasthan.webp
destination-dubai.webp
destination-bali.webp
destination-singapore.webp
destination-switzerland.webp

package-honeymoon.webp
package-family.webp
package-adventure.webp
package-weekend.webp
package-group.webp
package-pilgrimage.webp

hotel-leela.webp
hotel-radisson.webp
hotel-taj-exotica.webp
hotel-st-regis.webp

cruise-royal-caribbean.webp
cruise-cordelia.webp
cruise-norwegian.webp
cruise-celebrity.webp

cta-mountain.webp
travel-enquiry.webp
```

Use properly licensed stock images or client-provided assets.

------------------------------------------------------------------------

# 37. Admin Dashboard --- Recommended Phase 2

Create an admin area for managing:

-   Enquiries
-   Destinations
-   Packages
-   Services
-   Hotels
-   Cruises
-   Testimonials
-   Partners

Suggested routes:

``` text
/admin
/admin/enquiries
/admin/destinations
/admin/packages
/admin/services
/admin/testimonials
/admin/partners
```

Use Supabase Auth for admin authentication.

Admin enquiry table should show:

-   Name
-   Phone
-   Email
-   Destination
-   Travel date
-   Travellers
-   Trip type
-   Status
-   Created date

Provide status update actions.

------------------------------------------------------------------------

# 38. Recommended Homepage Data Model

The homepage should not depend on hardcoded business content wherever
the content is likely to change.

Dynamic:

-   Destinations
-   Packages
-   Services
-   Hotels
-   Cruises
-   Testimonials
-   Partners

Static/config:

-   Company contact details
-   Navigation
-   Footer legal links
-   Trust indicators
-   Why Choose Us

------------------------------------------------------------------------

# 39. Suggested User Journey

Primary journey:

``` text
Landing Page
    ↓
Hero / Destination Interest
    ↓
Enquiry Form
    ↓
Supabase Lead
    ↓
Travel Team Contact
```

Secondary journey:

``` text
Landing Page
    ↓
Destination
    ↓
Package
    ↓
Enquire
```

Third journey:

``` text
Landing Page
    ↓
Service
    ↓
Service Details
    ↓
Enquire
```

The website should continuously lead users toward enquiry/contact
without feeling overly sales-heavy.

------------------------------------------------------------------------

# 40. Acceptance Criteria

The implementation is complete when:

-   Homepage visually follows the supplied reference
-   Desktop layout matches the section order and overall proportions
-   Mobile layout is fully responsive
-   Navigation works
-   Hero enquiry works
-   Main enquiry form works
-   Enquiries are stored in Supabase
-   Form validation works
-   Destination cards work
-   Package cards work
-   Service pages work
-   Hotels/cruises sections work
-   Testimonials load from Supabase
-   Partner logos render correctly
-   Footer links work
-   SEO metadata is implemented
-   Images are optimized
-   No secrets are exposed to the client
-   Supabase RLS is enabled
-   Accessibility basics are covered
-   Loading/error/empty states are handled
-   Code is componentized and maintainable

------------------------------------------------------------------------

# 41. Development Phases

## Phase 1 --- Foundation

-   Initialize Next.js + TypeScript
-   Configure Tailwind CSS
-   Configure Supabase
-   Create design tokens
-   Build global layout
-   Build Header/Footer

## Phase 2 --- Homepage

-   Hero
-   Trust strip
-   About
-   Services
-   Destinations
-   Packages
-   Hotels
-   Cruises
-   Why Choose Us
-   Testimonials
-   Enquiry
-   Partners
-   CTA

## Phase 3 --- Dynamic Content

-   Supabase tables
-   Supabase queries
-   Dynamic destinations
-   Dynamic packages
-   Dynamic services
-   Testimonials
-   Partners

## Phase 4 --- Lead Management

-   Enquiry API/server action
-   Validation
-   Supabase insertion
-   RLS
-   Spam protection
-   Success/error states

## Phase 5 --- Inner Pages

-   About
-   Services
-   Service details
-   Destinations
-   Destination details
-   Packages
-   Package details
-   Hotels
-   Cruises
-   Contact
-   Legal pages

## Phase 6 --- SEO & Performance

-   Metadata
-   Sitemap
-   Robots
-   Structured data
-   Image optimization
-   Core Web Vitals

## Phase 7 --- QA

Test:

-   Chrome
-   Safari
-   Firefox
-   Desktop
-   Tablet
-   Mobile
-   Form validation
-   Supabase failures
-   Empty states
-   Slow network
-   Accessibility
-   SEO

------------------------------------------------------------------------

# 42. Final Design Goal

The final website should feel like a **premium, trustworthy Indian
travel agency**, not a generic template.

The supplied screenshot should be treated as the primary visual
reference for:

-   Section hierarchy
-   Content density
-   Card treatment
-   Navy/white/orange palette
-   CTA placement
-   Travel imagery
-   Trust messaging
-   Form placement
-   Footer structure

However, the implementation should improve the reference where
appropriate:

-   Better responsive behavior
-   Cleaner typography
-   Faster loading
-   Better accessibility
-   Real Supabase-backed content
-   Better form validation
-   Reusable components
-   SEO-friendly pages
-   Maintainable Next.js architecture

The result should be production-ready, scalable and easy for the travel
agency to update as destinations, packages, services and enquiries
change.
