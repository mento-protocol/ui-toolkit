// Component Analysis Plan and Progress Tracker
// ========================================

interface ComponentAnalysis {
  name: string;
  location: string;
  usage: string[];
  sharedAcross: string[];
  category: ComponentCategory;
  canonicalSource?: 'governance' | 'minipay' | 'reserve';
  subComponents?: string[];
}

type ComponentCategory = 
  | 'Layout'      // Container, Grid, Stack
  | 'Navigation'  // Nav, Menu, Breadcrumbs
  | 'Form'        // Input, Select, Checkbox
  | 'Feedback'    // Alert, Toast, Progress
  | 'DataDisplay' // Table, List, Card
  | 'Web3'        // WalletConnect, TxButton
  | 'UIElements'  // Button, Icon, Badge
  | 'Overlay'     // Modal, Drawer, Dialog
  | 'Typography'; // Text, Heading, Link

interface RepoAnalysis {
  name: 'governance' | 'minipay' | 'reserve';
  path: string;
  status: 'pending' | 'in-progress' | 'completed';
  components: ComponentAnalysis[];
  pages: string[];
}

interface ImplementationDiff {
  component: string;
  governanceImpl: string;
  otherImpl: string;
  repo: string;
  differences: string[];
}

// Analysis State
// =============

const REPOS: RepoAnalysis[] = [
  {
    name: 'governance',
    path: 'lib/governance-ui/src/app',
    status: 'pending',
    components: [],
    pages: []
  },
  {
    name: 'minipay',
    path: 'lib/minipay-dapp/src/app', 
    status: 'pending',
    components: [],
    pages: []
  },
  {
    name: 'reserve',
    path: 'lib/reserve-site/src/pages',
    status: 'pending',
    components: [],
    pages: []
  }
];

// Analysis Progress
// ================

const ANALYSIS_PHASES = {
  currentPhase: 1,
  phases: {
    1: {
      name: 'Initial Page Analysis',
      status: 'in-progress',
      tasks: [
        { id: 1, name: 'List all pages in governance-ui', status: 'in-progress' },
        { id: 2, name: 'Extract components from governance pages', status: 'pending' },
        { id: 3, name: 'List all pages in minipay-dapp', status: 'pending' },
        { id: 4, name: 'Extract components from minipay pages', status: 'pending' },
        { id: 5, name: 'List all pages in reserve-site', status: 'pending' },
        { id: 6, name: 'Extract components from reserve pages', status: 'pending' }
      ]
    },
    2: {
      name: 'Component Classification',
      status: 'pending',
      tasks: [
        { id: 1, name: 'Categorize governance components', status: 'pending' },
        { id: 2, name: 'Categorize minipay components', status: 'pending' },
        { id: 3, name: 'Categorize reserve components', status: 'pending' },
        { id: 4, name: 'Identify shared components', status: 'pending' },
        { id: 5, name: 'Mark canonical implementations', status: 'pending' }
      ]
    },
    3: {
      name: 'Implementation Analysis',
      status: 'pending',
      tasks: [
        { id: 1, name: 'Compare shared component implementations', status: 'pending' },
        { id: 2, name: 'Document implementation differences', status: 'pending' },
        { id: 3, name: 'Create migration recommendations', status: 'pending' }
      ]
    }
  }
};

// Current Findings
// ===============

