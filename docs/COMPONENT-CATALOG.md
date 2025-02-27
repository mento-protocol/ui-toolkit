# Mento Protocol UI Toolkit - Component Catalog

This document provides a detailed inventory of all components available in the UI Toolkit, including their current status, dependencies, and usage notes.

## Core Components

| Component | Status | Dependencies | Notes |
|-----------|--------|--------------|-------|
| **Accordion** | ✅ Stable | @radix-ui/react-accordion | Collapsible content panels |
| **Avatar** | ✅ Stable | @radix-ui/react-avatar | User representation with fallback |
| **Badge** | ✅ Stable | class-variance-authority | Status indicators and tags |
| **BlockExplorerLink** | ✅ Stable | next/link | Links to blockchain explorers |
| **Breadcrumbs** | ✅ Stable | N/A | Navigation path indicators |
| **Button** | ✅ Stable | class-variance-authority | Primary interaction element with variants |
| **Calendar** | ⚠️ Disabled | react-day-picker | Date selection component (currently disabled) |
| **Card** | ✅ Stable | N/A | Container with consistent styling |
| **ConnectButton** | ✅ Stable | Web3 dependencies | Wallet connection button |
| **CurrencyInput** | ✅ Stable | N/A | Specialized input for currency values |
| **DatePicker** | ⚠️ Disabled | react-day-picker, Calendar | Date selection with popup (currently disabled) |
| **DisconnectButton** | ✅ Stable | Web3 dependencies | Wallet disconnect button |
| **Divider** | ✅ Stable | N/A | Visual separator |
| **DropdownButton** | ✅ Stable | N/A | Button with dropdown functionality |
| **Expandable** | ✅ Stable | N/A | Expandable/collapsible content |
| **Footer** | ⚠️ Disabled | N/A | Page footer component (issue with createContext) |
| **Header** | ⚠️ Disabled | N/A | Page header component (disabled in exports) |
| **Input** | ✅ Stable | N/A | Text input field |
| **Label** | ✅ Stable | @radix-ui/react-label | Form input labels |
| **LearnMore** | ✅ Stable | N/A | Information link component |
| **Loader** | ✅ Stable | N/A | Loading indicator |
| **LoadingCircle** | ✅ Stable | N/A | Circular loading indicator |
| **MobileAccordionMenu** | ✅ Stable | N/A | Mobile-specific accordion menu |
| **Modal** | ✅ Stable | @radix-ui/react-dialog | Dialog/modal window |
| **Progress** | ✅ Stable | N/A | Progress indicator |
| **ProgressBar** | ✅ Stable | N/A | Horizontal progress bar |
| **ScrollArea** | ✅ Stable | @radix-ui/react-scroll-area | Customized scrollable area |
| **SeeAll** | ✅ Stable | N/A | Link to view all items |
| **Sheet** | ✅ Stable | @radix-ui/react-dialog | Slide-in panel component |
| **Slider** | ✅ Stable | @radix-ui/react-slider | Range selection component |
| **Spacer** | ✅ Stable | N/A | Layout spacing utility |
| **Status** | ✅ Stable | N/A | Status indicator |
| **StepCounter** | ✅ Stable | N/A | Multi-step process indicator |
| **TableDivider** | ✅ Stable | N/A | Table row separator |
| **Tabs** | ✅ Stable | @radix-ui/react-tabs | Tabbed interface |
| **Textarea** | ✅ Stable | N/A | Multi-line text input |
| **TextWithCopy** | ✅ Stable | react-copy-to-clipboard | Text with copy-to-clipboard functionality |
| **ThemeSwitch** | ✅ Stable | next-themes | Dark/light mode toggle |
| **Toaster** | ✅ Stable | sonner | Toast notification system |
| **Tooltip** | ✅ Stable | @radix-ui/react-tooltip | Informational hover tooltip |
| **TxModal** | ✅ Stable | Web3 dependencies | Transaction status modal |
| **ValueLoaderSkeleton** | ✅ Stable | N/A | Loading skeleton for data |

## Web3 Components

| Component | Status | Dependencies | Notes |
|-----------|--------|--------------|-------|
| **WalletConnect** | ✅ Stable | @rainbow-me/rainbowkit, wagmi | Wallet connection management |
| **NetworkSelector** | ✅ Stable | wagmi | Network/chain selection dropdown |
| **AddressDisplay** | ✅ Stable | N/A | Formatted blockchain address display |
| **TransactionStatus** | ✅ Stable | viem | Transaction status indicator |

