import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Target, 
  Brain, 
  Clock, 
  FileText, 
  Settings, 
  Play,
  CheckCircle2,
  RotateCcw
} from "lucide-react";

interface GeneratedQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export const AssessmentGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[]>([]);
  const [assessmentConfig, setAssessmentConfig] = useState({
    topic: '',
    questionCount: '10',
    difficulty: 'medium',
    questionTypes: ['multiple-choice'],
    timeLimit: '30'
  });
  const { toast } = useToast();

  const sampleQuestions: GeneratedQuestion[] = [
    {
      id: '1',
      type: 'multiple-choice',
      question: 'What is the primary purpose of a neural network activation function?',
      options: [
        'To increase computational speed',
        'To introduce non-linearity into the model',
        'To reduce memory usage',
        'To prevent overfitting'
      ],
      correctAnswer: 'To introduce non-linearity into the model',
      difficulty: 'medium',
      topic: 'Neural Networks'
    },
    {
      id: '2',
      type: 'short-answer',
      question: 'Explain the difference between supervised and unsupervised learning.',
      difficulty: 'easy',
      topic: 'Machine Learning Fundamentals'
    },
    {
      id: '3',
      type: 'multiple-choice',
      question: 'Which algorithm is commonly used for dimensionality reduction?',
      options: [
        'K-means clustering',
        'Principal Component Analysis (PCA)',
        'Linear regression',
        'Decision trees'
      ],
      correctAnswer: 'Principal Component Analysis (PCA)',
      difficulty: 'medium',
      topic: 'Data Processing'
    },
    {
      id: '4',
      type: 'true-false',
      question: 'Gradient descent always finds the global minimum of a loss function.',
      correctAnswer: 'False',
      difficulty: 'hard',
      topic: 'Optimization'
    }
  ];

  const generateAssessment = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedQuestions(sampleQuestions);
      setIsGenerating(false);
      toast({
        title: "Assessment Generated",
        description: `${sampleQuestions.length} questions created successfully`,
      });
    }, 3000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'multiple-choice': return Target;
      case 'true-false': return CheckCircle2;
      case 'short-answer': return FileText;
      case 'essay': return FileText;
      default: return Target;
    }
  };

  return (
    <section id="assessments" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Assessment Generation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Generate personalized quizzes and assessments automatically from your study materials 
            using advanced AI to test your knowledge and track progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-analytics-assessment" />
                Assessment Configuration
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="topic">Topic/Subject</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., Machine Learning, Neural Networks"
                    value={assessmentConfig.topic}
                    onChange={(e) => setAssessmentConfig(prev => ({ ...prev, topic: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="question-count">Number of Questions</Label>
                  <Select value={assessmentConfig.questionCount} onValueChange={(value) => 
                    setAssessmentConfig(prev => ({ ...prev, questionCount: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Questions</SelectItem>
                      <SelectItem value="10">10 Questions</SelectItem>
                      <SelectItem value="15">15 Questions</SelectItem>
                      <SelectItem value="20">20 Questions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select value={assessmentConfig.difficulty} onValueChange={(value) => 
                    setAssessmentConfig(prev => ({ ...prev, difficulty: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                  <Input
                    id="time-limit"
                    type="number"
                    placeholder="30"
                    value={assessmentConfig.timeLimit}
                    onChange={(e) => setAssessmentConfig(prev => ({ ...prev, timeLimit: e.target.value }))}
                  />
                </div>

                <div>
                  <Label>Additional Instructions</Label>
                  <Textarea
                    placeholder="Any specific requirements or focus areas..."
                    className="mt-2"
                  />
                </div>

                <Button 
                  onClick={generateAssessment}
                  disabled={isGenerating || !assessmentConfig.topic}
                  className="w-full bg-gradient-primary"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Generate Assessment
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Assessment Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Generated</span>
                  <span className="font-medium">47 assessments</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-medium">8 assessments</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Score</span>
                  <span className="font-medium">82%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Generated Questions */}
          <div className="lg:col-span-2 space-y-6">
            {isGenerating ? (
              <Card className="p-8 text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Generating Your Assessment</h3>
                <p className="text-muted-foreground">
                  AI is analyzing your content and creating personalized questions...
                </p>
              </Card>
            ) : generatedQuestions.length > 0 ? (
              <>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Generated Questions</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                    <Button size="sm" className="bg-gradient-primary">
                      <Play className="w-4 h-4 mr-2" />
                      Start Assessment
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {generatedQuestions.map((question, index) => {
                    const TypeIcon = getTypeIcon(question.type);
                    return (
                      <Card key={question.id} className="p-6 hover:shadow-medium transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium bg-accent px-2 py-1 rounded">
                              Q{index + 1}
                            </span>
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline">
                              <TypeIcon className="w-3 h-3 mr-1" />
                              {question.type.replace('-', ' ')}
                            </Badge>
                          </div>
                          <Badge variant="secondary">{question.topic}</Badge>
                        </div>

                        <h4 className="font-medium mb-3">{question.question}</h4>

                        {question.options && (
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div 
                                key={optionIndex} 
                                className={`p-3 rounded-lg border ${
                                  option === question.correctAnswer 
                                    ? 'bg-success/10 border-success text-success-foreground' 
                                    : 'bg-accent border-border'
                                }`}
                              >
                                <span className="font-medium mr-2">
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                {option}
                                {option === question.correctAnswer && (
                                  <CheckCircle2 className="w-4 h-4 inline ml-2 text-success" />
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {question.type === 'true-false' && (
                          <div className="flex space-x-4">
                            <div className={`p-3 rounded-lg border flex-1 text-center ${
                              question.correctAnswer === 'True' 
                                ? 'bg-success/10 border-success text-success-foreground' 
                                : 'bg-accent border-border'
                            }`}>
                              True
                              {question.correctAnswer === 'True' && (
                                <CheckCircle2 className="w-4 h-4 inline ml-2 text-success" />
                              )}
                            </div>
                            <div className={`p-3 rounded-lg border flex-1 text-center ${
                              question.correctAnswer === 'False' 
                                ? 'bg-success/10 border-success text-success-foreground' 
                                : 'bg-accent border-border'
                            }`}>
                              False
                              {question.correctAnswer === 'False' && (
                                <CheckCircle2 className="w-4 h-4 inline ml-2 text-success" />
                              )}
                            </div>
                          </div>
                        )}

                        {(question.type === 'short-answer' || question.type === 'essay') && (
                          <div className="p-4 bg-accent rounded-lg">
                            <p className="text-sm text-muted-foreground">
                              Expected answer format: {question.type === 'essay' ? 'Extended written response' : 'Brief explanation (2-3 sentences)'}
                            </p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </>
            ) : (
              <Card className="p-8 text-center">
                <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ready to Generate</h3>
                <p className="text-muted-foreground">
                  Configure your assessment settings and click generate to create personalized questions.
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};