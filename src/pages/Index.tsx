import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DocumentUpload } from "@/components/DocumentUpload";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { AssessmentGeneration } from "@/components/AssessmentGeneration";
import { StudyRecommendations } from "@/components/StudyRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DocumentUpload />
        <AnalyticsDashboard />
        <AssessmentGeneration />
        <StudyRecommendations />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              AdaptiveLearn
            </h3>
            <p className="text-muted-foreground">
              Revolutionizing education with AI-powered adaptive learning
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for AI-thon 2k25 • © 2025 AdaptiveLearn Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;