// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: "auto",
    smoothScroll: true,
    // collapsable: false,
    sidebar: [
      {
        title: 'Substrate',
        path: '/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: 'Introduction',
            path: '/Introduction',
            collapsable: false,
            sidebarDepth: 1,
          },
          {
            title: '1. Preparing Your Kitchen',
            path: '/1-prepare-kitchen/index',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: '1.1. Building A Node',
                path: '/1-prepare-kitchen/1-build-node',
              },
              {
                title: '1.2. Interacting with a Node',
                path: '/1-prepare-kitchen/2-interact-node',
              },
              {
                title: '1.3. Kitchen Organization',
                path: '/1-prepare-kitchen/3-kitchen-organization',
              }
            ]
          },
          {
            title: '2. Appetizers',
            path: '/2-appetizers/index',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: '2.1. Hello Substrate',
                path: '/2-appetizers/1-hello-substrate',
              },
              {
                title: '2.2. Single Value Storage',
                path: '/2-appetizers/2-storage-values',
              },
              {
                title: '2.3. Handling Errors',
                path: '/2-appetizers/3-errors',
              },
              {
                title: '2.4. Events Verify Execution',
                path: '/2-appetizers/4-events',
              },
            ]
          },
          {
            title: '3. Entrees',
            path: '/3-entrees/index',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: '3.1. Runtime Storage API',
                path: '/3-entrees/storage-api/index',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                  {
                    title: '3.1.1. Runtime Storage API',
                    path: '/3-entrees/storage-api/storage-maps',
                  },
                  {
                    title: '3.1.2. Cache Locally > Storage Calls',
                    path: '/3-entrees/storage-api/cache',
                  },
                  {
                    title: '3.1.3. Using Vectors as Sets',
                    path: '/3-entrees/storage-api/vec-set',
                  },
                  {
                    title: '3.1.4. Using Maps as Sets',
                    path: '/3-entrees/storage-api/map-set',
                  },
                  {
                    title: '3.1.5. Subgroup Removal by Subkey: Double Maps',
                    path: '/3-entrees/storage-api/double'
                  },
                  {
                    title: '3.1.6. Storing custom structs',
                    path: '/3-entrees/storage-api/structs'
                  },
                  {
                    title: '3.1.7. Ringbuffer Queue',
                    path: '/3-entrees/storage-api/ringbuffer'
                  },
                ]
              },
              {
                title: '3.2. Basic Token',
                path: '/3-entrees/basic-token'
              },
              {
                title: '3.3. Configurable Constants',
                path: '/3-entrees/constants',
              },
              {
                title: '3.4. Simple Crowdfund',
                path: '/3-entrees/crowdfund',
              },
              {
                title: '3.5. Instantiable Pallets',
                path: '/3-entrees/instantiable',
              },
              {
                title: '3.6. Weights for Resource Accounting',
                path: '/3-entrees/weights',
              },
              {
                title: '3.7. Transaction Fees for Economic Security',
                path: '/3-entrees/fees',
              },
              {
                title: '3.8. Charity and Imbalances',
                path: '/3-entrees/charity',
              },
              {
                title: '3.9. Fixed Point Arithmetic',
                path: '/3-entrees/fixed-point',
              },
              {
                title: '3.10. Off-chain Workers',
                path: '/3-entrees/off-chain-workers/index',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                  {
                    title: '3.10.1. Transactions',
                    path: '/3-entrees/off-chain-workers/transactions',
                  },
                  {
                    title: '3.10.2. HTTP Fetching & JSON Parsing',
                    path: '/3-entrees/off-chain-workers/http-json',
                  },
                  {
                    title: '3.10.3. Local Storage',
                    path: '/3-entrees/off-chain-workers/storage',
                  },
                ]
              },
              {
                title: '3.11. Runtime APIs',
                path: '/3-entrees/runtime-api',
              },
              {
                title: '3.12. Custom RPCs',
                path: '/3-entrees/custom-rpc',
              },
              {
                title: '3.13. Sha3 Pow Consensus Algorithms',
                path: '/3-entrees/sha3-pow-consensus',
              },
              {
                title: '3.14. Basic Proof of Work Node',
                path: '/3-entrees/basic-pow',
              },
              {
                title: '3.15. Hybrid PoW/PoS Consensus Node',
                path: '/3-entrees/hybrid-consensus',
              },
              {
                title: '3.16. Manual Seal Consensus',
                path: '/3-entrees/manual-seal',
              },
              {
                title: '3.17. Kitchen Node - An reusable instant seal node',
                path: '/3-entrees/kitchen-node',
              },
              {
                title: '3.18. Babe and Grandpa Node',
                path: '/3-entrees/babe-grandpa-node',
              },
              {
                title: '3.19. Currency Types',
                path: '/3-entrees/currency',
              },
              {
                title: '3.20. Generating Randomness',
                path: '/3-entrees/randomness',
              },
              {
                title: '3.21. Execution Schedule',
                path: '/3-entrees/execution-schedule',
              },
              {
                title: '3.22. Tightly- and Loosely-Coupled Pallets',
                path: '/3-entrees/pallet-coupling',
              },
              {
                title: '3.23. Testing',
                path: '/3-entrees/testing/index',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                  {
                    title: '3.23.1. Basic Test Environments',
                    path: '/3-entrees/testing/mock',
                  },
                  {
                    title: '3.23.2. Common Testsg',
                    path: '/3-entrees/testing/common',
                  },
                  {
                    title: '3.23.3. Off-chain Worker Test Environment',
                    path: '/3-entrees/testing/off-chain-workers',
                  },
                  {
                    title: '3.23.4. Custom Test Environment',
                    path: '/3-entrees/testing/externalities',
                  },
                ]
              },
              {
                title: '3.24. Safe Math',
                path: '/3-entrees/safemath',
              },
            ]
          },
          {
            title: '4. More Resources',
            path: '/more-resources',
            collapsable: false,
            sidebarDepth: 1,
          }
        ]
      },
    ],
    nav: [
      { text: '回首页', link: '/' },
    ]
  }
};
