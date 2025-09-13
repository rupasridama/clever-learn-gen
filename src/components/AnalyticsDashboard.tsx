import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  BookOpen, 
  Brain,
  Award,
  Calendar,
  Zap
} from "lucide-react";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

export const AnalyticsDashboard = () => {
  const stats = [
    {
      title: "Study Hours",
      value: "42.5h",
      change: "+12%",
      icon: Clock,
      color: "analytics-learning"
    },
    {
      title: "Completed Assessments",
      value: "18",
      change: "+5",
      icon: Target,
      color: "analytics-assessment"
    },
    {
      title: "Knowledge Areas",
      value: "7",
      change: "+2",
      icon: BookOpen,
      color: "analytics-progress"
    },
    {
      title: "AI Recommendations",
      value: "23",
      change: "+8",
      icon: Brain,
      color: "analytics-recommendation"
    }
  ];

  const recentActivity = [
    {
      title: "Completed Machine Learning Quiz",
      time: "2 hours ago",
      score: 85,
      type: "assessment"
    },
    {
      title: "Studied Neural Networks Chapter",
      time: "4 hours ago",
      progress: 75,
      type: "study"
    },
    {
      title: "Generated Practice Questions",
      time: "6 hours ago",
      count: 12,
      type: "ai"
    },
    {
      title: "Uploaded Research Paper",
      time: "1 day ago",
      pages: 24,
      type: "upload"
    }
  ];

  const learningPaths = [
    {
      title: "Machine Learning Fundamentals",
      progress: 78,
      lessons: 12,
      completed: 9
    },
    {
      title: "Deep Learning Specialization",
      progress: 45,
      lessons: 16,
      completed: 7
    },
    {
      title: "Data Science Bootcamp",
      progress: 92,
      lessons: 20,
      completed: 18
    }
  ];

  return (
    <section id="analytics" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Progress Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your learning journey with detailed insights, performance metrics, 
            and AI-powered recommendations to optimize your study experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.title} 
                    className="p-4 hover:shadow-medium transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {stat.change}
                        </Badge>
                      </div>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${stat.color}/10`}>
                        <Icon className={`w-5 h-5 text-${stat.color}`} />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Learning Paths */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-analytics-progress" />
                Active Learning Paths
              </h3>
              <div className="space-y-4">
                {learningPaths.map((path, index) => (
                  <div key={path.title} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{path.title}</h4>
                      <span className="text-sm text-muted-foreground">
                        {path.completed}/{path.lessons} lessons
                      </span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{path.progress}% complete</span>
                      <span>
                        {path.lessons - path.completed} remaining
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-analytics-learning" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-accent rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      {activity.score && (
                        <Badge variant="secondary">{activity.score}%</Badge>
                      )}
                      {activity.progress && (
                        <Badge variant="secondary">{activity.progress}% done</Badge>
                      )}
                      {activity.count && (
                        <Badge variant="secondary">{activity.count} questions</Badge>
                      )}
                      {activity.pages && (
                        <Badge variant="secondary">{activity.pages} pages</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Analytics Visualization */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={analyticsImage} 
                  alt="Analytics Visualization"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-analytics-recommendation" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left bg-accent hover:bg-accent/80 rounded-lg transition-smooth">
                  <div className="font-medium">Generate Quiz</div>
                  <div className="text-sm text-muted-foreground">From recent study materials</div>
                </button>
                <button className="w-full p-3 text-left bg-accent hover:bg-accent/80 rounded-lg transition-smooth">
                  <div className="font-medium">Review Weak Areas</div>
                  <div className="text-sm text-muted-foreground">Focus on challenging topics</div>
                </button>
                <button className="w-full p-3 text-left bg-accent hover:bg-accent/80 rounded-lg transition-smooth">
                  <div className="font-medium">Study Recommendations</div>
                  <div className="text-sm text-muted-foreground">AI-powered suggestions</div>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};