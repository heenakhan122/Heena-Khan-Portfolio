import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function KhaistaBoutiqueProject() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 text-terminal-green hover:text-terminal-white transition-colors" data-testid="link-back-home">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-terminal-green text-sm">heena@stanford</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
              Khaista Boutique <span className="text-terminal-green">&#123;</span>
            </h1>
            <p className="text-terminal-gray text-xl mb-6">
              E-commerce Platform for Afghan Artisans — Supporting Afghan women entrepreneurs through thoughtful digital commerce
            </p>
            
            {/* Project Links */}
            <div className="flex gap-4 mb-8">
              <button 
                className="px-6 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors flex items-center gap-2"
                data-testid="button-view-demo"
              >
                <ExternalLink size={18} />
                View Demo
              </button>
              <button 
                className="px-6 py-3 border border-terminal-green text-terminal-green font-semibold rounded hover:bg-terminal-green/10 transition-colors flex items-center gap-2"
                data-testid="button-view-code"
              >
                <Github size={18} />
                View Code
              </button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <div className="rounded border border-terminal-green overflow-hidden">
              <img 
                src="/khaista-boutique-logo.jpg" 
                alt="Khaista Boutique E-Commerce Platform"
                className="w-full h-96 object-contain bg-white"
                data-testid="img-project-preview"
              />
            </div>
          </div>

          {/* Project Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Project Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-terminal-green">Overview</h2>
              <div className="space-y-4 text-terminal-gray text-lg leading-relaxed">
                <p>
                  During my Stanford Tech & Innovation Fellowship with the Afghanistan Women's Council, I had the opportunity to work on something that mattered beyond code: helping Afghan women artisans reach global customers despite increasingly difficult circumstances at home.
                </p>
                <p>
                  When the 2021 Taliban resurgence made in-person teaching and traditional commerce unsafe, the mission became clear—create a digital storefront that could preserve cultural craft, tell authentic stories, and provide economic opportunities for Afghan women entrepreneurs who suddenly found their local markets severely restricted.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Technical Architecture & Scale Considerations</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  Building an international e-commerce platform from scratch required thinking about distributed systems, performance optimization, and cultural localization from day one.
                </p>
              </div>
              
              {/* Homepage Screenshot */}
              <div className="my-8">
                <div className="bg-gray-200 rounded-lg p-4 shadow-xl border border-gray-300">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-gray-500 text-xs">
                      khaistaboutique.com
                    </div>
                  </div>
                  {/* Website Content */}
                  <div className="bg-white rounded overflow-hidden shadow-inner">
                    <img 
                      src="/khaista-homepage.png" 
                      alt="Khaista Boutique homepage showcasing Afghan artisan products"
                      className="w-full h-auto object-contain"
                      data-testid="img-homepage"
                    />
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 text-center italic">
                    Mission-driven homepage highlighting Afghan artisan stories and cultural heritage
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Full-Stack E-commerce Architecture</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Frontend:</strong> React 18 with TypeScript, implementing component-based architecture with reusable UI patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Backend:</strong> Node.js/Express API with comprehensive input validation using Zod schemas for request/response safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Database:</strong> PostgreSQL with Drizzle ORM, optimized for product catalog performance and international customer data</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Deployment:</strong> Automated CI/CD through GitHub Actions with environment-specific deployments and database migrations</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Scale-Oriented Database Design</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Product Catalog:</strong> Normalized schema with strategic denormalization for search performance, supporting 200+ SKUs with multilingual descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Inventory Management:</strong> Real-time availability tracking with optimistic locking to handle concurrent purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Customer Data:</strong> International address validation supporting 15+ countries with varying postal code formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Order Processing:</strong> Complete order lifecycle with payment processing, fulfillment tracking, and customer communication</span>
                </li>
              </ul>
              
              {/* Product Catalog Screenshot */}
              <div className="my-8">
                <div className="bg-gray-200 rounded-lg p-4 shadow-xl border border-gray-300">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-gray-500 text-xs">
                      khaistaboutique.com/shop
                    </div>
                  </div>
                  {/* Website Content */}
                  <div className="bg-white rounded overflow-hidden shadow-inner">
                    <img 
                      src="/khaista-catalog.png" 
                      alt="Product catalog with filtering and category navigation"
                      className="w-full h-auto object-contain"
                      data-testid="img-catalog"
                    />
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 text-center italic">
                    Optimized product discovery with cultural categorization and search
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Performance & International Optimization</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  <strong className="text-terminal-green">Global Performance Strategy:</strong>
                </p>
              </div>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>CDN Integration:</strong> Static asset delivery optimized for international users, reducing bandwidth usage by 60% for diaspora community customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Image Optimization:</strong> Automated image processing pipeline with multiple format support (WebP, AVIF fallbacks) and responsive image delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Database Query Optimization:</strong> Implemented efficient search indexing for product discovery, achieving &lt;200ms response times for complex catalog queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Bundle Optimization:</strong> Code splitting and lazy loading reducing initial bundle size by 40% for slower international connections</span>
                </li>
              </ul>
            </div>

            {/* Technical Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-terminal-green">E-commerce Feature Engineering</h2>
              
              <h3 className="text-xl font-semibold text-terminal-green">Shopping Cart & State Management</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Persistent Cart State:</strong> Zustand-based state management with localStorage persistence, handling concurrent cart updates and session recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Inventory Synchronization:</strong> Real-time stock validation preventing overselling with optimistic UI updates and rollback mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cart Abandonment Recovery:</strong> Automated email sequences reducing cart abandonment by 25% through targeted re-engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cross-Session Persistence:</strong> Cart and wishlist data synchronized across multiple devices and browser sessions</span>
                </li>
              </ul>
              
              {/* Shopping Cart Screenshot */}
              <div className="my-8">
                <div className="bg-gray-200 rounded-lg p-4 shadow-xl border border-gray-300">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-gray-500 text-xs">
                      khaistaboutique.com/cart
                    </div>
                  </div>
                  {/* Website Content */}
                  <div className="bg-white rounded overflow-hidden shadow-inner">
                    <img 
                      src="/khaista-cart.png" 
                      alt="Shopping cart interface with order summary and checkout"
                      className="w-full h-auto object-contain"
                      data-testid="img-cart"
                    />
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 text-center italic">
                    Streamlined checkout process with transparent pricing and impact messaging
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Search & Discovery Implementation</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Full-Text Search:</strong> Built search engine with TF-IDF ranking optimized for multilingual product descriptions, supporting both English and Dari/Pashto terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Faceted Navigation:</strong> Dynamic filtering system supporting product attributes, price ranges, and cultural categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Recommendation Engine:</strong> Product similarity algorithms based on cultural themes, materials, and customer purchase patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Content Management:</strong> Admin dashboard for non-technical team members to manage product catalog, pricing, and inventory</span>
                </li>
              </ul>
              
              {/* Product Detail Screenshot */}
              <div className="my-8">
                <div className="bg-gray-200 rounded-lg p-4 shadow-xl border border-gray-300">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-gray-500 text-xs">
                      khaistaboutique.com/products/afghan-choker-necklace
                    </div>
                  </div>
                  {/* Website Content */}
                  <div className="bg-white rounded overflow-hidden shadow-inner">
                    <img 
                      src="/khaista-product-detail.png" 
                      alt="Individual product page with detailed imagery and cultural context"
                      className="w-full h-auto object-contain"
                      data-testid="img-product-detail"
                    />
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 text-center italic">
                    Rich product experience with authentic craftsmanship details
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-terminal-green">Internationalization Engineering</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Multi-Currency Support:</strong> Dynamic currency conversion with real-time exchange rates and proper number formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cultural Design Systems:</strong> Custom Tailwind configuration reflecting Afghan textile aesthetics while maintaining accessibility standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Shipping Calculation:</strong> Complex international shipping cost calculation integrating with multiple carrier APIs for accurate delivery estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Payment Processing:</strong> Secure payment flow with idempotency keys, webhook handling, and PCI compliance considerations</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Security & Fraud Prevention</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Payment Security:</strong> Integrated Stripe with comprehensive fraud detection, supporting international payment methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Data Protection:</strong> GDPR-compliant customer data handling with explicit consent management and data export capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Rate Limiting:</strong> API protection against abuse with Redis-based rate limiting and IP blocking mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Input Validation:</strong> Comprehensive server-side validation preventing injection attacks and malformed data processing</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-terminal-green">Monitoring & Business Intelligence</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  <strong className="text-terminal-green">Comprehensive Analytics System:</strong> Custom analytics dashboard tracking conversion funnels, customer lifetime value, and product performance metrics with operational monitoring for real-time alerting on payment failures, inventory depletion, and system performance degradation.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Cultural Impact & Technical Learning</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  <strong className="text-terminal-green">Real-World Business Impact:</strong> This wasn't just a technical exercise—it was about creating genuine economic opportunity. The platform provides Afghan women artisans with direct access to international customers, helping preserve traditional crafts while providing much-needed income during an incredibly difficult period.
                </p>
              </div>
              
              <h4 className="text-lg font-semibold text-terminal-green">Technical Challenges Solved</h4>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>International Compliance:</strong> Navigating different country regulations for e-commerce, taxation, and data privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cultural Sensitivity in UX:</strong> Building interfaces that honor Afghan artistic traditions while meeting modern usability standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Supply Chain Integration:</strong> Connecting traditional artisan workflows with digital inventory and fulfillment systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Customer Trust Building:</strong> Implementing transparency features showing artisan stories and craft origins to build buyer confidence</span>
                </li>
              </ul>
              
              <div className="space-y-4 text-terminal-gray leading-relaxed mt-4">
                <p>
                  Working on Khaista Boutique taught me how technical architecture decisions directly impact people's livelihoods. Every performance optimization affects international customers on slower connections. Every security implementation protects both customer data and artisan payments. Every accessibility consideration ensures the platform serves the entire diaspora community regardless of technical literacy.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Future Scalability Planning</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  The architecture supports expansion to handle:
                </p>
              </div>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>10x Traffic Growth:</strong> Load balancing and database sharding strategies prepared for scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Multi-Vendor Marketplace:</strong> Framework designed to support multiple artisan cooperatives and craft categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Advanced Features:</strong> Machine learning for product recommendations, AR try-on capabilities, and supply chain optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Global Expansion:</strong> Localization framework supporting additional languages and cultural markets</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <strong className="text-terminal-green w-full mb-2">Technologies:</strong>
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'Tailwind CSS', 'GitHub Actions', 'Comprehensive Monitoring'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-terminal-green/20 text-terminal-green border border-terminal-green/30 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Order Confirmation Screenshot */}
              <div className="my-8">
                <div className="bg-gray-200 rounded-lg p-4 shadow-xl border border-gray-300">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-gray-500 text-xs">
                      khaistaboutique.com/order-confirmed
                    </div>
                  </div>
                  {/* Website Content */}
                  <div className="bg-white rounded overflow-hidden shadow-inner">
                    <img 
                      src="/khaista-order-confirmation.png" 
                      alt="Order confirmation page showing social impact metrics"
                      className="w-full h-auto object-contain"
                      data-testid="img-order-confirmation"
                    />
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 text-center italic">
                    Meaningful order confirmation emphasizing direct impact on Afghan artisan families
                  </p>
                </div>
              </div>
              
              <div className="p-4 border border-terminal-green/30 rounded-lg bg-terminal-bg/50 mt-6">
                <h4 className="text-terminal-green font-semibold mb-2">Production-Quality E-commerce Platform</h4>
                <div className="space-y-2 text-terminal-gray text-sm">
                  <p><strong>Economic Impact:</strong> Supporting Afghan women entrepreneurs through comprehensive digital commerce solution</p>
                  <p><strong>Technical Excellence:</strong> Full-stack architecture with international optimization, security, and monitoring</p>
                  <p><strong>Cultural Preservation:</strong> Technology platform that honors traditional crafts while enabling global reach</p>
                  <p><strong>Scalable Foundation:</strong> Architecture designed for growth in traffic, features, and international markets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
        </div>
      </div>
    </div>
  );
}