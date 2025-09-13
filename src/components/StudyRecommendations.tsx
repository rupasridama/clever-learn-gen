import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight, 
  BookOpen,
  Target,
  Zap,
  Calendar,
  PlayCircle
} from "lucide-react";

interface StudyRecommendation {
  id: string;
  type: 'review' | 'new-topic' | 'practice' | 'weak-area';
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'high' | 'medium' | 'low';
  topic: string;
  aiReason: string;
  progress?: number;
}

export const StudyRecommendations = () => {
  const recommendations: StudyRecommendation[] = [
    {
      id: '1',
      type: 'weak-area',
      title: 'Review Backpropagation Algorithm',
      description: 'Your recent quiz showed difficulty with gradient calculation. Focus on understanding the chain rule application.',
      estimatedTime: '45 min',
      difficulty: 'medium',
      priority: 'high',
      topic: 'Neural Networks',
      aiReason: 'Based on quiz performance analysis, you scored 65% on backpropagation questions.',
      progress: 30
    },
    {
      id: '2',
      type: 'new-topic',
      title: 'Introduction to Transformer Architecture',
      description: 'You\'ve mastered RNNs and CNNs. Ready for the next step in deep learning.',
      estimatedTime: '60 min',
      difficulty: 'hard',
      priority: 'medium',
      topic: 'Advanced Deep Learning',
      aiReason: 'Your learning path suggests this as the optimal next topic.',
      progress: 0
    },
    {
      id: '3',
      type: 'practice',
      title: 'Implement K-Means Clustering',
      description: 'Hands-on coding exercise to reinforce theoretical knowledge.',
      estimatedTime: '30 min',
      difficulty: 'easy',
      priority: 'medium',
      topic: 'Unsupervised Learning',
      aiReason: 'Practice exercises improve retention by 40% for your learning style.',
      progress: 0
    },
    {
      id: '4',
      type: 'review',
      title: 'Revisit Linear Regression Fundamentals',
      description: 'Strengthen foundation before advancing to more complex models.',
      estimatedTime: '25 min',
      difficulty: 'easy',
      priority: 'low',
      topic: 'Machine Learning Basics',
      aiReason: 'Spaced repetition is due for this topic based on forgetting curve analysis.',
      progress: 85
    }
  ];

  const learningGoals = [
    {
      title: 'Complete ML Specialization',
      progress: 68,
      deadline: '2 weeks',
      status: 'on-track'
    },
    {
      title: 'Master Neural Networks',
      progress: 45,
      deadline: '3 weeks',
      status: 'behind'
    },
    {
      title: 'Build Portfolio Project',
      progress: 20,
      deadline: '1 month',
      status: 'ahead'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'weak-area': return Target;
      case 'new-topic': return BookOpen;
      case 'practice': return PlayCircle;
      case 'review': return Clock;
      default: return Brain;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-success';
      case 'behind': return 'text-destructive';
      case 'ahead': return 'text-analytics-recommendation';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="recommendations" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Study Recommendations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized study suggestions powered by AI that adapts to your learning style, 
            progress, and goals to optimize your educational journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recommendations List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold flex items-center">
                <Brain className="w-6 h-6 mr-2 text-analytics-recommendation" />
                Today's Recommendations
              </h3>
              <Badge variant="secondary" className="flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                4 suggestions
              </Badge>
            </div>

            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const TypeIcon = getTypeIcon(rec.type);
                return (
                  <Card 
                    key={rec.id} 
                    className="p-6 hover:shadow-medium transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <TypeIcon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{rec.title}</h4>
                          <Badge variant="outline" className="mt-1">
                            {rec.topic}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(rec.priority)}>
                          {rec.priority} priority
                        </Badge>
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          {rec.estimatedTime}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{rec.description}</p>

                    {rec.progress !== undefined && rec.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{rec.progress}%</span>
                        </div>
                        <Progress value={rec.progress} className="h-2" />
                      </div>
                    )}

                    <div className="bg-accent p-3 rounded-lg mb-4">
                      <p className="text-sm">
                        <strong>AI Insight:</strong> {rec.aiReason}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4" />
                        <span>Difficulty: {rec.difficulty}</span>
                      </div>
                      <Button size="sm" className="bg-gradient-primary">
                        Start Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Study Session Planner */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-analytics-learning" />
                Suggested Study Session
              </h3>
              <div className="bg-gradient-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Optimized 2-Hour Session</h4>
                  <Badge variant="secondary">160 min total</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span>Review Backpropagation (High Priority)</span>
                    <span className="text-sm text-muted-foreground">45 min</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span>Break</span>
                    <span className="text-sm text-muted-foreground">15 min</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span>K-Means Implementation Practice</span>
                    <span className="text-sm text-muted-foreground">30 min</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span>Break</span>
                    <span className="text-sm text-muted-foreground">10 min</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-background rounded">
                    <span>Transformer Architecture (New Topic)</span>
                    <span className="text-sm text-muted-foreground">60 min</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-primary">
                  Start Study Session
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Goals */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-analytics-progress" />
                Learning Goals
              </h3>
              <div className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-sm">{goal.title}</h4>
                      <Badge variant="outline" className={getStatusColor(goal.status)}>
                        {goal.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{goal.progress}% complete</span>
                      <span>{goal.deadline} remaining</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Learning Insights */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-analytics-recommendation" />
                Learning Insights
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-accent rounded-lg">
                  <div className="font-medium mb-1">Peak Learning Time</div>
                  <div className="text-muted-foreground">9:00 AM - 11:00 AM</div>
                </div>
                <div className="p-3 bg-accent rounded-lg">
                  <div className="font-medium mb-1">Preferred Learning Style</div>
                  <div className="text-muted-foreground">Visual + Hands-on Practice</div>
                </div>
                <div className="p-3 bg-accent rounded-lg">
                  <div className="font-medium mb-1">Weekly Study Streak</div>
                  <div className="text-muted-foreground">12 days consecutive</div>
                </div>
                <div className="p-3 bg-accent rounded-lg">
                  <div className="font-medium mb-1">Knowledge Retention</div>
                  <div className="text-muted-foreground">87% (Above Average)</div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="w-4 h-4 mr-2" />
                  Generate New Recommendations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Study Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Update Learning Goals
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};