const FINDINGS = {
  governance: {
    pages: [
      'layout.tsx',
      'page.tsx',
      'error.tsx',
      'not-found.tsx',
      'providers.tsx',
      'voting-power/*',
      'create-proposal/*',
      'proposals/*',
      'privacy/*'
    ],
    components: [
      {
        name: 'Header',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: [],
        category: 'Navigation'
      },
      {
        name: 'Footer',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: [],
        category: 'Navigation'
      },
      {
        name: 'Breadcrumbs',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: [],
        category: 'Navigation'
      },
      {
        name: 'MaxWidthWrapper',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: [],
        category: 'Layout'
      },
      {
        name: 'Toaster',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: [],
        category: 'Feedback'
      },
      {
        name: 'LearnMore',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'Button',
        location: '@/components/_shared',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'Card',
        location: '@/components/_shared/card',
        usage: ['multiple'],
        sharedAcross: [],
        category: 'UIElements',
        subComponents: ['CardHeader', 'CardFooter']
      },
      {
        name: 'Divider',
        location: '@/components/_shared',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'MentoIcon',
        location: '@/components/_icons',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'Badges',
        location: '@/components',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'ContractParams',
        location: '@/components',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'Web3'
      },
      {
        name: 'ProposalSummaryComponent',
        location: '@/components',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'DataDisplay'
      },
      {
        name: 'ProposalsListComponent',
        location: '@/components',
        usage: ['page.tsx'],
        sharedAcross: [],
        category: 'DataDisplay'
      },
      {
        name: 'LockingSlider',
        location: '@/components/_shared/mento-lock/components',
        usage: ['mento-lock.component.tsx'],
        sharedAcross: [],
        category: 'Form'
      },
      {
        name: 'LockingButton',
        location: '@/components/_shared/mento-lock/components',
        usage: ['mento-lock.component.tsx'],
        sharedAcross: [],
        category: 'Form'
      },
      {
        name: 'LockingDayPicker',
        location: '@/components/_shared/mento-lock/components',
        usage: ['mento-lock.component.tsx'],
        sharedAcross: [],
        category: 'Form'
      },
      {
        name: 'LockingInput',
        location: '@/components/_shared/mento-lock/components',
        usage: ['mento-lock.component.tsx'],
        sharedAcross: [],
        category: 'Form'
      },
      {
        name: 'LockingQuote',
        location: '@/components/_shared/mento-lock/components',
        usage: ['mento-lock.component.tsx'],
        sharedAcross: [],
        category: 'DataDisplay'
      },
      {
        name: 'Input',
        location: '@/components/_shared/input',
        usage: ['multiple'],
        sharedAcross: [],
        category: 'Form'
      },
      {
        name: 'LearnMore',
        location: '@/components/_shared/learn-more',
        usage: ['multiple'],
        sharedAcross: ['reserve'],
        category: 'UIElements',
        subComponents: ['DiscordIcon', 'ChevronIcon', 'LearnMoreIcon']
      }
    ] as ComponentAnalysis[]
  },
  minipay: {
    pages: [
      'layout.tsx',
      'global-error.tsx',
      'not-found.tsx',
      'providers.tsx',
      '(legal)/*',
      '(main)/layout.tsx',
      '(main)/page.tsx',
      '(main)/campaign/*'
    ],
    components: [
      {
        name: 'Header',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: ['governance'],
        category: 'Navigation'
      },
      {
        name: 'Toaster',
        location: '@/components/_shared',
        usage: ['layout.tsx'],
        sharedAcross: ['governance'],
        category: 'Feedback'
      },
      {
        name: 'Button',
        location: '@/components/_shared',
        usage: ['(main)/layout.tsx'],
        sharedAcross: ['governance'],
        category: 'UIElements'
      },
      {
        name: 'Footer',
        location: '@/components/_shared',
        usage: ['(main)/layout.tsx'],
        sharedAcross: ['governance'],
        category: 'Navigation'
      },
      {
        name: 'MaxWidthWrapper',
        location: '@/components/_shared',
        usage: ['(main)/layout.tsx'],
        sharedAcross: ['governance'],
        category: 'Layout'
      },
      {
        name: 'ChevronIcon',
        location: '@/components/_icons',
        usage: ['(main)/layout.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'LearnMoreIcon',
        location: '@/components/_icons',
        usage: ['(main)/layout.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'FAQ',
        location: '@/components/faq',
        usage: ['(main)/layout.tsx'],
        sharedAcross: [],
        category: 'DataDisplay'
      },
      {
        name: 'CampaignAccordion',
        location: '@/components/campaign-accordion',
        usage: ['(main)/page.tsx'],
        sharedAcross: [],
        category: 'DataDisplay'
      }
    ] as ComponentAnalysis[]
  },
  reserve: {
    pages: [
      'index.tsx',
      '404.tsx',
      '_app.tsx',
      '_error.js',
      'api/*',
      'legal/*'
    ],
    components: [
      {
        name: 'CardBackground',
        location: '@/components',
        usage: ['Amount.tsx', 'StableTokens.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      },
      {
        name: 'Skeleton',
        location: '@/components',
        usage: ['Amount.tsx', 'StableTokens.tsx'],
        sharedAcross: [],
        category: 'Feedback'
      },
      {
        name: 'Heading',
        location: '@/components',
        usage: ['StableTokens.tsx'],
        sharedAcross: [],
        category: 'Typography'
      },
      {
        name: 'DollarDisplay',
        location: '@/components',
        usage: ['Amount.tsx'],
        sharedAcross: [],
        category: 'DataDisplay'
      },
      {
        name: 'CopyIcon',
        location: 'src/components',
        usage: ['ReserveAddresses.tsx'],
        sharedAcross: [],
        category: 'UIElements'
      }
    ] as ComponentAnalysis[]
  },
  shared: {
    components: [
      // Navigation & Layout Composites
      {
        name: 'Header',
        location: '@/components/_shared',
        usage: ['layout.tsx', 'index.tsx'],
        sharedAcross: ['governance', 'minipay', 'reserve'],
        category: 'Navigation',
        canonicalSource: 'governance',
        subComponents: ['Logo', 'NavLinks', 'WalletConnect']
      },
      {
        name: 'Footer',
        location: '@/components/_shared',
        usage: ['layout.tsx', '(main)/layout.tsx', 'index.tsx'],
        sharedAcross: ['governance', 'minipay', 'reserve'],
        category: 'Navigation',
        canonicalSource: 'governance',
        subComponents: ['SocialLinks', 'FooterLinks', 'Copyright']
      },
      {
        name: 'LearnMore',
        location: '@/components/_shared',
        usage: ['layout.tsx', 'index.tsx'],
        sharedAcross: ['governance', 'reserve'],
        category: 'UIElements',
        canonicalSource: 'governance',
        subComponents: ['DiscordIcon', 'ChevronIcon', 'LearnMoreIcon']
      },
      // Single Purpose Components
      {
        name: 'Button',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'UIElements',
        canonicalSource: 'governance'
      },
      {
        name: 'Input',
        location: '@/components/ui/input',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay', 'reserve'],
        category: 'Form',
        canonicalSource: 'governance'
      },
      {
        name: 'Skeleton',
        location: '@/components',
        usage: ['multiple'],
        sharedAcross: ['governance', 'reserve'],
        category: 'Feedback',
        canonicalSource: 'governance'
      },
      {
        name: 'CopyIcon',
        location: '@/components/_icons',
        usage: ['multiple'],
        sharedAcross: ['governance', 'reserve'],
        category: 'UIElements',
        canonicalSource: 'governance'
      },
      {
        name: 'MaxWidthWrapper',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Layout',
        canonicalSource: 'governance'
      },
      {
        name: 'Toaster',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Feedback',
        canonicalSource: 'governance'
      },
      {
        name: 'Divider',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'UIElements',
        canonicalSource: 'governance'
      },
      // Generic Form Composites
      {
        name: 'FormField',
        location: '@/components/ui/form',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Form',
        canonicalSource: 'governance',
        subComponents: ['Label', 'Input', 'Description', 'Error']
      },
      {
        name: 'SearchBar',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Form',
        canonicalSource: 'governance',
        subComponents: ['Input', 'SearchIcon', 'ClearButton']
      },
      // Generic UI Composites
      {
        name: 'Card',
        location: '@/components/_shared/card',
        usage: ['multiple'],
        sharedAcross: ['governance', 'reserve'],
        category: 'UIElements',
        canonicalSource: 'governance',
        subComponents: ['CardHeader', 'CardFooter', 'CardContent']
      },
      {
        name: 'Accordion',
        location: '@/components/ui',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'UIElements',
        canonicalSource: 'governance',
        subComponents: ['AccordionItem', 'AccordionTrigger', 'AccordionContent']
      },
      {
        name: 'Dialog',
        location: '@/components/ui',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Overlay',
        canonicalSource: 'governance',
        subComponents: ['DialogTrigger', 'DialogContent', 'DialogClose']
      },
      // Feedback Composites
      {
        name: 'Toast',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Feedback',
        canonicalSource: 'governance',
        subComponents: ['ToastTitle', 'ToastDescription', 'ToastAction']
      },
      {
        name: 'Alert',
        location: '@/components/ui',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Feedback',
        canonicalSource: 'governance',
        subComponents: ['AlertTitle', 'AlertDescription', 'AlertIcon']
      },
      // Data Display Composites
      {
        name: 'DataTable',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'reserve'],
        category: 'DataDisplay',
        canonicalSource: 'governance',
        subComponents: ['TableHeader', 'TableRow', 'TableCell', 'TablePagination']
      },
      // Web3 Composites
      {
        name: 'WalletConnect',
        location: '@/components/web3',
        usage: ['multiple'],
        sharedAcross: ['governance', 'minipay'],
        category: 'Web3',
        canonicalSource: 'governance',
        subComponents: ['ConnectButton', 'WalletModal', 'NetworkSelector']
      },
      {
        name: 'AddressDisplay',
        location: '@/components/_shared',
        usage: ['multiple'],
        sharedAcross: ['governance', 'reserve'],
        category: 'Web3',
        canonicalSource: 'governance',
        subComponents: ['Address', 'CopyButton', 'ExplorerLink']
      }
    ] as ComponentAnalysis[],
    implementationDiffs: [
      {
        component: 'Header',
        governanceImpl: '@/components/_shared/Header',
        otherImpl: '@/components/header',
        repo: 'reserve',
        differences: ['Different directory structure', 'Potentially different implementation']
      },
      {
        component: 'Footer',
        governanceImpl: '@/components/_shared/Footer',
        otherImpl: '@/components/Footer',
        repo: 'reserve',
        differences: ['Different directory structure', 'Potentially different implementation']
      },
      {
        component: 'LearnMore',
        governanceImpl: '@/components/_shared/LearnMore',
        otherImpl: '@/components/LearnMore',
        repo: 'reserve',
        differences: ['Different directory structure', 'Potentially different implementation']
      },
      {
        component: 'CardBackground',
        governanceImpl: '@/components/_shared/Card',
        otherImpl: '@/components/CardBackground',
        repo: 'reserve',
        differences: [
          'Different naming convention',
          'Similar implementation with tailwind classes',
          'Could be unified with Card component from governance'
        ]
      },
      {
        component: 'Skeleton',
        governanceImpl: '@/components/_shared/Skeleton',
        otherImpl: '@/components/TextSkeleton',
        repo: 'reserve',
        differences: [
          'Different file naming',
          'Similar implementation with tailwind classes',
          'Could be unified with Skeleton component from governance'
        ]
      },
      {
        component: 'PieChart',
        governanceImpl: '@/components/_shared/charts/PieChart',
        otherImpl: '@/components/PieChart',
        repo: 'reserve',
        differences: [
          'Uses react-chartjs-2',
          'Has built-in token color mapping',
          'Includes skeleton loading state'
        ]
      },
      {
        component: 'CopyIcon',
        governanceImpl: '@/components/_icons/CopyIcon',
        otherImpl: 'src/components/CopyIcon',
        repo: 'reserve',
        differences: [
          'Different directory structure',
          'Similar functionality for copying to clipboard',
          'Could be unified with governance implementation'
        ]
      },
      {
        component: 'AddressDisplay',
        governanceImpl: '@/components/_shared/AddressDisplay',
        otherImpl: '@/components/ReserveAddresses',
        repo: 'reserve',
        differences: [
          'Embedded in ReserveAddresses component',
          'Has network-specific explorer links',
          'Could be extracted and unified with governance implementation'
        ]
      },
      {
        component: 'Input',
        governanceImpl: '@/components/_shared/input',
        otherImpl: '@/components/ui/input',
        repo: 'ui-toolkit',
        differences: [
          'Similar base implementation',
          'Uses same Tailwind classes',
          'Could be unified as base input component'
        ]
      }
    ]
  }
};

// Export for potential programmatic use
export type {
  ComponentAnalysis,
  ComponentCategory,
  RepoAnalysis,
  ImplementationDiff
};

export {
  REPOS,
  ANALYSIS_PHASES,
  FINDINGS
}; 