## Component Groups

### Form Components
- Input
- Textarea
- CurrencyInput
- Label
- Checkbox (via Radix UI)
- RadioGroup (via Radix UI)
- Select (via Radix UI)
- Slider

### Navigation Components
- Breadcrumbs
- SeeAll
- LearnMore
- MobileAccordionMenu
- Tabs

### Layout Components
- Card
- Divider
- Spacer
- ScrollArea
- TableDivider

### Feedback Components
- Loader
- LoadingCircle
- Progress
- ProgressBar
- Status
- StepCounter
- Toaster
- ValueLoaderSkeleton

### Interactive Components
- Accordion
- Button
- DropdownButton
- Expandable
- Modal
- Sheet
- Tooltip

## Known Component Issues

### Calendar & DatePicker
- **Issue**: The Calendar and DatePicker components currently have issues with the react-day-picker dependency.
- **Impact**: These components are commented out in the exports and unavailable for use.
- **Workaround**: Consumers needing date picking functionality should implement their own solution.
- **Fix Priority**: High - These are commonly needed components.
- **Proposed Solution**: 
  1. Upgrade react-day-picker to latest version
  2. Add custom wrappers to handle SSR compatibility
  3. Apply proper styling that works with the design system

### Footer & Header
- **Issue**: The Footer component has issues with createContext being undefined when importing.
- **Impact**: These components are commented out in the exports and unavailable for use.
- **Workaround**: Consumers should implement their own header/footer components.
- **Fix Priority**: Medium - These are typically customized by consuming applications anyway.
- **Proposed Solution**:
  1. Refactor to avoid context issues
  2. Ensure proper import order
  3. Add dynamic imports with next/dynamic if needed

### Markdown Editor
- **Issue**: The Markdown Editor component has SSR compatibility issues and styling conflicts.
- **Impact**: This component is mentioned as "under development" in the README.
- **Workaround**: No built-in markdown editing capabilities.
- **Fix Priority**: Low - Specialized functionality.
- **Proposed Solution**:
  1. Implement with client-side only loading
  2. Resolve style conflicts with isolated styling
  3. Update to use latest @mdxeditor/editor version

## Component Usage Examples

### Basic Button Usage
```tsx
import { Button } from '@mento-protocol/ui-toolkit';

<Button theme="primary">Click Me</Button>
<Button theme="secondary" fullwidth>Full Width Button</Button>
<Button theme="danger" disabled>Disabled Button</Button>
<Button href="/some-path">Link Button</Button>
```

### Card with Content
```tsx
import { Card } from '@mento-protocol/ui-toolkit';

<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Content>
    <p>Card content goes here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Form Example
```tsx
import { Input, Label, Button } from '@mento-protocol/ui-toolkit';

<form>
  <div className="mb-4">
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Enter your name" />
  </div>
  <Button type="submit">Submit</Button>
</form>
```

### Web3 Components
```tsx
import { WalletConnect, NetworkSelector } from '@mento-protocol/ui-toolkit';

<div>
  <WalletConnect />
  <NetworkSelector />
</div>
```

## Component Dependencies

The UI Toolkit has the following component dependencies:

- **Radix UI**: Provides accessible primitives for many components
- **HeadlessUI**: Used for select components like Popover
- **TailwindCSS**: All styling is built on Tailwind
- **Framer Motion**: Optional dependency for animations
- **next-themes**: Optional dependency for theme switching
- **react-day-picker**: For Calendar and DatePicker (currently problematic)
- **Web3 Libraries**: wagmi, viem, and RainbowKit for blockchain integration 

## Potential Additions from Governance UI

The following components from the Governance UI have been identified as potential additions to the UI Toolkit:

| Component | Complexity | Description | Potential Benefit |
|-----------|------------|-------------|------------------|
| **MaxWidthWrapper** | Low | A simple layout utility that provides consistent maximum width constraints with proper padding | Useful for maintaining consistent layouts across applications |
| **ExecutionCodeView** | Medium | A specialized component for displaying and formatting code/transaction data | Valuable for technical data display, especially in blockchain applications |

These components could be considered for inclusion in future releases based on user needs and compatibility with the existing toolkit architecture. 