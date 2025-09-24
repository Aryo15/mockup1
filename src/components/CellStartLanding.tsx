import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Zap, Shield, TrendingUp, Award, Users, Star, Heart, Clock, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import cellStartLogo from "@/assets/cellstart-logo.jpg";
import productLogo from "@/assets/product-logo.jpg";
import researchChart from "@/assets/research-chart.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";
import lifestyle4 from "@/assets/lifestyle-4.jpg";
import lifestyle5 from "@/assets/lifestyle-5.jpg";

export const CellStartLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-xl items-center">
          <div className="mr-4 hidden md:flex">
            <img 
              src={cellStartLogo} 
              alt="CellStart Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#science" className="transition-colors hover:text-primary">
                Science
              </a>
              <a href="#benefits" className="transition-colors hover:text-primary">
                Benefits
              </a>
              <a href="#research" className="transition-colors hover:text-primary">
                Research
              </a>
            </nav>
            <Button variant="hero" size="sm">
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 hero-gradient opacity-95"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 container max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <Badge variant="outline" className="w-fit border-white/30 text-white bg-white/10">
                <Zap className="mr-2 h-4 w-4" />
                Cellular Energy Innovation
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none font-cabin">
                  Unlock Your 
                  <span className="block text-accent font-marketing">
                    Cellular Potential
                  </span>
                </h1>
                <p className="max-w-[600px] text-white/90 text-xl md:text-xl font-source">
                  Restore your cellular energy and vitality with ChronoNAD+. As we age, our NAD+ levels decline by up to 65%. Our scientifically-backed formula helps restore these levels for enhanced energy and longevity.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button variant="accent" size="xl">
                  Fuel My Cells
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">90-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">Clinically Tested</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={productLogo} 
                  alt="ChronoNAD+ Product" 
                  className="w-full max-w-md h-auto premium-shadow rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 glow-shadow">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-20 bg-muted/50">
        <div className="container max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              <Zap className="mr-2 h-4 w-4" />
              The Science
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-cabin">
              Why Is NAD+ Your 
              <span className="text-gradient font-marketing">Cellular Fuel?</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg font-source">
              Understanding NAD+ and its powerful partner, Resveratrol, in cellular energy production and longevity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Energy Production",
                description: "NAD+ is a key driver of metabolism, helping your body turn food into usable energy for every cell."
              },
              {
                icon: Shield,
                title: "DNA Repair",
                description: "It helps power your body's natural processes to fix damaged DNA and keep your cells healthy."
              },
              {
                icon: TrendingUp,
                title: "Cellular Defense",
                description: "NAD+ activates important 'longevity genes' that help your body fight off stress and maintain overall cellular wellness."
              }
            ].map((feature, index) => (
              <Card key={index} className="card-shadow border-0 bg-white/80 backdrop-blur transition-premium hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold font-cabin">{feature.title}</h3>
                  <p className="text-muted-foreground font-source">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* NAD+ Decline Chart */}
          <div className="mt-20">
            <Card className="card-shadow border-0 bg-white/90 backdrop-blur">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 font-cabin">NAD+ Declines by Up to 65% Between Ages 30 and 70</h3>
                  <p className="text-muted-foreground font-source">By middle age, our NAD+ levels can plummet to half of what they were in our youth.</p>
                </div>
                
                <div className="relative">
                  <div className="flex justify-between items-end h-32 mb-4">
                    {[
                      { age: "20s", level: 100, label: "100%" },
                      { age: "30s-40s", level: 90, label: "90%" },
                      { age: "50s-60s", level: 60, label: "60%" },
                      { age: "70s+", level: 35, label: "35%" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-secondary to-primary rounded-t-lg transition-all duration-1000 ease-out"
                          style={{ height: `${item.level}%` }}
                        />
                        <span className="text-sm font-semibold mt-2 font-source">{item.label}</span>
                        <span className="text-xs text-muted-foreground font-source">{item.age}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-source">
                    Source: Massudi et al., PLoS ONE, 2012; Jinfiniti Health Report.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="mr-2 h-4 w-4" />
                The 1.7x Advantage
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 font-cabin">
                Research shows combining NAD+ with 
                <span className="text-gradient font-marketing"> Resveratrol</span> boosts levels 
                <span className="text-accent font-marketing"> 1.7x higher</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 font-source">
                Our scientifically-formulated ChronoNAD+ includes Resveratrol to maximize absorption and effectiveness, delivering superior results compared to NAD+ alone.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Enhanced cellular energy production",
                  "Improved DNA repair mechanisms",
                  "Activated longevity pathways",
                  "Optimized mitochondrial function"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Star className="h-3 w-3" />
                    </div>
                    <span className="font-source">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg">
                Discover The Formula
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="card-shadow border-0 bg-gradient-to-br from-accent/10 to-secondary/10">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2 font-marketing">180%</div>
                    <div className="text-lg font-semibold mb-2">NAD+ with Resveratrol</div>
                    <div className="text-sm text-muted-foreground">Enhanced Cellular Health & Defense*</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2 font-marketing">100%</div>
                    <div className="text-lg font-semibold mb-2">NAD+ Alone</div>
                    <div className="text-sm text-muted-foreground">Standard cellular support</div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Chart from Slide 8 */}
              <div className="mt-8">
                <img 
                  src={researchChart} 
                  alt="NAD+ Increase in Key Tissues Research Chart" 
                  className="w-full h-auto rounded-lg card-shadow"
                />
              </div>

              <p className="text-xs text-muted-foreground text-center font-source">
                *Source: Jiang et al., Pharmacology Research & Perspectives, 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section - Images from Slide 9 */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-screen-xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Authentic & Inclusive Lifestyle
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-cabin">
              Real People, Real Results
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg font-source">
              Join thousands who've elevated their wellness journey with ChronoNAD+. Our clinically-backed brand supports diverse lifestyles and wellness goals.
            </p>
          </div>

          {/* Lifestyle Gallery */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="lg:col-span-2">
              <img 
                src={lifestyle1} 
                alt="Premium lifestyle with ChronoNAD+" 
                className="w-full h-64 lg:h-80 object-cover rounded-xl card-shadow transition-premium hover:scale-[1.02]"
              />
            </div>
            <div>
              <img 
                src={lifestyle2} 
                alt="Wellness with attitude" 
                className="w-full h-64 lg:h-80 object-cover rounded-xl card-shadow transition-premium hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <img 
                src={lifestyle3} 
                alt="Active lifestyle with longevity" 
                className="w-full h-48 object-cover rounded-xl card-shadow transition-premium hover:scale-[1.02]"
              />
            </div>
            <div>
              <img 
                src={lifestyle4} 
                alt="Inclusive wellness community" 
                className="w-full h-48 object-cover rounded-xl card-shadow transition-premium hover:scale-[1.02]"
              />
            </div>
            <div>
              <img 
                src={lifestyle5} 
                alt="Chamomile lemonade wellness" 
                className="w-full h-48 object-cover rounded-xl card-shadow transition-premium hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Lifestyle Features */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Luxury/Premium",
                description: "Experience the finest in cellular health with our premium formulation and elegant presentation."
              },
              {
                icon: Zap,
                title: "Wellness With Attitude",
                description: "Bold, playful approach to longevity. We got busy with the science, so you can get busy living."
              },
              {
                icon: Users,
                title: "Authentic & Inclusive",
                description: "Real users and diverse brand ambassadors in relatable situations. Everyone can partake in longevity."
              }
            ].map((feature, index) => (
              <Card key={index} className="card-shadow border-0 bg-white/80 backdrop-blur text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2 font-cabin">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-source">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Logo from Slide 4 */}
      <section className="py-20">
        <div className="container max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-4">
                <Target className="mr-2 h-4 w-4" />
                ChronoNAD+ with SIRT-RM
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 font-cabin">
                Dietary Supplement
                <span className="block text-gradient font-marketing">90 Capsules</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 font-source">
                ChronoNAD+ is a dietary supplement taken once a day. As we age, our NAD+ levels decline, impacting our cellular health and energy. Our supplement is designed to restore these levels, helping you feel more vibrant and energized.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Once daily convenience",
                  "90 capsules per bottle",
                  "Enhanced with SIRT-RM technology", 
                  "Third-party tested for purity"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Clock className="h-3 w-3" />
                    </div>
                    <span className="font-source">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg">
                Shop ChronoNAD+
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src={productLogo} 
                  alt="ChronoNAD+ with SIRT-RM - 90 Capsules Dietary Supplement" 
                  className="w-full max-w-lg h-auto premium-shadow rounded-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 glow-shadow">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-screen-xl text-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-white/30 text-white bg-white/10">
              <Users className="mr-2 h-4 w-4" />
              Join Thousands Who've Made The Switch
            </Badge>
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-cabin">
              Ready to Restore Your 
              <span className="text-accent font-marketing">Cellular Energy?</span>
            </h2>
            
            <p className="mx-auto max-w-[600px] text-white/90 text-lg font-source">
              Take the first step towards enhanced vitality and longevity with ChronoNAD+. 90-day money-back guarantee.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button variant="accent" size="xl">
                Shop ChronoNAD+
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary">
                View Research
              </Button>
            </div>

            <div className="flex justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>90-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Third-Party Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container max-w-screen-xl">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <img 
                src={cellStartLogo} 
                alt="CellStart" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground font-source">
                Advancing cellular health through scientifically-backed nutrition.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-cabin">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-source">
                <li>ChronoNAD+</li>
                <li>Research</li>
                <li>Benefits</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-cabin">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-source">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Returns</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-cabin">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-source">
                <li>About</li>
                <li>Science</li>
                <li>Quality</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground font-source">
            <p>&copy; 2025 CellStart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};